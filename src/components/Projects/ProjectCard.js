import { Typography } from "@mui/material";
import Image from "next/image";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { VscGithubAlt } from "react-icons/vsc";
import { HiStar } from "react-icons/hi2";
import Link from "next/link";
import Links from "./Links";
export default function ProjectCard({ project }) {
  const shownTechnologies = project.technologies.slice(0, 3);
  const remainingTechs = project.technologies.length - 3;
  return (
    <div className="flex flex-col  bg-primary-800 border border-secondary-500 bg-opacity-10  rounded-xl hover:shadow-[0_0_15px_#c27cff65] transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden p-4">
      <div className="relative w-full h-52 rounded-md overflow-hidden border border-secondary-500">
        <Link href={`/projects/${project.id}`}>
          {project.featured && (
            <Typography
              className="absolute top-2 left-2 z-20 flex items-center gap-1 rounded-full px-3 py-1 border border-secondary-500 bg-primary-800/40 text-yellow-300  backdrop-blur-lg !text-xs"
              component="div"
            >
              <HiStar /> featured
            </Typography>
          )}
          <Image
            src={project.image}
            width={350}
            height={150}
            loading="lazy"
            alt={`${project.title} image`}
            className="object-cover object-center w-full h-full"
          />
        </Link>
      </div>

      <div className="pt-4 flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-xs font-semibold line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.stack.map((s) => {
            const stackColors = {
              frontend: "bg-primary-500 text-white",
              backend: "bg-primary-600 text-white",
              fullstack: "bg-primary-700 text-white",
            };

            return (
              <span
                key={s}
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stackColors[s]
                }`}
              >
                {s}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {shownTechnologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded border border-secondary-500 bg-primary-800 bg-opacity-10"
            >
              {tech}
            </span>
          ))}
          {remainingTechs > 0 && (
            <span className="w-8 h-6  bg-secondary-500 bg-opacity-20 border border-secondary-500 rounded-full flex justify-center text-xs items-center">
              {remainingTechs > 0 ? `+` + remainingTechs : ""}
            </span>
          )}
        </div>

        <Links project={project} />
      </div>
    </div>
  );
}
