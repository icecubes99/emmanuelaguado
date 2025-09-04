"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Briefcase, Calendar, Download, Github } from 'lucide-react'
import Link from 'next/link'
import { ProjectURLs } from '@/lib/links'
import { Badge } from './ui/badge'
import { certifications, experiences, skills } from '@/lib/skills-experiences'
import { Card, CardContent } from './ui/card'
import CardTopBorder from './ui/card-with-top-border'
import { FaBehance, } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'

const getBannerColorClass = (bannerColor: string): string => {
    switch (bannerColor) {
        case '[#ff3404]':
            return 'bg-[#ff3404]'
        case 'primary':
            return 'bg-primary'
        default:
            return 'bg-primary'
    }
}

const AboutBioSection = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative aspect-square">
                        <Image
                            src="/Me.png?height=600&width=600"
                            alt="Profile picture"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Hi, I&apos;m Emmanuel Aguado</h2>
                        <p className="text-lg text-muted-foreground">
                            I&apos;m a Full Stack Developer with over 3 years of experience in creating robust and scalable web applications. My passion lies in solving complex problems and turning ideas into reality through code.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            When I&apos;m not coding, you can find me exploring new technologies, watching and logging films in my Letterboxd, or just chilling.
                        </p>
                        <div className="flex gap-4">
                            <Link href={ProjectURLs.OwnGithub} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon">
                                    <Github className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href={ProjectURLs.OwnLinkedIn} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon">
                                    <SiLinkedin className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href={ProjectURLs.OwnBehance} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon">
                                    <FaBehance className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="space-y-16">
                    <section>
                        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-base py-1 px-3 flex items-center gap-2 transition-colors duration-200"
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <skill.icon
                                        className="w-4 h-4 transition-colors duration-200"
                                        style={{ color: hoveredSkill === skill.name ? skill.color : 'currentColor' }}
                                    />
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <Card key={index} className="relative overflow-hidden">
                                    <div className={`absolute top-0 left-0 w-1 h-full ${getBannerColorClass(exp.bannerColor)}`}></div>
                                    <CardContent className="p-6 pl-8">
                                        <div className="flex items-center mb-2">
                                            <Briefcase className="w-5 h-5 text-primary mr-2" />
                                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{exp.company} | {exp.period}</p>
                                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                            {exp.description.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {certifications.map((cert, index) => (
                                <CardTopBorder key={index} className='hover:shadow-lg hover:transition-all hover:duration-200 duration-200 relative overflow-hidden'>
                                    <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                                        <CardContent className="p-6">
                                            <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                                            <p className="text-muted-foreground">{cert.issuer}</p>
                                            <div className="flex items-center mt-2 text-sm text-muted-foreground">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {cert.year}
                                            </div>
                                        </CardContent>
                                    </Link>
                                </CardTopBorder>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-6">Education</h2>
                        <CardTopBorder>
                            <CardContent className="p-6 ">
                                <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                                <p className="text-muted-foreground">Ateneo de Davao University | 2022 - 2026</p>
                                <p className="mt-4 text-muted-foreground">
                                    Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
                                </p>
                            </CardContent>
                        </CardTopBorder>
                    </section>

                    <div className="text-center">
                        <Link href={ProjectURLs.OwnResume} target="_blank" rel="noopener noreferrer">
                            <Button className="gap-2">
                                <Download className="w-4 h-4" />
                                Download Resume
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBioSection