import AddForm from "@/components/Manage/AddForm";
export const metadata = {
  title: "New Project",
};

export default async function CreateProject() {
  return (
    <div className="pt-1">
      <AddForm />
    </div>
  );
}
