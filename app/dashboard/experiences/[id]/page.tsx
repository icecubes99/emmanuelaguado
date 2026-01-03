import { notFound } from "next/navigation";
import { getExperienceById } from "@/services/common.service";
import { EditExperienceForm } from "@/components/dashboard/edit-experience-form";

interface EditExperiencePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditExperiencePage({
  params,
}: EditExperiencePageProps) {
  const { id } = await params;
  const experienceId = parseInt(id);

  if (isNaN(experienceId)) {
    notFound();
  }

  const experience = await getExperienceById(experienceId);

  if (!experience) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <EditExperienceForm experience={experience} />
    </div>
  );
}
