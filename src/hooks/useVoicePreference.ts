import { useState, useEffect } from 'react';

const VOICE_PREFERENCE_KEY = 'preferred_voice_name';

export const useVoicePreference = () => {
  const [preferredVoiceName, setPreferredVoiceName] = useState<string | null>(() => {
    return localStorage.getItem(VOICE_PREFERENCE_KEY);
  });

  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      const englishVoices = voices.filter(v => v.lang.startsWith('en'));
      setAvailableVoices(englishVoices);
    };

    loadVoices();
    speechSynthesis.addEventListener('voiceschanged', loadVoices);

    return () => {
      speechSynthesis.removeEventListener('voiceschanged', loadVoices);
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
