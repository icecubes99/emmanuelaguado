import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import * as schema from "./schema";

// Projects
export type Project = InferSelectModel<typeof schema.projects>;
export type NewProject = InferInsertModel<typeof schema.projects>;

export type Badge = InferSelectModel<typeof schema.badges>;
export type ProjectImage = InferSelectModel<typeof schema.projectImages>;
export type ProjectFeature = InferSelectModel<typeof schema.projectFeatures>;

export type ProjectWithDetails = Project & {
  badges: { badge: Badge }[];
  images: ProjectImage[];
  features: ProjectFeature[];
};

// Skills
export type Skill = InferSelectModel<typeof schema.skills>;
export type NewSkill = InferInsertModel<typeof schema.skills>;

// Experience
export type Experience = InferSelectModel<typeof schema.experiences>;
export type NewExperience = InferInsertModel<typeof schema.experiences>;

export type ExperienceDescription = InferSelectModel<
  typeof schema.experienceDescriptions
>;

export type ExperienceWithDetails = Experience & {
  description: ExperienceDescription[];
};

// Certifications
export type Certification = InferSelectModel<typeof schema.certifications>;
export type NewCertification = InferInsertModel<typeof schema.certifications>;

// Profile
export type Profile = InferSelectModel<typeof schema.profile>;
export type NewProfile = InferInsertModel<typeof schema.profile>;
