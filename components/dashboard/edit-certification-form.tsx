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
import { updateCertificationAction } from "@/app/actions/common.actions";
import { useToast } from "@/hooks/use-toast";

const certificationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  year: z.string().min(1, "Year is required"),
  link: z.string().url("Valid URL is required"),
  order: z.coerce.number().optional(),
});

type CertificationFormData = z.infer<typeof certificationSchema>;

interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  link: string;
  order: number;
}

interface EditCertificationFormProps {
  certification: Certification;
}

export function EditCertificationForm({
  certification,
}: EditCertificationFormProps) {
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
      name: certification.name,
      issuer: certification.issuer,
      year: certification.year,
      link: certification.link,
      order: certification.order,
    },
  });

  const onSubmit = async (data: CertificationFormData) => {
    setIsSubmitting(true);
    try {
      const result = await updateCertificationAction(certification.id, data);

      if (result.success) {
        toast({
          title: "Certification updated",
          description: `"${data.name}" has been updated.`,
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
        description: "Failed to update certification",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/certifications">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Edit Certification</h1>
          <p className="text-muted-foreground">Update {certification.name}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Certification Details</CardTitle>
            <CardDescription>
              Update the certification information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Certification Name *</Label>
              <Input id="name" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="issuer">Issuing Organization *</Label>
              <Input id="issuer" {...register("issuer")} />
              {errors.issuer && (
                <p className="text-sm text-destructive">
                  {errors.issuer.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Input id="year" {...register("year")} />
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
              <Input id="link" {...register("link")} />
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
            Save Changes
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
