import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { ExternalLink, FigmaIcon, Github } from 'lucide-react'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { FaBehance } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'

interface HeroProjectsCardProps {
    title: string
    description: string
    image: string
    githubLink?: string
    figmaLink?: string;
    linkedInLink?: string;
    behanceLink?: string;
    liveLink?: string
    badges?: string[]
    alt?: string
}

const HeroProjectsCard = ({ title, description, image, githubLink, liveLink, alt, figmaLink, linkedInLink, badges = [], behanceLink }: HeroProjectsCardProps) => {
    return (
        <Card className="flex flex-col md:flex-row overflow-hidden border-2">
            <div className="md:w-1/2 relative aspect-video">
                <Image
                    src={image}
                    alt={alt || title + " image"}
                    fill
                    className="object-cover md:border-r-2"
                />
            </div>
            <CardContent className="md:w-1/2 p-6">
                <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-xl font-bold">{title}</CardTitle>
                    <div className="flex gap-2">
                        {githubLink && (<Link href={githubLink || ""} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <Github className="h-5 w-5" />
                            </Button>
                        </Link>)}
                        {liveLink && (<Link href={liveLink || ""} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <ExternalLink className="h-5 w-5" />
                            </Button>
                        </Link>)}
                        {figmaLink && (<Link href={figmaLink || ""} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <FigmaIcon className="h-5 w-5" />
                            </Button>
                        </Link>)}
                        {linkedInLink && (<Link href={linkedInLink || ""} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <SiLinkedin className="h-5 w-5" />
                            </Button>
                        </Link>)}
                        {behanceLink && (<Link href={behanceLink || ""} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <FaBehance className="h-5 w-5" />
                            </Button>
                        </Link>)}
                    </div>
                </div>
                <CardDescription className="mb-4">
                    {description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                        <Badge variant={"secondary"} key={index}>{badge}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default HeroProjectsCard