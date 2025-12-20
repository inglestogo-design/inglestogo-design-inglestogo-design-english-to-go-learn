import { useState, useEffect } from 'react';

const VOICE_PREFERENCE_KEY = 'preferred_voice_name';

export const useVoicePreference = () => {
  const [preferredVoiceName, setPreferredVoiceName] = useState<string | null>(() => {
    return localStorage.getItem(VOICE_PREFERENCE_KEY);
  });

  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const synthesis = typeof window !== "undefined" ? window.speechSynthesis : undefined;
    if (!synthesis) return;

    const loadVoices = () => {
      const voices = synthesis.getVoices();
      const englishVoices = voices.filter((v) => v.lang.startsWith("en"));
      setAvailableVoices(englishVoices);
    };

    loadVoices();

    // iOS Safari: `speechSynthesis.addEventListener` may be undefined.
    if (typeof (synthesis as any).addEventListener === "function") {
      (synthesis as any).addEventListener("voiceschanged", loadVoices);
      return () => (synthesis as any).removeEventListener("voiceschanged", loadVoices);
    }

    const prev = synthesis.onvoiceschanged;
    synthesis.onvoiceschanged = (e) => {
      loadVoices();
      prev?.call(synthesis, e);
    };

    return () => {
      synthesis.onvoiceschanged = prev ?? null;
    };
  }, []);

  const setPreferredVoice = (voiceName: string) => {
    localStorage.setItem(VOICE_PREFERENCE_KEY, voiceName);
    setPreferredVoiceName(voiceName);
  };

  const clearPreferredVoice = () => {
    localStorage.removeItem(VOICE_PREFERENCE_KEY);
    setPreferredVoiceName(null);
  };

  const getPreferredVoice = (): SpeechSynthesisVoice | null => {
    if (!preferredVoiceName) return null;
    return availableVoices.find(v => v.name === preferredVoiceName) || null;
  };

  return {
    preferredVoiceName,
    availableVoices,
    setPreferredVoice,
    clearPreferredVoice,
    getPreferredVoice,
  };
};
