"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

interface ConfettiEffectProps {
  active: boolean;
  onComplete?: () => void;
}

export default function ConfettiEffect({ active, onComplete }: ConfettiEffectProps) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (!active || hasFired.current) return;
    hasFired.current = true;

    const duration = 4000;
    const end = Date.now() + duration;
    const colors = ["#fb7185", "#f472b6", "#ec4899", "#fda4af", "#fdf2f8"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors,
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else if (onComplete) {
        onComplete();
      }
    };

    frame();

    const timeout = setTimeout(() => {
      confetti.reset();
    }, duration + 500);

    return () => clearTimeout(timeout);
  }, [active, onComplete]);

  return null;
}
