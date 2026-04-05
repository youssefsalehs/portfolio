import React from "react";
import SkillsContainer from "./SkillsContainer";
import Header from "../Header/Header";
export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 pt-20">
      <Header
        title={"Skills"}
        desc={"Technologies I work with and continuously improve."}
      />

      <SkillsContainer />
    </div>
  );
}
