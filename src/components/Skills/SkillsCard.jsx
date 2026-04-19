import React from "react";
import { skillIcons } from "@/constants/constants";
export default function SkillsCard({ skill, skillsInSkill }) {
  const Icon = skillIcons[skill]?.icon;
  return (
    <div className="bg-primary-800 border-secondary-700 bg-opacity-10 col-span-2 md:col-span-1 p-8 rounded-lg flex-shrink-0 flex flex-col gap-8 border hover:shadow-[0_0_15px_#c27cff65] transition-all duration-300">
      <h3
        className="font-semibold text-2xl  capitalize flex items-center gap-4 "
        style={{ color: `${skillIcons[skill].color}` }}
      >
        <span
          className="bg-secondary-300 bg-opacity-35  p-2  rounded-md"
          style={{
            color: `${skillIcons[skill].color}`,
            background: `${skillIcons[skill].color}22`,
          }}
        >
          <Icon />
        </span>
        {skill}
      </h3>
      <ul className="grid grid-cols-4 gap-4">
        {skillsInSkill.map((skill, i) => {
          const Icon = skillIcons[skill].icon;
          return (
            <li
              key={i}
              className=" relative bg-primary-800 border-secondary-600 bg-opacity-10 col-span-2 lg:col-span-1 flex 
              flex-col md:justify-center
             items-center gap-1 hover:scale-105 border  px-4 py-2 rounded-md overflow-hidden transition-transform duration-300 hover:shadow-[0_0_10px_#c27cff65] flex-wrap"
            >
              <span
                className="absolute top-0 left-0 w-full h-full "
                style={{
                  background: "#c27cff12",
                }}
              ></span>
              <span
                style={{
                  color: `${skillIcons[skill].color}`,
                }}
                className="text-lg relative"
              >
                {Icon && <Icon size={25} />}
              </span>
              <span className="text-sm text-center font-semibold relative">
                {skill}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
