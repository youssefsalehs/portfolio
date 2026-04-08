"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { featuredprojects } from "@/constants/constants";
import Link from "next/link";

export default function ProjectsContainer() {
  const ITEMS_IN_ROW = 4;
  const [visibleCount, setVisibleCount] = useState(ITEMS_IN_ROW);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_IN_ROW);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {featuredprojects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {visibleCount < featuredprojects.length ? (
        <button
          onClick={handleLoadMore}
          className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
        >
          Load More
        </button>
      ) : (
        <Link
          href="/projects"
          className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition capitalize"
        >
          Explore More
        </Link>
      )}
    </div>
  );
}
