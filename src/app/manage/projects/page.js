import { getAllProjects } from "@/app/api/projects";
import DataTable from "@/components/Manage/Table";
import getMyToken from "@/lib/getMyToken";
import React from "react";

export default async function ProjectsManagement() {
  const projects = await getAllProjects();
  const token = await getMyToken();
  return (
    <div className="flex justify-center items-center pt-1">
      <DataTable projects={projects} />
    </div>
  );
}
