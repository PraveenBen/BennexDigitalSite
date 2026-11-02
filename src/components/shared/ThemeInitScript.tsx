import Script from "next/script";

import { DAY_END_HOUR, DAY_START_HOUR, THEME_STORAGE_KEY } from "@/lib/constants";

/**
 * Sets `data-theme` on <html> before hydration, so the very first paint already matches the
 * saved preference (or the current local time when none is saved) instead of flashing the
 * wrong theme. Must stay plain, dependency-free JS - it runs before any bundled app code.
 */
export function ThemeInitScript() {
  const themeInitJavaScript = `
    (function () {
      try {
        var storedTheme = localStorage.getItem("${THEME_STORAGE_KEY}");
        var theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
        if (!theme) {
          var currentHour = new Date().getHours();
          var isDaytime = currentHour >= ${DAY_START_HOUR} && currentHour < ${DAY_END_HOUR};
          theme = isDaytime ? "light" : "dark";
        }
        document.documentElement.setAttribute("data-theme", theme);
      } catch (error) {
        document.documentElement.setAttribute("data-theme", "light");
      }
    })();
  `;

  return (
    // That rule predates the App Router; Next's own docs place beforeInteractive scripts in
    // app/layout.tsx, which is exactly what this component is used for.
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script id="theme-init" strategy="beforeInteractive">
      {themeInitJavaScript}
    </Script>
  );
}
