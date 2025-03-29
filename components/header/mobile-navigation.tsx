"use client"

import type React from "react"

import { useRef, useEffect, type RefObject } from "react"
import Link from "next/link"
import { ChevronRight, X } from "lucide-react"
import { leftNavItems, rightNavItems } from "./desktop-navigation"

const allNavItems = [...leftNavItems, ...rightNavItems]

interface MobileNavigationProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isOpen: boolean) => void
  activeDropdown: string | null
  toggleDropdown: (name: string) => void
  dropdownRefs: RefObject<Record<string, HTMLDivElement | null>>
}

export function MobileNavigation({
  isSidebarOpen,
  setIsSidebarOpen,
  activeDropdown,
  toggleDropdown,
  dropdownRefs,
}: MobileNavigationProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null)

  // Add effect to dispatch event when sidebar state changes
  useEffect(() => {
    // Dispatch custom event when sidebar state changes
    const event = new CustomEvent("sidebarStateChange", {
      detail: { isOpen: isSidebarOpen },
    })
    window.dispatchEvent(event)
  }, [isSidebarOpen])

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const handleToggleDropdown = (e: React.MouseEvent, name: string) => {
    e.preventDefault()
    toggleDropdown(name)
  }

  const renderMobileDropdownItems = (items: { name: string; href: string }[]) => (
    <div className="space-y-1 p-1">
      {items.map((item) => (
        <div key={item.name} className="w-full">
          <Link
            href={item.href}
            onClick={() => closeSidebar()}
            className="w-full text-left block px-3 py-2 text-sm text-gray-600 hover:border-primary hover:border hover:bg-gray-50 hover:text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary whitespace-normal break-words transition-all duration-200 active:scale-95 active:translate-y-0.5 active:shadow-inner"
            role="menuitem"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  )

  return (
    <>
      {/* Mobile Header (Visible on small screens) */}
      <div className="md:hidden flex justify-between items-center py-4 px-3 sm:px-5">
        <div className="flex items-center">
          <button
            className="rounded-md p-2 text-secondary hover:bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-secondary"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-expanded={isSidebarOpen}
            aria-controls="mobile-sidebar"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <Link
          href="/admissions/apply"
          className="bg-secondary text-primary px-1 sm:px-2 md:px-3 py-1 rounded-md font-[10px] animate-pulse hover:bg-secondary/80 transition-colors whitespace-nowrap flex flex-col items-center"
          aria-label="admissions"
        >
          <span>Apply</span>
        </Link>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-[100] inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={sidebarRef}
          id="mobile-sidebar"
          className={`fixed z-[100] inset-y-0 left-0 w-64 sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Mobile Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="text-primary font-bold">
              Jeppiaar University
            </Link>
            <button
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="py-4 px-3 sm:px-5">
            <nav className="px-4" aria-label="Mobile navigation">
              {allNavItems.map((item) => (
                <div key={item.name} className="py-1 border-b border-gray-100 last:border-0">
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-2 py-3 text-left text-primary hover:bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                        onClick={(e) => handleToggleDropdown(e, item.name)}
                        aria-expanded={activeDropdown === item.name}
                        aria-controls={`mobile-dropdown-${item.name}`}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronRight
                          className={`h-5 w-5 text-gray-500 transition-transform ${
                            activeDropdown === item.name ? "rotate-90" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div
                          id={`mobile-dropdown-${item.name}`}
                          className="mt-1 pl-4 border-l-2 border-primary/20 ml-2 mb-2 transition-all duration-300 ease-in-out"
                          role="menu"
                        >
                          {renderMobileDropdownItems(item.dropdown)}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || "/"}
                      onClick={closeSidebar}
                      className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 px-2">
                <Link
                  href="/admissions/apply"
                  onClick={closeSidebar}
                  className="block w-full bg-primary text-white text-center py-3 rounded-md font-medium hover:bg-primary/90"
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

