"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Boxes, Code2, Phone } from "lucide-react"
import UniversalLayout from "./margin"
import { projectsData } from "@/lib/projects-projects"

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}

const ProjectsHeroSection = () => {
    const startYear = 2022
    const currentYear = new Date().getFullYear()
    const yearsOfExperience = currentYear - startYear + 1

    return (
        <div className="relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute right-0 top-0 h-[300px] w-[300px] -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/4 translate-y-1/4 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 py-20">
                <UniversalLayout>
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="mb-6 text-6xl font-bold tracking-tight">Projects</h1>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.5 }}
                        >
                            <p className="mb-8 text-xl text-muted-foreground">
                                Here are some of the projects I&apos;ve worked on that showcase my
                                skills and experience.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.7 }}
                            className="mb-12 flex flex-wrap justify-center gap-4"
                        >
                            <Badge className="rounded-full px-4 py-2 text-base">
                                <Code2 className="mr-2 h-4 w-4" />
                                Full Stack Development
                            </Badge>
                            <Badge className="rounded-full px-4 py-2 text-base">
                                <Boxes className="mr-2 h-4 w-4" />
                                UI/UX Design
                            </Badge>
                            <Badge className="rounded-full px-4 py-2 text-base">
                                <Phone className="mr-2 h-4 w-4" />
                                Mobile Development
                            </Badge>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="mx-auto grid max-w-2xl grid-cols-3 gap-8"
                        >
                            <div className="text-center">
                                <div className="mb-2 text-4xl font-bold text-primary">
                                    {projectsData.length}+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Projects Completed
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-4xl font-bold text-primary">
                                    {yearsOfExperience}+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Years Experience
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-4xl font-bold text-primary">100%</div>
                                <div className="text-sm text-muted-foreground">
                                    Client Satisfaction
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </UniversalLayout>
            </div>
        </div>
    )
}

export default ProjectsHeroSection
