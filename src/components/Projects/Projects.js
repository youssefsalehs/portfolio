import { getFeaturedProjects } from "@/app/api/projects";
import Header from "../Header/Header";
import ProjectsContainer from "./ProjectsContainer";
export default async function Projects() {
  const featuredProjects = await getFeaturedProjects();
  console.log(featuredProjects);
  return (
    <div className="flex flex-col justify-center   pt-20 gap-4 pb-8">
      <Header
        title={"Projects"}
        desc={`Designing and building intuitive digital experiences`}
      />
      <ProjectsContainer featuredProjects={featuredProjects} />
    </div>
  );
}
