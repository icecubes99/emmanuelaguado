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
  images?: string[];
  year?: string;
  features?: {
    icon:
      | "users"
      | "laptop"
      | "moon"
      | "clock"
      | "money"
      | "clean"
      | "modern"
      | "star"
      | "heart"
      | "globe"; // Icon names
    title: string;
    description: string;
  }[];
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
    images: [
      "/BlockDiary/BlockDiaryThumbnail.png",
      "/BlockDiary/BlockDiary2nd.png",
      "/BlockDiary/BlockDiary3rd.png",
    ],
    year: "2024",
    features: [
      {
        icon: "users",
        title: "Login and Registration",
        description: "User authentication and profile management",
      },
      {
        icon: "clean",
        title: "Mobile Design",
        description: "Designed for mobile devices with a clean interface",
      },
      {
        icon: "star",
        title: "User-Friendly",
        description: "Intuitive and user-friendly interface",
      },
      {
        icon: "clock",
        title: "Journal Feature",
        description: "Allows users to save locations and journal entries",
      },
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
    badges: ["Next.js 14", "TypeScript", "Supabase", "TailwindCSS"],
    images: ["/EMS/1st.png", "/EMS/2nd.png", "/EMS/3rd.png", "/EMS/4th.png"],
    year: "2024",
    features: [
      {
        icon: "users",
        title: "User Management",
        description: "Comprehensive user roles and permissions system",
      },
      {
        icon: "laptop",
        title: "Responsive Design",
        description: "Fully responsive across all power devices",
      },
      {
        icon: "moon",
        title: "Dark Mode",
        description: "Customizable theme with dark mode support",
      },
      {
        icon: "money",
        title: "Payroll Management",
        description: "Automatic payroll calculation and management",
      },
    ],
  },
  // {
  //     title: "PHABS Davao",
  //     description: "Mobile app for tracking PHABS Buses in Davao City.",
  //     image: "/PHABS.png",
  //     badges: ["React", "Node.js", "DALL-E", "Express", "MongoDB", "Cloudinary"]
  // },
  {
    title: "The Happy Asian Pessimist",
    description: "Personal blog and cooking website mock.",
    image: "/EMS.png",
    alt: "The Happy Asian Pessimist",
    badges: ["UI/UX Design", "Figma", "Cooking", "Blogging", "Mockup"],
    images: [
      "/THAP/1st.png",
      "/THAP/2nd.png",
      "/THAP/3rd.png",
      "/THAP/4th.png",
    ],
    year: "2024",
    features: [
      {
        icon: "modern",
        title: "Clean and Modern",
        description: "The mock provides a clean and modern feel",
      },
      {
        icon: "star",
        title: "Organized",
        description:
          "The design is sectioned into organized parts for an easier overview",
      },
      {
        icon: "heart",
        title: "User-Friendly",
        description: "Intuitive and user-friendly interface",
      },
    ],
    behanceLink: ProjectURLs.THAPBehance,
  },
  {
    title: "KII Landing Page",
    description: "Ecommerce landing page for KII mock.",
    image: "/KIIWebsite/1st.png",
    alt: "KII Landing Page",
    badges: ["UI/UX Design", "Figma", "Ecommerce", "Landing Page", "Mockup"],
    images: [
      "/KIIWebsite/1st.png",
      "/KIIWebsite/2nd.png",
      "/KIIWebsite/3rd.png",
      "/KIIWebsite/4th.png",
    ],
    year: "2024",
    features: [
      {
        icon: "modern",
        title: "Clean and Modern",
        description: "The mock provides a clean and modern feel",
      },
      {
        icon: "star",
        title: "Organized",
        description:
          "The design is sectioned into organized parts for an easier overview",
      },
      {
        icon: "heart",
        title: "User-Friendly",
        description: "Intuitive and user-friendly interface",
      },
    ],
    behanceLink: ProjectURLs.KIIWebsiteBehance,
  },
];
