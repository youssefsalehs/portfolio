/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5ECFF",
          100: "#EAD9FF",
          200: "#D8B3FF",
          300: "#C68CFF",
          400: "#B566FF",
          500: "#C17CFF", // your base color
          600: "#9D5CE0",
          700: "#7A46B3",
          800: "#573085",
          900: "#341A57",
        },

        secondary: {
          50: "#EDEAF2",
          100: "#D1C9DC",
          200: "#B4A8C6",
          300: "#9787B0",
          400: "#7A669A",
          500: "#5E4E80",
          600: "#493C63",
          700: "#342A47",
          800: "#20182B",
          900: "#160E1F", // your original bg
        },

        text: {
          100: "#F0ECF5", // default
          200: "#D9D2E3",
          300: "#C2B8D1",
          400: "#ABA0BF",
          500: "#9488AD",
          600: "#7D709B",
          700: "#665889",
          800: "#4F4077",
          900: "#382865",
        },
      },
    },
  },
  plugins: [],
};
