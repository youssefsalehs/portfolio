import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#9D5CE0",
      light: "#C68CFF",
      dark: "#573085",
    },

    secondary: {
      main: "#9787B9",
      light: "#D1C9DC",
      dark: "#5E4E80",
    },

    background: {
      default: "#F5ECFF",
      paper: "#e5d7f4",
      tertiary: "#D1C4E9",
    },

    text: {
      primary: "#341A57",
      secondary: "#665889",
    },
  },

  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"JetBrains Mono", monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"JetBrains Mono", monospace',
        },
      },
    },
  },
});
