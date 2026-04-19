import Image from "next/image";
import React from "react";
import { MdOutlineCalendarToday, MdOutlineTimer } from "react-icons/md";
import BackButton from "@/components/Buttons/backbutton";
import Hollow from "@/components/Text/HollowText";
import Links from "@/components/Projects/ProjectLinks";
import { getSpecificProject } from "@/app/api/projects";
import { AiFillAlert } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { TfiMedall } from "react-icons/tfi";
export async function generateMetadata({ params }) {
  const { projectId } = await params;
  const project = await getSpecificProject(projectId);

  return {
    title: `${project.title}`,
    description: `${project.description}`,
  };
}
export default async function ProjectDetails({ params }) {
  const { projectId } = await params;
  const project = await getSpecificProject(projectId);
  return (
    <div className="flex flex-col pt-24  pb-8 font-semibold">
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
            <div className="flex items-center justify-between flex-wrap gap-4  mt-2">
              <div className="flex gap-8  bg-primary-800 bg-opacity-10 rounded-md p-4">
                <div className="flex gap-2 items-center text-xl ">
                  <MdOutlineCalendarToday />
                  <p>{project.year}</p>
                </div>
                <div className="flex gap-2 items-center text-xl ">
                  <MdOutlineTimer />
                  <p>{project.duration}</p>
                </div>
              </div>
              <Links project={project} />
            </div>
          </div>
          <div className="relative w-full h-56 sm:h-72 rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src={project.image.url}
              alt={project.title}
              fill
              className="object-cover "
            />
            <p
              className={` px-3 py-1 text-sm font-medium rounded-full absolute top-5 left-5
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
        </div>
        <div className="flex flex-col gap-2 ">
          {project.overview && (
            <div className=" section">
              <h1 className="heading">overview</h1>
              <p>{project.overview}</p>
            </div>
          )}

          {project.technologies.length > 1 && (
            <div className="section">
              <h1 className="heading">Technologies</h1>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <li
                    key={i}
                    className=" px-4 py-1 bg-primary-800 border border-secondary-500 bg-opacity-20 rounded-full"
                  >
                    {t}
                  </li>
                ))}{" "}
              </ul>
            </div>
          )}

          {project.features.length > 1 && (
            <div className="section">
              <h1 className="heading">features</h1>
              <ul className="flex gap-2 flex-col">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <IoAddCircleSharp size={25} className="flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.challenges.length > 1 && (
            <div className="section">
              <h1 className="heading">Challenges</h1>
              <ul className="flex gap-2 flex-col">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <AiFillAlert size={25} className="flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.learnings.length > 1 && (
            <div className="section">
              <h1 className="heading">learnings</h1>
              <ul className="flex gap-2 flex-col">
                {project.learnings.map((l, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {" "}
                    <TfiMedall size={25} className="flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
