import { getAllProjects } from "@/app/api/projects";
import DataTable from "@/components/Manage/Table";
import React from "react";

export default async function ProjectsManagement() {
  const projects = await getAllProjects();
  return (
    <div className="flex justify-center items-center pt-1">
      <DataTable projects={projects} />
    </div>
  );
}
