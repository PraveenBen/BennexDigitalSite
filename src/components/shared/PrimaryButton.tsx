"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

import { combineClassNames } from "@/lib/combineClassNames";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function PrimaryButton({ href, children, className }: PrimaryButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      className="inline-block"
    >
      <Link
        href={href}
        className={combineClassNames(
          "group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full bg-solar-flare px-8 py-3 font-medium text-morning-sand shadow-lg shadow-solar-flare/30",
          className,
        )}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left scale-x-0 bg-clear-sky transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
        <span className="relative">{children}</span>
      </Link>
    </motion.div>
  );
}
