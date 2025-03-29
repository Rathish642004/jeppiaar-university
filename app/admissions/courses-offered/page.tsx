"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  BookOpen,
  GraduationCap,
  FileText,
  Clock,
  ArrowRight,
  Users,
  Building,
  Briefcase,
} from "lucide-react"
import { useState } from "react"

// Define types for our data structure
type Specialization = string

type Program = {
  name: string
  specializations: Specialization[]
}

type School = {
  name: string
  image: string
  icon: React.ReactNode
  description: string
  programs: Program[]
}

// School component to display a single school and its programs
const SchoolCard = ({
  school,
  openPrograms,
  toggleProgram,
}: {
  school: School
  openPrograms: Record<string, boolean>
  toggleProgram: (schoolName: string, programName: string) => void
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
      <div className="relative h-64 md:h-80">
        <Image src={school.image || "/placeholder.svg"} alt={school.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 w-full">
            <div className="text-white">
              <div className="flex items-center mb-2">
                <div className="bg-primary p-2 rounded-full mr-3">{school.icon}</div>
                <h2 className="text-3xl font-bold">{school.name}</h2>
              </div>
              <p className="text-white/90">{school.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <GraduationCap className="mr-2 h-5 w-5 text-primary" />
          Available Programs
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {school.programs.map((program) => {
            const key = `${school.name}-${program.name}`
            const isOpen = openPrograms[key]

            return (
              <div
                key={program.name}
                className="border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  className={`w-full flex items-center justify-between p-4 ${
                    isOpen ? "bg-primary/5 text-primary" : "bg-gray-50 text-gray-900"
                  } text-left transition-colors duration-200`}
                  onClick={() => toggleProgram(school.name, program.name)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium">{program.name}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                  <div className="p-4 bg-white">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">SPECIALIZATIONS</h4>
                    <ul className="space-y-2">
                      {program.specializations.map((spec) => (
                        <li key={spec} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                          <Link
                            href={`/admissions/apply?program=${program.name}&specialization=${spec}`}
                            className="text-gray-700 hover:text-primary hover:underline"
                          >
                            {spec}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                      <Button variant="outline" size="sm" className="text-primary" asChild>
                        <Link href={`/academics/${school.name.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Define our content data
const schoolsData: School[] = [
  {
    name: "Engineering & Technology",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Building className="h-6 w-6" />,
    description:
      "Offering cutting-edge programs in various engineering disciplines with state-of-the-art laboratories and experienced faculty.",
    programs: [
      {
        name: "B.Tech",
        specializations: [
          "Computer Science & Engineering",
          "Information Technology",
          "Electronics & Communication Engineering",
          "Electrical & Electronics Engineering",
          "Mechanical Engineering",
          "Civil Engineering",
        ],
      },
      {
        name: "M.Tech",
        specializations: ["Computer Science & Engineering", "Electronics & Communication", "Power Electronics"],
      },
      {
        name: "Ph.D",
        specializations: ["Computer Science", "Electronics", "Mechanical Engineering"],
      },
    ],
  },
  {
    name: "Arts, Humanities & Management",
    image: "/placeholder.svg?height=400&width=600",
    icon: <BookOpen className="h-6 w-6" />,
    description:
      "Fostering critical thinking and creativity through comprehensive programs in arts, humanities, and management studies.",
    programs: [
      {
        name: "BBA",
        specializations: ["Business Administration"],
      },
      {
        name: "MBA",
        specializations: ["Finance", "Marketing", "Human Resources", "Operations"],
      },
      {
        name: "B.A",
        specializations: ["English", "Tamil", "History", "Economics"],
      },
      {
        name: "M.A",
        specializations: ["English Literature", "Tamil Literature", "Economics"],
      },
      {
        name: "B.Com",
        specializations: ["Commerce", "Accounting & Finance"],
      },
    ],
  },
  {
    name: "Science & Health",
    image: "/placeholder.svg?height=400&width=600",
    icon: <FileText className="h-6 w-6" />,
    description:
      "Providing comprehensive education in science and health disciplines with modern laboratories and research facilities.",
    programs: [
      {
        name: "B.Sc",
        specializations: ["Mathematics", "Physics", "Chemistry", "Computer Science", "Nursing"],
      },
      {
        name: "M.Sc",
        specializations: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      },
      {
        name: "BCA",
        specializations: ["Computer Applications"],
      },
      {
        name: "MCA",
        specializations: ["Computer Applications"],
      },
    ],
  },
  {
    name: "Physical Education",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Users className="h-6 w-6" />,
    description:
      "Developing sports professionals through comprehensive physical education programs with excellent sports facilities.",
    programs: [
      {
        name: "B.P.Ed",
        specializations: ["Physical Education"],
      },
      {
        name: "M.P.Ed",
        specializations: ["Physical Education"],
      },
      {
        name: "Diploma",
        specializations: ["Sports Coaching", "Fitness Training"],
      },
    ],
  },
  {
    name: "Aeronautics",
    image: "/placeholder.svg?height=400&width=600",
    icon: <Briefcase className="h-6 w-6" />,
    description:
      "Offering specialized programs in aeronautical engineering and aviation with state-of-the-art simulation facilities.",
    programs: [
      {
        name: "B.Tech",
        specializations: ["Aeronautical Engineering", "Aerospace Engineering"],
      },
      {
        name: "Diploma",
        specializations: ["Aircraft Maintenance Engineering", "Aviation Management"],
      },
      {
        name: "Certificate",
        specializations: ["Pilot Training", "Air Traffic Control"],
      },
    ],
  },
]

export default function CoursesOfferedPage() {
  const [openPrograms, setOpenPrograms] = useState<Record<string, boolean>>({})

  const toggleProgram = (schoolName: string, programName: string) => {
    const key = `${schoolName}-${programName}`
    setOpenPrograms((prev) => {
      // Create a new state object
      const newState = { ...prev }

      // If we're opening this program, close all others first
      if (!prev[key]) {
        // Reset all to closed
        Object.keys(newState).forEach((k) => {
          newState[k] = false
        })
      }

      // Toggle the selected program
      newState[key] = !prev[key]
      return newState
    })
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Courses Offered</h1>
              <p className="text-xl opacity-90 mb-8">
                Discover a wide range of undergraduate, postgraduate, and doctoral programs designed to shape your
                future
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/admissions/apply"
                  className="bg-secondary text-primary  border-none shadow-md 
                   transition-all duration-300 hover:shadow-lg hover:scale-105 px-4 py-4 rounded-lg inline-flex items-center text-lg font-semibold h-[50px] "
                >
                  Apply Now
                </Link>
                <Link
                  href="/admissions/eligibility"
                  className="bg-secondary text-primary  border-none shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 px-4 py-4 rounded-lg inline-flex items-center text-lg font-semibold h-[50px]"
                >
                  Check Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-8 shadow-md">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-gray-600">Schools</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600">Programs</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Specializations</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600">Faculty Members</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* School Tabs */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Schools and Programs</h2>
            </div>
            {/* School Content */}
            <div className="space-y-12">
              {schoolsData.map((school) => (
                <SchoolCard
                  key={school.name}
                  school={school}
                  openPrograms={openPrograms}
                  toggleProgram={toggleProgram}
                />
              ))}
            </div>

            <div className="mt-16 bg-gray-100 rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Need More Information?</h2>
                <p className="text-gray-600">Our admission counselors are here to help you with any questions</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Talk to an Advisor</h3>
                  <p className="text-sm text-gray-600 mb-4">Schedule a call with our admission counselors</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Book Appointment</Link>
                  </Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Campus</h3>
                  <p className="text-sm text-gray-600 mb-4">Take a tour of our state-of-the-art campus</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Schedule Visit</Link>
                  </Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Download Brochure</h3>
                  <p className="text-sm text-gray-600 mb-4">Get detailed information about our programs</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="">Download PDF</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Information Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-gray-200 shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary">Quick Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Admission Status</h4>
                  <div className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded mr-2 flex-shrink-0">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-gray-700">Admissions Open for 2023-24</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Important Dates</h4>
                  <div className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded mr-2 flex-shrink-0">
                      <Clock className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-gray-700">Application Deadline: August 31, 2023</p>
                      <p className="text-gray-700 mt-1">Session Begins: September 15, 2023</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                  <div className="flex items-start">
                    <span className="bg-primary/10 p-1 rounded mr-2 flex-shrink-0">
                      <Users className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-gray-700">Admissions Office: +91 9876543210</p>
                      <p className="text-gray-700 mt-1">Email: admissions@jeppiaar.edu.in</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <Link href="/admissions/apply">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

