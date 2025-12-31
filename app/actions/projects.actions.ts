"use server";

import { getProjects, getProjectById } from "@/services/projects.service";
import { revalidatePath } from "next/cache";

/**
 * Projects Actions
 * Server Actions to be called by Client Components.
 */

export async function fetchProjects() {
  try {
    const projects = await getProjects();
    return { success: true, data: projects };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return { success: false, error: "Failed to fetch projects" };
  }
}

export async function fetchProjectById(id: string) {
  try {
    const project = await getProjectById(id);
    if (!project) {
      return { success: false, error: "Project not found" };
    }
    return { success: true, data: project };
  } catch (error) {
    console.error(`Failed to fetch project ${id}:`, error);
    return { success: false, error: "Failed to fetch project" };
  }
}
