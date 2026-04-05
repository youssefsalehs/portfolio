"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import { CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import NavLink from "./navlink";
export default function Sidebar({ navlinks }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        sx={{
          display: { xs: "block", md: "none" },
          fontSize: "30px",
          cursor: "pointer",
          transition: "color 0.3s",
          "&:hover": { color: "primary.main" },
        }}
      >
        <CiMenuFries />
      </Box>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 h-screen bg-secondary-900 bg-opacity-50 z-40 md:hidden"
        ></div>
      )}
      <Box
        sx={{ bgcolor: "background.default" }}
        className={`fixed top-0 right-0 min-h-screen w-[70%] shadow-inner transform z-50 md:hidden flex flex-col p-6 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Box
          onClick={() => setOpen(false)}
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: "30px",
            cursor: "pointer",
            mb: 2,
            alignSelf: "end",
            "&:hover": { color: "primary.main" },
          }}
        >
          <CgClose />
        </Box>

        <ul className="flex flex-col gap-6 w-full">
          {navlinks.map((link, i) => (
            <NavLink link={link} key={i} />
          ))}
        </ul>
      </Box>
    </>
  );
}
