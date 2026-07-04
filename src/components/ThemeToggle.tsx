import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="size-9 inline-flex items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground hover:shadow-glow transition-all"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
