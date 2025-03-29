"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function LogoOverlay() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    // Listen for custom event from sidebar
    const handleSidebarChange = (e: any) => {
      console.log("Sidebar state changed:", e.detail.isOpen)
      setSidebarOpen(e.detail.isOpen)
    }

    // Initial checks
    handleResize()
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    window.addEventListener("sidebarStateChange", handleSidebarChange)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("sidebarStateChange", handleSidebarChange)
    }
  }, [])

  // Debug output
  console.log("Sidebar open state:", sidebarOpen)
  console.log("Current z-index:", sidebarOpen ? "z-[40]" : "z-[60]")

  return (
    <div
      className={`fixed top-[-2px] left-0 right-0 ${sidebarOpen ? "z-[40]" : "z-[60]"} flex justify-center items-start pointer-events-none border-none outline-none`}
    >
      <Link
        href="/"
        className={`
          transition-all duration-300 ease-in-out rounded-b-lg shadow-none pointer-events-auto
          ${isMobile ? "w-[150px] h-[75px]" : isTablet ? "w-[200px] h-[100px]" : "w-[280px] h-[120px]"}
        `}
        aria-label="Jeppiaar University Home"
      >
        <Image
          src={
            isMobile
              ? "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741874973/LOGO_2_gcd0xw.png"
              : "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741876906/Copy_of_Untitled_Design-removebg-preview_zgjlln.png"
          }
          alt="Jeppiaar University Logo"
          width={isMobile ? 150 : isTablet ? 200 : 280}
          height={isMobile ? 75 : isTablet ? 100 : 120}
          className="w-full h-full object-contain"
          priority
        />
      </Link>
    </div>
  )
}

