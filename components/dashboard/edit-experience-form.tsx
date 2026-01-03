"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Loader2, Plus, X } from "lucide-react";
import Link from "next/link";
import { updateExperienceAction } from "@/app/actions/common.actions";
import { useToast } from "@/hooks/use-toast";

const experienceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  period: z.string().min(1, "Period is required"),
  bannerColor: z.string().min(1, "Banner color is required"),
  order: z.coerce.number().optional(),
});

type ExperienceFormData = z.infer<typeof experienceSchema>;

interface ExperienceDescription {
  id: number;
  text: string;
  order: number;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  bannerColor: string;
  order: number;
  description: ExperienceDescription[];
}

interface EditExperienceFormProps {
  experience: Experience;
}

export function EditExperienceForm({ experience }: EditExperienceFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [descriptions, setDescriptions] = useState<string[]>(
    experience.description.length > 0
      ? experience.description.map((d) => d.text)
      : [""]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExperienceFormData>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      title: experience.title,
      company: experience.company,
      period: experience.period,
      bannerColor: experience.bannerColor,
      order: experience.order,
    },
  });

  const addDescription = () => {
    setDescriptions([...descriptions, ""]);
  };

  const removeDescription = (index: number) => {
    setDescriptions(descriptions.filter((_, i) => i !== index));
  };

  const updateDescription = (index: number, value: string) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };

  const onSubmit = async (data: ExperienceFormData) => {
    setIsSubmitting(true);
    try {
      const result = await updateExperienceAction(experience.id, {
        ...data,
        descriptions: descriptions.filter((d) => d.trim() !== ""),
      });

      if (result.success) {
        toast({
          title: "Experience updated",
          description: `"${data.title}" has been updated.`,
        });
        router.push("/dashboard/experiences");
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
        description: "Failed to update experience",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/experiences">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Edit Experience</h1>
          <p className="text-muted-foreground">Update {experience.title}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Experience Details</CardTitle>
            <CardDescription>Basic information about the role</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title *</Label>
              <Input id="title" {...register("title")} />
              {errors.title && (
                <p className="text-sm text-destructive">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input id="company" {...register("company")} />
              {errors.company && (
                <p className="text-sm text-destructive">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="period">Period *</Label>
                <Input id="period" {...register("period")} />
                {errors.period && (
                  <p className="text-sm text-destructive">
                    {errors.period.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="order">Display Order</Label>
                <Input id="order" type="number" {...register("order")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bannerColor">Banner Color *</Label>
              <div className="flex gap-2">
                <Input
                  id="bannerColor"
                  type="color"
                  {...register("bannerColor")}
                  className="w-12 h-9 p-1"
                />
                <Input {...register("bannerColor")} className="flex-1" />
              </div>
              {errors.bannerColor && (
                <p className="text-sm text-destructive">
                  {errors.bannerColor.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Description Points</CardTitle>
            <CardDescription>
              Update the bullet points for this experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {descriptions.map((desc, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={desc}
                  onChange={(e) => updateDescription(index, e.target.value)}
                  placeholder="Describe a responsibility or achievement..."
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeDescription(index)}
                  disabled={descriptions.length === 1}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addDescription}>
              <Plus className="h-4 w-4 mr-2" />
              Add Point
            </Button>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            Save Changes
          </Button>
          <Link href="/dashboard/experiences">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
