"use client";

import { motion } from "framer-motion";

const STORIES = [
  {
    title: "The day we met",
    emoji: "🌟",
    text: "Something clicked. Maybe it was your smile, or the way you laughed. I just knew I wanted to know you more.",
  },
  {
    title: "The first smile",
    emoji: "😊",
    text: "That one smile that made my day. You have no idea how many times I replayed it in my head.",
  },
  {
    title: "When I knew you're mine",
    emoji: "💕",
    text: "Not in a creepy way — in the \"I want to be part of your story\" way. You're my favorite chapter.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function StoryTimeline() {
  return (
    <section id="story" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-romantic mb-16 text-center text-4xl text-white sm:text-5xl"
          style={{ fontFamily: "var(--font-romantic)" }}
        >
          Our little story 💖
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-8"
        >
          {STORIES.map((story) => (
            <motion.article
              key={story.title}
              variants={item}
              className="glass-card rounded-3xl p-6 sm:p-8"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl" aria-hidden>
                  {story.emoji}
                </span>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-rose-100 sm:text-2xl">
                    {story.title}
                  </h3>
                  <p className="text-rose-200/90 leading-relaxed">
                    {story.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
