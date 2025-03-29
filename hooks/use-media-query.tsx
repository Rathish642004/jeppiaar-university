"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    const media = window.matchMedia(query)

    // Update the state initially
    setMatches(media.matches)

    // Define callback for media query changes
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // Add the callback as a listener
    media.addEventListener("change", listener)

    // Remove the listener when the hook is unmounted
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}

// Predefined media queries
export function useIsMobile() {
  return useMediaQuery("(max-width: 639px)")
}

export function useIsTablet() {
  return useMediaQuery("(min-width: 640px) and (max-width: 1023px)")
}

export function useIsDesktop() {
  return useMediaQuery("(min-width: 1024px)")
}

export function useIsLargeDesktop() {
  return useMediaQuery("(min-width: 1280px)")
}

