import { Card, CardContent } from "@/components/ui/card"

export default function SDCPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Development Cell (SDC)</h1>
            <p className="text-xl max-w-3xl">
              Empowering students with skills and opportunities for holistic development and career readiness.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="Student Development Cell Logo"
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
          {/* About SDC */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">About Student Development Cell</h2>
                <p className="mb-4">
                  The Student Development Cell (SDC) at Jeppiaar University is dedicated to enhancing students' personal
                  and professional growth beyond academic learning. We focus on developing essential soft skills,
                  leadership qualities, and career readiness to prepare students for successful futures.
                </p>
                <p className="mb-4">
                  Our comprehensive approach includes workshops, training programs, industry interactions, and
                  mentorship opportunities designed to bridge the gap between academic knowledge and industry
                  requirements.
                </p>
                <p>
                  The SDC works closely with various departments, industry partners, and alumni to create a robust
                  ecosystem that nurtures talent and provides students with the tools they need to excel in their chosen
                  fields.
                </p>
              </CardContent>
            </Card>

            {/* Key Initiatives */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Key Initiatives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Career Development Workshop"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={500}
                    height={300}
                  />
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Industry Visit"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={500}
                    height={300}
                  />
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Career Development Programs</h3>
                      <p>
                        Resume building, interview preparation, and career counseling sessions to help students navigate
                        their career paths effectively.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Soft Skills Training</h3>
                      <p>
                        Workshops on communication, teamwork, time management, and other essential soft skills required
                        in professional settings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Industry-Academia Interaction</h3>
                      <p>
                        Guest lectures, industrial visits, and internship opportunities to expose students to real-world
                        industry practices and expectations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Innovation and Entrepreneurship</h3>
                      <p>
                        Programs to foster innovation, critical thinking, and entrepreneurial mindset among students.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-700">Contact SDC</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-700 mr-2 mt-1"
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
                    <span>sdc@jeppiaaruniversity.ac.in</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-700 mr-2 mt-1"
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
                      className="h-5 w-5 text-blue-700 mr-2 mt-1"
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
                    <span>Administrative Block, 2nd Floor, Jeppiaar University Campus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-700">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-3">
                    <h3 className="font-semibold">Resume Building Workshop</h3>
                    <p className="text-sm text-gray-600">March 15, 2025 | 10:00 AM</p>
                    <p className="text-sm mt-1">
                      Learn how to create an impactful resume that stands out to employers.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-3">
                    <h3 className="font-semibold">Industry Expert Talk</h3>
                    <p className="text-sm text-gray-600">March 22, 2025 | 2:00 PM</p>
                    <p className="text-sm mt-1">
                      Insights from industry leaders on emerging trends and career opportunities.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-3">
                    <h3 className="font-semibold">Mock Interview Session</h3>
                    <p className="text-sm text-gray-600">April 5, 2025 | 11:00 AM</p>
                    <p className="text-sm mt-1">Practice interviews with feedback from HR professionals.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-700">Resources</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-700 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="#" className="text-blue-600 hover:underline">
                      Resume Templates
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-700 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="#" className="text-blue-600 hover:underline">
                      Interview Preparation Guide
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-700 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="#" className="text-blue-600 hover:underline">
                      Soft Skills Development Handbook
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-700 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="#" className="text-blue-600 hover:underline">
                      Industry Internship Opportunities
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

