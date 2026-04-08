"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
export default function BackButton({ text, to }) {
  const router = useRouter();

  return (
    <button
      onClick={() => (to ? router.push(to) : router.back())}
      className="px-4  flex items-center gap-1 opacity-80 hover:translate-x-4 hover:opacity-100 text-lg transition-all duration-300"
    >
      <IoMdArrowRoundBack /> {text}
    </button>
  );
}
