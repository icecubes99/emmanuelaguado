import { notFound } from "next/navigation";
import { getProjectById } from "@/services/projects.service";
import { EditProjectForm } from "@/components/dashboard/edit-project-form";

interface EditProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({
  params,
}: EditProjectPageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <EditProjectForm project={project} />
    </div>
  );
}
