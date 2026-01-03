"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteProjectAction } from "@/app/actions/projects.actions";
import { useToast } from "@/hooks/use-toast";

interface DeleteProjectButtonProps {
  projectId: number;
  projectTitle: string;
}

export function DeleteProjectButton({
  projectId,
  projectTitle,
}: DeleteProjectButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${projectTitle}"?`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const result = await deleteProjectAction(projectId);
      if (result.success) {
        toast({
          title: "Project deleted",
          description: `"${projectTitle}" has been deleted.`,
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
        description: "Failed to delete project",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-destructive hover:text-destructive"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
