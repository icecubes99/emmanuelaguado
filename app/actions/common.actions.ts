"use server";

import {
  getCachedSkills,
  getCachedExperiences,
  getCachedCertifications,
  getCachedProfile,
} from "@/services/cached.service";
import {
  createSkill,
  updateSkill,
  deleteSkill,
  CreateSkillInput,
  createExperience,
  updateExperience,
  deleteExperience,
  CreateExperienceInput,
  createCertification,
  updateCertification,
  deleteCertification,
  CreateCertificationInput,
  upsertProfile,
  CreateProfileInput,
} from "@/services/common.service";
import {
  invalidateSkillsCache,
  invalidateExperiencesCache,
  invalidateCertificationsCache,
  invalidateProfileCache,
} from "@/lib/cache";

/**
 * Common Actions
 * Uses cached service layer for improved performance.
 */

// ============ SKILLS ============

export async function fetchSkills() {
  try {
    const data = await getCachedSkills();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return { success: false, error: "Failed to fetch skills" };
  }
}

export async function createSkillAction(input: CreateSkillInput) {
  try {
    const skill = await createSkill(input);
    invalidateSkillsCache();
    return { success: true, data: skill };
  } catch (error) {
    console.error("Failed to create skill:", error);
    return { success: false, error: "Failed to create skill" };
  }
}

export async function updateSkillAction(id: number, input: Partial<CreateSkillInput>) {
  try {
    const skill = await updateSkill(id, input);
    invalidateSkillsCache();
    return { success: true, data: skill };
  } catch (error) {
    console.error("Failed to update skill:", error);
    return { success: false, error: "Failed to update skill" };
  }
}

export async function deleteSkillAction(id: number) {
  try {
    const deleted = await deleteSkill(id);
    invalidateSkillsCache();
    return { success: true, data: deleted };
  } catch (error) {
    console.error("Failed to delete skill:", error);
    return { success: false, error: "Failed to delete skill" };
  }
}

// ============ EXPERIENCES ============

export async function fetchExperiences() {
  try {
    const data = await getCachedExperiences();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch experiences:", error);
    return { success: false, error: "Failed to fetch experiences" };
  }
}

export async function createExperienceAction(input: CreateExperienceInput) {
  try {
    const experience = await createExperience(input);
    invalidateExperiencesCache();
    return { success: true, data: experience };
  } catch (error) {
    console.error("Failed to create experience:", error);
    return { success: false, error: "Failed to create experience" };
  }
}

export async function updateExperienceAction(
  id: number,
  input: Partial<CreateExperienceInput>
) {
  try {
    const experience = await updateExperience(id, input);
    invalidateExperiencesCache();
    return { success: true, data: experience };
  } catch (error) {
    console.error("Failed to update experience:", error);
    return { success: false, error: "Failed to update experience" };
  }
}

export async function deleteExperienceAction(id: number) {
  try {
    const deleted = await deleteExperience(id);
    invalidateExperiencesCache();
    return { success: true, data: deleted };
  } catch (error) {
    console.error("Failed to delete experience:", error);
    return { success: false, error: "Failed to delete experience" };
  }
}

// ============ CERTIFICATIONS ============

export async function fetchCertifications() {
  try {
    const data = await getCachedCertifications();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch certifications:", error);
    return { success: false, error: "Failed to fetch certifications" };
  }
}

export async function createCertificationAction(input: CreateCertificationInput) {
  try {
    const cert = await createCertification(input);
    invalidateCertificationsCache();
    return { success: true, data: cert };
  } catch (error) {
    console.error("Failed to create certification:", error);
    return { success: false, error: "Failed to create certification" };
  }
}

export async function updateCertificationAction(
  id: number,
  input: Partial<CreateCertificationInput>
) {
  try {
    const cert = await updateCertification(id, input);
    invalidateCertificationsCache();
    return { success: true, data: cert };
  } catch (error) {
    console.error("Failed to update certification:", error);
    return { success: false, error: "Failed to update certification" };
  }
}

export async function deleteCertificationAction(id: number) {
  try {
    const deleted = await deleteCertification(id);
    invalidateCertificationsCache();
    return { success: true, data: deleted };
  } catch (error) {
    console.error("Failed to delete certification:", error);
    return { success: false, error: "Failed to delete certification" };
  }
}

// ============ PROFILE ============

export async function fetchProfile() {
  try {
    const data = await getCachedProfile();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return { success: false, error: "Failed to fetch profile" };
  }
}

export async function upsertProfileAction(input: CreateProfileInput) {
  try {
    const profile = await upsertProfile(input);
    invalidateProfileCache();
    return { success: true, data: profile };
  } catch (error) {
    console.error("Failed to save profile:", error);
    return { success: false, error: "Failed to save profile" };
  }
}
