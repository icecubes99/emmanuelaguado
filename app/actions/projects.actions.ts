"use server";

import {
  getCachedProjects,
  getCachedProjectById,
} from "@/services/cached.service";
import {
  createProject,
  updateProject,
  deleteProject,
  CreateProjectInput,
} from "@/services/projects.service";
import { invalidateProjectsCache, invalidateProjectCache } from "@/lib/cache";

/**
 * Projects Actions
 * Server Actions to be called by Client Components.
 * Uses cached service layer for reads, with cache invalidation on mutations.
 */

export async function fetchProjects() {
  try {
    const projects = await getCachedProjects();
    return { success: true, data: projects };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return { success: false, error: "Failed to fetch projects" };
  }
}

export async function fetchProjectById(id: string) {
  try {
    const project = await getCachedProjectById(id);
    if (!project) {
      return { success: false, error: "Project not found" };
    }
    return { success: true, data: project };
  } catch (error) {
    console.error(`Failed to fetch project ${id}:`, error);
    return { success: false, error: "Failed to fetch project" };
  }
}

export async function createProjectAction(data: CreateProjectInput) {
  try {
    const project = await createProject(data);
    invalidateProjectsCache();
    return { success: true, data: project };
  } catch (error) {
    console.error("Failed to create project:", error);
    return { success: false, error: "Failed to create project" };
  }
}

export async function updateProjectAction(
  id: number,
  data: Partial<CreateProjectInput>
) {
  try {
    const project = await updateProject(id, data);
    invalidateProjectCache(id);
    return { success: true, data: project };
  } catch (error) {
    console.error(`Failed to update project ${id}:`, error);
    return { success: false, error: "Failed to update project" };
  }
}

export async function deleteProjectAction(id: number) {
  try {
    const deleted = await deleteProject(id);
    invalidateProjectsCache();
    return { success: true, data: deleted };
  } catch (error) {
    console.error(`Failed to delete project ${id}:`, error);
    return { success: false, error: "Failed to delete project" };
  }
}
