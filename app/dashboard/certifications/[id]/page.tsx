import { notFound } from "next/navigation";
import { getCertificationById } from "@/services/common.service";
import { EditCertificationForm } from "@/components/dashboard/edit-certification-form";

interface EditCertificationPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditCertificationPage({
  params,
}: EditCertificationPageProps) {
  const { id } = await params;
  const certId = parseInt(id);

  if (isNaN(certId)) {
    notFound();
  }

  const certification = await getCertificationById(certId);

  if (!certification) {
    notFound();
  }

  return (
    <div className="max-w-xl mx-auto">
      <EditCertificationForm certification={certification} />
    </div>
  );
}
