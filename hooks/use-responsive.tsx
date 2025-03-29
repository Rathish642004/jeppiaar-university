"use client"

import { useState, useEffect } from "react"

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export function useResponsive() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs")
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    const handleResize = () => {
      const width = window.innerWidth
      setWidth(width)

      if (width < 640) {
        setBreakpoint("xs")
      } else if (width >= 640 && width < 768) {
        setBreakpoint("sm")
      } else if (width >= 768 && width < 1024) {
        setBreakpoint("md")
      } else if (width >= 1024 && width < 1280) {
        setBreakpoint("lg")
      } else if (width >= 1280 && width < 1536) {
        setBreakpoint("xl")
      } else {
        setBreakpoint("2xl")
      }
    }

    // Initial call
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isXs = breakpoint === "xs"
  const isSm = breakpoint === "sm"
  const isMd = breakpoint === "md"
  const isLg = breakpoint === "lg"
  const isXl = breakpoint === "xl"
  const is2Xl = breakpoint === "2xl"

  const isSmDown = ["xs"].includes(breakpoint)
  const isSmUp = ["sm", "md", "lg", "xl", "2xl"].includes(breakpoint)
  const isMdDown = ["xs", "sm"].includes(breakpoint)
  const isMdUp = ["md", "lg", "xl", "2xl"].includes(breakpoint)
  const isLgDown = ["xs", "sm", "md"].includes(breakpoint)
  const isLgUp = ["lg", "xl", "2xl"].includes(breakpoint)
  const isXlDown = ["xs", "sm", "md", "lg"].includes(breakpoint)
  const isXlUp = ["xl", "2xl"].includes(breakpoint)

  return {
    breakpoint,
    width,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    isSmDown,
    isSmUp,
    isMdDown,
    isMdUp,
    isLgDown,
    isLgUp,
    isXlDown,
    isXlUp,
  }
}

