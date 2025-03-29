"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Excellence in Education",
    description: "Transforming lives through innovative teaching and research",
    buttonText: "Explore Programs",
    buttonLink: "/academics",
    bgColor: "bg-blue-800",
  },
  {
    title: "World-Class Faculty",
    description: "Learn from distinguished professors and industry experts",
    buttonText: "Meet Our Faculty",
    buttonLink: "/academics/faculty",
    bgColor: "bg-green-800",
  },
  {
    title: "Research & Innovation",
    description: "Contributing to advancements in science, technology, and society",
    buttonText: "Discover Research",
    buttonLink: "/research",
    bgColor: "bg-purple-800",
  },
]

export default function SimpleHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 6000)

    return () => clearTimeout(timer)
  }, []) //Fixed useEffect dependency

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          } ${slide.bgColor}`}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                  <p className="text-xl text-white mb-8">{slide.description}</p>
                  <Button size="lg" variant="secondary" asChild>
                    <a href={slide.buttonLink}>{slide.buttonText}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

