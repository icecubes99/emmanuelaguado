
import AboutBioSection from '@/components/about-bio-section'
import AboutHeroSection from '@/components/about-hero-section'
import Footer from '@/components/footer'
import HeroCallToActionSection from '@/components/hero-call-to-action-section'
import UniversalLayout from '@/components/margin'
import NavBar from '@/components/navbar'
import React from 'react'

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