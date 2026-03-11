import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "./ui/carousel"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectProjectsProps {
    title: string
    images?: string[]
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
                            <div className="group relative">
                                <div className="group-hover:shadow-3xl relative flex max-h-[75vh] w-full items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-muted shadow-2xl transition-all duration-500 group-hover:border-border">
                                    <Image
                                        src={image}
                                        alt={`${title} - image ${index + 1}`}
                                        width={1920}
                                        height={1080}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                                        className="max-h-[75vh] w-auto max-w-full object-contain"
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
                        <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-muted/50">
                            <div className="p-8 text-center">
                                <svg
                                    className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50"
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
