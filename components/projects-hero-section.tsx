'use client'

import React from 'react'
import { motion, Variants } from "framer-motion"
import { Badge } from '@/components/ui/badge'
import { Boxes, Code2, Phone } from 'lucide-react'
import UniversalLayout from './margin'
import { projectsData } from '@/lib/projects-projects'

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
}

const ProjectsHeroSection = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 py-20">
                <UniversalLayout>
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="text-6xl font-bold tracking-tight mb-6">
                                Projects
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-xl text-muted-foreground mb-8">
                                Here are some of the projects I&apos;ve worked on that showcase my skills and experience.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-4 mb-12"
                        >
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <Code2 className="w-4 h-4 mr-2" />
                                Full Stack Development
                            </Badge>
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <Boxes className="w-4 h-4 mr-2" />
                                UI/UX Design
                            </Badge>
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <Phone className="w-4 h-4 mr-2" />
                                Mobile Development
                            </Badge>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                        >
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">{projectsData.length}+</div>
                                <div className="text-sm text-muted-foreground">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                                <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                            </div>
                        </motion.div>
                    </div>
                </UniversalLayout>
            </div>
        </div>
    )
}

export default ProjectsHeroSection

