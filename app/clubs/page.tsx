import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ClubsPage() {
  const clubs = [
    {
      name: "Cultural Club",
      description: "Promoting cultural activities and organizing cultural events.",
      image: "/placeholder.svg?height=300&width=400&text=Cultural+Club",
      link: "/clubs/cultural",
    },
    {
      name: "Technical Club",
      description: "Fostering technical skills and innovation among students.",
      image: "/placeholder.svg?height=300&width=400&text=Technical+Club",
      link: "/clubs/technical",
    },
    {
      name: "Sports Club",
      description: "Encouraging sports activities and organizing tournaments.",
      image: "/placeholder.svg?height=300&width=400&text=Sports+Club",
      link: "/clubs/sports",
    },
    {
      name: "Literary Club",
      description: "Promoting literary activities and organizing competitions.",
      image: "/placeholder.svg?height=300&width=400&text=Literary+Club",
      link: "/clubs/literary",
    },
    {
      name: "Social Service Club",
      description: "Engaging in social service activities and community outreach.",
      image: "/placeholder.svg?height=300&width=400&text=Social+Service+Club",
      link: "/clubs/social-service",
    },
    {
      name: "SDC",
      description: "Student Development Cell for holistic development and career readiness.",
      image: "/placeholder.svg?height=300&width=400&text=SDC",
      link: "/clubs/sdc",
    },
    {
      name: "NCC",
      description: "National Cadet Corps for leadership and character development.",
      image: "/placeholder.svg?height=300&width=400&text=NCC",
      link: "/clubs/ncc",
    },
    {
      name: "YRC",
      description: "Youth Red Cross for humanitarian values and community service.",
      image: "/placeholder.svg?height=300&width=400&text=YRC",
      link: "/clubs/yrc",
    },
    {
      name: "YUVA",
      description: "Youth leadership program for skill development and innovation.",
      image: "/placeholder.svg?height=300&width=400&text=YUVA",
      link: "/clubs/yuva",
    },
    {
      name: "Rotaract Club",
      description: "Service-oriented organization for leadership and community service.",
      image: "/placeholder.svg?height=300&width=400&text=Rotaract+Club",
      link: "/clubs/rotary-club",
    },
    {
      name: "NSS",
      description: "National Service Scheme for personality development through community service.",
      image: "/placeholder.svg?height=300&width=400&text=NSS",
      link: "/clubs/nss",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Student Clubs at Jeppiaar University"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Student Clubs</h1>
          <p className="text-xl text-white max-w-2xl">
            Explore the diverse range of clubs and activities at Jeppiaar University to enhance your skills and pursue
            your passions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            At Jeppiaar University, we believe in the holistic development of our students. Our clubs provide a platform
            for students to explore their interests, develop leadership skills, and build lasting friendships.
          </p>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {clubs.map((club, index) => (
              <Link href={club.link} key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 w-full">
                    <Image
                      src={club.image || "/placeholder.svg"}
                      alt={club.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{club.name}</h3>
                    <p className="text-gray-600">{club.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-16 bg-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Benefits of Joining Clubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
                <p>
                  Clubs provide opportunities to develop technical, creative, and soft skills that complement academic
                  learning.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Leadership Opportunities</h3>
                <p>
                  Take on leadership roles, organize events, and develop management skills that are valuable for your
                  career.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Networking</h3>
                <p>Connect with like-minded peers, seniors, and industry professionals to build a strong network.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to start a new club?</h2>
            <p className="mb-6 text-gray-600">
              If you have an idea for a new club, we encourage you to propose it to the Student Affairs Office.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
            >
              Contact Student Affairs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

