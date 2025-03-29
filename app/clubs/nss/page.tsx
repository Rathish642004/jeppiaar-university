import { Card, CardContent } from "@/components/ui/card"

export default function NSSPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-800 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">National Service Scheme (NSS)</h1>
            <p className="text-xl max-w-3xl">
              Not Me But You - Developing the personality of students through community service.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="NSS Logo"
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
          {/* About NSS */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-700">About NSS at Jeppiaar University</h2>
                <p className="mb-4">
                  The National Service Scheme (NSS) at Jeppiaar University is a Central Sector Scheme of Government of
                  India, Ministry of Youth Affairs & Sports that aims to develop the personality and character of
                  students through voluntary community service.
                </p>
                <p className="mb-4">
                  Our NSS unit provides students with opportunities to work with people in villages and slums to
                  contribute to community development while developing their own skills. The program instills the idea
                  of social welfare in students and provides them with a platform to serve society.
                </p>
                <p>
                  With the motto "Not Me But You," NSS volunteers work to ensure that everyone who is needy gets help to
                  enhance their standard of living and lead a dignified life. The NSS unit at Jeppiaar University has
                  been actively involved in various community service activities and has received recognition for its
                  outstanding contributions.
                </p>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-700">Our Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Tree Plantation Drive"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={300}
                    height={200}
                  />
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Village Camp"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={300}
                    height={200}
                  />
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Awareness Campaign"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-orange-600">Regular Activities</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Campus cleaning and beautification</li>
                      <li>Tree plantation drives</li>
                      <li>Blood donation camps</li>
                      <li>Health and hygiene awareness</li>
                      <li>Environmental conservation</li>
                      <li>Literacy programs</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-orange-600">Special Camping Programs</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>7-day residential camps in adopted villages</li>
                      <li>Community development projects</li>
                      <li>Surveys and need assessment</li>
                      <li>Cultural and educational activities</li>
                      <li>Skill development for villagers</li>
                      <li>Infrastructure improvement</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-orange-600">Awareness Campaigns</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>COVID-19 awareness and vaccination</li>
                      <li>Swachh Bharat Abhiyan</li>
                      <li>Digital literacy</li>
                      <li>Water conservation</li>
                      <li>Road safety</li>
                      <li>Anti-drug campaigns</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-orange-600">National Integration</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>National integration camps</li>
                      <li>Youth festivals</li>
                      <li>Cultural exchange programs</li>
                      <li>Adventure programs</li>
                      <li>Republic Day parade participation</li>
                      <li>Pre-RD selection camps</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-700">Our Achievements</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Best NSS Unit Award</h3>
                      <p>Recognized by the Tamil Nadu State NSS Cell for outstanding community service in 2023-24.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Republic Day Parade Participation</h3>
                      <p>
                        Two NSS volunteers selected to represent Tamil Nadu in the Republic Day Parade at New Delhi in
                        2024.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Village Adoption Program</h3>
                      <p>
                        Successfully implemented comprehensive development projects in three adopted villages,
                        significantly improving living conditions and infrastructure.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">COVID-19 Relief Work</h3>
                      <p>
                        Recognized by local authorities for exemplary service during the COVID-19 pandemic, including
                        distribution of relief materials and awareness campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Join NSS */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-orange-700">Join NSS</h2>
                <p className="mb-4">
                  Become a part of the National Service Scheme and contribute to nation-building while developing your
                  personality through community service.
                </p>
                <p className="mb-4">Eligibility criteria:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Student of Jeppiaar University</li>
                  <li>Willing to serve the community</li>
                  <li>Commitment to complete 120 hours of regular activities</li>
                  <li>Participation in at least one 7-day special camp</li>
                </ul>
                <a
                  href="#"
                  className="block w-full bg-orange-600 text-white text-center py-2 rounded-md hover:bg-orange-700 transition-colors"
                >
                  Enroll Now
                </a>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-orange-700">Contact NSS</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-700 mr-2 mt-1"
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
                      <p className="font-semibold">NSS Program Officer</p>
                      <p>Dr. Suresh Kumar</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-700 mr-2 mt-1"
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
                    <span>nss@jeppiaaruniversity.ac.in</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-700 mr-2 mt-1"
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
                      className="h-5 w-5 text-orange-700 mr-2 mt-1"
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
                    <span>NSS Office, Student Activity Center, Jeppiaar University Campus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-orange-700">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-600 pl-3">
                    <h3 className="font-semibold">NSS Day Celebration</h3>
                    <p className="text-sm text-gray-600">September 24, 2025</p>
                    <p className="text-sm mt-1">
                      Cultural program and community service activities to celebrate NSS Day.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-3">
                    <h3 className="font-semibold">Special Camp</h3>
                    <p className="text-sm text-gray-600">December 10-16, 2025</p>
                    <p className="text-sm mt-1">
                      7-day residential camp in the adopted village focusing on health and sanitation.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-3">
                    <h3 className="font-semibold">Blood Donation Camp</h3>
                    <p className="text-sm text-gray-600">January 12, 2026</p>
                    <p className="text-sm mt-1">
                      Annual blood donation drive in collaboration with government hospitals.
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

