"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { CAPABILITY_CATEGORIES } from "@/lib/constants";
import type { NavLink } from "@/types";

interface MobileNavToggleProps {
  navLinks: readonly NavLink[];
}

export function MobileNavToggle({ navLinks }: MobileNavToggleProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  function toggleMenu(): void {
    setIsMenuOpen((currentIsMenuOpen) => !currentIsMenuOpen);
  }

  function closeMenu(): void {
    setIsMenuOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-roasted-earth/20 text-roasted-earth transition-colors duration-300 hover:border-radiant-amber"
      >
        {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            id="mobile-nav-panel"
            aria-label="Mobile"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.3, ease: "easeOut" }}
            className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-roasted-earth/10 bg-morning-sand px-6"
          >
            <details className="border-b border-roasted-earth/10 py-2">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between font-medium text-roasted-earth marker:content-none">
                Capabilities
                <span aria-hidden="true">+</span>
              </summary>
              <ul className="flex flex-col gap-4 pb-3 pl-3">
                {CAPABILITY_CATEGORIES.map((capabilityCategory) => (
                  <li key={capabilityCategory.anchorId}>
                    <Link
                      href={`#${capabilityCategory.anchorId}`}
                      onClick={closeMenu}
                      className="flex min-h-11 items-center font-medium text-roasted-earth"
                    >
                      {capabilityCategory.title}
                    </Link>
                    <ul className="flex flex-col pl-3">
                      {capabilityCategory.services.map((subService) => (
                        <li key={subService.title}>
                          <Link
                            href={subService.href}
                            onClick={closeMenu}
                            className="flex min-h-11 items-center text-sm text-roasted-earth/70"
                          >
                            {subService.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </details>

            <ul className="flex flex-col gap-1 py-2">
              {navLinks.map((navLink) => (
                <li key={navLink.href}>
                  <a
                    href={navLink.href}
                    onClick={closeMenu}
                    className="block min-h-11 rounded-lg px-3 py-3 font-medium text-roasted-earth transition-colors duration-300 hover:bg-radiant-amber/10 hover:text-solar-flare"
                  >
                    {navLink.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="py-4">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex min-h-11 items-center justify-center rounded-full bg-solar-flare px-6 font-medium text-morning-sand"
              >
                Start a Project
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
