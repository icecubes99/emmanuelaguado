import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from './ui/carousel'
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectProjectsProps {
    title: string;
    images?: string[];
    className?: string
}

const ProjectsProjectsCard = ({ title, images = [], className }: ProjectProjectsProps) => {
    return (
        <Carousel 
            className={cn("w-full", className)}
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="-ml-2 md:-ml-4">
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4">
                            <div className="relative group">
                                <div className="relative w-full overflow-hidden rounded-xl bg-muted shadow-2xl border border-border/50 transition-all duration-500 group-hover:shadow-3xl group-hover:border-border">
                                    <Image
                                        src={image}
                                        alt={`${title} - image ${index + 1}`}
                                        width={1920}
                                        height={1080}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                                        className="w-full h-auto object-contain"
                                        priority={index === 0}
                                        loading={index === 0 ? "eager" : "lazy"}
                                        quality={90}
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))
                ) : (
                    <CarouselItem>
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/50 border border-dashed border-border flex items-center justify-center">
                            <div className="text-center p-8">
                                <svg
                                    className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <p className="text-sm text-muted-foreground">No images available</p>
                            </div>
                        </div>
                    </CarouselItem>
                )}
            </CarouselContent>
            {images.length > 0 && (
                <>
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselDots />
                </>
            )}
        </Carousel>
    )
}

export default ProjectsProjectsCard