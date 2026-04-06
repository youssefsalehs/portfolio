import { experienceData } from "@/constants/constants";
import { ExpCard } from "./cards";

export default function Experience() {
  return (
    <div className="relative flex flex-col gap-8 ">
      {experienceData.map((ex, i) => (
        <ExpCard key={i} experience={ex} />
      ))}
    </div>
  );
}
