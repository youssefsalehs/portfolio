"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { LuMoon, LuSunMedium } from "react-icons/lu";

export default function ThemeBtn() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <IconButton
      onClick={toggleMode}
      aria-label="theme button"
      sx={{
        position: "fixed",
        left: 20,
        bottom: 20,
        bgcolor: "secondary.main",
        zIndex: 50,
        "&:hover": { bgcolor: "secondary.dark" },
      }}
    >
      {mode === "dark" ? <LuSunMedium size={30} /> : <LuMoon size={30} />}
    </IconButton>
  );
}
