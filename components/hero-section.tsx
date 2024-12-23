import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight, Github, LinkedinIcon } from 'lucide-react'
import { OwnLinks } from '@/lib/links'

const HeroSection = () => {
    return (

        <main className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-4">
                <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                    Hello, I&apos;m Emman
                    <br />
                    Full Stack Developer
                </h1>
                <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
                    I build accessible, inclusive products and digital experiences for the web.
                </p>
                <div className="flex gap-4">
                    <Button asChild>
                        <Link href="/projects">
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" asChild>
                            <Link href={OwnLinks.Github_Link.link}>
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <Link href={OwnLinks.LinkedIn_Link.link}>
                                <LinkedinIcon className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            {/* <div className='min-h-[20vh]'></div> */}
        </main>
    )
}

export default HeroSection