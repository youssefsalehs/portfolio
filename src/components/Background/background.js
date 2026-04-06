import React from "react";
import Education from "./education";
import Experience from "./experience";
import Header, { SubHeader } from "../Header/Header";

export default function Background() {
  return (
    <div className="flex flex-col justify-center  pt-20  gap-2">
      <Header
        title={"Background"}
        desc={"Learning through education, growing through experience"}
      />
      <div className="flex flex-col gap-12">
        <div>
          <SubHeader title={"Education"} />
          <Education />
        </div>
        <div>
          <SubHeader title={"Experience"} />
          <Experience />
        </div>
      </div>
    </div>
  );
}
