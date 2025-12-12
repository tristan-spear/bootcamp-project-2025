"use client";

import { useTheme } from "./theme-provider";
import styles from "./theme-toggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      className={styles.toggle}
      data-theme={theme}
      onClick={toggleTheme}
    >
      <span className={styles.icon}>{theme === "light" ? "L" : "D"}</span>
      <span className={styles.icon}>{theme === "light" ? "D" : "L"}</span>
      <span aria-hidden className={styles.thumb} />
      <span className={styles.srOnly}>Switch to {theme === "light" ? "dark" : "light"} mode</span>
    </button>
  );
}
