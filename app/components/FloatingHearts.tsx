"use client";

import { motion } from "framer-motion";

const HEARTS = [
  { id: 1, emoji: "❤️", size: 24, delay: 0, x: "10%", duration: 8 },
  { id: 2, emoji: "💕", size: 20, delay: 1, x: "25%", duration: 10 },
  { id: 3, emoji: "💗", size: 28, delay: 2, x: "40%", duration: 7 },
  { id: 4, emoji: "❤️", size: 18, delay: 0.5, x: "60%", duration: 9 },
  { id: 5, emoji: "💖", size: 22, delay: 1.5, x: "75%", duration: 8.5 },
  { id: 6, emoji: "💕", size: 16, delay: 3, x: "90%", duration: 11 },
  { id: 7, emoji: "💗", size: 20, delay: 2.5, x: "15%", duration: 9.5 },
  { id: 8, emoji: "❤️", size: 26, delay: 0.8, x: "50%", duration: 7.5 },
  { id: 9, emoji: "💖", size: 18, delay: 1.2, x: "85%", duration: 10.5 },
  { id: 10, emoji: "✨", size: 14, delay: 4, x: "30%", duration: 12 },
  { id: 11, emoji: "✨", size: 12, delay: 2, x: "70%", duration: 8 },
  { id: 12, emoji: "💕", size: 20, delay: 3.5, x: "5%", duration: 9 },
];

export default function FloatingHearts() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {HEARTS.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute bottom-0 opacity-40"
          style={{
            left: heart.x,
            fontSize: heart.size,
            filter: "drop-shadow(0 0 6px rgba(251, 113, 133, 0.5))",
          }}
          initial={{ y: "100vh", rotate: 0, opacity: 0 }}
          animate={{
            y: "-20vh",
            rotate: [0, 15, -10, 0],
            opacity: [0, 0.5, 0.4, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {heart.emoji}
        </motion.span>
      ))}
    </div>
  );
}
