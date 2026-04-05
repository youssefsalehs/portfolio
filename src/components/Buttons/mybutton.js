import { Button } from "@mui/material";
import React from "react";

export default function MyButton({ onClick, children, variant }) {
  const styles = {
    expand: {
      border: "1px solid",
      borderColor: "secondary.main",
      bgcolor: "#c27cff22",
      "& .bgExpand": {
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: "100%",
        bgcolor: "secondary.main",
        zIndex: 0,
        transition: "width 0.3s ease",
      },
      "&:hover .bgExpand": {
        width: "100%",
      },
      "& .content": {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 1,
        zIndex: 1,
      },
    },
    secondary: {
      bgcolor: "background.tertiary",

      fontWeight: 900,
      "&:hover": {
        bgcolor: "secondary.light",
      },
    },
  };
  return (
    <Button
      onClick={onClick}
      sx={{
        overflow: "hidden",
        fontSize: 14,
        px: 4,
        color: "text.primary",
        py: 1,
        cursor: "pointer",
        ...styles[variant],
      }}
    >
      {children}
    </Button>
  );
}
