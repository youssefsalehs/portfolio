import { getProjectsByCategory } from "@/app/api/projects";
import BackButton from "@/components/Buttons/backbutton";
import Header from "@/components/Header/Header";
import ProjectsContainer from "@/components/Projects/CategoryProductsContainer";

import React from "react";
export async function generateMetadata({ params }) {
  const { categoryName } = await params;
  const formatted =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  return {
    title: `${formatted} Projects`,
    description: `Explore ${formatted} projects built by Youssef Ashraf using modern technologies like React and Next.js.`,
  };
}

export default async function Category({ params }) {
  const { categoryName } = await params;
  const projects = await getProjectsByCategory(categoryName);
  return (
    <div className="flex flex-col    pt-24 pb-8">
      <div className="self-start">
        <BackButton text="Back To Categories" to="/projects" />
      </div>
      <Header title={categoryName + " " + "Projects"} />
      <ProjectsContainer category={categoryName} projects={projects} />
    </div>
  );
}
