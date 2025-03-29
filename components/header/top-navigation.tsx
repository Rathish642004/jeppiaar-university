"use client"

import Link from "next/link"
import { useState } from "react"

export function TopNavigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="bg-primary text-white py-1 sm:py-2 hidden md:block">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-wrap items-center justify-end">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-4 text-[10px] sm:text-xs">
            <Link
              href="/admissions/apply"
              className="bg-yellow-600 text-white px-1 sm:px-2 md:px-3 py-1 rounded-md font-bold animate-pulse hover:bg-red-700 transition-colors whitespace-nowrap"
              aria-label="admissions"
            >
              🔔 ADMISSIONS OPEN 2025
            </Link>
            <Link href="/contact" className="hover:underline py-1 whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

