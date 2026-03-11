import { ProjectURLs } from "./links"

interface Project {
    title: string
    description: string
    image: string
    githubLink?: string
    figmaLink?: string
    behanceLink?: string
    linkedInLink?: string
    liveLink?: string
    badges: string[]
    alt?: string
}

export const projectsData: Project[] = [
    {
        title: "SAMAHAN On The Move Official Website",
        description:
            "Get to know more about SAMAHAN On The Move, its officers, departments, and independent bodies",
        image: "/SamahanWebsite/1st.jpg",
        alt: "SAMAHAN On The Move Official Website",
        liveLink: ProjectURLs.SamahanWebsite,
        badges: ["NextJS", "School", "Education", "Frontend", "Vercel", "Design"],
    },
    {
        title: "SubViz - Subscription Visualizer",
        description: "A Visualizer for your Monthly/Yearly Subscriptions",
        image: "/SubViz/1.png",
        alt: "SubViz - Subscription Visualizer",
        liveLink: ProjectURLs.SubVizSite,
        badges: ["Vite", "TypeScript", "TailwindCSS", "Vercel", "Data Visualization", "Finance"],
    },
    {
        title: "Minecraft Block Diary",
        description: "A Minecraft helper app mock for saving locations, journals, and builds.",
        image: "/BlockDiary/BlockDiaryThumbnail.png",
        alt: "Minecraft Block Diary",
        figmaLink: ProjectURLs.BlockDiaryFigma,
        badges: ["UI/UX Design", "Figma", "Mockup", "Mobile App", "Journal", "Minecraft"],
    },
    {
        title: "KII Employee Management System",
        description:
            "Full-stack employee management system with role-based access control and real-time updates.",
        image: "/EMS.png",
        alt: "Employee Management System",
        githubLink: ProjectURLs.EMSGithub,
        liveLink: ProjectURLs.EMSLiveLink,
        badges: ["Next.js 14", "TypeScript", "Supabase", "TailwindCSS", "Prisma", "PostgreSQL"],
    },
]
