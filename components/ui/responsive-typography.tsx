import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveTypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  variant?: "display" | "title" | "heading" | "subheading" | "body" | "small"
  className?: string
  children: React.ReactNode
}

export function ResponsiveTypography({
  as: Component = "p",
  variant = "body",
  className,
  children,
  ...props
}: ResponsiveTypographyProps) {
  const variantClasses = {
    display: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
    title: "text-3xl sm:text-4xl md:text-5xl font-bold",
    heading: "text-2xl sm:text-3xl md:text-4xl font-bold",
    subheading: "text-xl sm:text-2xl md:text-3xl font-semibold",
    body: "text-base md:text-lg",
    small: "text-sm md:text-base",
  }

  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  )
}

