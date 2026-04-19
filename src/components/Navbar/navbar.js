"use client";
import { Box, Button, Typography } from "@mui/material";
import NavLink from "./navlink";
import Sidebar from "./sidebar";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const navlinks = [
  "Home",
  "About",
  "Skills",
  "Background",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className="fixed mx-auto w-full flex justify-center items-center font-semibold text-lg p-4 bg-transparent backdrop-blur-3xl z-50">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <Link href="/">
          <Typography
            sx={{
              color: "text.primary",
              fontSize: 25,
              fontWeight: 700,
              "&:hover": {
                transform: "scale(1.05)",
                letterSpacing: 1.5,
                transition: "all 0.3s",
              },
            }}
          >
            <span>Youssef.Ashraf</span>
          </Typography>
        </Link>

        <ul className="gap-6 hidden md:flex px-4 items-center">
          {navlinks.map((link, i) => (
            <NavLink link={link} key={i} />
          ))}
          {session && (
            <Box
              component={"li"}
              sx={{
                px: 2,
                py: 1,
                cursor: "pointer",
                bgcolor: "background.paper",
                transition: "all 0.3s",
                boxShadow: 1,
                borderRadius: 1,
                "&:hover": { bgcolor: "#2e8b57" },
              }}
            >
              <Link href={"/manage"}>manage</Link>
            </Box>
          )}
        </ul>

        <Sidebar navlinks={navlinks} />
      </div>
    </div>
  );
}
