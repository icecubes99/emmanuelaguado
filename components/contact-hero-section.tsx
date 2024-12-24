'use client'

import React from 'react'
import { motion, Variants } from "framer-motion"
import { Badge } from '@/components/ui/badge'
import { ChartArea, Clock, Mail } from 'lucide-react'
import UniversalLayout from './margin'

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
}

const ContactHeroSection = () => {
    return (
        <div className="relative">
            {/* <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
            </div> */}


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
                                Let&apos;s Talk
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-xl text-muted-foreground mb-8">
                                Have a project in mind? I&lsquo;d love to help bring your ideas to life.
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
                                <Mail className="w-4 h-4 mr-2" />
                                Quick Response
                            </Badge>
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <ChartArea className="w-4 h-4 mr-2" />
                                Clear Communication
                            </Badge>
                            <Badge className="px-4 py-2 rounded-full text-base">
                                <Clock className="w-4 h-4 mr-2" />
                                Flexible Schedule
                            </Badge>
                        </motion.div>
                    </div>
                </UniversalLayout>
            </div>
        </div>
    )
}

export default ContactHeroSection