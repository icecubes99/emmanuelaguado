CREATE TABLE "badges" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "badges_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "certifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"issuer" text NOT NULL,
	"year" text NOT NULL,
	"link" text NOT NULL,
	"order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "experience_descriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"experience_id" integer NOT NULL,
	"order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"company" text NOT NULL,
	"period" text NOT NULL,
	"banner_color" text NOT NULL,
	"order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"headline" text NOT NULL,
	"short_bio" text NOT NULL,
	"full_bio" text NOT NULL,
	"secondary_bio" text,
	"avatar_url" text,
	"location" text,
	"github" text,
	"linkedin" text,
	"behance" text,
	"resume" text,
	"email" text,
	"letterboxd" text
);
--> statement-breakpoint
CREATE TABLE "project_features" (
	"id" serial PRIMARY KEY NOT NULL,
	"icon" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"project_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"project_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image" text NOT NULL,
	"alt" text,
	"github_link" text,
	"figma_link" text,
	"behance_link" text,
	"linkedin_link" text,
	"live_link" text,
	"year" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects_to_badges" (
	"project_id" integer NOT NULL,
	"badge_id" integer NOT NULL,
	CONSTRAINT "projects_to_badges_project_id_badge_id_pk" PRIMARY KEY("project_id","badge_id")
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"icon_name" text NOT NULL,
	"color" text NOT NULL,
	"order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "experience_descriptions" ADD CONSTRAINT "experience_descriptions_experience_id_experiences_id_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experiences"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_features" ADD CONSTRAINT "project_features_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_images" ADD CONSTRAINT "project_images_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_to_badges" ADD CONSTRAINT "projects_to_badges_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_to_badges" ADD CONSTRAINT "projects_to_badges_badge_id_badges_id_fk" FOREIGN KEY ("badge_id") REFERENCES "public"."badges"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "certifications_year_idx" ON "certifications" USING btree ("year");--> statement-breakpoint
CREATE INDEX "certifications_order_idx" ON "certifications" USING btree ("order");--> statement-breakpoint
CREATE INDEX "exp_desc_experience_id_idx" ON "experience_descriptions" USING btree ("experience_id");--> statement-breakpoint
CREATE INDEX "exp_desc_order_idx" ON "experience_descriptions" USING btree ("order");--> statement-breakpoint
CREATE INDEX "experiences_order_idx" ON "experiences" USING btree ("order");--> statement-breakpoint
CREATE INDEX "projects_year_idx" ON "projects" USING btree ("year");--> statement-breakpoint
CREATE INDEX "skills_order_idx" ON "skills" USING btree ("order");