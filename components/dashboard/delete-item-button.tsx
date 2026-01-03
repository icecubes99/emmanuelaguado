"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  deleteSkillAction,
  deleteExperienceAction,
  deleteCertificationAction,
} from "@/app/actions/common.actions";
import { useToast } from "@/hooks/use-toast";

interface DeleteItemButtonProps {
  itemId: number;
  itemName: string;
  itemType: "skill" | "experience" | "certification";
}

export function DeleteItemButton({
  itemId,
  itemName,
  itemType,
}: DeleteItemButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const deleteActions = {
    skill: deleteSkillAction,
    experience: deleteExperienceAction,
    certification: deleteCertificationAction,
  };

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${itemName}"?`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const deleteAction = deleteActions[itemType];
      const result = await deleteAction(itemId);
      if (result.success) {
        toast({
          title: `${itemType.charAt(0).toUpperCase() + itemType.slice(1)} deleted`,
          description: `"${itemName}" has been deleted.`,
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
        description: `Failed to delete ${itemType}`,
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
