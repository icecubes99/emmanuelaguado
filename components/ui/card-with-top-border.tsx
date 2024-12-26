import React from 'react'
import { Card } from './card'
import { cn } from '@/lib/utils'

interface CardTopBorderProps {
    children: React.ReactNode
    className?: string
}
const CardTopBorder = ({ children, className }: CardTopBorderProps) => {
    return (
        <Card className={cn('relative overflow-hidden', className)}>
            <div className="absolute w-full h-1 top-0 bg-primary"></div>
            {children}
        </Card>
    )
}

export default CardTopBorder