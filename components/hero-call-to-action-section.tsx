import React from 'react'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'

const HeroCallToActionSection = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Let&apos;s Work Together</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    I&apos;m always interested in hearing about new projects and opportunities.
                </p>
                <Button className="gap-2">
                    <Mail className="h-5 w-5" />
                    Get in Touch
                </Button>
            </div>
        </section>
    )
}

export default HeroCallToActionSection