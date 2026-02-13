"use client";

import { useEffect, useRef } from "react";

interface BackgroundMusicProps {
  /** URL to your romantic song (e.g. "/song.mp3" in public folder). No button — auto-plays and loops. */
  src?: string;
}

export default function BackgroundMusic({ src }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!src || !audioRef.current) return;
    audioRef.current.play().catch(() => {});
  }, [src]);

  if (!src) return null;

  return <audio ref={audioRef} src={src} loop playsInline className="hidden" aria-hidden />;
}
