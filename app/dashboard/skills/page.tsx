import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { getSkills } from "@/services/common.service";
import { DeleteItemButton } from "@/components/dashboard/delete-item-button";

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Skills</h1>
          <p className="text-muted-foreground">Manage your technical skills</p>
        </div>
        <Link href="/dashboard/skills/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Skill
          </Button>
        </Link>
      </div>

      {skills.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">No skills yet</p>
            <Link href="/dashboard/skills/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Skill
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Skills ({skills.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    <div>
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Icon: {skill.iconName}
                      </p>
                    </div>
                    <Badge variant="outline">Order: {skill.order}</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/dashboard/skills/${skill.id}`}>
                      <Button variant="outline" size="sm">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </Link>
                    <DeleteItemButton
                      itemId={skill.id}
                      itemName={skill.name}
                      itemType="skill"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
