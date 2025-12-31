import { db } from "@/db";
import {
  projects,
  projectsToBadges,
  badges,
  projectImages,
  projectFeatures,
} from "@/db/schema";
import { eq, desc } from "drizzle-orm";

/**
 * Projects Service
 * Handles all database interactions for Projects.
 */

export const getProjects = async () => {
  const data = await db.query.projects.findMany({
    with: {
      badges: {
        with: {
          badge: true,
        },
      },
      images: true,
      features: true,
    },
    orderBy: [desc(projects.year)],
  });

  // Transform the many-to-many relation structure to a flatter structure if needed
  return data.map((project) => ({
    ...project,
    badges: project.badges.map((b) => b.badge.name), // Flatten badges to array of strings
  }));
};

export const getProjectById = async (id: string) => {
  // Note: ID is serial (number) in schema, but usually passed as string in URLs.
  // Ensure schema matches. Schema defined id as serial (number).
  const projectId = parseInt(id);
  if (isNaN(projectId)) return null;

  const project = await db.query.projects.findFirst({
    where: eq(projects.id, projectId),
    with: {
      badges: {
        with: {
          badge: true,
        },
      },
      images: true,
      features: true,
    },
  });

  if (!project) return null;

  return {
    ...project,
    badges: project.badges.map((b) => b.badge.name),
  };
};

export const createProject = async (data: any) => {
  // Implementation for creating project
  // This would involve transaction to create project, badges, images, features
  // For now, we focus on fetching as requested
};
