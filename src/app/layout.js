import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CustomThemeProvider from "@/context/ThemeContext";
import { Box } from "@mui/material";
import ThemeBtn from "@/components/ThemeBtn/themeBtn";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: {
    default: "Youssef Ashraf | Frontend Developer",
    template: "Youssef Ashraf | %s",
  },
  description:
    "Portfolio of Youssef Ashraf, a Frontend Developer specializing in React, Next.js, and modern UI/UX. Explore projects, skills, and creative web experiences.",
  keywords: [
    "Youssef Ashraf",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Youssef Ashraf" }],
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();
  return (
    <html lang="en" className={`${jetBrainsMono.variable}  antialiased`}>
      <body className=" flex flex-col ">
        <AppRouterCacheProvider>
          <CustomThemeProvider>
            <Box
              sx={{
                bgcolor: "background.default",
                color: "text.primary",
                minHeight: "100vh",
                transition: "all 0.3s",
              }}
            >
              <ThemeBtn />

              <main className="flex-1 max-w-7xl h-full px-8 mx-auto overflow-hidden">
                {children}
              </main>
              <footer className="text-center text-sm  shadow-2xl border-t border-t-secondary-600 py-8">
                © {year}. All rights reserved.
              </footer>
            </Box>
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
