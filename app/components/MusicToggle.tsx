"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface MusicToggleProps {
  /** Optional: URL to a romantic song. Leave empty to hide or add later. */
  src?: string;
}

export default function MusicToggle({ src }: MusicToggleProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  if (!src) return null;

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop onEnded={() => setPlaying(false)} />
      <motion.button
        type="button"
        onClick={toggle}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full glass-card text-2xl shadow-lg"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? "🔊" : "🔇"}
      </motion.button>
    </>
  );
}
