import { getSpecificProject } from "@/app/api/projects";
import AddForm from "@/components/Manage/AddForm";
import EditForm from "@/components/Manage/EditForm";

export default async function EditProject({ params }) {
  const { id } = await params;
  const project = await getSpecificProject(id);
  return (
    <div className="pt-1">
      <EditForm project={project} />
    </div>
  );
}
