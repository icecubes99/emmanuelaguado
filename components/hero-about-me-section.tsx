import Image from "next/image"
import React from "react"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const HeroAboutMeSection = () => {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-12 text-3xl font-bold">About Me</h2>
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="relative aspect-square">
                        <Image
                            src="/Me.png?height=600&width=600"
                            alt="Profile picture"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground">
                            I&apos;m a full-stack developer with a passion for building beautiful,
                            functional, and accessible web applications. With over 3 years of
                            experience in web development, I specialize in creating responsive and
                            user-friendly interfaces.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            When I&apos;m not coding, you can find me exploring new technologies,
                            watching and logging films in my Letterboxd, or just chilling.
                        </p>
                        <Button className="gap-2" asChild>
                            <Link href="/about">
                                More About Me
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroAboutMeSection
