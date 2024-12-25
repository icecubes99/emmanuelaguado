"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'
import { ProjectURLs } from '@/lib/links'

const socialLinks = [
    {
        platform: 'GitHub',
        username: 'icecubes99',
        link: ProjectURLs.OwnGithub,
        icon: <Github className="h-6 w-6" />,
    },
    {
        platform: 'LinkedIn',
        username: 'emmanuelaguado',
        link: ProjectURLs.OwnLinkedIn,
        icon: <Linkedin className="h-6 w-6" />,
    },
    {
        platform: 'Behance',
        username: 'emmanueaguado',
        link: ProjectURLs.OwnBehance,
        icon: <Image src={"/Behance.svg"} width={25} height={25} alt='Behance' />
    },
    {
        platform: 'Email',
        username: 'aguado.emman@gmail.com',
        link: 'mailto:aguado@emman@gmail.com',
        icon: <Mail className="h-6 w-6" />,
    }
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

const SocialsBodySection = () => {
    return (
        <div>
            <div className="py-20">

                <motion.div
                    className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto pb-20"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {socialLinks.map((social) => (
                        <motion.div key={social.platform} variants={item}>
                            <SocialLinkCard {...social} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default SocialsBodySection

interface SocialLinkCardProps {
    platform: string
    username: string
    link: string
    icon: React.ReactNode
}

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({ platform, username, link, icon }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Card className="overflow-hidden bg-background border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {icon}
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold">{platform}</h3>
                            <p className="text-sm text-muted-foreground">@{username}</p>
                        </div>
                        <Button asChild variant="ghost" className="hover:bg-primary/10">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold">
                                Connect
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}