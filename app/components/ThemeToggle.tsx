"use client";

import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "../lib/icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="transition-transform duration-300 hover:rotate-12">
        {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
      </span>
    </button>
  );
}
