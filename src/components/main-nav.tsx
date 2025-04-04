'use client'

import { cn } from "@/lib/utils"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav className={cn(
            "flex items-center space-x-4 lg:space-x-4",
            className
        )}>
            This is Main Nav
        </nav>
    )
}