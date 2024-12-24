import { projectsData } from '@/lib/projects-projects'
import React from 'react'
import ProjectsProjectsCard from './projects-projects-card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Clock, DollarSign, ExternalLink, Github, Laptop, Moon, Users } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'

const IconMap = {
    users: Users,
    laptop: Laptop,
    moon: Moon,
    clock: Clock,
    money: DollarSign
};


const ProjectsProjectsSection = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <section className="py-12">
                <div className="space-y-12">
                    {projectsData.map((project, index) => (
                        <div key={index} className="space-y-4">
                            <div className='flex flex-row justify-between items-center'>
                                <h2 className="text-3xl font-bold">{project.title}</h2>
                                <h2 className="text-2xl opacity-80 font-bold">{project.year}</h2>
                            </div>
                            <div className='flex justify-center items-center w-fit'>
                                <ProjectsProjectsCard
                                    title={project.title}
                                    images={project.images}
                                    className='w-3/4'
                                />
                            </div>
                            <section className="grid md:grid-cols-2 gap-8 items-start p-4">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.badges.map((badge, index) => (
                                            <Badge variant={"secondary"} key={index}>{badge}</Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        {
                                            project.liveLink && (
                                                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                    <Button className="gap-2">
                                                        <ExternalLink className="h-4 w-4" />
                                                        Live Demo
                                                    </Button>
                                                </Link>
                                            )
                                        }
                                        {
                                            project.githubLink && (
                                                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                    <Button variant="outline" className="gap-2">
                                                        <Github className="h-4 w-4" />
                                                        Source Code
                                                    </Button>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="grid gap-4">
                                            {project.features?.map((feature, idx) => {
                                                const IconComponent = IconMap[feature.icon];
                                                return (
                                                    <div key={idx} className="flex items-center gap-4">
                                                        <IconComponent className="h-6 w-6 text-primary" />
                                                        <div>
                                                            <h3 className="font-medium">{feature.title}</h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                {feature.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ProjectsProjectsSection