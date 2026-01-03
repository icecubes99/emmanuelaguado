"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { createProjectAction } from "@/app/actions/projects.actions";
import { useToast } from "@/hooks/use-toast";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().min(1, "Image URL is required"),
  alt: z.string().optional(),
  githubLink: z.string().url().optional().or(z.literal("")),
  figmaLink: z.string().url().optional().or(z.literal("")),
  behanceLink: z.string().url().optional().or(z.literal("")),
  linkedInLink: z.string().url().optional().or(z.literal("")),
  liveLink: z.string().url().optional().or(z.literal("")),
  year: z.string().optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function NewProjectPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [badges, setBadges] = useState<string[]>([]);
  const [badgeInput, setBadgeInput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      year: new Date().getFullYear().toString(),
    },
  });

  const addBadge = () => {
    if (badgeInput.trim() && !badges.includes(badgeInput.trim())) {
      setBadges([...badges, badgeInput.trim()]);
      setBadgeInput("");
    }
  };

  const removeBadge = (badge: string) => {
    setBadges(badges.filter((b) => b !== badge));
  };

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    try {
      const result = await createProjectAction({
        ...data,
        badges,
      });

      if (result.success) {
        toast({
          title: "Project created",
          description: `"${data.title}" has been created successfully.`,
        });
        router.push("/dashboard/projects");
        router.refresh();
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to create project",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/projects">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">New Project</h1>
          <p className="text-muted-foreground">Add a new project to your portfolio</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>The main details of your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" {...register("title")} placeholder="My Awesome Project" />
              {errors.title && (
                <p className="text-sm text-destructive">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                {...register("description")}
                placeholder="A brief description of what this project does..."
                rows={4}
              />
              {errors.description && (
                <p className="text-sm text-destructive">{errors.description.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="image">Image URL *</Label>
                <Input id="image" {...register("image")} placeholder="/project-image.png" />
                {errors.image && (
                  <p className="text-sm text-destructive">{errors.image.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" {...register("year")} placeholder="2024" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="alt">Alt Text</Label>
              <Input id="alt" {...register("alt")} placeholder="Description of the image" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technologies & Badges</CardTitle>
            <CardDescription>Add the technologies used in this project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={badgeInput}
                onChange={(e) => setBadgeInput(e.target.value)}
                placeholder="e.g. React, TypeScript, Node.js"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addBadge();
                  }
                }}
              />
              <Button type="button" onClick={addBadge} variant="outline">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="gap-1">
                    {badge}
                    <button
                      type="button"
                      onClick={() => removeBadge(badge)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Links</CardTitle>
            <CardDescription>Add relevant links for this project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="githubLink">GitHub</Label>
                <Input
                  id="githubLink"
                  {...register("githubLink")}
                  placeholder="https://github.com/..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="liveLink">Live Demo</Label>
                <Input
                  id="liveLink"
                  {...register("liveLink")}
                  placeholder="https://myproject.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="figmaLink">Figma</Label>
                <Input
                  id="figmaLink"
                  {...register("figmaLink")}
                  placeholder="https://figma.com/..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="behanceLink">Behance</Label>
                <Input
                  id="behanceLink"
                  {...register("behanceLink")}
                  placeholder="https://behance.net/..."
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            Create Project
          </Button>
          <Link href="/dashboard/projects">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
