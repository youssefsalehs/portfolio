import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#C17CFF",
      light: "#D8B3FF",
      dark: "#7A46B3",
    },

    secondary: {
      main: "#5E4E80",
      light: "#9787B0",
      dark: "#342A47",
    },

    background: {
      default: "#160E1F",
      paper: "#20182B",
      tertiary: "#2C203f",
    },

    text: {
      primary: "#F0ECF5",
      secondary: "#C2B8D1",
    },
  },

  shape: {
    borderRadius: 8,
  },

  typography: {
    fontFamily: '"JetBrains Mono", monospace',
  },
});
