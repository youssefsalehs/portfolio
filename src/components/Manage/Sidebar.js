"use client";
import Box from "next-auth/providers/box";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { LuBrainCircuit } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import { PiFolderPlusFill } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
export default function Sidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <nav className="w-16 bg-purple-900 bg-opacity-10  lg:w-72 shadow-xl pt-12 pb-2  px-2 flex flex-col gap-4 text-lg">
      <Link href={"/manage"}>
        <h3 className="flex  justify-center text-xl flex-col gap-2 items-center">
          <LuBrainCircuit size={40} />
          <span className="hidden lg:block font-bold">Admin</span>
        </h3>
      </Link>
      <ul className=" flex flex-col gap-2 mt-4">
        <li>
          <Link
            href={"/manage/projects"}
            className={`flex items-center p-2 justify-center lg:justify-start gap-2 rounded-lg transition-all duration-300
    ${isActive("/manage/projects") ? "bg-purple-800 bg-opacity-25" : "hover:bg-primary-200 hover:bg-opacity-5"}
  `}
          >
            <MdWork size={30} />
            <span className="hidden lg:block">Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/manage/create-project"}
            className={`flex items-center p-2 justify-center lg:justify-start gap-2 rounded-lg transition-all duration-300
    ${isActive("/manage/create-project") ? "bg-purple-800 bg-opacity-25" : "hover:bg-primary-200 hover:bg-opacity-5"}
  `}
          >
            <PiFolderPlusFill size={30} />
            <span className="hidden lg:block">Create Project</span>
          </Link>
        </li>
      </ul>
      {session && (
        <div
          className=" hover:bg-[#7c0a02] rounded-lg hover:text-white  cursor-pointer mt-auto transition duration-300 flex items-center justify-center lg:justify-start p-2 gap-2 "
          onClick={() => {
            toast.success("signed out successfully");
            signOut({ callbackUrl: "/login" });
          }}
        >
          <RiLogoutBoxRLine size={30} />{" "}
          <span className="hidden lg:block">signout</span>
        </div>
      )}
    </nav>
  );
}
