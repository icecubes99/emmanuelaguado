import React from 'react'
import { Button } from './ui/button'
import { Github, LinkedinIcon, Mail } from 'lucide-react'
import Link from 'next/link'
import { ProjectURLs } from '@/lib/links'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Emmanuel Aguado. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href={ProjectURLs.OwnGithub} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <Github className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href={ProjectURLs.OwnLinkedIn} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <LinkedinIcon className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href={ProjectURLs.OwnBehance} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <Image src={"/Behance.svg"} width={20} height={20} alt='Behance' />
                            </Button>
                        </Link>
                        <Link href={"/contact"}>
                            <Button variant="ghost" size="icon">
                                <Mail className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer