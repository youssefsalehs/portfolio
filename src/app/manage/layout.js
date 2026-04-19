import Sidebar from "@/components/Manage/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col pt-16 gap-2 h-[92.3vh] overflow-hidden">
      <div className="flex flex-1 min-h-0">
        <Sidebar />

        <div className="flex-1 overflow-y-auto min-h-0 p-5">{children}</div>
      </div>
    </div>
  );
}
