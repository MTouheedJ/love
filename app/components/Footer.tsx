"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center font-medium text-rose-200/80"
      >
        Made with ❤️ only for you <br /> created by Touheed
      </motion.p>
    </footer>
  );
}
