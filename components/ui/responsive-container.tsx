import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  fluid?: boolean
  className?: string
  children: React.ReactNode
}

export function ResponsiveContainer({
  as: Component = "div",
  fluid = false,
  className,
  children,
  ...props
}: ResponsiveContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto px-4",
        {
          "sm:max-w-[600px] md:max-w-[728px] lg:max-w-[984px] xl:max-w-[1240px] 2xl:max-w-[1496px]": !fluid,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

