import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent } from './ui/card'
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectProjectsProps {
    title: string;
    images?: string[];
    className?: string
}

const ProjectsProjectsCard = ({ title, images = [], className }: ProjectProjectsProps) => {
    return (
        <Carousel className={cn("", className)}>
            <CarouselContent>
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-6">
                                        <Image
                                            src={image}
                                            alt={`${title} - image ${index + 1}`}
                                            width={1080} // Adjusted width
                                            height={820} // Adjusted height
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                ) : (
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-sm text-gray-500">No images available</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ProjectsProjectsCard