import React from "react";
import { EduCard } from "./cards";
import { educationData } from "@/constants/constants";

export default function Education() {
  return (
    <div>
      <EduCard data={educationData} />
    </div>
  );
}
