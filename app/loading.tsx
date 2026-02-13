"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="romantic-bg fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center gap-6 px-6">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-5xl"
      >
        ❤️
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-romantic text-center text-2xl text-rose-200 sm:text-3xl"
        style={{ fontFamily: "var(--font-romantic)" }}
      >
        Preparing something special for you ❤️
      </motion.p>
      <motion.div
        className="h-1 w-32 overflow-hidden rounded-full bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full w-1/2 rounded-full bg-rose-400"
          animate={{ x: ["0%", "200%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
