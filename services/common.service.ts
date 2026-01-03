import { db } from "@/db";
import {
  skills,
  experiences,
  certifications,
  profile,
  experienceDescriptions,
} from "@/db/schema";
import { asc, desc, eq } from "drizzle-orm";
import { z } from "zod";

/**
 * Common Service
 * Handles fetching for Skills, Experiences, Certifications, and Profile.
 */

// ============ SKILLS ============

// Validation schemas
export const createSkillSchema = z.object({
  name: z.string().min(1, "Name is required"),
  iconName: z.string().min(1, "Icon name is required"),
  color: z.string().min(1, "Color is required"),
  order: z.number().optional(),
});

export type CreateSkillInput = z.infer<typeof createSkillSchema>;

export const getSkills = async () => {
  return await db.query.skills.findMany({
    orderBy: [asc(skills.order)],
  });
};

export const getSkillById = async (id: number) => {
  return await db.query.skills.findFirst({
    where: eq(skills.id, id),
  });
};

export const createSkill = async (input: CreateSkillInput) => {
  const [skill] = await db
    .insert(skills)
    .values({
      name: input.name,
      iconName: input.iconName,
      color: input.color,
      order: input.order ?? 0,
    })
    .returning();
  return skill;
};

export const updateSkill = async (
  id: number,
  input: Partial<CreateSkillInput>
) => {
  const [skill] = await db
    .update(skills)
    .set(input)
    .where(eq(skills.id, id))
    .returning();
  return skill;
};

export const deleteSkill = async (id: number) => {
  const [deleted] = await db
    .delete(skills)
    .where(eq(skills.id, id))
    .returning();
  return deleted;
};

// ============ EXPERIENCES ============

export const createExperienceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  period: z.string().min(1, "Period is required"),
  bannerColor: z.string().min(1, "Banner color is required"),
  order: z.number().optional(),
  descriptions: z.array(z.string()).optional(),
});

export type CreateExperienceInput = z.infer<typeof createExperienceSchema>;

export const getExperiences = async () => {
  return await db.query.experiences.findMany({
    with: {
      description: {
        orderBy: [asc(experienceDescriptions.order)],
      },
    },
    orderBy: [desc(experiences.order)],
  });
};

export const getExperienceById = async (id: number) => {
  return await db.query.experiences.findFirst({
    where: eq(experiences.id, id),
    with: {
      description: {
        orderBy: [asc(experienceDescriptions.order)],
      },
    },
  });
};

export const createExperience = async (input: CreateExperienceInput) => {
  return await db.transaction(async (tx) => {
    const [experience] = await tx
      .insert(experiences)
      .values({
        title: input.title,
        company: input.company,
        period: input.period,
        bannerColor: input.bannerColor,
        order: input.order ?? 0,
      })
      .returning();

    if (input.descriptions && input.descriptions.length > 0) {
      await tx.insert(experienceDescriptions).values(
        input.descriptions.map((text, index) => ({
          text,
          experienceId: experience.id,
          order: index,
        }))
      );
    }

    return experience;
  });
};

export const updateExperience = async (
  id: number,
  input: Partial<CreateExperienceInput>
) => {
  return await db.transaction(async (tx) => {
    const [experience] = await tx
      .update(experiences)
      .set({
        ...(input.title && { title: input.title }),
        ...(input.company && { company: input.company }),
        ...(input.period && { period: input.period }),
        ...(input.bannerColor && { bannerColor: input.bannerColor }),
        ...(input.order !== undefined && { order: input.order }),
      })
      .where(eq(experiences.id, id))
      .returning();

    if (input.descriptions) {
      // Delete existing descriptions
      await tx
        .delete(experienceDescriptions)
        .where(eq(experienceDescriptions.experienceId, id));
      // Add new descriptions
      if (input.descriptions.length > 0) {
        await tx.insert(experienceDescriptions).values(
          input.descriptions.map((text, index) => ({
            text,
            experienceId: id,
            order: index,
          }))
        );
      }
    }

    return experience;
  });
};

export const deleteExperience = async (id: number) => {
  const [deleted] = await db
    .delete(experiences)
    .where(eq(experiences.id, id))
    .returning();
  return deleted;
};

// ============ CERTIFICATIONS ============

export const createCertificationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  year: z.string().min(1, "Year is required"),
  link: z.string().url("Valid URL required"),
  order: z.number().optional(),
});

export type CreateCertificationInput = z.infer<
  typeof createCertificationSchema
>;

export const getCertifications = async () => {
  return await db.query.certifications.findMany({
    orderBy: [desc(certifications.year)],
  });
};

export const getCertificationById = async (id: number) => {
  return await db.query.certifications.findFirst({
    where: eq(certifications.id, id),
  });
};

export const createCertification = async (input: CreateCertificationInput) => {
  const [cert] = await db
    .insert(certifications)
    .values({
      name: input.name,
      issuer: input.issuer,
      year: input.year,
      link: input.link,
      order: input.order ?? 0,
    })
    .returning();
  return cert;
};

export const updateCertification = async (
  id: number,
  input: Partial<CreateCertificationInput>
) => {
  const [cert] = await db
    .update(certifications)
    .set(input)
    .where(eq(certifications.id, id))
    .returning();
  return cert;
};

export const deleteCertification = async (id: number) => {
  const [deleted] = await db
    .delete(certifications)
    .where(eq(certifications.id, id))
    .returning();
  return deleted;
};

// ============ PROFILE ============

export const createProfileSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  headline: z.string().min(1, "Headline is required"),
  shortBio: z.string().min(1, "Short bio is required"),
  fullBio: z.string().min(1, "Full bio is required"),
  secondaryBio: z.string().optional(),
  avatarUrl: z.string().optional(),
  location: z.string().optional(),
  github: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
  behance: z.string().url().optional().or(z.literal("")),
  resume: z.string().url().optional().or(z.literal("")),
  email: z.string().email().optional().or(z.literal("")),
  letterboxd: z.string().url().optional().or(z.literal("")),
});

export type CreateProfileInput = z.infer<typeof createProfileSchema>;

export const getProfile = async () => {
  return await db.query.profile.findFirst();
};

export const upsertProfile = async (input: CreateProfileInput) => {
  const existing = await getProfile();

  if (existing) {
    const [updated] = await db
      .update(profile)
      .set({
        ...input,
        github: input.github || null,
        linkedin: input.linkedin || null,
        behance: input.behance || null,
        resume: input.resume || null,
        email: input.email || null,
        letterboxd: input.letterboxd || null,
      })
      .where(eq(profile.id, existing.id))
      .returning();
    return updated;
  } else {
    const [created] = await db
      .insert(profile)
      .values({
        ...input,
        github: input.github || null,
        linkedin: input.linkedin || null,
        behance: input.behance || null,
        resume: input.resume || null,
        email: input.email || null,
        letterboxd: input.letterboxd || null,
      })
      .returning();
    return created;
  }
};
