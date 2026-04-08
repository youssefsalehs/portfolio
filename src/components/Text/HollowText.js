"use client";
import { Typography, useTheme } from "@mui/material";
export default function Hollow({ text, size }) {
  const theme = useTheme();
  return (
    <Typography
      variant="h4"
      sx={{
        color: "transparent",
        WebkitTextStroke: `2px  ${theme.palette.text.primary}`,
        fontWeight: "bold",
        fontSize: `${size}` || "3em",
      }}
    >
      {text}
    </Typography>
  );
}
