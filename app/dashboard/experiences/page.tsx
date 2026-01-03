import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Plus, Pencil, Briefcase } from "lucide-react";
import { getExperiences } from "@/services/common.service";
import { DeleteItemButton } from "@/components/dashboard/delete-item-button";

export default async function ExperiencesPage() {
  const experiences = await getExperiences();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Experiences</h1>
          <p className="text-muted-foreground">
            Manage your work experience
          </p>
        </div>
        <Link href="/dashboard/experiences/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </Button>
        </Link>
      </div>

      {experiences.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No experiences yet</p>
            <Link href="/dashboard/experiences/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Experience
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {experiences.map((exp) => (
            <Card key={exp.id} className="relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ backgroundColor: exp.bannerColor }}
              />
              <CardHeader className="pl-6">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {exp.title}
                      <Badge variant="outline">Order: {exp.order}</Badge>
                    </CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/dashboard/experiences/${exp.id}`}>
                      <Button variant="outline" size="sm">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </Link>
                    <DeleteItemButton
                      itemId={exp.id}
                      itemName={exp.title}
                      itemType="experience"
                    />
                  </div>
                </div>
              </CardHeader>
              {exp.description && exp.description.length > 0 && (
                <CardContent className="pl-6">
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exp.description.map((desc) => (
                      <li key={desc.id}>{desc.text}</li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
