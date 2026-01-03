"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import type { User } from "next-auth";

interface DashboardHeaderProps {
  user: User;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="lg:hidden w-10" /> {/* Spacer for mobile menu button */}
      <div className="flex-1 lg:flex-none">
        <h1 className="text-lg font-semibold lg:hidden text-center">
          Dashboard
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground hidden sm:inline">
          {user.email}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="gap-2"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Sign out</span>
        </Button>
      </div>
    </header>
  );
}
