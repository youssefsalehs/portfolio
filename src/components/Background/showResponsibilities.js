"use client";
import { useState } from "react";
import MyButton from "../Buttons/mybutton";

export function ShowResponsibilities({ responsibilities }) {
  const [showMore, setShowMore] = useState(false);
  const displayed = showMore ? responsibilities : responsibilities.slice(0, 3);

  return (
    <div>
      <ul className="text-sm list-disc pl-5 space-y-1 my-4">
        {displayed.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {responsibilities.length > 3 && (
        <MyButton
          onClick={() => setShowMore((prev) => !prev)}
          variant={"secondary"}
        >
          {showMore ? "Show Less" : "Show More"}
        </MyButton>
      )}
    </div>
  );
}
