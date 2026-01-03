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
import { Loader2, User } from "lucide-react";
import { upsertProfileAction } from "@/app/actions/common.actions";
import { useToast } from "@/hooks/use-toast";

const profileSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  headline: z.string().min(1, "Headline is required"),
  shortBio: z.string().min(1, "Short bio is required"),
  fullBio: z.string().min(1, "Full bio is required"),
  secondaryBio: z.string().optional(),
  avatarUrl: z.string().optional(),
  location: z.string().optional(),
  github: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
  behance: z.string().url().optional().or(z.literal("")),
  resume: z.string().url().optional().or(z.literal("")),
  email: z.string().email().optional().or(z.literal("")),
  letterboxd: z.string().url().optional().or(z.literal("")),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface Profile {
  id: number;
  fullName: string;
  headline: string;
  shortBio: string;
  fullBio: string;
  secondaryBio: string | null;
  avatarUrl: string | null;
  location: string | null;
  github: string | null;
  linkedin: string | null;
  behance: string | null;
  resume: string | null;
  email: string | null;
  letterboxd: string | null;
}

interface ProfileFormProps {
  profile: Profile | undefined;
}

export function ProfileForm({ profile }: ProfileFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: profile
      ? {
          fullName: profile.fullName,
          headline: profile.headline,
          shortBio: profile.shortBio,
          fullBio: profile.fullBio,
          secondaryBio: profile.secondaryBio || "",
          avatarUrl: profile.avatarUrl || "",
          location: profile.location || "",
          github: profile.github || "",
          linkedin: profile.linkedin || "",
          behance: profile.behance || "",
          resume: profile.resume || "",
          email: profile.email || "",
          letterboxd: profile.letterboxd || "",
        }
      : {},
  });

  const onSubmit = async (data: ProfileFormData) => {
    setIsSubmitting(true);
    try {
      const result = await upsertProfileAction(data);

      if (result.success) {
        toast({
          title: profile ? "Profile updated" : "Profile created",
          description: "Your profile has been saved successfully.",
        });
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
        description: "Failed to save profile",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <User className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            {profile ? "Edit Profile" : "Create Profile"}
          </h1>
          <p className="text-muted-foreground">
            Manage your portfolio profile information
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Your main profile details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="headline">Headline *</Label>
                <Input
                  id="headline"
                  {...register("headline")}
                  placeholder="Full Stack Developer"
                />
                {errors.headline && (
                  <p className="text-sm text-destructive">
                    {errors.headline.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="avatarUrl">Avatar URL</Label>
                <Input
                  id="avatarUrl"
                  {...register("avatarUrl")}
                  placeholder="/Me.png"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  {...register("location")}
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bio</CardTitle>
            <CardDescription>Tell visitors about yourself</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="shortBio">Short Bio * (for Hero section)</Label>
              <Textarea
                id="shortBio"
                {...register("shortBio")}
                placeholder="A brief introduction..."
                rows={2}
              />
              {errors.shortBio && (
                <p className="text-sm text-destructive">
                  {errors.shortBio.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullBio">Full Bio * (for About page)</Label>
              <Textarea
                id="fullBio"
                {...register("fullBio")}
                placeholder="Your complete bio..."
                rows={4}
              />
              {errors.fullBio && (
                <p className="text-sm text-destructive">
                  {errors.fullBio.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondaryBio">
                Secondary Bio (e.g., &quot;When I&apos;m not coding...&quot;)
              </Label>
              <Textarea
                id="secondaryBio"
                {...register("secondaryBio")}
                placeholder="When I'm not coding, you can find me..."
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
            <CardDescription>Connect your social profiles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <Input
                  id="github"
                  {...register("github")}
                  placeholder="https://github.com/username"
                />
                {errors.github && (
                  <p className="text-sm text-destructive">
                    {errors.github.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  {...register("linkedin")}
                  placeholder="https://linkedin.com/in/username"
                />
                {errors.linkedin && (
                  <p className="text-sm text-destructive">
                    {errors.linkedin.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="behance">Behance</Label>
                <Input
                  id="behance"
                  {...register("behance")}
                  placeholder="https://behance.net/username"
                />
                {errors.behance && (
                  <p className="text-sm text-destructive">
                    {errors.behance.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="letterboxd">Letterboxd</Label>
                <Input
                  id="letterboxd"
                  {...register("letterboxd")}
                  placeholder="https://letterboxd.com/username"
                />
                {errors.letterboxd && (
                  <p className="text-sm text-destructive">
                    {errors.letterboxd.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume URL</Label>
                <Input
                  id="resume"
                  {...register("resume")}
                  placeholder="https://drive.google.com/..."
                />
                {errors.resume && (
                  <p className="text-sm text-destructive">
                    {errors.resume.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            {profile ? "Save Changes" : "Create Profile"}
          </Button>
        </div>
      </form>
    </div>
  );
}
