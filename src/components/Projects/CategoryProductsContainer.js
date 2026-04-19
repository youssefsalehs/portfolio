import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer({ projects }) {
  const ITEMS_IN_Page = 9;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
