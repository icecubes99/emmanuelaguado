import Footer from '@/components/footer'
import HeroCallToActionSection from '@/components/hero-call-to-action-section'
import UniversalLayout from '@/components/margin'
import NavBar from '@/components/navbar'
import SocialsBodySection from '@/components/socials-body-section'
import SocialsHeroSection from '@/components/socials-hero-section'
import React from 'react'

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