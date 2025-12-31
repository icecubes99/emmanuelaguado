"use server";

import {
  getSkills,
  getExperiences,
  getCertifications,
  getProfile,
} from "@/services/common.service";

/**
 * Common Actions
 */

export async function fetchSkills() {
  try {
    const data = await getSkills();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return { success: false, error: "Failed to fetch skills" };
  }
}

export async function fetchExperiences() {
  try {
    const data = await getExperiences();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch experiences:", error);
    return { success: false, error: "Failed to fetch experiences" };
  }
}

export async function fetchCertifications() {
  try {
    const data = await getCertifications();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch certifications:", error);
    return { success: false, error: "Failed to fetch certifications" };
  }
}

export async function fetchProfile() {
  try {
    const data = await getProfile();
    return { success: true, data };
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return { success: false, error: "Failed to fetch profile" };
  }
}
