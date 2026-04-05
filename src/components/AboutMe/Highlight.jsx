import { Typography } from "@mui/material";
import React from "react";

const Highlight = ({ children }) => {
  return (
    <Typography
      component="span"
      variant="inherit"
      sx={{ color: "primary.main" }}
    >
      {children}
    </Typography>
  );
};

export default Highlight;
