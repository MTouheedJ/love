"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConfettiEffect from "./ConfettiEffect";

interface ProposalSectionProps {
  onYes: () => void;
}

export default function ProposalSection({ onYes }: ProposalSectionProps) {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noHoverCount, setNoHoverCount] = useState(0);

  const handleYes = useCallback(() => {
    setYesClicked(true);
    onYes();
  }, [onYes]);

  const moveNoAway = useCallback(() => {
    setNoHoverCount((c) => c + 1);
    setNoPosition({
      x: (Math.random() - 0.5) * 320,
      y: (Math.random() - 0.5) * 200,
    });
  }, []);

  return (
    <section
      id="proposal"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20"
    >
      <ConfettiEffect active={yesClicked} />

      <AnimatePresence mode="wait">
        {!yesClicked ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex max-w-2xl flex-col items-center text-center"
          >
            <motion.h2
              className="font-romantic mb-6 text-4xl text-white sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-romantic)" }}
            >
              I have one question for you...
            </motion.h2>
            <motion.p
              className="mb-12 text-lg text-rose-200/90 sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              You make every day brighter. Will you be my Valentine — and maybe
              forever? 💕
            </motion.p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <motion.button
                type="button"
                onClick={handleYes}
                className="glow-pink-strong rounded-3xl bg-gradient-to-r from-rose-500 to-pink-500 px-10 py-5 text-2xl font-bold text-white shadow-lg transition hover:from-rose-400 hover:to-pink-400 sm:px-12 sm:py-6 sm:text-3xl"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
              >
                YES ❤️
              </motion.button>
              <motion.button
                type="button"
                onMouseEnter={moveNoAway}
                onClick={moveNoAway}
                animate={{
                  x: noPosition.x,
                  y: noPosition.y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-base text-rose-200/80 hover:bg-white/10 sm:text-lg"
              >
                NO 🙈
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="flex max-w-xl flex-col items-center text-center"
          >
            <motion.span
              className="mb-6 text-7xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: 2 }}
            >
              ❤️💕🎉
            </motion.span>
            <h2
              className="font-romantic mb-4 text-4xl text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-romantic)" }}
            >
              Yayyy ❤️
            </h2>
            <p className="text-xl text-rose-100 sm:text-2xl">
              I Knew it you Love me ❤️🥳
              <br /> You just made me the happiest person alive!
            </p>
            <p className="mt-6 text-rose-200/90">
              I love you. Here&apos;s to us 💖
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
