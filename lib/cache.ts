import { revalidateTag, revalidatePath } from "next/cache";

/**
 * Cache Invalidation Utilities
 *
 * Use these functions after mutations to invalidate relevant caches.
 * This ensures users see fresh data after updates.
 */

// Invalidate all skills cache
export function invalidateSkillsCache() {
  revalidateTag("skills");
}

// Invalidate all experiences cache
export function invalidateExperiencesCache() {
  revalidateTag("experiences");
}

// Invalidate all certifications cache
export function invalidateCertificationsCache() {
  revalidateTag("certifications");
}

// Invalidate profile cache
export function invalidateProfileCache() {
  revalidateTag("profile");
}

// Invalidate all projects cache
export function invalidateProjectsCache() {
  revalidateTag("projects");
}

// Invalidate a specific project's cache
export function invalidateProjectCache(id: number | string) {
  revalidateTag(`project-${id}`);
  revalidateTag("projects"); // Also invalidate the list
}

// Invalidate all caches (use sparingly)
export function invalidateAllCaches() {
  revalidateTag("skills");
  revalidateTag("experiences");
  revalidateTag("certifications");
  revalidateTag("profile");
  revalidateTag("projects");
}

// Path-based revalidation for specific pages
export function revalidateHomePage() {
  revalidatePath("/");
}

export function revalidateProjectsPage() {
  revalidatePath("/projects");
}

export function revalidateAboutPage() {
  revalidatePath("/about");
}

export function revalidateDashboard() {
  revalidatePath("/dashboard", "layout");
}
