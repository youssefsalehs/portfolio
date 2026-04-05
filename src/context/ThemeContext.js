"use client";
import React, { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { darkTheme } from "@/theme/dark";
import { lightTheme } from "@/theme/light";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setMode(saved);
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setMode(systemDark ? "dark" : "light");
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () => (mode === "dark" ? darkTheme : lightTheme),
    [mode],
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
