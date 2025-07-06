// src/components/ThemeToggle.js
import React from "react";
import { useTheme } from "../themetoggle/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
