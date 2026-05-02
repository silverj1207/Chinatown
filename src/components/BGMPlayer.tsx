import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BGMPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt auto-play when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set lower volume initially
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="https://www.dropbox.com/scl/fi/5pc1hzn32i70uqyjiw5ty/chinatown_3.mp3?rlkey=psh434nfztmpszknp3df13dfx&st=v911r4ae&raw=1"
        loop
      />
      <button
        onClick={togglePlay}
        className="bg-noir-800 border border-neutral-700/50 hover:bg-neutral-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:border-dragon-red/50 hover:shadow-[0_0_15px_rgba(255,0,0,0.2)] group"
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <Volume2 size={24} className="text-dragon-red group-hover:scale-110 transition-transform" />
        ) : (
          <VolumeX size={24} className="text-neutral-500 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
}
