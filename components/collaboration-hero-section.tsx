'use client'

import React from 'react'
import { motion, Variants } from "framer-motion"
import UniversalLayout from './margin'
import { Badge } from './ui/badge'
import { MessageCircle, Smile, Users } from 'lucide-react'

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
}

const CollabHeroSection = () => {
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
                                People I&apos;ve Worked With
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-xl text-muted-foreground mb-8">
                                Here are some of the people I&apos;ve had the pleasure of working with.
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
                                <Users className="w-4 h-4 mr-2" />
                                Team Player
                            </Badge>
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Clear Communication
                            </Badge>
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <Smile className="w-4 h-4 mr-2" />
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