"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delayInSeconds?: number;
  className?: string;
}

/**
 * Reveals children once they scroll into view. Reserved for below-the-fold content only -
 * using this above the fold would delay the browser's first paint of that content until the
 * IntersectionObserver fires, which risks Largest Contentful Paint.
 */
export function FadeInSection({ children, delayInSeconds = 0, className }: FadeInSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: delayInSeconds, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
