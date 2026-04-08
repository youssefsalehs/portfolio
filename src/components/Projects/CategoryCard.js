import Link from "next/link";

import { Typography } from "@mui/material";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Hollow from "../Text/HollowText";

export default function CategoryCard({ category }) {
  return (
    <Link href={`/projects/category/${category.title}`}>
      <div className="bg-primary-800 border-secondary-700 bg-opacity-10 p-6 rounded-lg flex flex-col gap-4 border hover:shadow-[0_0_15px_#c27cff65] transition-all duration-300 cursor-pointer h-full">
        <div className="flex items-center gap-4">
          <Hollow text={category.number} />
          <h3 className="font-semibold text-3xl capitalize">
            {category.title}
          </h3>
        </div>
        <p className="text-sm  opacity-80 leading-relaxed">
          {category.description}
        </p>
        <Typography
          sx={{
            alignSelf: "end",
            mt: "auto",
            fontSize: "2em",
            "&:hover": {
              color: "primary.dark",
              transform: "translateX(-4px)",
              transition: "all .3s",
            },
          }}
        >
          <LuSquareArrowOutUpRight />
        </Typography>
      </div>
    </Link>
  );
}
