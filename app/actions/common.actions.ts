"use server";

import {
  getCachedSkills,
  getCachedExperiences,
  getCachedCertifications,
  getCachedProfile,
} from "@/services/cached.service";

/**
 * Common Actions
 * Uses cached service layer for improved performance.
 */

export async function fetchSkills() {
  try {
    const data = await getCachedSkills();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return { success: false, error: "Failed to fetch skills" };
  }
}

export async function fetchExperiences() {
  try {
    const data = await getCachedExperiences();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch experiences:", error);
    return { success: false, error: "Failed to fetch experiences" };
  }
}

export async function fetchCertifications() {
  try {
    const data = await getCachedCertifications();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch certifications:", error);
    return { success: false, error: "Failed to fetch certifications" };
  }
}

export async function fetchProfile() {
  try {
    const data = await getCachedProfile();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return { success: false, error: "Failed to fetch profile" };
  }
}
