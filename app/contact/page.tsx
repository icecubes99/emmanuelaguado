import ContactFormSection from '@/components/contact-form-section'
import ContactHeroSection from '@/components/contact-hero-section'
import Footer from '@/components/footer'
import UniversalLayout from '@/components/margin'
import NavBar from '@/components/navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <NavBar />
            <ContactHeroSection />
            <UniversalLayout>
                <ContactFormSection />
            </UniversalLayout>
            <Footer />
        </div>
    )
}

export default page