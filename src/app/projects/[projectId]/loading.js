import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <FaSpinner className="animate-spin text-5xl" />
      <p className="text-xl font-semibold">Loading Project...</p>
    </div>
  );
}
