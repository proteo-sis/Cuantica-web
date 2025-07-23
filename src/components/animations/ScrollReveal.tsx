"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade" | "slideUp" | "slideRight" | "scale";
  duration?: number;
  delay?: number;
  className?: string;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  animation = "fade",
  duration = 0.5,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
