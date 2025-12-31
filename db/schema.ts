import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Projects Table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(), // Main thumbnail
  alt: text("alt"),

  // Links
  githubLink: text("github_link"),
  figmaLink: text("figma_link"),
  behanceLink: text("behance_link"),
  linkedInLink: text("linkedin_link"),
  liveLink: text("live_link"),

  year: text("year"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Badges (Many-to-Many with Projects)
export const badges = pgTable("badges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const projectsToBadges = pgTable("projects_to_badges", {
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  badgeId: integer("badge_id")
    .notNull()
    .references(() => badges.id, { onDelete: "cascade" }),
});

// Project Images (One-to-Many)
export const projectImages = pgTable("project_images", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
});

// Project Features (One-to-Many)
export const projectFeatures = pgTable("project_features", {
  id: serial("id").primaryKey(),
  icon: text("icon").notNull(), // Store icon name like "users", "laptop"
  title: text("title").notNull(),
  description: text("description").notNull(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
});

// Skills Table
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  iconName: text("icon_name").notNull(), // Store icon identifier e.g. "FaReact"
  color: text("color").notNull(),
  order: integer("order").default(0).notNull(),
});

// Experience Table
export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  period: text("period").notNull(),
  bannerColor: text("banner_color").notNull(),
  order: integer("order").default(0).notNull(),
});

// Experience Descriptions (One-to-Many)
export const experienceDescriptions = pgTable("experience_descriptions", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  experienceId: integer("experience_id")
    .notNull()
    .references(() => experiences.id, { onDelete: "cascade" }),
  order: integer("order").default(0).notNull(),
});

// Certifications Table
export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  issuer: text("issuer").notNull(),
  year: text("year").notNull(),
  link: text("link").notNull(),
  order: integer("order").default(0).notNull(),
});

// Profile/Global Settings
export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  headline: text("headline").notNull(),
  shortBio: text("short_bio").notNull(), // For Hero section
  fullBio: text("full_bio").notNull(), // For About section
  secondaryBio: text("secondary_bio"), // "When I'm not coding..."
  avatarUrl: text("avatar_url"), // "/Me.png"
  location: text("location"),

  // Social Links
  github: text("github"),
  linkedin: text("linkedin"),
  behance: text("behance"),
  resume: text("resume"),
  email: text("email"),
  letterboxd: text("letterboxd"),
});

// Relations Definitions
export const projectsRelations = relations(projects, ({ many }) => ({
  badges: many(projectsToBadges),
  images: many(projectImages),
  features: many(projectFeatures),
}));

export const badgesRelations = relations(badges, ({ many }) => ({
  projects: many(projectsToBadges),
}));

export const projectsToBadgesRelations = relations(
  projectsToBadges,
  ({ one }) => ({
    project: one(projects, {
      fields: [projectsToBadges.projectId],
      references: [projects.id],
    }),
    badge: one(badges, {
      fields: [projectsToBadges.badgeId],
      references: [badges.id],
    }),
  })
);

export const projectImagesRelations = relations(projectImages, ({ one }) => ({
  project: one(projects, {
    fields: [projectImages.projectId],
    references: [projects.id],
  }),
}));

export const projectFeaturesRelations = relations(
  projectFeatures,
  ({ one }) => ({
    project: one(projects, {
      fields: [projectFeatures.projectId],
      references: [projects.id],
    }),
  })
);

export const experiencesRelations = relations(experiences, ({ many }) => ({
  description: many(experienceDescriptions),
}));

export const experienceDescriptionsRelations = relations(
  experienceDescriptions,
  ({ one }) => ({
    experience: one(experiences, {
      fields: [experienceDescriptions.experienceId],
      references: [experiences.id],
    }),
  })
);
