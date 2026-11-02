"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { DAY_END_HOUR, DAY_START_HOUR, THEME_STORAGE_KEY } from "@/lib/constants";
import type { Theme } from "@/types";

const AUTO_THEME_RECHECK_INTERVAL_MS = 60_000;

function readAppliedTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function computeThemeForCurrentTime(): Theme {
  const currentHour = new Date().getHours();
  const isDaytime = currentHour >= DAY_START_HOUR && currentHour < DAY_END_HOUR;
  return isDaytime ? "light" : "dark";
}

function hasManualThemeOverride(): boolean {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === "light" || storedTheme === "dark";
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // The real theme was already applied to the DOM pre-hydration by ThemeInitScript; it can
    // only be read here (not as lazy initial state) because `document` doesn't exist during
    // the server render that produces this same component's SSR output.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(readAppliedTheme());

    // Keep following the time of day for as long as the visitor hasn't manually overridden it,
    // so a tab left open across sunset/sunrise still switches without a page reload.
    const intervalId = window.setInterval(() => {
      if (hasManualThemeOverride()) return;

      const autoTheme = computeThemeForCurrentTime();
      if (autoTheme !== readAppliedTheme()) {
        applyTheme(autoTheme);
        setTheme(autoTheme);
      }
    }, AUTO_THEME_RECHECK_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  function toggleTheme(): void {
    const nextTheme: Theme = readAppliedTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  // Theme is null until the effect reads what the pre-hydration script already applied, so we
  // don't briefly render the wrong icon before hydration catches up.
  if (theme === null) {
    return <div className="h-11 w-11" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-roasted-earth/20 text-roasted-earth transition-colors duration-300 hover:border-radiant-amber"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
