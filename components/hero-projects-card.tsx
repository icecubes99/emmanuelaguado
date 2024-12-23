import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { ExternalLink, FigmaIcon, Github, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import { Badge } from './ui/badge'

interface HeroProjectsCardProps {
    title: string
    description: string
    image: string
    githubLink?: string
    figmaLink?: string;
    linkedInLink?: string;
    liveLink?: string
    badges?: string[]
    alt?: string
}

const HeroProjectsCard = ({ title, description, image, githubLink, liveLink, alt, figmaLink, linkedInLink, badges = [] }: HeroProjectsCardProps) => {
    return (
        <Card className="flex flex-col md:flex-row overflow-hidden border-2 hover:dark hover:bg-slate-900 hover:transition-all hover:duration-300 duration-300">
            <div className="md:w-1/2 relative aspect-video">
                <Image
                    src={image}
                    alt={alt || title + " image"}
                    fill
                    className="object-cover"
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
                                <LinkedinIcon className="h-5 w-5" />
                            </Button>
                        </Link>)}
                    </div>
                </div>
                <CardDescription className="mb-4">
                    {description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                        <Badge key={index}>{badge}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default HeroProjectsCard