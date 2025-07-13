// src/context/ThemeContext.js
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // 1. Применить тему сразу из localStorage (до Django)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }

    // 2. Получить актуальную тему с Django
    const fetchTheme = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/darkplan/api/theme/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        });
        setTheme(res.data.theme);
        localStorage.setItem("theme", res.data.theme);
        document.documentElement.className = res.data.theme;
      } catch (err) {
        console.error("Ошибка получения темы с Django", err);
      }
    };

    fetchTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;

    try {
      await axios.patch(
        "http://127.0.0.1:8000/api/darkplan/api/theme/",
        { theme: newTheme },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
    } catch (err) {
      console.error("Ошибка обновления темы", err);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);