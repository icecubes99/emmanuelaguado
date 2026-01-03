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
import { createCertificationAction } from "@/app/actions/common.actions";
import { useToast } from "@/hooks/use-toast";

const certificationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  year: z.string().min(1, "Year is required"),
  link: z.string().url("Valid URL is required"),
  order: z.coerce.number().optional(),
});

type CertificationFormData = z.infer<typeof certificationSchema>;

export default function NewCertificationPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CertificationFormData>({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      year: new Date().getFullYear().toString(),
      order: 0,
    },
  });

  const onSubmit = async (data: CertificationFormData) => {
    setIsSubmitting(true);
    try {
      const result = await createCertificationAction(data);

      if (result.success) {
        toast({
          title: "Certification created",
          description: `"${data.name}" has been added.`,
        });
        router.push("/dashboard/certifications");
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
        description: "Failed to create certification",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/certifications">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">New Certification</h1>
          <p className="text-muted-foreground">
            Add a certification to your portfolio
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Certification Details</CardTitle>
            <CardDescription>
              Enter the certification information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Certification Name *</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="AWS Solutions Architect"
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="issuer">Issuing Organization *</Label>
              <Input
                id="issuer"
                {...register("issuer")}
                placeholder="Amazon Web Services"
              />
              {errors.issuer && (
                <p className="text-sm text-destructive">
                  {errors.issuer.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Input id="year" {...register("year")} placeholder="2024" />
                {errors.year && (
                  <p className="text-sm text-destructive">
                    {errors.year.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="order">Display Order</Label>
                <Input id="order" type="number" {...register("order")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="link">Credential Link *</Label>
              <Input
                id="link"
                {...register("link")}
                placeholder="https://credential.example.com/..."
              />
              {errors.link && (
                <p className="text-sm text-destructive">
                  {errors.link.message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 mt-6">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            Create Certification
          </Button>
          <Link href="/dashboard/certifications">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
