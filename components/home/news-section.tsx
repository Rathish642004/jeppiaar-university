"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"

const newsItems = [
  {
    title: "Jeppiaar University Ranks Among Top 100 in NIRF 2024",
    excerpt: "The university has been recognized for its excellence in teaching, research, and placement.",
    date: "February 15, 2024",
    image: "/placeholder.svg?height=100&width=100",
    category: "Achievement",
    link: "/news/nirf-ranking-2024",
  },
  {
    title: "New Research Center for Artificial Intelligence Inaugurated",
    excerpt: "The state-of-the-art facility aims to foster innovation and research in AI and machine learning.",
    date: "January 28, 2024",
    image: "/placeholder.svg?height=100&width=100",
    category: "Research",
    link: "/news/ai-research-center",
  },
  {
    title: "Jeppiaar University Signs MoU with Leading Industry Partners",
    excerpt: "The collaboration will provide students with internship opportunities and industry exposure.",
    date: "January 10, 2024",
    image: "/placeholder.svg?height=100&width=100",
    category: "Partnership",
    link: "/news/industry-partnerships",
  },
  {
    title: "Annual Cultural Festival 'Jepfest' Announced",
    excerpt: "The week-long celebration will showcase student talents in arts, music, and cultural performances.",
    date: "December 15, 2023",
    image: "/placeholder.svg?height=100&width=100",
    category: "Event",
    link: "/news/jepfest-2024",
  },
  {
    title: "Jeppiaar University Launches New Scholarship Program",
    excerpt: "The merit-based scholarship aims to support academically outstanding students from underprivileged backgrounds.",
    date: "December 5, 2023",
    image: "/placeholder.svg?height=100&width=100",
    category: "Scholarship",
    link: "/news/scholarship-program",
  },
]

export default function NewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const scrollSpeed = 1 // Pixels per frame; adjust for desired speed

    const smoothScroll = () => {
      if (isPausedRef.current) return

      scrollContainer.scrollTop += scrollSpeed

      // Reset scroll position when reaching halfway (since content is duplicated)
      if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
        scrollContainer.scrollTop = 1 // Small offset to avoid browser quirks
      }

      requestAnimationFrame(smoothScroll)
    }

    // Pause scrolling on hover
    const handleMouseEnter = () => {
      isPausedRef.current = true
    }

    // Resume scrolling when hover ends
    const handleMouseLeave = () => {
      isPausedRef.current = false
      requestAnimationFrame(smoothScroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    // Start scrolling immediately
    requestAnimationFrame(smoothScroll)

    // Cleanup: remove event listeners on unmount
    return () => {
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="text-primary h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-primary">Latest News</h2>
        <Link href="/news" className="text-primary font-medium hover:underline flex items-center gap-1">
          <Calendar className="h-6 w-6 md:h-7 md:w-7" />
        </Link>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-hidden pr-2 flex-1"
        style={{
          height: "calc(100% - 80px)", // Matches original height
          scrollBehavior: "smooth",
          overflowY: "hidden", // Hides scrollbar for ticker effect
        }}
      >
        <div className="space-y-3 md:space-y-4">
          {[...newsItems, ...newsItems].map((news, index) => (
            <article
              key={`news-${index}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white transform hover:scale-[1.02] duration-300 h-auto flex p-3 items-center"
            >
              <img
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg mr-3 md:mr-4"
              />
              <div className="flex flex-col flex-1">
                <div className="mb-1">
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    {news.category}
                  </Badge>
                  <span className="text-xs md:text-sm text-primary/70 ml-2">{news.date}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-primary mb-1">{news.title}</h3>
                <p className="text-primary/80 mb-2 text-xs md:text-sm line-clamp-2">{news.excerpt}</p>
                <Link href={news.link} className="text-primary font-medium hover:underline text-xs md:text-sm">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-6 text-center">
        <Button variant="secondary" asChild className="text-sm md:text-base">
          <Link href="/news">More News</Link>
        </Button>
      </div>
    </section>
  )
}