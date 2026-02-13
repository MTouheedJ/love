"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

type RomanticButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDragStart"
  | "onDragEnd"
  | "onDrag"
> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  children: React.ReactNode;
};

export default function RomanticButton({
  variant = "primary",
  size = "md",
  glow = false,
  className = "",
  children,
  ...props
}: RomanticButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-[#0f0a0e] disabled:opacity-50";
  const variants = {
    primary:
      "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-400 hover:to-pink-400 active:scale-[0.98]",
    secondary:
      "glass-card text-rose-100 border border-white/20 hover:bg-white/15",
    ghost:
      "text-rose-200 hover:bg-white/10 hover:text-rose-100",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type="button"
      className={`${base} ${variants[variant]} ${sizes[size]} ${glow ? "glow-pink" : ""} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
