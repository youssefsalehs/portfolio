import { authOptions } from "@/auth";
import { Button } from "@mui/material";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { FaPlus, FaProjectDiagram, FaTasks, FaUser } from "react-icons/fa";

export default async function ManagePage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-full flex justify-center gap-5 flex-col">
      <div className="bg-purple-800 bg-opacity-10 p-5 rounded-lg flex flex-col gap-2 items-center border border-secondary-500">
        <h1 className="text-2xl font-bold">Hi, {session.user.username}</h1>
        <p className="text-gray-500">What do you want to do today?</p>
        <div className="flex gap-3 ">
          <Link
            href={"/manage/create-project"}
            className="px-3 py-1 bg-secondary-500 text-primary-100 rounded shadow hover:bg-opacity-85 transition duration-300"
          >
            New Project
          </Link>

          <Link
            href={"/manage/projects"}
            className="px-3 py-1 bg-secondary-500 text-primary-100 rounded shadow hover:bg-opacity-85 transition duration-300"
          >
            View Projects
          </Link>
        </div>
      </div>

      <div className="bg-purple-800 bg-opacity-10 p-5 rounded-lg  border border-secondary-500">
        <h2 className="font-semibold mb-3 text-xl">Recent Projects</h2>

        <div className="space-y-2">
          <div className="p-3  border border-secondary-500 rounded-md">
            Portfolio Website
          </div>
          <div className="p-3  border border-secondary-500 rounded-md">
            E-commerce App
          </div>
          <div className="p-3  border border-secondary-500 rounded-md">
            Dashboard UI
          </div>
        </div>
      </div>
    </div>
  );
}
