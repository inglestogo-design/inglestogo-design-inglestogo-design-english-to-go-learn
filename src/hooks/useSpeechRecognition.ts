import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useSpeechRecognition = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';
      recognitionInstance.maxAlternatives = 1;

      recognitionInstance.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
        setIsRecording(false);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
        toast({
          title: "Erro / Error",
          description: "Não foi possível gravar. Verifique as permissões do microfone. / Could not record. Check microphone permissions.",
          variant: "destructive",
        });
      };

      recognitionInstance.onend = () => {
        setIsRecording(false);
      };

      setRecognition(recognitionInstance);
    }
  }, [toast]);

  const startRecording = useCallback(() => {
    if (recognition) {
      setTranscript('');
      setIsRecording(true);
      recognition.start();
    } else {
      toast({
        title: "Não suportado / Not supported",
        description: "Seu navegador não suporta reconhecimento de voz. / Your browser does not support speech recognition.",
        variant: "destructive",
      });
    }
  }, [recognition, toast]);

  const stopRecording = useCallback(() => {
    if (recognition && isRecording) {
      recognition.stop();
    }
  }, [recognition, isRecording]);

  return {
    isRecording,
    transcript,
    startRecording,
    stopRecording,
    isSupported: !!recognition
  };
};
