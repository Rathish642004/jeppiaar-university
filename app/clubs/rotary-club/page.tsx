import { Card, CardContent } from "@/components/ui/card"

export default function RotaryClubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rotaract Club</h1>
            <p className="text-xl max-w-3xl">
              Service above self - Developing leadership through community service and professional development.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="Rotaract Club Logo"
              className="rounded-full border-4 border-white shadow-lg"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Rotaract */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-yellow-700">About Rotaract Club</h2>
                <p className="mb-4">
                  The Rotaract Club at Jeppiaar University is a service-oriented organization sponsored by Rotary
                  International that brings together students to exchange ideas with leaders in the community, develop
                  leadership and professional skills, and have fun through service.
                </p>
                <p className="mb-4">
                  As a part of the global Rotary family, our Rotaract Club focuses on the development of young adults as
                  leaders in their communities and workplaces. We work closely with our sponsor Rotary Club to implement
                  service projects and engage in networking opportunities that enhance the knowledge and skills that
                  will assist members in personal development.
                </p>
                <p>
                  The Rotaract Club at Jeppiaar University embodies the Rotary motto of "Service Above Self" and is
                  committed to making a positive difference in our campus, community, and the world.
                </p>
              </CardContent>
            </Card>

            {/* Areas of Focus */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-yellow-700">Areas of Focus</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <img
                    src="/placeholder.svg?height=250&width=400"
                    alt="Community Service Project"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={400}
                    height={250}
                  />
                  <img
                    src="/placeholder.svg?height=250&width=400"
                    alt="Professional Development Session"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={400}
                    height={250}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-yellow-600">Community Service</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Orphanage and old age home visits</li>
                      <li>Blood donation camps</li>
                      <li>Health awareness campaigns</li>
                      <li>Environmental conservation</li>
                      <li>Education support for underprivileged</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-yellow-600">Professional Development</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Leadership workshops</li>
                      <li>Career guidance sessions</li>
                      <li>Industry expert talks</li>
                      <li>Skill development programs</li>
                      <li>Networking opportunities</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-yellow-600">International Service</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Cultural exchange programs</li>
                      <li>International understanding projects</li>
                      <li>Global grant initiatives</li>
                      <li>Participation in international conventions</li>
                      <li>Twinning with international Rotaract clubs</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-yellow-600">Club Service</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Fellowship activities</li>
                      <li>Team building events</li>
                      <li>Club administration</li>
                      <li>Membership development</li>
                      <li>Public relations and social media</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Projects */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-yellow-700">Recent Projects</h2>
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Project Vidyadan</h3>
                    <p className="mb-2">
                      An educational initiative that provided school supplies, books, and digital learning tools to 500+
                      underprivileged children in rural areas around Chennai.
                    </p>
                    <div className="text-sm text-gray-600">October 2024</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Green Campus Initiative</h3>
                    <p className="mb-2">
                      A comprehensive environmental project that included tree plantation, waste management system
                      implementation, and awareness campaigns across the university campus.
                    </p>
                    <div className="text-sm text-gray-600">August 2024</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Health Check-up Camp</h3>
                    <p className="mb-2">
                      A free health check-up camp organized in collaboration with local hospitals, benefiting over 1000
                      people from economically weaker sections of society.
                    </p>
                    <div className="text-sm text-gray-600">July 2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Join Rotaract */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-yellow-700">Join Rotaract</h2>
                <p className="mb-4">
                  Become a part of the global Rotaract family and make a difference in your community while developing
                  valuable leadership and professional skills.
                </p>
                <p className="mb-4">Membership benefits:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Leadership development opportunities</li>
                  <li>Professional networking</li>
                  <li>Community service experience</li>
                  <li>International connections</li>
                  <li>Recognition from Rotary International</li>
                </ul>
                <a
                  href="#"
                  className="block w-full bg-yellow-600 text-white text-center py-2 rounded-md hover:bg-yellow-700 transition-colors"
                >
                  Apply for Membership
                </a>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-yellow-700">Contact Rotaract</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-700 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Club President</p>
                      <p>Rtr. Karthik Ramachandran</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-700 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>rotaract@jeppiaaruniversity.ac.in</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-700 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+91 44 2345 6789</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-700 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Rotaract Office, Student Activity Center, Jeppiaar University Campus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-yellow-700">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-600 pl-3">
                    <h3 className="font-semibold">Installation Ceremony</h3>
                    <p className="text-sm text-gray-600">July 1, 2025</p>
                    <p className="text-sm mt-1">
                      Annual ceremony to install the new Board of Directors for the Rotary year 2025-26.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-600 pl-3">
                    <h3 className="font-semibold">Professional Development Workshop</h3>
                    <p className="text-sm text-gray-600">July 15, 2025</p>
                    <p className="text-sm mt-1">
                      Workshop on resume building and interview skills by industry experts.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-600 pl-3">
                    <h3 className="font-semibold">World Literacy Day Project</h3>
                    <p className="text-sm text-gray-600">September 8, 2025</p>
                    <p className="text-sm mt-1">
                      Book donation drive and literacy awareness campaign in rural schools.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

