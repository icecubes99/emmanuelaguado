'use client'

import React from 'react'
import { motion, Variants } from "framer-motion"
import { Badge } from '@/components/ui/badge'
import { BriefcaseBusiness, Github, MessageCircle } from 'lucide-react'
import UniversalLayout from './margin'


const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
}


const SocialsHeroSection = () => {
    return (
        <div className="relative mb-12">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
            </div>


            <div className=" mx-auto px-4 py-20">
                <UniversalLayout>
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="text-6xl font-bold tracking-tight mb-6">
                                Connect With Me
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-xl text-muted-foreground mb-8">
                                Stay updated with my latest projects, thoughts, and professional journey across various social platforms.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-4 "
                        >
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <Github className="w-4 h-4 mr-2" />
                                Open Source
                            </Badge>
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <BriefcaseBusiness className="w-4 h-4 mr-2" />
                                Professional Network
                            </Badge>
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <MessageCircle className="w-4 h-4 mr-2" />
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