import Footer from '@/components/footer'
import HeroCallToActionSection from '@/components/hero-call-to-action-section'
import UniversalLayout from '@/components/margin'
import NavBar from '@/components/navbar'
import ProjectsProjectsSection from '@/components/project-projects-section'
import ProjectsHeroSection from '@/components/projects-hero-section'
import React from 'react'

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