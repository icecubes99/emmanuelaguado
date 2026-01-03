import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FolderKanban,
  Wrench,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react";
import { db } from "@/db";
import {
  projects,
  skills,
  experiences,
  certifications,
  profile,
} from "@/db/schema";
import { count } from "drizzle-orm";

async function getStats() {
  const [projectCount] = await db.select({ count: count() }).from(projects);
  const [skillCount] = await db.select({ count: count() }).from(skills);
  const [experienceCount] = await db
    .select({ count: count() })
    .from(experiences);
  const [certificationCount] = await db
    .select({ count: count() })
    .from(certifications);
  const profileData = await db.query.profile.findFirst();

  return {
    projects: projectCount.count,
    skills: skillCount.count,
    experiences: experienceCount.count,
    certifications: certificationCount.count,
    hasProfile: !!profileData,
  };
}

export default async function DashboardPage() {
  const stats = await getStats();

  const cards = [
    {
      title: "Projects",
      count: stats.projects,
      icon: FolderKanban,
      href: "/dashboard/projects",
      color: "text-blue-500",
    },
    {
      title: "Skills",
      count: stats.skills,
      icon: Wrench,
      href: "/dashboard/skills",
      color: "text-green-500",
    },
    {
      title: "Experiences",
      count: stats.experiences,
      icon: Briefcase,
      href: "/dashboard/experiences",
      color: "text-purple-500",
    },
    {
      title: "Certifications",
      count: stats.certifications,
      icon: Award,
      href: "/dashboard/certifications",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-muted-foreground mt-1">
          Manage your portfolio content from here.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{card.count}</div>
              <Link href={card.href}>
                <Button variant="link" className="px-0 mt-2">
                  Manage <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/dashboard/projects/new">
            <Button>Add New Project</Button>
          </Link>
          <Link href="/dashboard/skills/new">
            <Button variant="outline">Add New Skill</Button>
          </Link>
          <Link href="/dashboard/experiences/new">
            <Button variant="outline">Add New Experience</Button>
          </Link>
          <Link href="/dashboard/certifications/new">
            <Button variant="outline">Add New Certification</Button>
          </Link>
          <Link href="/dashboard/profile">
            <Button variant="secondary">
              {stats.hasProfile ? "Edit Profile" : "Create Profile"}
            </Button>
          </Link>
        </div>
      </div>

      {/* Profile Status */}
      {!stats.hasProfile && (
        <Card className="border-yellow-500/50 bg-yellow-500/10">
          <CardContent className="pt-6">
            <p className="text-yellow-600 dark:text-yellow-400">
              ⚠️ You haven&apos;t set up your profile yet. Your portfolio needs
              profile information to display properly.
            </p>
            <Link href="/dashboard/profile">
              <Button className="mt-4" variant="outline">
                Set up Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
