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
import { Plus, Pencil, Award, ExternalLink } from "lucide-react";
import { getCertifications } from "@/services/common.service";
import { DeleteItemButton } from "@/components/dashboard/delete-item-button";

export default async function CertificationsPage() {
  const certifications = await getCertifications();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Certifications</h1>
          <p className="text-muted-foreground">
            Manage your certifications and credentials
          </p>
        </div>
        <Link href="/dashboard/certifications/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Certification
          </Button>
        </Link>
      </div>

      {certifications.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Award className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">No certifications yet</p>
            <Link href="/dashboard/certifications/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Certification
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Certifications ({certifications.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                    <Link href={`/dashboard/certifications/${cert.id}`}>
                      <Button variant="outline" size="sm">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </Link>
                    <DeleteItemButton
                      itemId={cert.id}
                      itemName={cert.name}
                      itemType="certification"
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
