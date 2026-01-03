import { db } from "@/db";
import {
  skills,
  experiences,
  certifications,
  profile,
  experienceDescriptions,
} from "@/db/schema";
import { asc, desc } from "drizzle-orm";

/**
 * Common Service
 * Handles fetching for Skills, Experiences, Certifications, and Profile.
 */

// Skills
export const getSkills = async () => {
  return await db.query.skills.findMany({
    orderBy: [asc(skills.order)],
  });
};

// Experiences
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

// Certifications
export const getCertifications = async () => {
  return await db.query.certifications.findMany({
    orderBy: [desc(certifications.year)],
  });
};

// Profile
export const getProfile = async () => {
  return await db.query.profile.findFirst();
};
