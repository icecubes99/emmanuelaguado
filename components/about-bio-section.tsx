'use client'
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
import { FaBehance } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import dynamic from 'next/dynamic'

const GitHubContributions = dynamic(() => import('./github-contributions'), {
    ssr: false,
    loading: () => (
        <div className='flex h-40 items-center justify-center text-muted-foreground'>
            Loading GitHub activity...
        </div>
    ),
})

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
        <section className='py-20'>
            <div className='mx-auto max-w-4xl'>
                <div className='mb-16 grid items-center gap-12 md:grid-cols-2'>
                    <div className='relative aspect-square'>
                        <Image
                            src='/Me.png?height=600&width=600'
                            alt='Profile picture'
                            fill
                            className='rounded-lg object-cover'
                        />
                    </div>
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold'>Hi, I&apos;m Emmanuel Aguado</h2>
                        <p className='text-lg text-muted-foreground'>
                            I&apos;m a Full Stack Developer with over 3 years of experience in
                            creating robust and scalable web applications. My passion lies in
                            solving complex problems and turning ideas into reality through code.
                        </p>
                        <p className='text-lg text-muted-foreground'>
                            When I&apos;m not coding, you can find me exploring new technologies,
                            watching and logging films in my Letterboxd, or just chilling.
                        </p>
                        <div className='flex gap-4'>
                            <Link
                                href={ProjectURLs.OwnGithub}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Button variant='ghost' size='icon'>
                                    <Github className='h-5 w-5' />
                                </Button>
                            </Link>
                            <Link
                                href={ProjectURLs.OwnLinkedIn}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Button variant='ghost' size='icon'>
                                    <SiLinkedin className='h-5 w-5' />
                                </Button>
                            </Link>
                            <Link
                                href={ProjectURLs.OwnBehance}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Button variant='ghost' size='icon'>
                                    <FaBehance className='h-5 w-5' />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='space-y-16'>
                    <section>
                        <h2 className='mb-6 text-3xl font-bold'>My Skills</h2>
                        <div className='flex flex-wrap gap-2'>
                            {skills.map((skill, index) => (
                                <Badge
                                    key={index}
                                    variant='secondary'
                                    className='flex items-center gap-2 px-3 py-1 text-base transition-colors duration-200'
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <skill.icon
                                        className='h-4 w-4 transition-colors duration-200'
                                        style={{
                                            color:
                                                hoveredSkill === skill.name
                                                    ? skill.color
                                                    : 'currentColor',
                                        }}
                                    />
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className='mb-6 text-3xl font-bold'>GitHub Activity</h2>
                        <div>
                            <GitHubContributions />
                        </div>
                    </section>

                    <section>
                        <h2 className='mb-6 text-3xl font-bold'>Work Experience</h2>
                        <div className='space-y-8'>
                            {experiences.map((exp, index) => (
                                <Card key={index} className='relative overflow-hidden'>
                                    <div
                                        className={`absolute left-0 top-0 h-full w-1 ${getBannerColorClass(exp.bannerColor)}`}
                                    ></div>
                                    <CardContent className='p-6 pl-8'>
                                        <div className='mb-2 flex items-center'>
                                            <Briefcase className='mr-2 h-5 w-5 text-primary' />
                                            <h3 className='text-xl font-semibold'>{exp.title}</h3>
                                        </div>
                                        <p className='mb-4 text-muted-foreground'>
                                            {exp.company} | {exp.period}
                                        </p>
                                        <ul className='list-inside list-disc space-y-2 text-muted-foreground'>
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
                        <h2 className='mb-6 text-3xl font-bold'>Certifications</h2>
                        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                            {certifications.map((cert, index) => (
                                <CardTopBorder
                                    key={index}
                                    className='relative overflow-hidden duration-200 hover:shadow-lg hover:transition-all hover:duration-200'
                                >
                                    <Link
                                        href={cert.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <CardContent className='p-6'>
                                            <h3 className='mb-2 text-lg font-semibold'>
                                                {cert.name}
                                            </h3>
                                            <p className='text-muted-foreground'>{cert.issuer}</p>
                                            <div className='mt-2 flex items-center text-sm text-muted-foreground'>
                                                <Calendar className='mr-2 h-4 w-4' />
                                                {cert.year}
                                            </div>
                                        </CardContent>
                                    </Link>
                                </CardTopBorder>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className='mb-6 text-3xl font-bold'>Education</h2>
                        <CardTopBorder>
                            <CardContent className='p-6'>
                                <h3 className='text-xl font-semibold'>
                                    Bachelor of Science in Computer Science
                                </h3>
                                <p className='text-muted-foreground'>
                                    Ateneo de Davao University | 2022 - 2026
                                </p>
                                <p className='mt-4 text-muted-foreground'>
                                    Relevant coursework: Data Structures, Algorithms, Web
                                    Development, Database Systems
                                </p>
                            </CardContent>
                        </CardTopBorder>
                    </section>

                    <div className='text-center'>
                        <Link
                            href={ProjectURLs.OwnResume}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Button className='gap-2'>
                                <Download className='h-4 w-4' />
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
