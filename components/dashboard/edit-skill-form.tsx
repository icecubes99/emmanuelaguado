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
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { updateSkillAction } from "@/app/actions/common.actions";
import { useToast } from "@/hooks/use-toast";

const skillSchema = z.object({
  name: z.string().min(1, "Name is required"),
  iconName: z.string().min(1, "Icon name is required"),
  color: z.string().min(1, "Color is required"),
  order: z.coerce.number().optional(),
});

type SkillFormData = z.infer<typeof skillSchema>;

interface Skill {
  id: number;
  name: string;
  iconName: string;
  color: string;
  order: number;
}

interface EditSkillFormProps {
  skill: Skill;
}

export function EditSkillForm({ skill }: EditSkillFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SkillFormData>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: skill.name,
      iconName: skill.iconName,
      color: skill.color,
      order: skill.order,
    },
  });

  const onSubmit = async (data: SkillFormData) => {
    setIsSubmitting(true);
    try {
      const result = await updateSkillAction(skill.id, data);

      if (result.success) {
        toast({
          title: "Skill updated",
          description: `"${data.name}" has been updated.`,
        });
        router.push("/dashboard/skills");
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
        description: "Failed to update skill",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/skills">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Edit Skill</h1>
          <p className="text-muted-foreground">Update {skill.name}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Skill Details</CardTitle>
            <CardDescription>
              Update the skill information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="iconName">Icon Name *</Label>
              <Input id="iconName" {...register("iconName")} />
              <p className="text-xs text-muted-foreground">
                Use icon names from react-icons (e.g., FaReact, SiNextdotjs)
              </p>
              {errors.iconName && (
                <p className="text-sm text-destructive">{errors.iconName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="color">Color *</Label>
                <div className="flex gap-2">
                  <Input
                    id="color"
                    type="color"
                    {...register("color")}
                    className="w-12 h-9 p-1"
                  />
                  <Input {...register("color")} className="flex-1" />
                </div>
                {errors.color && (
                  <p className="text-sm text-destructive">{errors.color.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="order">Display Order</Label>
                <Input id="order" type="number" {...register("order")} />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 mt-6">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            Save Changes
          </Button>
          <Link href="/dashboard/skills">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
