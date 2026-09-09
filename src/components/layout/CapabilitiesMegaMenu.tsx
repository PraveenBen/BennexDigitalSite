"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { combineClassNames } from "@/lib/combineClassNames";
import { CAPABILITY_CATEGORIES } from "@/lib/constants";

const MENU_CLOSE_DELAY_MS = 150;

export function CapabilitiesMegaMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const panelId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useReducedMotion();

  function clearCloseTimeout(): void {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }

  function openMenu(): void {
    clearCloseTimeout();
    setIsMenuOpen(true);
  }

  function closeMenu(): void {
    clearCloseTimeout();
    setIsMenuOpen(false);
  }

  function scheduleCloseMenu(): void {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setIsMenuOpen(false), MENU_CLOSE_DELAY_MS);
  }

  function toggleMenu(): void {
    setIsMenuOpen((currentIsMenuOpen) => !currentIsMenuOpen);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    function handleClickOutside(event: MouseEvent): void {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    return clearCloseTimeout;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleCloseMenu}
    >
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        className="flex min-h-11 items-center gap-1.5 font-medium text-roasted-earth transition-colors duration-300 hover:text-solar-flare"
      >
        Capabilities
        <ChevronDown
          aria-hidden="true"
          className={combineClassNames(
            "h-4 w-4 transition-transform duration-300",
            isMenuOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id={panelId}
            role="menu"
            aria-label="Capabilities"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[min(90vw,64rem)] -translate-x-1/2 rounded-2xl border border-roasted-earth/10 bg-morning-sand p-8 shadow-2xl shadow-roasted-earth/10"
          >
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {CAPABILITY_CATEGORIES.map((capabilityCategory) => (
                <div key={capabilityCategory.anchorId} role="none">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-radiant-amber/10 text-solar-flare">
                    <capabilityCategory.icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <Link
                    href={`#${capabilityCategory.anchorId}`}
                    role="menuitem"
                    onClick={closeMenu}
                    className="mt-3 flex min-h-11 items-center font-semibold text-roasted-earth transition-colors duration-300 hover:text-solar-flare"
                  >
                    {capabilityCategory.title}
                  </Link>

                  <ul className="flex flex-col">
                    {capabilityCategory.services.map((subService) => (
                      <li key={subService.title}>
                        <Link
                          href={subService.href}
                          role="menuitem"
                          onClick={closeMenu}
                          className="flex min-h-11 items-center text-sm text-roasted-earth/70 transition-colors duration-300 hover:text-solar-flare"
                        >
                          {subService.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
