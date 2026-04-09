import { featuredprojects } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import BackButton from "@/components/Buttons/backbutton";
import Hollow from "@/components/Text/HollowText";
import Links from "@/components/Projects/ProjectLinks";
import ProjectTabs from "@/components/ProjectDetails/ProjectsTabs";
export async function generateMetadata({ params }) {
  const { projectId } = await params;
  const project = featuredprojects.find((p) => p.id == projectId);

  return {
    title: `${project.title}`,
    description: `${project.description}`,
  };
}
export default async function ProjectDetails({ params }) {
  const { projectId } = await params;
  const project = featuredprojects.find((p) => p.id == projectId);
  return (
    <div className="flex flex-col  min-h-[88vh]   pt-24  pb-8 font-semibold">
      <div className="self-start pb-10">
        <BackButton text="Back To Home Page" />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
          <div className="order-2 md:order-1 flex flex-col justify-between ">
            <div className="flex flex-col">
              <Hollow text={project.title} size={"3.5em"} />
              <p>{project.subtitle}</p>
            </div>

            <p className="text-lg">{project.description}</p>
            <div className="flex items-center justify-between flex-wrap gap-4 ">
              <div className="flex gap-8  bg-primary-800 bg-opacity-10 rounded-md p-4">
                <div className="flex gap-1 items-center text-xl ">
                  <MdOutlineTimer />
                  <p>{project.year}</p>
                </div>
                <p
                  className={` px-3 py-1 text-sm font-medium rounded-full 
    ${
      project.status === "completed"
        ? "bg-green-700 text-green-200"
        : project.status === "In Progress"
          ? "bg-yellow-700 text-yellow-200"
          : "bg-gray-700 text-gray-200"
    }`}
                >
                  {project.status}
                </p>
              </div>
              <Links project={project} />
            </div>
          </div>
          <div className="relative w-full h-56 sm:h-72 rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover "
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <ProjectTabs
            sections={project.sections}
            tech={project.technologies}
          />
        </div>
      </div>
    </div>
  );
}
