import type React from "react"
import { cn } from "@/lib/utils"

type ColumnConfig = {
  sm?: number
  md?: number
  lg?: number
  xl?: number
  "2xl"?: number
}

interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number | ColumnConfig
  gap?: number | string
  className?: string
  children: React.ReactNode
}

export function ResponsiveGrid({
  columns = { sm: 1, md: 2, lg: 3, xl: 4, "2xl": 4 },
  gap = 4,
  className,
  children,
  ...props
}: ResponsiveGridProps) {
  const getColumnsClass = () => {
    if (typeof columns === "number") {
      return `grid-cols-${columns}`
    }

    return [
      columns.sm && `sm:grid-cols-${columns.sm}`,
      columns.md && `md:grid-cols-${columns.md}`,
      columns.lg && `lg:grid-cols-${columns.lg}`,
      columns.xl && `xl:grid-cols-${columns.xl}`,
      columns["2xl"] && `2xl:grid-cols-${columns["2xl"]}`,
    ]
      .filter(Boolean)
      .join(" ")
  }

  const gapClass = typeof gap === "number" ? `gap-${gap}` : `gap-${gap}`

  return (
    <div className={cn("grid grid-cols-1", getColumnsClass(), gapClass, className)} {...props}>
      {children}
    </div>
  )
}

