import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function FacilitiesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Campus Facilities at Jeppiaar University"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Facilities</h1>
          <p className="text-xl max-w-3xl">
            State-of-the-art infrastructure designed to enhance your learning experience
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">World-Class Infrastructure</h2>
            <p className="text-lg mb-6 text-gray-700">
              At Jeppiaar University, we believe that a conducive learning environment is essential for academic
              excellence. Our campus is equipped with modern facilities that support both academic pursuits and
              extracurricular activities.
            </p>
            <p className="text-lg text-gray-700">
              From advanced laboratories to digital libraries, smart classrooms to recreational spaces, our
              infrastructure is designed to provide a comprehensive and enriching university experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="/placeholder.svg?height=400&width=300" alt="Modern Building" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="/placeholder.svg?height=400&width=300" alt="Modern Classroom" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image src="/placeholder.svg?height=400&width=300" alt="Library Interior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Academic Facilities</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Classrooms",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Technologically enhanced classrooms with interactive boards, projectors, and audio-visual equipment.",
              },
              {
                title: "Central Library",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Extensive collection of books, journals, and digital resources with comfortable reading spaces.",
              },
              {
                title: "Research Laboratories",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Well-equipped labs for research in various disciplines with advanced instruments and tools.",
              },
              {
                title: "Computer Centers",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Modern computing facilities with high-speed internet and specialized software for academic use.",
              },
              {
                title: "Seminar Halls",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Spacious halls for conferences, seminars, and academic events with modern presentation facilities.",
              },
              {
                title: "Innovation Hub",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Dedicated space for students to work on innovative projects with mentorship and resources.",
              },
            ].map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Recreation */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Sports & Recreation</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=800&width=600" alt="Sports facilities" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Sports Complex</h3>
            <p className="text-lg mb-6 text-gray-700">
              Our state-of-the-art sports complex caters to various indoor and outdoor sports activities. The facilities
              include:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Olympic-sized swimming pool
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Multi-purpose indoor stadium
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cricket and football grounds
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tennis, basketball, and volleyball courts
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Modern fitness center with trainers
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Recreational Spaces</h3>
            <p className="text-lg mb-6 text-gray-700">
              Beyond academics and sports, we offer various recreational spaces for students to relax, socialize, and
              rejuvenate:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Student lounges and common rooms
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cafeterias and food courts
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Amphitheater for cultural performances
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Landscaped gardens and outdoor seating areas
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Indoor games and entertainment zones
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Recreational spaces"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Other Facilities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Other Campus Facilities</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Medical Center",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "24/7 medical facility with qualified doctors and nurses for emergency and routine healthcare.",
              },
              {
                title: "Banking Services",
                image: "/placeholder.svg?height=600&width=800",
                description: "On-campus bank branch and ATMs for convenient financial transactions.",
              },
              {
                title: "Transportation",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Fleet of buses connecting the campus to various parts of the city for commuting students.",
              },
              {
                title: "Wi-Fi Campus",
                image: "/placeholder.svg?height=600&width=800",
                description: "High-speed internet connectivity throughout the campus for academic and personal use.",
              },
              {
                title: "Shopping Complex",
                image: "/placeholder.svg?height=600&width=800",
                description: "Mini shopping center with stationery stores, bookshops, and daily essentials.",
              },
              {
                title: "Auditorium",
                image: "/placeholder.svg?height=600&width=800",
                description: "Large auditorium with advanced acoustics and seating for major events and ceremonies.",
              },
            ].map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Facility Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={`/placeholder.svg?height=600&width=800&text=Facility Image ${index + 1}`}
                alt={`Facility Gallery Image ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Experience Our Campus</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Visit Jeppiaar University to experience our world-class facilities firsthand. Schedule a campus tour today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Schedule a Tour
          </Link>
          <Link
            href="/virtual-tour"
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            Virtual Tour
          </Link>
        </div>
      </section>
    </div>
  )
}

