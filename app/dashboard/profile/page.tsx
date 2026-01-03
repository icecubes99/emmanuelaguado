import { getProfile } from "@/services/common.service";
import { ProfileForm } from "@/components/dashboard/profile-form";

export default async function ProfilePage() {
  const profile = await getProfile();

  return (
    <div className="max-w-2xl mx-auto">
      <ProfileForm profile={profile} />
    </div>
  );
}
