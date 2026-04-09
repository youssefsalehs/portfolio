import { Typography } from "@mui/material";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { VscGithubAlt } from "react-icons/vsc";

export default function Links({ project }) {
  return (
    <div className="flex gap-6  justify-end ">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className=" flex items-center justify-center font-semibold gap-1 bg-secondary-600 px-4 py-2 text-secondary-100   rounded transition hover:-translate-x-2 opacity-80 hover:opacity-100"
      >
        <VscGithubAlt />
        GitHub
      </a>
      <Typography
        component={"a"}
        href={project.liveLink}
        target="_blank"
        sx={{ color: "primary.light" }}
        rel="noopener noreferrer"
        className="flex items-center !font-semibold justify-center gap-1   rounded  transition hover:-translate-x-2 opacity-80 hover:opacity-100 bg-primary-800 px-4 py-2 !text-secondary-50 "
      >
        <LuSquareArrowOutUpRight />
        Live
      </Typography>
    </div>
  );
}
