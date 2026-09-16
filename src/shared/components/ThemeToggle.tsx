import { FiMoon, FiSun } from "react-icons/fi";
import type { Theme } from "../hooks/useTheme";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      onClick={onToggle}
      className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:scale-105 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 dark:border-white/10 dark:bg-slate-900/90 dark:text-amber-300 dark:hover:bg-slate-800"
    >
      {theme === "dark" ? <FiSun aria-hidden="true" size={20} /> : <FiMoon aria-hidden="true" size={20} />}
    </button>
  );
}
