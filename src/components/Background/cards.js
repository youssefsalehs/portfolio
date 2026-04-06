import React from "react";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { ShowResponsibilities } from "./showResponsibilities";
import { skillIcons } from "@/constants/constants";

export function EduCard({ data }) {
  return (
    <div className="bg-primary-800 border-secondary-500 bg-opacity-10 border  rounded-md p-8  transition flex gap-4 items-start hover:shadow-[0_0_15px_#c27cff65]">
      <div className="flex justify-center items-center bg-secondary-300 bg-opacity-35 p-3  rounded-md text-xl">
        <FaUserGraduate />
      </div>
      <div className="flex flex-col gap-2 font-normal ">
        <h3 className="text-lg lg:text-xl font-extrabold ">{data.degree}</h3>
        <p className="text-lg lg:text-lg">{data.faculty}</p>
        <p className="text-lg lg:text-lg ">GPA: {data.gpa}</p>
        <p className="flex gap-2 items-center text-sm ">
          <FaCalendarDays className="text-primary-500" />
          <span>{data.duration}</span>
        </p>
      </div>
    </div>
  );
}

export function ExpCard({ experience }) {
  return (
    <div className="flex items-start gap-6 relative bg-primary-800 bg-opacity-10 border border-secondary-500 rounded-md p-8 hover:shadow-[0_0_15px_#c27cff65] transition">
      <div className="flex items-start gap-4  rounded-md  w-full">
        <span className="flex justify-center items-center bg-secondary-300 bg-opacity-35 p-3  rounded-md text-xl">
          <FaBriefcase />
        </span>
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-lg lg:text-xl font-extrabold">
            {experience.role}
          </h3>
          <p className="text-sm lg:text-lg">{experience.organization}</p>
          <p className="text-sm lg:text-lg ">
            {experience.type} · {experience.mode}
          </p>
          <p className="flex gap-2 items-center text-sm ">
            <FaCalendarDays className="text-primary-500" />
            <span>{experience.duration}</span>
          </p>
          <div className="flex gap-2 text-sm py-2 flex-wrap">
            {experience.stack.map((el, i) => {
              const Icon = skillIcons[el]?.icon;
              return (
                <span
                  key={i}
                  className="relative flex items-center border-secondary-700 gap-1 hover:-translate-y-3 border px-4 py-2 rounded-md overflow-hidden transition-transform duration-300"
                >
                  <span
                    className="absolute top-0 left-0 w-full h-full  "
                    style={{
                      background: "#c27cff12",
                    }}
                  ></span>
                  <span
                    className="relative"
                    style={{ color: `${skillIcons[el].color}` }}
                  >
                    {Icon && <Icon size={18} />}
                  </span>
                  <span className="relative">{el}</span>
                </span>
              );
            })}
          </div>
          <hr />
          <div className="space-y-1">
            {experience.responsibilities.length > 3 ? (
              <ShowResponsibilities
                responsibilities={experience.responsibilities}
              />
            ) : (
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                {experience.responsibilities.slice(0, 3).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
