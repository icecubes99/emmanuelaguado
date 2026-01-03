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
import { Plus, Pencil, ExternalLink, Github } from "lucide-react";
import { getProjects } from "@/services/projects.service";
import { DeleteProjectButton } from "@/components/dashboard/delete-project-button";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">
            Manage your portfolio projects
          </p>
        </div>
        <Link href="/dashboard/projects/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </Link>
      </div>

      {projects.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4">No projects yet</p>
            <Link href="/dashboard/projects/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Project
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      {project.title}
                      {project.year && (
                        <span className="text-sm font-normal text-muted-foreground">
                          ({project.year})
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/dashboard/projects/${project.id}`}>
                      <Button variant="outline" size="sm">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </Link>
                    <DeleteProjectButton
                      projectId={project.id}
                      projectTitle={project.title}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 text-sm text-muted-foreground">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
