import "dotenv/config";
import { db } from "./index";
import {
  projects,
  badges,
  projectsToBadges,
  projectImages,
  projectFeatures,
  skills,
  experiences,
  experienceDescriptions,
  certifications,
  profile,
} from "./schema";
import { eq } from "drizzle-orm";

// Data from lib/links.ts
const ProjectURLs = {
  OwnGithub: "https://github.com/icecubes99",
  OwnLinkedIn: "https://www.linkedin.com/in/EmmanuelAguado/",
  OwnBehance: "https://www.behance.net/emmanueaguado",
  OwnResume:
    "https://drive.google.com/file/d/1eW4-L3K_4hhGxSbKHzrKQu_-ZakzxuJv/view?usp=sharing",
  OwnEmail: "mailto:aguado@emman@gmail.com",
  OwnLetterboxd: "https://letterboxd.com/icecubes99/",
  THAPBehance:
    "https://www.behance.net/gallery/215005673/The-Happy-Asian-Pessimist",
  EMSGithub: "https://github.com/icecubes99/ems-v2",
  EMSLiveLink: "https://ems-v2.vercel.app/",
  KIIWebsiteBehance:
    "https://www.behance.net/gallery/215006743/Kupler-Landing-Page",
  BlockDiaryFigma:
    "https://www.figma.com/proto/4GeasETcLd8s7pIyNNZAyj/Where-is-it--%7C-Minecraft-UXUI-comp?page-id=8%3A1597&node-id=8-1610&p=f&viewport=-1366%2C-1470%2C0.34&t=uXzS2XegPPjEmGX7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A1610",
  SubVizSite: "https://subviz.vercel.app",
};

const CredentialURLs = {
  IntroToCybersecurity:
    "https://www.credly.com/badges/8ea58519-9e14-4e62-b3cd-89f60a83a05a/linked_in_profile",
  IntroToNetoworks:
    "https://www.credly.com/badges/c8c3d7d5-8645-4af6-ac42-7995c2692471/linked_in_profile",
};

async function seed() {
  console.log("🌱 Seeding database...");

  // 1. Profile
  console.log("Creating Profile...");
  await db.delete(profile);
  await db.insert(profile).values({
    fullName: "Emmanuel Aguado",
    headline: "Full Stack Developer",
    shortBio:
      "I build accessible, inclusive products and digital experiences for the web.",
    fullBio:
      "I'm a Full Stack Developer with over 3 years of experience in creating robust and scalable web applications. My passion lies in solving complex problems and turning ideas into reality through code.",
    secondaryBio:
      "When I'm not coding, you can find me exploring new technologies, watching and logging films in my Letterboxd, or just chilling.",
    avatarUrl: "/Me.png",
    github: ProjectURLs.OwnGithub,
    linkedin: ProjectURLs.OwnLinkedIn,
    behance: ProjectURLs.OwnBehance,
    resume: ProjectURLs.OwnResume,
    email: ProjectURLs.OwnEmail,
    letterboxd: ProjectURLs.OwnLetterboxd,
  });

  // 2. Skills
  console.log("Creating Skills...");
  await db.delete(skills);
  const skillsData = [
    { name: "React", iconName: "FaReact", color: "#61DAFB", order: 1 },
    { name: "Next.js", iconName: "SiNextdotjs", color: "#000000", order: 2 },
    {
      name: "TypeScript",
      iconName: "SiTypescript",
      color: "#3178C6",
      order: 3,
    },
    { name: "Node.js", iconName: "FaNodeJs", color: "#339933", order: 4 },
    { name: "Express", iconName: "SiExpress", color: "#000000", order: 5 },
    { name: "Python", iconName: "FaPython", color: "#3776AB", order: 6 },
    {
      name: "PostgreSQL",
      iconName: "SiPostgresql",
      color: "#4169E1",
      order: 7,
    },
    { name: "MongoDB", iconName: "SiMongodb", color: "#47A248", order: 8 },
    { name: "REST APIs", iconName: "TbApi", color: "#FF6B6B", order: 9 },
    { name: "Docker", iconName: "FaDocker", color: "#2496ED", order: 10 },
    { name: "Git", iconName: "FaGitAlt", color: "#F05032", order: 11 },
    {
      name: "Tailwind CSS",
      iconName: "SiTailwindcss",
      color: "#06B6D4",
      order: 12,
    },
    {
      name: "Framer Motion",
      iconName: "SiFramer",
      color: "#0055FF",
      order: 13,
    },
    { name: "Jest", iconName: "SiJest", color: "#C21325", order: 14 },
  ];
  await db.insert(skills).values(skillsData);

  // 3. Experiences
  console.log("Creating Experiences...");
  await db.delete(experiences);
  await db.delete(experienceDescriptions);

  const experiencesData = [
    {
      title: "Software Developer",
      company: "Ingenuity Software",
      period: "Jun 2025 - Present",
      bannerColor: "[#ff3404]",
      order: 1,
      description: [
        "Led development of full-stack web applications using React, Node.js, and TypeScript",
        "Architected and implemented database solutions with Supabase",
        "Integrated AI tools including Claude for code generation and MCP tools to enhance development productivity and code quality",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Ingenuity Software",
      period: "Apr 2025 - Jun 2025",
      bannerColor: "[#ff3404]",
      order: 2,
      description: [
        "Developed and enhanced user interfaces using Next.js and Material-UI (MUI)",
        "Translated UI/UX designs from Figma into responsive and functional web components",
        "Collaborated with project managers and designers, managing tasks through a ticketing system",
        "Utilized Bitbucket for version control and collaborative development",
        "Identified and resolved bugs and design inconsistencies to improve application stability and user experience",
        "Ensured code quality by adhering to best practices, coding standards, and proper naming conventions",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "SAMAHAN Systems Development",
      period: "Feb 2025 - Present",
      bannerColor: "primary",
      order: 3,
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to define, design, and ship new features",
        "Optimized applications for maximum speed and scalability",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Quicksort Startup",
      period: "Feb 2024 - Jun 2024",
      bannerColor: "primary",
      order: 4,
      description: [
        "Designed and developed user-friendly interfaces using NextJS and Tailwind CSS",
        "Designed and implemented database schemas with PostgreSQL and working with ORMs such as Prisma",
        "Created wireframes, mockups, and prototypes using Figma to align with client specifications",
      ],
    },
  ];

  for (const exp of experiencesData) {
    const [newExp] = await db
      .insert(experiences)
      .values({
        title: exp.title,
        company: exp.company,
        period: exp.period,
        bannerColor: exp.bannerColor,
        order: exp.order,
      })
      .returning();

    if (exp.description.length > 0) {
      await db.insert(experienceDescriptions).values(
        exp.description.map((text, index) => ({
          text,
          experienceId: newExp.id,
          order: index,
        }))
      );
    }
  }

  // 4. Certifications
  console.log("Creating Certifications...");
  await db.delete(certifications);
  const certificationsData = [
    {
      name: "CCNA: Introduction to Networks",
      issuer: "CISCO",
      year: "2025",
      link: CredentialURLs.IntroToNetoworks,
      order: 1,
    },
    {
      name: "CISCO Intro to Cybersecurity",
      issuer: "CISCO",
      year: "2024",
      link: CredentialURLs.IntroToCybersecurity,
      order: 2,
    },
  ];
  await db.insert(certifications).values(certificationsData);

  // 5. Projects
  console.log("Creating Projects...");
  // Clean up existing projects and related data (cascade should handle relations but let's be safe)
  await db.delete(projects);
  await db.delete(badges);

  const projectsData = [
    {
      title: "SubViz - Subscription Visualizer",
      description: "A Visualizer for your Monthly/Yearly Subscriptions",
      image: "/SubViz/1.png",
      alt: "SubViz - Subscription Visualizer",
      liveLink: ProjectURLs.SubVizSite,
      badges: [
        "Vite",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
        "Data Visualization",
        "Finance",
      ],
      year: "2025",
      images: ["/SubViz/1.png", "/SubViz/2.png", "/SubViz/3.png"],
      features: [
        {
          icon: "money",
          title: "Cost Analysis",
          description: "Track monthly and yearly spending at a glance",
        },
        {
          icon: "modern",
          title: "Visual Dashboard",
          description: "Clean visualization of all your subscriptions",
        },
        {
          icon: "clean",
          title: "Easy Management",
          description:
            "Simple tools to add, edit, and color-code subscriptions",
        },
      ],
    },
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
      year: "2024",
      images: [
        "/BlockDiary/BlockDiaryThumbnail.png",
        "/BlockDiary/BlockDiary2nd.png",
        "/BlockDiary/BlockDiary3rd.png",
      ],
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
      year: "2024",
      images: ["/EMS/1st.png", "/EMS/2nd.png", "/EMS/3rd.png", "/EMS/4th.png"],
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
    {
      title: "The Happy Asian Pessimist",
      description: "Personal blog and cooking website mock.",
      image: "/EMS.png",
      alt: "The Happy Asian Pessimist",
      behanceLink: ProjectURLs.THAPBehance,
      badges: ["UI/UX Design", "Figma", "Cooking", "Blogging", "Mockup"],
      year: "2024",
      images: [
        "/THAP/1st.png",
        "/THAP/2nd.png",
        "/THAP/3rd.png",
        "/THAP/4th.png",
      ],
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
    },
    {
      title: "KII Landing Page",
      description: "Ecommerce landing page for KII mock.",
      image: "/KIIWebsite/1st.png",
      alt: "KII Landing Page",
      behanceLink: ProjectURLs.KIIWebsiteBehance,
      badges: ["UI/UX Design", "Figma", "Ecommerce", "Landing Page", "Mockup"],
      year: "2024",
      images: [
        "/KIIWebsite/1st.png",
        "/KIIWebsite/2nd.png",
        "/KIIWebsite/3rd.png",
        "/KIIWebsite/4th.png",
      ],
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
    },
  ];

  // Helper to get or create badge
  const getOrCreateBadge = async (name: string) => {
    const existing = await db.query.badges.findFirst({
      where: eq(badges.name, name),
    });
    if (existing) return existing.id;
    const [newBadge] = await db.insert(badges).values({ name }).returning();
    return newBadge.id;
  };

  for (const proj of projectsData) {
    const [newProj] = await db
      .insert(projects)
      .values({
        title: proj.title,
        description: proj.description,
        image: proj.image,
        alt: proj.alt,
        githubLink: (proj as any).githubLink,
        liveLink: (proj as any).liveLink,
        figmaLink: (proj as any).figmaLink,
        behanceLink: (proj as any).behanceLink,
        year: proj.year,
      })
      .returning();

    // Badges
    for (const badgeName of proj.badges) {
      const badgeId = await getOrCreateBadge(badgeName);
      await db.insert(projectsToBadges).values({
        projectId: newProj.id,
        badgeId,
      });
    }

    // Images
    if (proj.images && proj.images.length > 0) {
      await db.insert(projectImages).values(
        proj.images.map((url) => ({
          url,
          projectId: newProj.id,
        }))
      );
    }

    // Features
    if (proj.features && proj.features.length > 0) {
      await db.insert(projectFeatures).values(
        proj.features.map((f) => ({
          icon: f.icon,
          title: f.title,
          description: f.description,
          projectId: newProj.id,
        }))
      );
    }
  }

  console.log("✅ Seeding completed!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
