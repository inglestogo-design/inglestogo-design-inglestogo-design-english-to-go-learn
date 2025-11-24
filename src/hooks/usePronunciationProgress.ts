import { useState, useEffect } from 'react';

export interface PronunciationProgress {
  basic: Set<number>;
  intermediate: Set<number>;
  advanced: Set<number>;
}

export const usePronunciationProgress = () => {
  const [progress, setProgress] = useState<PronunciationProgress>({
    basic: new Set(),
    intermediate: new Set(),
    advanced: new Set(),
  });

  useEffect(() => {
    const saved = localStorage.getItem('pronunciation-progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProgress({
          basic: new Set(parsed.basic || []),
          intermediate: new Set(parsed.intermediate || []),
          advanced: new Set(parsed.advanced || []),
        });
      } catch (e) {
        console.error('Error loading progress:', e);
      }
    }
  }, []);

  const saveProgress = (level: keyof PronunciationProgress, phraseIndex: number) => {
    setProgress((prev) => {
      const newProgress = {
        ...prev,
        [level]: new Set([...prev[level], phraseIndex]),
      };
      
      localStorage.setItem('pronunciation-progress', JSON.stringify({
        basic: Array.from(newProgress.basic),
        intermediate: Array.from(newProgress.intermediate),
        advanced: Array.from(newProgress.advanced),
      }));
      
      return newProgress;
    });
  };

  const isLevelUnlocked = (level: 'basic' | 'intermediate' | 'advanced'): boolean => {
    if (level === 'basic') return true;
    if (level === 'intermediate') return progress.basic.size >= 30;
    if (level === 'advanced') return progress.intermediate.size >= 30;
    return false;
  };

  const getLevelProgress = (level: keyof PronunciationProgress): { completed: number; total: number } => {
    return {
      completed: progress[level].size,
      total: 30,
    };
  };

  const isPhraseCompleted = (level: keyof PronunciationProgress, phraseIndex: number): boolean => {
    return progress[level].has(phraseIndex);
  };

  const resetProgress = () => {
    setProgress({
      basic: new Set(),
      intermediate: new Set(),
      advanced: new Set(),
    });
    localStorage.removeItem('pronunciation-progress');
  };

  return {
    progress,
    saveProgress,
    isLevelUnlocked,
    getLevelProgress,
    isPhraseCompleted,
    resetProgress,
  };
};
