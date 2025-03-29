"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    type: "image",
    timing: 6, // seconds
    imageSrc: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741599080/hero-1_lecgro.jpg",
    title: "Excellence in Education",
    description: "Transforming lives through innovative teaching and research",
    buttonText: "Explore Programs",
    buttonLink: "/academics",
  },
  {
    type: "video",
    timing: 34, // seconds (used as a fallback)
    videoSrc: "https://res.cloudinary.com/dzpgjl9e3/video/upload/v1741879573/jeppiaar-university-intro_zvde0f.mp4",
    title: "Excellence in Education",
    description: "Transforming lives through innovative teaching and research",
    buttonText: "Explore Programs",
    buttonLink: "/academics",
  },
  {
    type: "image",
    timing: 6, // seconds
    imageSrc: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741683998/faculty_hidupu.webp",
    title: "World-Class Faculty",
    description: "Learn from distinguished professors and industry experts",
    buttonText: "Meet Our Faculty",
    buttonLink: "/academics/faculty",
  },
  {
    type: "image",
    timing: 6, // seconds
    imageSrc: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741684249/academic_bbsi0k.jpg",
    title: "Research & Innovation",
    description: "Contributing to advancements in science, technology, and society",
    buttonText: "Discover Research",
    buttonLink: "/research",
  },
]

export default function HeroSectionFallback() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const current = slides[currentSlide]

    if (current.type === "image") {
      const timer = setTimeout(() => {
        nextSlide()
      }, current.timing * 1000)

      return () => clearTimeout(timer)
    }
  }, [currentSlide])

  useEffect(() => {
    if (slides[currentSlide].type === "video" && videoRef.current) {
      videoRef.current.play()
    }
  }, [currentSlide])

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[500px] max-h-[640px] overflow-hidden z-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full h-full">
            {slide.type === "image" ? (
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                ref={videoRef}
                src={slide.videoSrc}
                className="w-full h-full object-cover"
                onEnded={nextSlide}
                autoPlay
                muted
                playsInline
              />
            )}
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
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
