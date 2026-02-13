"use client";

import { motion } from "framer-motion";
import RomanticButton from "./RomanticButton";

export default function HeroSection({ onTap }: { onTap: () => void }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-rose-300 sm:text-xl"
        >
          You&apos;re here 💕
        </motion.p>
        <motion.h1
          className="font-romantic text-5xl leading-tight text-white drop-shadow-[0_0_20px_rgba(251,113,133,0.3)] sm:text-6xl md:text-7xl"
          style={{ fontFamily: "var(--font-romantic)" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Hey Love ❤️
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-md text-lg text-rose-200/90 sm:text-xl"
        >
          I made something a little cheesy... just for you 😘
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <RomanticButton
            onClick={onTap}
            variant="primary"
            size="lg"
            glow
            className="mt-4"
          >
            Tap here 😘
          </RomanticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
