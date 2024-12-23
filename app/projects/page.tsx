import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import ProjectsHeroSection from '@/components/projects-hero-section'
import React from 'react'

const page = () => {
    return (
        <div>
            <NavBar />
            <ProjectsHeroSection />
            <Footer />
        </div>
    )
}

export default page