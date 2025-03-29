"use client"

import { useState, useEffect, useRef } from "react"
import { TopNavigation } from "@/components/header/top-navigation"
import { DesktopNavigation } from "@/components/header/desktop-navigation"
import { MobileNavigation } from "@/components/header/mobile-navigation"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
  })
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setScreenSize({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024 && width < 1440,
        isLargeDesktop: width >= 1440,
      })
    }

    // Initial check
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle escape key to close dropdowns and mobile menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null)
        setClickedDropdown(null) // Reset the clicked state
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => document.removeEventListener("keydown", handleEscKey)
  }, [])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isSidebarOpen])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
      setClickedDropdown(null)
    } else {
      setActiveDropdown(name)
      setClickedDropdown(name)
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""} overflow-visible`}
      role="banner"
    >
      {/* Top Navigation (Visible on medium screens and above) */}
      <TopNavigation />

      <div className="bg-primary shadow-md text-secondary">
        <div className={`container mx-auto xl:max-w-[1440px] lg:max-w-[1014px] overflow-visible relative`}>
          {/* Desktop Navigation */}
          <DesktopNavigation
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            dropdownRefs={dropdownRefs}
            screenSize={screenSize}
          />

          {/* Mobile Navigation */}
          <MobileNavigation
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            dropdownRefs={dropdownRefs}
          />
        </div>
      </div>
    </header>
  )
}

