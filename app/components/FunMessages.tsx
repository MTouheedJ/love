"use client";

import { motion } from "framer-motion";

const MESSAGES = [
  {
    text: "You are my favorite distraction 😜",
    emoji: "💕",
  },
  {
    text: "You stole my heart... return policy not allowed",
    emoji: "🔒",
  },
  {
    text: "Warning: Too much love inside ❤️",
    emoji: "⚠️",
  },
  {
    text: "I run on 90% love and 10% coffee (you're the love part)",
    emoji: "☕",
  },
  {
    text: "My heart does a little dance every time I see you",
    emoji: "💃",
  },
];

export default function FunMessages() {
  return (
    <section id="fun" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-romantic mb-14 text-center text-4xl text-white sm:text-5xl"
          style={{ fontFamily: "var(--font-romantic)" }}
        >
          A few truths 😂
        </motion.h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {MESSAGES.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
              className="glass-card flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="text-3xl">{msg.emoji}</span>
              <p className="text-sm font-medium text-rose-100 sm:text-base">
                {msg.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
