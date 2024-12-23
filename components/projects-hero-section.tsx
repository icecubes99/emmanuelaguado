import React from 'react'

const ProjectsHeroSection = () => {
    return (
        <main className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-4">
                <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                    Projects
                </h1>
                <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
                    Here are some of the projects I&lsquo;ve worked on that showcase my skills and experience.
                </p>
            </div>
        </main>
    )
}

export default ProjectsHeroSection