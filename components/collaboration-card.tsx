"use client"
import React from 'react'
import { motion, Variants } from "framer-motion"
import { CollabUser } from '@/app/collaborations/page'
import CardTopBorder from './ui/card-with-top-border'
import { CardContent } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { ArrowUpRight, Github, Mail } from 'lucide-react'
import Link from 'next/link'
import { SiLinkedin } from 'react-icons/si'

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
}

const CollabCard = ({ collabUser }: { collabUser: CollabUser[] }) => {
    return (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 max-w-4xl mx-auto mb-16">
            {collabUser.map((collaborator) => (
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                    key={collaborator.id}
                >
                    <CardTopBorder key={collaborator.id} className="overflow-hidden">
                        <CardContent className="p-6 flex flex-col items-center">
                            <Avatar className="w-32 h-32">
                                <AvatarImage
                                    className="object-cover  rounded-full w-full h-full"
                                    src={collaborator.avatar}
                                    alt={`${collaborator.first_name} ${collaborator.last_name}`}
                                />
                                <AvatarFallback>
                                    {collaborator.first_name[0]}
                                    {collaborator.last_name[0]}
                                </AvatarFallback>
                            </Avatar>

                            <div className="mt-2 flex items-center flex-col">
                                <h3 className="font-semibold text-lg">
                                    {collaborator.first_name} {collaborator.last_name}
                                </h3>
                                <p className="text-sm text-muted-foreground">{collaborator.email}</p>
                            </div>

                            <div className='flex flex-row gap-3 mt-3'>
                                <Link href={collaborator.avatar} target="_blank" rel="noopener noreferrer">
                                    <Button size={"icon"} variant={"ghost"}>
                                        <Github className='w-5 h-5 ' />
                                    </Button>
                                </Link>
                                <Link href={collaborator.avatar} target="_blank" rel="noopener noreferrer">
                                    <Button size={"icon"} variant={"ghost"}>
                                        <SiLinkedin className='w-5 h-5 ' />
                                    </Button>
                                </Link>
                                <Link href={collaborator.avatar} target="_blank" rel="noopener noreferrer">
                                    <Button size={"icon"} variant={"ghost"}>
                                        <Mail className='w-5 h-5 ' />
                                    </Button>
                                </Link>

                            </div>
                            <div className='mt-3'>
                                <Link href={collaborator.avatar} target="_blank" rel="noopener noreferrer">
                                    <Button variant={"secondary"} size={"lg"} className="relative group">
                                        View Profile
                                        <ArrowUpRight className='w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-y-[-2px]' />
                                    </Button>
                                </Link>
                            </div>

                        </CardContent>
                    </CardTopBorder>
                </motion.div>
            ))}
        </div>
    );
}

export default CollabCard