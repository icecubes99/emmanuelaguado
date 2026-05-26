import Footer from "@/components/footer"
import HeroCallToActionSection from "@/components/hero-call-to-action-section"
import UniversalLayout from "@/components/margin"
import NavBar from "@/components/navbar"
import ProjectsProjectsSection from "@/components/project-projects-section"
import ProjectsHeroSection from "@/components/projects-hero-section"
import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore the different software and web development projects Emmanuel Aguado has built and contributed to.",
    alternates: {
        canonical: "/projects",
    },
}

const page = () => {
    return (
        <div>
            <NavBar />
            <ProjectsHeroSection />
            <UniversalLayout>
                <ProjectsProjectsSection />
            </UniversalLayout>
            <HeroCallToActionSection />
            <Footer />
        </div>
    )
}

export default page
