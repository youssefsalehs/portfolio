import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomThemeProvider from "@/context/ThemeContext";
import { Box } from "@mui/material";
import ThemeBtn from "@/components/ThemeBtn/themeBtn";
import Navbar from "@/components/Navbar/navbar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

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
        <CustomThemeProvider>
          <AppRouterCacheProvider>
            <Box
              sx={{
                bgcolor: "background.default",
                color: "text.primary",
                minHeight: "100vh",
                transition: "all 0.3s",
              }}
            >
              <ThemeBtn />
              <Navbar />
              <main className="flex-1 max-w-7xl h-full px-8 mx-auto overflow-hidden">
                {children}
              </main>
              <footer className="text-center text-sm  shadow-2xl border-t border-t-secondary-600 py-6">
                © {year}. All rights reserved.
              </footer>
            </Box>
          </AppRouterCacheProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
