import { db } from "@/db";
import {
  projects,
  projectsToBadges,
  badges,
  projectImages,
  projectFeatures,
} from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { z } from "zod";

/**
 * Projects Service
 * Handles all database interactions for Projects.
 */

// Validation schemas for project operations
export const createProjectSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  description: z.string().min(1, "Description is required").max(2000),
  image: z.string().min(1, "Image is required"),
  alt: z.string().optional(),
  githubLink: z.string().url().optional().or(z.literal("")),
  figmaLink: z.string().url().optional().or(z.literal("")),
  behanceLink: z.string().url().optional().or(z.literal("")),
  linkedInLink: z.string().url().optional().or(z.literal("")),
  liveLink: z.string().url().optional().or(z.literal("")),
  year: z.string().optional(),
  badges: z.array(z.string()).optional(),
  images: z.array(z.string().url()).optional(),
  features: z
    .array(
      z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
      })
    )
    .optional(),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;

// Return type for projects with flattened badges
export type ProjectWithBadges = Awaited<ReturnType<typeof getProjects>>[number];

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

export const createProject = async (input: CreateProjectInput) => {
  // Validate input
  const validatedData = createProjectSchema.parse(input);

  // Use a transaction to ensure all related data is created atomically
  const result = await db.transaction(async (tx) => {
    // 1. Create the project
    const [newProject] = await tx
      .insert(projects)
      .values({
        title: validatedData.title,
        description: validatedData.description,
        image: validatedData.image,
        alt: validatedData.alt || null,
        githubLink: validatedData.githubLink || null,
        figmaLink: validatedData.figmaLink || null,
        behanceLink: validatedData.behanceLink || null,
        linkedInLink: validatedData.linkedInLink || null,
        liveLink: validatedData.liveLink || null,
        year: validatedData.year || null,
      })
      .returning();

    // 2. Handle badges (upsert badges and create relations)
    if (validatedData.badges && validatedData.badges.length > 0) {
      for (const badgeName of validatedData.badges) {
        // Upsert badge
        const [existingBadge] = await tx
          .select()
          .from(badges)
          .where(eq(badges.name, badgeName))
          .limit(1);

        let badgeId: number;
        if (existingBadge) {
          badgeId = existingBadge.id;
        } else {
          const [newBadge] = await tx
            .insert(badges)
            .values({ name: badgeName })
            .returning();
          badgeId = newBadge.id;
        }

        // Create relation
        await tx.insert(projectsToBadges).values({
          projectId: newProject.id,
          badgeId,
        });
      }
    }

    // 3. Create project images
    if (validatedData.images && validatedData.images.length > 0) {
      await tx.insert(projectImages).values(
        validatedData.images.map((url) => ({
          url,
          projectId: newProject.id,
        }))
      );
    }

    // 4. Create project features
    if (validatedData.features && validatedData.features.length > 0) {
      await tx.insert(projectFeatures).values(
        validatedData.features.map((feature) => ({
          icon: feature.icon,
          title: feature.title,
          description: feature.description,
          projectId: newProject.id,
        }))
      );
    }

    return newProject;
  });

  return result;
};

export const updateProject = async (
  id: number,
  input: Partial<CreateProjectInput>
) => {
  const projectId = id;

  // Check if project exists
  const existing = await db.query.projects.findFirst({
    where: eq(projects.id, projectId),
  });

  if (!existing) {
    throw new Error("Project not found");
  }

  const result = await db.transaction(async (tx) => {
    // Update main project fields
    const [updatedProject] = await tx
      .update(projects)
      .set({
        ...(input.title && { title: input.title }),
        ...(input.description && { description: input.description }),
        ...(input.image && { image: input.image }),
        ...(input.alt !== undefined && { alt: input.alt || null }),
        ...(input.githubLink !== undefined && {
          githubLink: input.githubLink || null,
        }),
        ...(input.figmaLink !== undefined && {
          figmaLink: input.figmaLink || null,
        }),
        ...(input.behanceLink !== undefined && {
          behanceLink: input.behanceLink || null,
        }),
        ...(input.linkedInLink !== undefined && {
          linkedInLink: input.linkedInLink || null,
        }),
        ...(input.liveLink !== undefined && {
          liveLink: input.liveLink || null,
        }),
        ...(input.year !== undefined && { year: input.year || null }),
        updatedAt: new Date(),
      })
      .where(eq(projects.id, projectId))
      .returning();

    // Handle badges update if provided
    if (input.badges) {
      // Delete existing badge relations
      await tx
        .delete(projectsToBadges)
        .where(eq(projectsToBadges.projectId, projectId));

      // Re-add badges
      for (const badgeName of input.badges) {
        const [existingBadge] = await tx
          .select()
          .from(badges)
          .where(eq(badges.name, badgeName))
          .limit(1);

        let badgeId: number;
        if (existingBadge) {
          badgeId = existingBadge.id;
        } else {
          const [newBadge] = await tx
            .insert(badges)
            .values({ name: badgeName })
            .returning();
          badgeId = newBadge.id;
        }

        await tx.insert(projectsToBadges).values({
          projectId,
          badgeId,
        });
      }
    }

    return updatedProject;
  });

  return result;
};

export const deleteProject = async (id: number) => {
  // Cascade delete will handle related records
  const [deleted] = await db
    .delete(projects)
    .where(eq(projects.id, id))
    .returning();

  return deleted;
};
