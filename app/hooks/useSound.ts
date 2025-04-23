import { useEffect, useRef } from 'react';

interface SoundOptions {
  volume?: number;
  loop?: boolean;
}

export const useSound = (soundPath: string, options: SoundOptions = {}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(soundPath);
    
    // Set options
    audio.volume = options.volume ?? 0.5;
    audio.loop = options.loop ?? false;
    
    // Store reference
    audioRef.current = audio;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundPath, options.volume, options.loop]);

  const play = () => {
    if (audioRef.current) {
      // Reset the audio to start if it's already playing
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.warn('Error playing sound:', error);
      });
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return { play, stop, pause };
}; 