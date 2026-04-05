import React from "react";
import SkillsCard from "./SkillsCard";
import { skills } from "@/constants/constants";
export default function SkillsContainer() {
  const keys = Object.keys(skills);
  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-7xl ">
      {keys.map((skill) => (
        <SkillsCard key={skill} skill={skill} skillsInSkill={skills[skill]} />
      ))}
    </div>
  );
}
