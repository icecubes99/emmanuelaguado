import React from "react"
import { Card } from "./card"
import { cn } from "@/lib/utils"

interface CardTopBorderProps {
    children: React.ReactNode
    className?: string
}
const CardTopBorder = ({ children, className }: CardTopBorderProps) => {
    return (
        <Card className={cn("relative overflow-hidden", className)}>
            <div className="absolute top-0 h-1 w-full bg-primary"></div>
            {children}
        </Card>
    )
}

export default CardTopBorder
