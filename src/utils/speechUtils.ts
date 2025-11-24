// Utility for better text-to-speech using Web Speech API

interface SpeechOptions {
  gender?: 'male' | 'female';
  rate?: number;
  pitch?: number;
  volume?: number;
  voiceName?: string;
}

let voiceIndex = 0; // Track which voice to use next

export const getAvailableVoices = (): SpeechSynthesisVoice[] => {
  // Prioritize en-US voices, fallback to any English
  const allVoices = speechSynthesis.getVoices();
  const usVoices = allVoices.filter(voice => voice.lang === 'en-US' || voice.lang === 'en_US');
  return usVoices.length > 0 ? usVoices : allVoices.filter(voice => voice.lang.startsWith('en'));
};

export const getMaleVoice = (): SpeechSynthesisVoice | null => {
  const voices = getAvailableVoices();
  // Try to find male voices by name patterns
  const maleVoice = voices.find(v => 
    v.name.toLowerCase().includes('male') ||
    v.name.toLowerCase().includes('david') ||
    v.name.toLowerCase().includes('james') ||
    v.name.toLowerCase().includes('daniel') ||
    v.name.toLowerCase().includes('aaron')
  );
  return maleVoice || voices[0] || null;
};

export const getFemaleVoice = (): SpeechSynthesisVoice | null => {
  const voices = getAvailableVoices();
  
  // Priority list: Common American female voice names (expanded)
  const preferredNames = [
    // Google voices (most common on Chrome)
    'google us english female', 'google us-english female',
    // Apple voices (Safari/iOS)
    'samantha', 'allison', 'ava', 'susan', 'vicki',
    // Microsoft voices (Edge)
    'zira', 'eva', 'hazel',
    // Other common female voices
    'victoria', 'karen', 'alloy', 'nova', 'joanna', 'kendra', 'kimberly', 'salli',
    // Generic fallbacks
    'female', 'woman'
  ];
  
  // First try: Exact match with en-US locale
  for (const name of preferredNames) {
    const voice = voices.find(v => 
      v.name.toLowerCase().includes(name) && 
      (v.lang === 'en-US' || v.lang === 'en_US')
    );
    if (voice) {
      console.log('Selected voice:', voice.name, voice.lang);
      return voice;
    }
  }
  
  // Second try: Any en-US female voice
  const usVoice = voices.find(v => 
    (v.lang === 'en-US' || v.lang === 'en_US') && 
    preferredNames.some(name => v.name.toLowerCase().includes(name))
  );
  if (usVoice) {
    console.log('Selected US voice:', usVoice.name, usVoice.lang);
    return usVoice;
  }
  
  // Third try: First available en-US voice (likely female)
  const firstUSVoice = voices.find(v => v.lang === 'en-US' || v.lang === 'en_US');
  if (firstUSVoice) {
    console.log('Selected first US voice:', firstUSVoice.name, firstUSVoice.lang);
    return firstUSVoice;
  }
  
  // Last resort: Any English voice
  console.log('Fallback to first available voice:', voices[0]?.name, voices[0]?.lang);
  return voices[0] || null;
};

export const speakText = (
  text: string, 
  options: SpeechOptions = {}
): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Priority 1: Use specific voice name if provided
    if (options.voiceName) {
      const voices = speechSynthesis.getVoices();
      const specificVoice = voices.find(v => v.name === options.voiceName);
      if (specificVoice) {
        utterance.voice = specificVoice;
      }
    }
    // Priority 2: Check localStorage for saved preference
    else {
      const savedVoiceName = localStorage.getItem('preferred_voice_name');
      if (savedVoiceName) {
        const voices = speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.name === savedVoiceName);
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
      }
      // Priority 3: Use gender-based selection (default female)
      else {
        const gender = options.gender ?? 'female';
        const voice = gender === 'male' ? getMaleVoice() : getFemaleVoice();
        if (voice) utterance.voice = voice;
      }
    }

    // More natural speech parameters
    utterance.rate = options.rate ?? 0.85; // Slightly slower for clarity
    utterance.pitch = options.pitch ?? 0.95; // Slightly lower pitch for natural female voice
    utterance.volume = options.volume ?? 1.0; // Full volume
    utterance.lang = 'en-US';

    utterance.onend = () => resolve();
    utterance.onerror = (error) => {
      console.error('Speech error:', error);
      reject(error);
    };

    // Small delay to ensure voices are loaded
    setTimeout(() => {
      speechSynthesis.speak(utterance);
    }, 100);
  });
};

export const speakWithAlternatingVoices = async (
  texts: string[],
  startWithMale: boolean = true
): Promise<void> => {
  for (let i = 0; i < texts.length; i++) {
    const gender = (startWithMale ? i % 2 === 0 : i % 2 !== 0) ? 'male' : 'female';
    await speakText(texts[i], { gender });
    // Small pause between speakers
    await new Promise(resolve => setTimeout(resolve, 300));
  }
};

// Ensure voices are loaded
if (typeof window !== 'undefined') {
  speechSynthesis.addEventListener('voiceschanged', () => {
    const voices = getAvailableVoices();
    console.log('=== VOZES DISPONÍVEIS ===');
    console.log('Total de vozes inglesas:', voices.length);
    voices.forEach((v, i) => {
      console.log(`${i + 1}. ${v.name} (${v.lang}) - ${v.localService ? 'Local' : 'Network'}`);
    });
    console.log('Voz feminina selecionada:', getFemaleVoice()?.name);
  });
}
