import { unstable_cache } from "next/cache";
import {
  getSkills,
  getExperiences,
  getCertifications,
  getProfile,
} from "./common.service";
import { getProjects, getProjectById } from "./projects.service";

/**
 * Cached Service Layer
 *
 * This module provides cached versions of database queries using Next.js
 * unstable_cache for improved performance. Data is cached and revalidated
 * based on tags, allowing for efficient invalidation when data changes.
 *
 * Cache Tags:
 * - "skills": All skills data
 * - "experiences": All experiences data
 * - "certifications": All certifications data
 * - "profile": Profile/global settings
 * - "projects": All projects list
 * - "project-{id}": Individual project by ID
 */

// Cache durations (in seconds)
const CACHE_DURATIONS = {
  SKILLS: 3600, // 1 hour
  EXPERIENCES: 3600, // 1 hour
  CERTIFICATIONS: 3600, // 1 hour
  PROFILE: 1800, // 30 minutes
  PROJECTS: 1800, // 30 minutes
  PROJECT_DETAIL: 1800, // 30 minutes
} as const;

// Cached Skills
export const getCachedSkills = unstable_cache(
  async () => {
    return await getSkills();
  },
  ["skills"],
  {
    tags: ["skills"],
    revalidate: CACHE_DURATIONS.SKILLS,
  }
);

// Cached Experiences
export const getCachedExperiences = unstable_cache(
  async () => {
    return await getExperiences();
  },
  ["experiences"],
  {
    tags: ["experiences"],
    revalidate: CACHE_DURATIONS.EXPERIENCES,
  }
);

// Cached Certifications
export const getCachedCertifications = unstable_cache(
  async () => {
    return await getCertifications();
  },
  ["certifications"],
  {
    tags: ["certifications"],
    revalidate: CACHE_DURATIONS.CERTIFICATIONS,
  }
);

// Cached Profile
export const getCachedProfile = unstable_cache(
  async () => {
    return await getProfile();
  },
  ["profile"],
  {
    tags: ["profile"],
    revalidate: CACHE_DURATIONS.PROFILE,
  }
);

// Cached Projects List
export const getCachedProjects = unstable_cache(
  async () => {
    return await getProjects();
  },
  ["projects"],
  {
    tags: ["projects"],
    revalidate: CACHE_DURATIONS.PROJECTS,
  }
);

// Cached Project by ID
export const getCachedProjectById = (id: string) =>
  unstable_cache(
    async () => {
      return await getProjectById(id);
    },
    [`project-${id}`],
    {
      tags: ["projects", `project-${id}`],
      revalidate: CACHE_DURATIONS.PROJECT_DETAIL,
    }
  )();
