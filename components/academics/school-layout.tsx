"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

interface Faculty {
  name: string
  position: string
  qualification: string
  image: string
  specialization: string
}

interface Program {
  name: string
  duration: string
  eligibility: string
  description: string
  category: "UG" | "PG" | "Diploma" // Add this line
}

interface Facility {
  name: string
  description: string
  image: string
}

interface ResearchArea {
  title: string
  description: string
}

interface ResearchPublication {
  title: string
  author: string
  journal: string
  year: string
}

interface Event {
  title: string
  date: string
  description: string
  image: string
  isUpcoming?: boolean
}

interface GalleryImage {
  src: string
  alt: string
  caption: string
  category: string
}

interface SchoolLayoutProps {
  title: string
  subtitle: string
  description: string
  bannerImage: string
  vision: string
  mission: string
  programs: Program[]
  faculty: Faculty[]
  facilities: Facility[]
  admissionLink: string
  // New detailed props for each section
  researchAreas?: ResearchArea[]
  researchPublications?: ResearchPublication[]
  events?: Event[]
  galleryImages?: GalleryImage[]
}

const samplePrograms: Program[] = [
  {
    name: "B.Tech in Computer Science and Engineering",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "A comprehensive program covering algorithms, programming languages, software engineering, and more.",
    category: "UG",
  },

  {
    name: "B.Tech in Electronics and Communication",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "Study of electronic devices, circuits, communication equipment, and signal processing.",
    category: "UG",
  },
  {
    name: "B.Tech in Mechanical Engineering",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
    description: "Focuses on design, manufacturing, and operation of mechanical systems.",
    category: "UG",
  },
  {
    name: "M.Tech in Computer Science",
    duration: "2 Years",
    eligibility: "B.Tech/B.E in relevant discipline",
    description: "Advanced study in areas like AI, machine learning, and data science.",
    category: "PG",
  },
  {
    name: "M.Tech in Structural Engineering",
    duration: "2 Years",
    eligibility: "B.Tech/B.E in Civil Engineering",
    description: "Advanced study of structural analysis, design, and construction.",
    category: "PG",
  },
  {
    name: "MBA in Technology Management",
    duration: "2 Years",
    eligibility: "Bachelor's degree with min. 50% marks",
    description: "Combines business administration with technology management skills.",
    category: "PG",
  },
  {
    name: "Diploma in Computer Applications",
    duration: "1 Year",
    eligibility: "10+2 in any stream",
    description: "Practical training in computer applications and basic programming.",
    category: "Diploma",
  },
  {
    name: "Diploma in Electrical Engineering",
    duration: "3 Years",
    eligibility: "10th with Science and Mathematics",
    description: "Hands-on training in electrical systems, circuits, and maintenance.",
    category: "Diploma",
  },
]

export default function SchoolLayout({
  title,
  subtitle,
  description,
  bannerImage,
  vision,
  mission,
  programs = samplePrograms,
  faculty,
  facilities,
  admissionLink,
  researchAreas,
  researchPublications,
  events,
  galleryImages,
}: SchoolLayoutProps) {
  const [selectedCategory, setSelectedCategory] = useState<"UG" | "PG" | "Diploma">("UG")
  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[100px] w-full">
        <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-secondary border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full relative">
            <TabsList className="flex justify-start space-x-2 overflow-hidden w-full h-auto p-2 bg-transparent">
              <TabsTrigger
                value="overview"
                className="px-6 py-2 rounded border-2 border-primary text-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary hover:bg-primary/10"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="programs"
                className="px-6 py-2 rounded border-2 border-primary text-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary hover:bg-primary/10"
              >
                Programmes Offered
              </TabsTrigger>
              <TabsTrigger
                value="faculty"
                className="px-6 py-2 rounded border-2 border-primary text-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary hover:bg-primary/10"
              >
                Faculties
              </TabsTrigger>
              <TabsTrigger
                value="research"
                className="px-6 py-2 rounded border-2 border-primary text-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary hover:bg-primary/10"
              >
                Research
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="px-6 py-2 rounded border-2 border-primary text-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary hover:bg-primary/10"
              >
                Events
              </TabsTrigger>
              <TabsTrigger
                value="gallery"
                className="px-6 py-2 rounded border-2 border-primary text-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary hover:bg-primary/10"
              >
                Gallery
              </TabsTrigger>
            </TabsList>

            <div className="container mx-auto py-12 px-4">
              <TabsContent value="overview" className="mt-0">
                {/* About the School */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">About the School</h2>
                  <p className="text-gray-700 mb-8">{description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                      <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
                      <p className="text-gray-700">{vision}</p>
                    </div>
                    <div className="bg-secondary/20 p-6 rounded-lg border border-primary/20">
                      <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
                      <p className="text-gray-700">{mission}</p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-primary text-white rounded-lg shadow-lg p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
                  <p className="text-xl mb-6">
                    Take the first step towards a rewarding career in {title.split(" ").pop()}
                  </p>
                  <Button size="lg" variant="secondary" className="text-primary font-bold" asChild>
                    <Link href={admissionLink}>Apply Now</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="programs" className="mt-0">
                {/* Programs Offered */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">Programs Offered</h2>
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left side - Category Navigation */}
                    <div className="w-full md:w-1/4 flex flex-col gap-3">
                      <button
                        onClick={() => setSelectedCategory("UG")}
                        className={`p-4 text-left rounded-lg font-semibold transition-all ${
                          selectedCategory === "UG"
                            ? "bg-primary text-white shadow-md"
                            : "bg-gray-100 text-primary hover:bg-gray-200"
                        }`}
                      >
                        Undergraduate Programs
                      </button>
                      <button
                        onClick={() => setSelectedCategory("PG")}
                        className={`p-4 text-left rounded-lg font-semibold transition-all ${
                          selectedCategory === "PG"
                            ? "bg-primary text-white shadow-md"
                            : "bg-gray-100 text-primary hover:bg-gray-200"
                        }`}
                      >
                        Postgraduate Programs
                      </button>
                      <button
                        onClick={() => setSelectedCategory("Diploma")}
                        className={`p-4 text-left rounded-lg font-semibold transition-all ${
                          selectedCategory === "Diploma"
                            ? "bg-primary text-white shadow-md"
                            : "bg-gray-100 text-primary hover:bg-gray-200"
                        }`}
                      >
                        Diploma Programs
                      </button>
                    </div>

                    {/* Right side - Programs Grid */}
                    <div className="w-full md:w-3/4">
                      <h3 className="text-2xl font-bold text-primary mb-4">{selectedCategory} Programs</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {programs
                          .filter((program) => program.category === selectedCategory)
                          .map((program, index) => (
                            <Card key={index} className="hover:shadow-xl transition-shadow">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">{program.name}</h3>
                                <div className="mb-4">
                                  <p className="text-sm text-gray-500">
                                    <span className="font-semibold">Duration:</span> {program.duration}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    <span className="font-semibold">Eligibility:</span> {program.eligibility}
                                  </p>
                                </div>
                                <p className="text-gray-700 mb-4">{program.description}</p>
                                <Link
                                  href="/admissions/apply"
                                  className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition-colors"
                                >
                                  Apply Now
                                </Link>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                      {programs.filter((program) => program.category === selectedCategory).length === 0 && (
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                          <p className="text-gray-500">No {selectedCategory} programs available at this time.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faculty" className="mt-0">
                {/* Faculty */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">Our Faculty</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faculty.map((member, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative h-64">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                          <p className="text-gray-600 mb-2">{member.position}</p>
                          <p className="text-gray-500 text-sm mb-2">{member.qualification}</p>
                          <p className="text-gray-700">
                            <span className="font-semibold">Specialization:</span> {member.specialization}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="research" className="mt-0">
                {/* Research */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">Research</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Research Areas</h3>
                      <p className="text-gray-700 mb-4">
                        Our school is committed to advancing knowledge through cutting-edge research in various domains.
                        Our faculty and students actively engage in research projects that address real-world
                        challenges.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {researchAreas &&
                          researchAreas.map((area, index) => (
                            <div key={index} className="bg-secondary/10 p-4 rounded-lg">
                              <h4 className="font-semibold text-primary">{area.title}</h4>
                              <p className="text-sm text-gray-700">{area.description}</p>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">Research Publications</h3>
                      <div className="space-y-4">
                        {researchPublications &&
                          researchPublications.map((publication, index) => (
                            <div key={index} className="border-l-4 border-primary pl-4">
                              <h4 className="font-semibold">{publication.title}</h4>
                              <p className="text-sm text-gray-500">
                                {publication.author}, {publication.journal}, {publication.year}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="events" className="mt-0">
                {/* Events */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">Events</h2>
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {events &&
                        events.map((event, index) => (
                          <Card key={index} className="overflow-hidden">
                            <div className="relative h-48">
                              <Image
                                src={event.image || "/placeholder.svg?height=300&width=500"}
                                alt={event.title}
                                fill
                                className="object-cover"
                              />
                              {event.isUpcoming && (
                                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 m-2 rounded">
                                  Upcoming
                                </div>
                              )}
                            </div>
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                              <p className="text-gray-500 mb-2">{event.date}</p>
                              <p className="text-gray-700 mb-4">{event.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-0">
                {/* Gallery */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-6">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages &&
                      galleryImages.map((image, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg">
                          <div className="aspect-square relative">
                            <Image
                              src={image.src || `/placeholder.svg?height=400&width=400&text=Gallery+Image+${index + 1}`}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white">
                              <h3 className="font-bold">{image.category}</h3>
                              <p className="text-sm">{image.caption}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

