"use client"

import type React from "react"

import { useRef, useEffect, type RefObject } from "react"
import Link from "next/link"
import { ChevronDown, Home } from "lucide-react"

// Navigation data
const leftNavItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "History", href: "/about/history" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    dropdown: [
      { name: "School of Engineering & Technology", href: "/academics/engineering-technology" },
      { name: "School of Arts, Humanities And Management", href: "/academics/arts-humanities-management" },
      { name: "School of Science and Allied Health Science", href: "/academics/science-health" },
      { name: "School of Physical Education and Sports", href: "/academics/physical-education" },
      { name: "School of Aeronautics", href: "/academics/aeronautics" },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    dropdown: [
      { name: "Apply", href: "/admissions/apply" },
      { name: "Application Process", href: "/admissions" },
      { name: "Courses Offered", href: "/admissions/courses-offered" },
      { name: "Eligibility", href: "/admissions/eligibility" },
      { name: "Scholarships", href: "/admissions/scholarships" },
      { name: "Entrance Exam", href: "/admissions/entrance-exam" },
      { name: "Fees Structure", href: "/admissions/fees-structure" },
      { name: "Rules & Regulations", href: "/admissions/rules-regulations" },
    ],
  },
  {
    name: "Research",
    href: "/research",
    dropdown: [
      { name: "Ph.D Admissions", href: "/research/phd-admissions" },
      { name: "Ph.D Regulations", href: "/research/phd-regulations" },
      { name: "Research Supervisors", href: "/research/supervisors" },
      { name: "Ph.D Notifications", href: "/research/phd-notifications" },
      { name: "Downloads", href: "/research/downloads" },
    ],
  },
]

const rightNavItems = [
  {
    name: "Placements",
    href: "/placements",
    dropdown: [
      { name: "Overview", href: "/placements" },
      { name: "Training and Process", href: "/placements/process" },
    ],
  },
  {
    name: "Student Life",
    href: "/student-life",
    dropdown: [
      { name: "Infrastructure", href: "/student-life/infrastructure" },
      { name: "Library", href: "/student-life/library" },
      { name: "Sports Facility", href: "/student-life/sports" },
      { name: "Auditorium & Conference Hall", href: "/student-life/auditorium" },
      { name: "Hostel", href: "/student-life/hostel" },
      { name: "Dining Hall & Canteen", href: "/student-life/canteen" },
      { name: "Transportation Facility", href: "/student-life/transport" },
      { name: "Banking Facility", href: "/student-life/banking" },
    ],
  },
  {
    name: "Clubs",
    href: "/clubs",
    dropdown: [
      { name: "SDC", href: "/clubs/sdc" },
      { name: "NCC", href: "/clubs/ncc" },
      { name: "YRC", href: "/clubs/yrc" },
      { name: "YUVA", href: "/clubs/yuva" },
      { name: "Rotary Club", href: "/clubs/rotary-club" },
      { name: "NSS", href: "/clubs/nss" },
    ],
  },
  {
    name: "Examination",
    href: "/examinations",
    dropdown: [
      { name: "JU Examinations", href: "/examinations/ju-exams" },
      { name: "JU Results", href: "/examinations/results" },
      { name: "Revaluation", href: "/examinations/revaluation" },
      { name: "Exam Schedules", href: "/examinations/schedules" },
    ],
  },
]

export { leftNavItems, rightNavItems }

interface DesktopNavigationProps {
  activeDropdown: string | null
  toggleDropdown: (name: string) => void
  dropdownRefs: RefObject<Record<string, HTMLDivElement | null>>
  spacing?: "sm" | "md" | "lg" | "xl"
  screenSize: {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    isLargeDesktop: boolean
  }
}

export function DesktopNavigation({
  activeDropdown,
  toggleDropdown,
  dropdownRefs,
  spacing = "md",
  screenSize,
}: DesktopNavigationProps) {
  // Create separate refs for each dropdown content
  const dropdownContentRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    // Only add the event listener if a dropdown is open and we're not on mobile
    if (activeDropdown && !screenSize.isMobile) {
      const handleClickOutside = (event: MouseEvent) => {
        // Get the button element for the active dropdown
        const buttonElement = dropdownRefs.current?.[activeDropdown]
        // Get the content element for the active dropdown
        const contentElement = dropdownContentRefs.current?.[activeDropdown]

        // Check if the click is outside both the dropdown button and content
        const isOutsideClick =
          buttonElement &&
          contentElement &&
          !buttonElement.contains(event.target as Node) &&
          !contentElement.contains(event.target as Node)

        if (isOutsideClick) {
          // Close the dropdown
          toggleDropdown(activeDropdown)
        }
      }

      // Add the event listener
      document.addEventListener("mousedown", handleClickOutside)

      // Clean up the event listener
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
    // No cleanup needed if no dropdown is open
    return undefined
  }, [activeDropdown, toggleDropdown, screenSize.isMobile])

  // Calculate center spacer width based on screen size
  const getCenterWidth = () => {
    if (screenSize.isLargeDesktop) return "w-[280px]"
    if (screenSize.isDesktop) return "w-[280px]"
    if (screenSize.isTablet) return "w-[240px]"
    return "w-[150px]"
  }

  const handleToggleDropdown = (e: React.MouseEvent, name: string) => {
    e.preventDefault()
    toggleDropdown(name)
  }

  const renderDesktopDropdownItems = (items: { name: string; href: string }[], dropdownName: string) => (
    <div
      className="space-y-1 p-1 relative "
      ref={(el) => {
        dropdownContentRefs.current[dropdownName] = el
      }}
    >
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => toggleDropdown(null)}
          className="block px-4 py-2 text-sm text-primary bg-secondary/30 hover:bg-secondary/90 focus:bg-secondary/90 focus:outline-none rounded transition-colors duration-500 whitespace-normal break-words"
          role="menuitem"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )

  return (
    <div className="hidden md:flex items-center justify-between h-16 mx-auto">
      {/* Left Navigation */}
      <div
        className={`flex flex-1 min-w-0 justify-start pl-0 ${
          screenSize.isLargeDesktop || screenSize.isDesktop ? "whitespace-nowrap" : "flex-wrap"
        } ${!screenSize.isLargeDesktop && !screenSize.isDesktop ? "" : "overflow-visible"}`}
      >
        <nav
          className="flex flex-wrap items-center justify-center md:justify-start gap-x-1 md:gap-x-2 lg:gap-x-3 xl:gap-x-4 w-full"
          aria-label="Main navigation - left"
        >
          {leftNavItems.map((item) => (
            <div
              key={item.name}
              className="relative flex-shrink-0 mt-1 md:mt-0"
              ref={(el) => {
                if (dropdownRefs.current) {
                  dropdownRefs.current[item.name] = el
                }
              }}
            >
              {item.dropdown ? (
                <>
                  <button
                    className="flex items-center text-secondary hover:bg-secondary hover:text-primary px-1 md:px-2 py-1 md:py-2 rounded-md text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary transition-colors duration-300 whitespace-nowrap"
                    onClick={(e) => handleToggleDropdown(e, item.name)}
                    aria-expanded={activeDropdown === item.name}
                    aria-controls={`dropdown-${item.name}`}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {activeDropdown === item.name && (
                    <div
                      id={`dropdown-${item.name}`}
                      className="absolute left-0 mt-1 w-40 md:w-44 lg:w-48 bg-secondary/85 backdrop-blur-sm rounded-md shadow-lg z-[9999] transition-all duration-200 ease-in-out transform origin-top"
                      role="menu"
                      aria-labelledby={`${item.name}-button`}
                    >
                      {renderDesktopDropdownItems(item.dropdown, item.name)}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-secondary hover:bg-secondary hover:text-primary px-1 md:px-2 py-2 rounded-md text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary transition-colors duration-300 flex items-center whitespace-nowrap"
                >
                  {item.name === "Home" ? <Home className="h-4 w-4 md:h-5 md:w-5" aria-label="Home" /> : item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Center Spacer (Floating Component) */}
      <div className={`${getCenterWidth()} shrink-0 flex-none`}></div>

      {/* Right Navigation */}
      <div
        className={`flex flex-1 min-w-0 justify-end pr-0 ${
          screenSize.isLargeDesktop || screenSize.isDesktop ? "whitespace-nowrap" : "flex-wrap"
        } ${!screenSize.isLargeDesktop && !screenSize.isDesktop ? "" : "overflow-visible"}`}
      >
        <nav
          className="flex flex-wrap items-center justify-center md:justify-end gap-x-1 md:gap-x-2 lg:gap-x-3 xl:gap-x-4 w-full"
          aria-label="Main navigation - right"
        >
          {rightNavItems.map((item) => (
            <div
              key={item.name}
              className="relative flex-shrink-0 mt-1 md:mt-0"
              ref={(el) => {
                if (dropdownRefs.current) {
                  dropdownRefs.current[item.name] = el
                }
              }}
            >
              {item.dropdown ? (
                <>
                  <button
                    className="flex items-center text-secondary hover:bg-secondary hover:text-primary px-1 md:px-2 py-1 md:py-2 rounded-md text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary transition-colors duration-300 whitespace-nowrap"
                    onClick={(e) => handleToggleDropdown(e, item.name)}
                    aria-expanded={activeDropdown === item.name}
                    aria-controls={`dropdown-${item.name}`}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {activeDropdown === item.name && (
                    <div
                      id={`dropdown-${item.name}`}
                      className="absolute right-0 mt-1 w-40 md:w-44 lg:w-48 bg-secondary/70 rounded-md shadow-lg z-[9999] transition-all duration-300 ease-in-out transform origin-top"
                      role="menu"
                      aria-labelledby={`${item.name}-button`}
                    >
                      {renderDesktopDropdownItems(item.dropdown, item.name)}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-secondary hover:bg-secondary hover:text-primary px-1 md:px-2 py-2 rounded-md text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary transition-colors duration-300 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

