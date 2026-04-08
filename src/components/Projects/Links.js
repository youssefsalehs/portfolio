import { Typography } from "@mui/material";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { VscGithubAlt } from "react-icons/vsc";

export default function Links({ project }) {
  return (
    <div className="flex gap-6  justify-end mt-auto">
      <a
        href={project.githubLink}
        target="_blank"
        className=" flex items-center justify-center font-semibold gap-1   py-2  rounded transition hover:-translate-x-2 opacity-80 hover:opacity-100"
      >
        <VscGithubAlt />
        GitHub
      </a>
      <Typography
        component={"a"}
        href={project.liveLink}
        target="_blank"
        sx={{ color: "primary.main", fontWeight: 900 }}
        className="flex items-center  justify-center gap-1  py-2 rounded  transition hover:-translate-x-2 opacity-80 hover:opacity-100"
      >
        <LuSquareArrowOutUpRight />
        Live
      </Typography>
    </div>
  );
}
