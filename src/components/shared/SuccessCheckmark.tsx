"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SuccessCheckmark() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 52 52"
      className="h-12 w-12 text-clear-sky"
      role="img"
      aria-label="Success"
    >
      <motion.circle
        cx="26"
        cy="26"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
      />
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 27l8 8 16-16"
        initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.4,
          delay: prefersReducedMotion ? 0 : 0.4,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}
