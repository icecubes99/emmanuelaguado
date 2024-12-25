import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const HeroAboutMeSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-12">About Me</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square">
                        <Image
                            src="/Me.png?height=600&width=600"
                            alt="Profile picture"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground">
                            I&apos;m a full-stack developer with a passion for building beautiful, functional, and accessible web applications. With over 3 years of experience in web development, I specialize in creating responsive and user-friendly interfaces.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            When I&apos;m not coding, you can find me exploring new technologies, watching and logging films in my Letterboxd, or just chilling.
                        </p>
                        <Button className="gap-2">
                            More About Me
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroAboutMeSection