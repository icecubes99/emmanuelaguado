import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiJest,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { CredentialURLs } from "./links";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

export const skills: Skill[] = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "REST APIs", icon: TbApi, color: "#FF6B6B" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
];

export const experiences = [
  {
    title: "Software Developer",
    company: "Ingenuity Software",
    period: "Jun 2025 - Present",
    description: [
      "Led development of full-stack web applications using React, Node.js, and TypeScript",
      "Architected and implemented database solutions with Supabase",
      "Integrated AI tools including Claude for code generation and MCP tools to enhance development productivity and code quality"
    ],
    bannerColor: "[#ff3404]"
  },
  {
    title: "Frontend Developer Intern",
    company: "Ingenuity Software",
    period: "Apr 2025 - Jun 2025",
    description: [
      "Developed and enhanced user interfaces using Next.js and Material-UI (MUI)",
      "Translated UI/UX designs from Figma into responsive and functional web components",
      "Collaborated with project managers and designers, managing tasks through a ticketing system",
      "Utilized Bitbucket for version control and collaborative development",
      "Identified and resolved bugs and design inconsistencies to improve application stability and user experience",
      "Ensured code quality by adhering to best practices, coding standards, and proper naming conventions",
    ],
    bannerColor: "[#ff3404]"
  },
  {
    title: "Fullstack Developer",
    company: "SAMAHAN Systems Development",
    period: "Feb 2025 - Present",
    description: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Optimized applications for maximum speed and scalability",
    ],
    bannerColor: "primary"
  },
  {
    title: "Fullstack Developer",
    company: "Quicksort Startup",
    period: "Feb 2024 - Jun 2024",
    description: [
      "Designed and developed user-friendly interfaces using NextJS and Tailwind CSS",
      "Designed and implemented database schemas with PostgreSQL and working with ORMs such as Prisma",
      "Created wireframes, mockups, and prototypes using Figma to align with client specifications",
    ],
    bannerColor: "primary"
  },
];

export const certifications = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "CISCO",
    year: "2025",
    link: CredentialURLs.IntroToNetoworks,
  },
  {
    name: "CISCO Intro to Cybersecurity",
    issuer: "CISCO",
    year: "2024",
    link: CredentialURLs.IntroToCybersecurity,
  },
];
