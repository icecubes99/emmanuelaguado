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
        icon: 'users' | 'laptop' | 'moon' | 'clock' | "money"; // Icon names
        title: string;
        description: string;
    }[];
}


export const projectsData: Project[] = [
    {
        title: "KII Employee Management System",
        description: "Full-stack employee management system with role-based access control and real-time updates.",
        image: "/EMS.png",
        alt: "Employee Management System",
        githubLink: ProjectURLs.EMSGithub,
        liveLink: ProjectURLs.EMSLiveLink,
        badges: ["Next.js 14", "TypeScript", "Supabase", "TailwindCSS"],
        images: [
            "/EMS/1st.png",
            "/EMS/2nd.png",
            "/EMS/3rd.png",
            "/EMS/4th.png",
        ],
        year: "2024",
        features: [
            {
                icon: 'users',
                title: 'User Management',
                description: 'Comprehensive user roles and permissions system'
            },
            {
                icon: 'laptop',
                title: 'Responsive Design',
                description: 'Fully responsive across all power devices'
            },
            {
                icon: 'moon',
                title: 'Dark Mode',
                description: 'Customizable theme with dark mode support'
            },
            {
                icon: 'money',
                title: 'Payroll Management',
                description: 'Automatic payroll calculation and management'
            }
        ]
    },
    {
        title: "PHABS Davao",
        description: "Mobile app for tracking PHABS Buses in Davao City.",
        image: "/PHABS.png",
        badges: ["React", "Node.js", "DALL-E", "Express", "MongoDB", "Cloudinary"]
    },
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

        ],
        behanceLink: ProjectURLs.THAPBehance
    },
];