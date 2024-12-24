import React from 'react'
import HeroProjectsCard from './hero-projects-card'
import { projectsData } from '@/lib/projects-hero'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const HeroProjectsSection = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold ">Featured Projects</h2>
            <section className="py-12">
                <div className="space-y-8">
                    {projectsData.map((project, index) => (
                        <HeroProjectsCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            badges={project.badges}
                        />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href={'/projects'}>
                        <Button variant="outline" className="gap-2">
                            View All Projects
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default HeroProjectsSection