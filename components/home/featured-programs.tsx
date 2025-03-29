"use client"

import Link from "next/link"
import Image from "next/image"

const programs = [
  {
    title: "School of Engineering & Technology",
    description: "Build expertise in AI, robotics, IoT, and software engineering with hands-on industry experience.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/academics/engineering-technology",
  },
  {
    title: "School of Arts, Humanities & Management",
    description:
      "Explore literature, philosophy, psychology, and business to develop creativity and leadership skills.                                              ",
    image: "/placeholder.svg?height=300&width=500",
    link: "/academics/arts-humanities-management",
  },
  {
    title: "School of Sciences & Allied Health Science",
    description: "Advance in life sciences, medical technology, and healthcare through research-driven learning.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/academics/science-health",
  },
  {
    title: "School of Physical Education and Sports",
    description: "Enhance skills in sports science, physical education, and fitness management.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/academics/physical-education",
  },
  {
    title: "School of Aeronautics",
    description: "Dive into aviation technology, aerospace engineering, and flight systems.",
    image: "/placeholder.svg?height=300&width=500",
    link: "/academics/aeronautics",
  },
]

function ProgramCard({ program }) {
  return (
    <div className="group border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white h-full flex flex-col">
      <div className="relative h-48 sm:h-56">
        <Image
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col p-4 sm:p-6 flex-grow">
        <h3 className="text-lg sm:text-xl text-primary font-bold mb-2">{program.title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{program.description}</p>
        <div className="mt-4">
          <Link
            href={program.link}
            className="w-32 px-4 py-2 bg-primary text-secondary font-medium rounded-full hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg text-center block mx-auto hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-md"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedPrograms() {
  return (
    <>
      <section className="my-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">ACADEMICS</h1>
        <p className="text-center text-primary mb-10 max-w-3xl mx-auto">
          Explore our diverse range of academic programs designed to prepare you for successful careers in various fields.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-22px)]">
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
