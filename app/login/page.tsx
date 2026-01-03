"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "@/app/actions/auth.actions";
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
import { AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md">
        {/* Back to home link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Card className="border-gray-700 bg-gray-800/50 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-white">
              Welcome back
            </CardTitle>
            <CardDescription className="text-gray-400">
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="redirectTo" value={callbackUrl} />

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@example.com"
                  required
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-200">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 p-3 text-sm text-red-400 bg-red-900/20 border border-red-800 rounded-md">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-sm text-gray-500">
          Protected area for portfolio management
        </p>
      </div>
    </div>
  );
}
