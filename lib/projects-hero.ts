import { ProjectURLs } from "./links";

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  figmaLink?: string;
  behanceLink?: string;
  linkedInLink?: string;
  liveLink?: string;
  badges: string[];
  alt?: string;
}

export const projectsData: Project[] = [
  {
    title: "Minecraft Block Diary",
    description:
      "A Minecraft helper app mock for saving locations, journals, and builds.",
    image: "/BlockDiary/BlockDiaryThumbnail.png",
    alt: "Minecraft Block Diary",
    figmaLink: ProjectURLs.BlockDiaryFigma,
    badges: [
      "UI/UX Design",
      "Figma",
      "Mockup",
      "Mobile App",
      "Journal",
      "Minecraft",
    ],
  },
  {
    title: "KII Employee Management System",
    description:
      "Full-stack employee management system with role-based access control and real-time updates.",
    image: "/EMS.png",
    alt: "Employee Management System",
    githubLink: ProjectURLs.EMSGithub,
    liveLink: ProjectURLs.EMSLiveLink,
    badges: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
    ],
  },

  // {
  //     title: "PHABS Davao",
  //     description: "Mobile app for tracking PHABS Buses in Davao City.",
  //     image: "/PHABS.png",
  //     githubLink: "https://github.com/username/ai-image-gen",
  //     liveLink: "https://ai-image-gen.vercel.app",
  //     badges: ["React", "Node.js", "DALL-E", "Express", "MongoDB", "Cloudinary"]
  // },
];
