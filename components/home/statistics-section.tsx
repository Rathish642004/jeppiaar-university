"use client"

import { useEffect, useState, useRef } from "react"
import { Users, BookOpen, Award, Building2 } from "lucide-react"

const stats = [
  {
    icon: Users,
    count: 15000,
    suffix: "+",
    label: "Students",
  },
  {
    icon: BookOpen,
    count: 25,
    suffix: "+",
    label: "Programs",
  },
  {
    icon: Award,
    count: 95,
    suffix: "%",
    label: "Placement Rate",
  },
  {
    icon: Building2,
    count: 150,
    suffix: "+",
    label: "Corporate Partners",
  },
]

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const interval = 16

    const animateCounts = () => {
      const startTime = Date.now()
      const frameDuration = 1000 / 60 // for 60fps

      const updateCounters = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Only update state if progress has changed significantly
        if (progress === 1 || Math.floor(progress * 100) % 5 === 0) {
          setCounters(stats.map((stat) => Math.round(progress * stat.count)))
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounters)
        }
      }

      requestAnimationFrame(updateCounters)
    }

    animateCounts()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-center mb-2">OUR ACHIEVEMENTS</h3>
          <h2 className="text-6xl font-bold text-primary">Excellence in Numbers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-tertiary rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-secondary p-4 rounded-full mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl text-primary font-bold mb-2">
                    {counters[index].toLocaleString()}
                    {stat.suffix}
                  </div>
                  <p className="text-primary text-1xl font-bold">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

