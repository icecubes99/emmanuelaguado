import { cn } from '@/lib/utils'
import React from 'react'

interface props {
    children: React.ReactNode
    className?: string
}

const UniversalLayout = ({ children, className }: props) => {
    return (
        <div className={cn('mx-12', className)}>
            {children}
        </div>
    )
}

export default UniversalLayout