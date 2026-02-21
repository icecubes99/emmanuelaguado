"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, Github, MessageCircle } from "lucide-react"
import UniversalLayout from "./margin"

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}

const SocialsHeroSection = () => {
    return (
        <div className="relative mb-12">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute right-0 top-0 h-[300px] w-[300px] -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/4 translate-y-1/4 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="mx-auto px-4 py-20">
                <UniversalLayout>
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="mb-6 text-6xl font-bold tracking-tight">
                                Connect With Me
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.5 }}
                        >
                            <p className="mb-8 text-xl text-muted-foreground">
                                Stay updated with my latest projects, thoughts, and professional
                                journey across various social platforms.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Badge className="rounded-full px-4 py-2 text-base">
                                <Github className="mr-2 h-4 w-4" />
                                Open Source
                            </Badge>
                            <Badge className="rounded-full px-4 py-2 text-base">
                                <BriefcaseBusiness className="mr-2 h-4 w-4" />
                                Professional Network
                            </Badge>
                            <Badge className="rounded-full px-4 py-2 text-base">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Tech Insights
                            </Badge>
                        </motion.div>
                    </div>
                </UniversalLayout>
            </div>
        </div>
    )
}

export default SocialsHeroSection
