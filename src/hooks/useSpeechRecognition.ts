import { useState, useEffect, useCallback, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { createWavRecorder, type WavRecorderController } from "@/utils/wavRecorder";

type RecognitionMode = "native" | "server";

type ServerRecorderKind = "media" | "wav";

const pickAudioMimeType = () => {
  if (typeof MediaRecorder === "undefined") return undefined;

  const candidates = [
    // iOS Safari typically supports mp4/aac
    "audio/mp4",
    // Chrome/Android
    "audio/webm;codecs=opus",
    "audio/webm",
  ];

  for (const t of candidates) {
    if (MediaRecorder.isTypeSupported?.(t)) return t;
  }

  return undefined;
};

const fileExtFromMime = (mime?: string) => {
  if (!mime) return "dat";
  if (mime.includes("wav")) return "wav";
  if (mime.includes("mp4")) return "mp4";
  if (mime.includes("webm")) return "webm";
  if (mime.includes("ogg")) return "ogg";
  return "dat";
};

const micErrorMessage = (err: unknown) => {
  const e = err as any;
  const name = e?.name as string | undefined;

  if (name === "NotAllowedError" || name === "SecurityError") {
    return "Permissão negada para o microfone. / Microphone permission denied.";
  }

  if (name === "NotFoundError") {
    return "Nenhum microfone encontrado. / No microphone found.";
  }

  if (name === "NotReadableError") {
    return "Microfone ocupado por outro app. / Microphone is already in use.";
  }

  return "Não foi possível acessar o microfone. / Could not access microphone.";
};

export const useSpeechRecognition = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState<any>(null);
  const [mode, setMode] = useState<RecognitionMode>("native");
  const { toast } = useToast();

  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const wavRecorderRef = useRef<WavRecorderController | null>(null);
  const serverKindRef = useRef<ServerRecorderKind | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const hasNative =
      typeof window !== "undefined" &&
      ("webkitSpeechRecognition" in window || "SpeechRecognition" in window);

    if (hasNative) {
      const SR =
        (window as any).webkitSpeechRecognition ||
        (window as any).SpeechRecognition;
      const recognitionInstance = new SR();

      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = "en-US";
      recognitionInstance.maxAlternatives = 1;

      recognitionInstance.onresult = (event: any) => {
        const t = event.results?.[0]?.[0]?.transcript ?? "";
        setTranscript(t);
        setIsRecording(false);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error("Speech recognition error:", event?.error ?? event);
        setIsRecording(false);
        toast({
          title: "Erro / Error",
          description:
            "Não foi possível gravar. Verifique as permissões do microfone. / Could not record. Check microphone permissions.",
          variant: "destructive",
        });
      };

      recognitionInstance.onend = () => {
        setIsRecording(false);
      };

      setRecognition(recognitionInstance);
      setMode("native");
      return;
    }

    // Fallback: server STT using real mic recording.
    setRecognition(null);
    setMode("server");
  }, [toast]);

  const transcribeBlob = useCallback(
    async (blob: Blob) => {
      const mime = blob.type || undefined;

      const fd = new FormData();
      fd.append("audio", blob, `speech.${fileExtFromMime(mime)}`);

      const { data, error } = await supabase.functions.invoke(
        "elevenlabs-transcribe",
        {
          body: fd as any,
        }
      );

      if (error) throw error;
      setTranscript(data?.text ?? "");
    },
    []
  );

  const cleanupServer = useCallback(() => {
    try {
      streamRef.current?.getTracks().forEach((t) => t.stop());
    } catch {
      // ignore
    }

    streamRef.current = null;
    recorderRef.current = null;
    wavRecorderRef.current = null;
    chunksRef.current = [];
    serverKindRef.current = null;
    setIsRecording(false);
  }, []);

  const startRecording = useCallback(async () => {
    setTranscript("");

    // Native speech recognition path
    if (mode === "native") {
      if (!recognition) {
        toast({
          title: "Não suportado / Not supported",
          description:
            "Seu navegador não suporta reconhecimento de voz. / Your browser does not support speech recognition.",
          variant: "destructive",
        });
        return;
      }

      setIsRecording(true);
      try {
        recognition.start();
      } catch (err) {
        console.error("recognition.start() failed:", err);
        toast({
          title: "Erro / Error",
          description: "Não foi possível iniciar a gravação. / Could not start recording.",
          variant: "destructive",
        });
        setIsRecording(false);
      }
      return;
    }

    // Server STT fallback path
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        toast({
          title: "Não suportado / Not supported",
          description:
            "Seu navegador não suporta microfone. / Your browser does not support microphone.",
          variant: "destructive",
        });
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      streamRef.current = stream;
      chunksRef.current = [];

      // Prefer MediaRecorder when available; otherwise record WAV via WebAudio.
      if (typeof MediaRecorder !== "undefined") {
        const mimeType = pickAudioMimeType();
        const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
        recorderRef.current = recorder;
        serverKindRef.current = "media";

        recorder.ondataavailable = (e) => {
          if (e.data?.size) chunksRef.current.push(e.data);
        };

        recorder.onerror = (e) => {
          console.error("MediaRecorder error:", e);
        };

        recorder.onstop = async () => {
          try {
            const finalMime = recorder.mimeType || mimeType;
            const blob = new Blob(chunksRef.current, { type: finalMime || undefined });
            await transcribeBlob(blob);
          } catch (err) {
            console.error("STT fallback error:", err);
            toast({
              title: "Erro / Error",
              description:
                "Não foi possível transcrever sua fala. / Could not transcribe your speech.",
              variant: "destructive",
            });
          } finally {
            cleanupServer();
          }
        };

        // timeslice helps on some Safari builds to emit data more reliably
        recorder.start(250);
        setIsRecording(true);
        return;
      }

      // WAV fallback (iOS/WKWebView older builds)
      wavRecorderRef.current = createWavRecorder(stream);
      serverKindRef.current = "wav";
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      toast({
        title: "Erro / Error",
        description: micErrorMessage(error),
        variant: "destructive",
      });
      cleanupServer();
    }
  }, [mode, recognition, toast, transcribeBlob, cleanupServer]);

  const stopRecording = useCallback(async () => {
    if (mode === "native") {
      if (recognition && isRecording) recognition.stop();
      return;
    }

    if (!isRecording) return;

    // MediaRecorder path
    if (serverKindRef.current === "media" && recorderRef.current) {
      try {
        recorderRef.current.stop();
      } catch (e) {
        console.error("Error stopping recorder:", e);
        cleanupServer();
      }
      return;
    }

    // WAV path
    if (serverKindRef.current === "wav" && wavRecorderRef.current) {
      try {
        const blob = await wavRecorderRef.current.stop();
        await transcribeBlob(blob);
      } catch (err) {
        console.error("WAV STT fallback error:", err);
        toast({
          title: "Erro / Error",
          description:
            "Não foi possível transcrever sua fala. / Could not transcribe your speech.",
          variant: "destructive",
        });
      } finally {
        cleanupServer();
      }
    }
  }, [mode, recognition, isRecording, cleanupServer, toast, transcribeBlob]);

  const isSupported =
    mode === "native" ? !!recognition : !!navigator.mediaDevices?.getUserMedia;

  return {
    isRecording,
    transcript,
    startRecording,
    stopRecording,
    isSupported,
    mode,
  };
};

