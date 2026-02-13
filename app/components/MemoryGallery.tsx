"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PLACEHOLDERS = [
  "https://picsum.photos/seed/love1/400/400",
  "https://picsum.photos/seed/love2/400/400",
  "https://picsum.photos/seed/love3/400/400",
  "https://picsum.photos/seed/love4/400/400",
  "https://picsum.photos/seed/love5/400/400",
  "https://picsum.photos/seed/love6/400/400",
];

export default function MemoryGallery() {
  return (
    <section id="gallery" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-romantic mb-14 text-center text-4xl text-white sm:text-5xl"
          style={{ fontFamily: "var(--font-romantic)" }}
        >
          Our memories 💫
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {PLACEHOLDERS.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-xl"
            >
              <Image
                src={src}
                alt={`Memory ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
