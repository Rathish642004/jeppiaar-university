"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function GalleryClientPage() {
  const [activeCategory, setActiveCategory] = useState("campus")

  // Set active category based on URL hash on page load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash && ["campus", "events", "academic", "cultural", "sports"].includes(hash)) {
      setActiveCategory(hash)
      // Prevent automatic scrolling
      setTimeout(() => {
        window.scrollTo({
          top: document.querySelector(".py-12.container").offsetTop,
          behavior: "smooth",
        })
      }, 0)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-3xl">
            Explore the visual journey of Jeppiaar University through our collection of images showcasing campus life,
            events, and achievements.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["campus", "events", "academic", "cultural", "sports"].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                // Update URL hash without scrolling or triggering navigation
                window.history.replaceState(null, "", `#${category}`)
              }}
              className={`px-6 py-3 ${
                activeCategory === category ? "bg-primary text-white shadow-md" : "bg-white shadow-md hover:bg-gray-100"
              } rounded-full transition-colors`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Content Section */}
        {activeCategory === "campus" && (
          <div id="campus" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Campus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`campus-${i}`}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Campus+Image+${i + 1}`}
                      alt={`Campus view ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg">Campus View {i + 1}</h3>
                    <p className="text-gray-600 text-sm">
                      Beautiful architecture and landscapes of our university campus
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === "events" && (
          <div id="events" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`event-${i}`}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Event+Image+${i + 1}`}
                      alt={`Event ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg">University Event {i + 1}</h3>
                    <p className="text-gray-600 text-sm">
                      Conferences, seminars, and special events at Jeppiaar University
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === "academic" && (
          <div id="academic" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Academic</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`academic-${i}`}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Academic+Image+${i + 1}`}
                      alt={`Academic activity ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg">Academic Activity {i + 1}</h3>
                    <p className="text-gray-600 text-sm">Classroom sessions, labs, and academic achievements</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === "cultural" && (
          <div id="cultural" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Cultural</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`cultural-${i}`}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Cultural+Image+${i + 1}`}
                      alt={`Cultural event ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg">Cultural Event {i + 1}</h3>
                    <p className="text-gray-600 text-sm">Festivals, performances, and cultural celebrations</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory === "sports" && (
          <div id="sports" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Sports</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`sports-${i}`}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Sports+Image+${i + 1}`}
                      alt={`Sports activity ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg">Sports Activity {i + 1}</h3>
                    <p className="text-gray-600 text-sm">Tournaments, matches, and athletic achievements</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the vibrant campus life and state-of-the-art facilities at Jeppiaar University in person.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white py-3 px-8 rounded-md hover:bg-primary/90 transition-colors"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  )
}

