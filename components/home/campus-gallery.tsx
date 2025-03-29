"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741599070/hero-image_jhy1og.jpg",
    alt: "University Main Building",
    caption: "Our iconic main administrative building",
    link: "/campus/main-building",
  },
  {
    src: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741685029/gallery_ydkcgs.webp",
    alt: "Modern Library",
    caption: "State-of-the-art library with extensive collections",
    link: "/campus/library",
  },
  {
    src: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741685028/gal_hm865f.webp",
    alt: "Research Labs",
    caption: "Advanced research laboratories equipped with cutting-edge technology",
    link: "/campus/research-labs",
  },
  {
    src: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741685029/spor_zntl1v.webp",
    alt: "Student Center",
    caption: "Vibrant student center for activities and gatherings",
    link: "/campus/student-center",
  },
  {
    src: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741685030/sportd_xpragu.webp",
    alt: "Sports Complex",
    caption: "Comprehensive sports facilities for various games and athletics",
    link: "/campus/sports-complex",
  },
  {
    src: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741685028/gal_hm865f.webp",
    alt: "Green Campus",
    caption: "Lush green spaces across the eco-friendly campus",
    link: "/campus/green-spaces",
  },
]

export default function CampusGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const resumeAutoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startAutoPlay = () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current)

      autoPlayTimeoutRef.current = setTimeout(() => {
        if (isAutoPlaying) {
          setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
        }
        startAutoPlay()
      }, 2500) // Faster rotation - every 2.5 seconds
    }

    if (isAutoPlaying) {
      startAutoPlay()
    }

    return () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current)
      if (resumeAutoPlayTimeoutRef.current) clearTimeout(resumeAutoPlayTimeoutRef.current)
    }
  }, [isAutoPlaying, activeIndex, galleryImages.length])

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    if (resumeAutoPlayTimeoutRef.current) clearTimeout(resumeAutoPlayTimeoutRef.current)

    // Resume auto play after 5 seconds of inactivity
    resumeAutoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  const handlePrev = () => {
    pauseAutoPlay()
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    pauseAutoPlay()
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    pauseAutoPlay()
    setIsDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const diff = startX - clientX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaX > 50) {
        handleNext()
      } else if (e.deltaX < -50) {
        handlePrev()
      }
    }

    carousel.addEventListener("wheel", handleWheel)
    return () => {
      carousel.removeEventListener("wheel", handleWheel)
    }
  }, [carouselRef])

  return (
    <section className="my-20 relative">
      <h3 className="text-4xl text-primary font-bold text-center mb-3">OUR GALLERY</h3>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Experience the vibrant essence of our campus through a stunning visual journey
      </p>

      <div
        className="relative h-[450px] w-full overflow-hidden"
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: "2000px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Create a deeper stack effect with multiple layers */}
          <div className="absolute w-full h-full" style={{ transform: "translateZ(-200px) scale(0.8)", opacity: 0.1 }}>
            {/* Background decorative cards */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`bg-card-${i}`}
                className="absolute rounded-xl bg-gray-200/20"
                style={{
                  width: "380px",
                  height: "250px",
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
                  transform: `rotateX(${Math.random() * 40 - 20}deg) rotateY(${Math.random() * 40 - 20}deg) translateZ(${-300 - Math.random() * 200}px)`,
                  opacity: 0.1 + Math.random() * 0.2,
                }}
              />
            ))}
          </div>

          {galleryImages.map((image, index) => {
            // Calculate position relative to active index
            const position = (index - activeIndex + galleryImages.length) % galleryImages.length

            // Calculate how far the card is from the active card (considering the shortest path)
            const distance = Math.min(
              Math.abs(position),
              Math.abs(position - galleryImages.length),
              Math.abs(position + galleryImages.length),
            )

            // Determine z-index based on distance from active card
            const zIndex = galleryImages.length - distance

            // Enhanced scaling based on position - make background cards more visible
            const scale = position === 0 ? 1 : Math.max(0.5, 0.9 - Math.min(distance, 4) * 0.1)

            // Enhanced opacity based on distance - keep background cards more visible
            const opacity = position === 0 ? 1 : Math.max(0.3, 0.8 - Math.min(distance, 4) * 0.15)

            // Calculate transform based on position with more dramatic depth
            let translateX = "0%"
            let translateY = "0px"
            let translateZ = "0px"
            let rotateY = "0deg"

            if (position !== 0) {
              const direction = position > 0 ? 1 : -1
              const offsetFactor = Math.min(distance, 4)

              // More dramatic horizontal offset with circular arrangement
              const angle = (position / galleryImages.length) * Math.PI * 2
              translateX = `${direction * (20 + offsetFactor * 5)}%`

              // Add vertical offset for more depth - less for background cards
              translateY = `${distance * 3}px`

              // Enhanced Z depth - create a circular arrangement
              translateZ = `-${offsetFactor * 120}px`

              // Enhanced rotation - more dramatic for side cards, less for back cards
              rotateY = `${-direction * (12 + offsetFactor * 3)}deg`

              // For cards that would be directly behind, adjust position to make them visible
              if (Math.abs(position) >= galleryImages.length / 2) {
                // These are "back" cards - position them higher or lower to be visible
                translateY = `${-80 - distance * 5}px`
                translateZ = `-${100 + offsetFactor * 20}px`
                rotateY = `${180 + direction * 10}deg` // Flip them to face backward
              }
            }

            // Enhanced blur effect based on distance - less blur for background cards
            const blurAmount = distance === 0 ? 0 : Math.min(distance * 0.8, 3)

            // Add subtle shadow to enhance depth
            const shadowIntensity = Math.max(0.1, 1 - distance * 0.15)

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={{
                  zIndex,
                  opacity,
                  transform: `translateX(${translateX}) translateY(${translateY}) translateZ(${translateZ}) rotateY(${rotateY}) scale(${scale})`,
                  filter: `blur(${blurAmount}px)`,
                  boxShadow: `0 ${10 * shadowIntensity}px ${30 * shadowIntensity}px rgba(0,0,0,${shadowIntensity * 0.3})`,
                  pointerEvents: position === 0 ? "auto" : "none",
                }}
              >
                <Link href={image.link}>
                  <div className="relative w-[380px] md:w-[500px] h-[300px] md:h-[380px] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white w-[80%] sm:w-full mx-auto">
                      <h4 className="font-bold text-base sm:text-lg truncate">{image.alt}</h4>
                      <p className="text-xs sm:text-sm opacity-90 line-clamp-2">{image.caption}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}

        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 z-10 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 z-10 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex justify-center mt-0 space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? "bg-primary scale-125" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="mt-5 text-center">
        <Link
          href="/gallery"
          className="inline-block bg-secondary text-primary py-3 px-8 rounded-md border-2 border-transparent hover:border-primary transition-all duration-300 font-semibold text-lg 
          active:scale-95 active:translate-y-1"
        >
          Discover More
        </Link>
      </div>
    </section>
  )
}

