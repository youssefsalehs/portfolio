import { getSpecificProject } from "@/app/api/projects";
import EditForm from "@/components/Manage/EditForm";
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getSpecificProject(id);

  return {
    title: `Edit : ${project.slug}`,
  };
}

export default async function EditProject({ params }) {
  const { id } = await params;
  const project = await getSpecificProject(id);
  return (
    <div className="pt-1">
      <EditForm project={project} />
    </div>
  );
}
