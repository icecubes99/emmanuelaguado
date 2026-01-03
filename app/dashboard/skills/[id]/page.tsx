import { notFound } from "next/navigation";
import { getSkillById } from "@/services/common.service";
import { EditSkillForm } from "@/components/dashboard/edit-skill-form";

interface EditSkillPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditSkillPage({ params }: EditSkillPageProps) {
  const { id } = await params;
  const skillId = parseInt(id);

  if (isNaN(skillId)) {
    notFound();
  }

  const skill = await getSkillById(skillId);

  if (!skill) {
    notFound();
  }

  return (
    <div className="max-w-xl mx-auto">
      <EditSkillForm skill={skill} />
    </div>
  );
}
