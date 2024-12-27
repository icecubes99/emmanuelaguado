"use client"
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight, Github } from 'lucide-react'
import { ProjectURLs } from '@/lib/links'
import { motion, Variants } from 'framer-motion'
import { SiLinkedin } from 'react-icons/si'

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
}
const HeroSection = () => {
    return (

        <main className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-4">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                        Hello, I&apos;m Emman
                        <br />
                        Full Stack Developer
                    </h1>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.5 }}
                >
                    <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
                        I build accessible, inclusive products and digital experiences for the web.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.7 }}
                >
                    <div className="flex gap-4">
                        <Button asChild>
                            <Link href="/projects">
                                View Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" asChild>
                                <Link href={ProjectURLs.OwnGithub} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href={ProjectURLs.OwnLinkedIn} target="_blank" rel="noopener noreferrer">
                                    <SiLinkedin className="h-4 w-4" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* <div className='min-h-[20vh]'></div> */}
        </main>
    )
}

export default HeroSection