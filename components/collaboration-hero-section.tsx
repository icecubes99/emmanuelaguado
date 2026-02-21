"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import UniversalLayout from "./margin"
import { Badge } from "./ui/badge"
import { MessageCircle, Smile, Users } from "lucide-react"

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}

const CollabHeroSection = () => {
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
                                People I&apos;ve Worked With
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.5 }}
                        >
                            <p className="mb-8 text-xl text-muted-foreground">
                                Here are some of the people I&apos;ve had the pleasure of working
                                with.
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
                                <Users className="mr-2 h-4 w-4" />
                                Team Player
                            </Badge>
                            <Badge className="rounded-full px-4 py-2 text-base">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Clear Communication
                            </Badge>
                            <Badge className="rounded-full px-4 py-2 text-base">
                                <Smile className="mr-2 h-4 w-4" />
                                Friendly
                            </Badge>
                        </motion.div>
                    </div>
                </UniversalLayout>
            </div>
        </div>
    )
}

export default CollabHeroSection
