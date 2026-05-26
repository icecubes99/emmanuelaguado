import AboutBioSection from "@/components/about-bio-section"
import AboutHeroSection from "@/components/about-hero-section"
import Footer from "@/components/footer"
import HeroCallToActionSection from "@/components/hero-call-to-action-section"
import UniversalLayout from "@/components/margin"
import NavBar from "@/components/navbar"
import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Emmanuel Aguado, his background, experience, and what drives his passion for software development.",
    alternates: {
        canonical: "/about",
    },
}

const page = () => {
    return (
        <div>
            <NavBar />
            <AboutHeroSection />
            <UniversalLayout>
                <AboutBioSection />
            </UniversalLayout>
            <HeroCallToActionSection />
            <Footer />
        </div>
    )
}

export default page
