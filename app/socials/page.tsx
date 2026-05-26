import Footer from "@/components/footer"
import HeroCallToActionSection from "@/components/hero-call-to-action-section"
import UniversalLayout from "@/components/margin"
import NavBar from "@/components/navbar"
import SocialsBodySection from "@/components/socials-body-section"
import SocialsHeroSection from "@/components/socials-hero-section"
import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Socials",
    description: "Connect with Emmanuel Aguado on various social media platforms.",
    alternates: {
        canonical: "/socials",
    },
}

const page = () => {
    return (
        <div>
            <NavBar />
            <SocialsHeroSection />
            <UniversalLayout>
                <SocialsBodySection />
            </UniversalLayout>
            <HeroCallToActionSection />
            <Footer />
        </div>
    )
}

export default page
