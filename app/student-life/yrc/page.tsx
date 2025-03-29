import { Card, CardContent } from "@/components/ui/card"

export default function YRCPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-800 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Youth Red Cross (YRC)</h1>
          <p className="text-xl max-w-3xl">
            Promoting humanitarian values, community service, and health awareness among students.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About YRC */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-red-700">About Youth Red Cross</h2>
                <p className="mb-4">
                  The Youth Red Cross (YRC) at Jeppiaar University is a vibrant wing of the Indian Red Cross Society
                  that engages students in various humanitarian activities. It serves as a platform for students to
                  develop a sense of social responsibility and commitment to humanitarian values.
                </p>
                <p className="mb-4">
                  Our YRC unit focuses on promoting health, service, friendship, and understanding among students and
                  the community. Through various activities and programs, we aim to inculcate the spirit of service and
                  a sense of responsibility towards humanity.
                </p>
                <p>
                  The YRC at Jeppiaar University works in close coordination with the Indian Red Cross Society, Tamil
                  Nadu Branch, and actively participates in various state and national level programs and initiatives.
                </p>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-red-700">Our Activities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-red-600">Health Initiatives</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Blood donation camps</li>
                      <li>Health check-up camps</li>
                      <li>First aid training</li>
                      <li>Health awareness programs</li>
                      <li>Yoga and meditation sessions</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-red-600">Community Service</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Village adoption programs</li>
                      <li>Orphanage and old age home visits</li>
                      <li>Cleanliness drives</li>
                      <li>Tree plantation</li>
                      <li>Disaster relief operations</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-red-600">Awareness Campaigns</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Road safety awareness</li>
                      <li>Environmental protection</li>
                      <li>Water conservation</li>
                      <li>Anti-drug campaigns</li>
                      <li>Mental health awareness</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-red-600">Training Programs</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Leadership development</li>
                      <li>Disaster management</li>
                      <li>Emergency response</li>
                      <li>Communication skills</li>
                      <li>Team building activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-red-700">Our Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-red-700 mb-2">50+</div>
                    <p className="text-gray-700">Blood Donation Camps Organized</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-red-700 mb-2">5000+</div>
                    <p className="text-gray-700">Students Trained in First Aid</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-red-700 mb-2">20+</div>
                    <p className="text-gray-700">Villages Supported</p>
                  </div>
                </div>
                <p className="mb-4">
                  The YRC at Jeppiaar University has made significant contributions to the community through its various
                  initiatives. Our volunteers have been at the forefront during natural disasters, providing relief and
                  support to affected communities.
                </p>
                <p>
                  Through our health initiatives, we have been able to create awareness about various health issues and
                  provide basic healthcare services to underprivileged communities. Our blood donation camps have helped
                  save numerous lives by ensuring a steady supply of blood to hospitals and blood banks.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Join YRC */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-red-700">Join YRC</h2>
                <p className="mb-4">
                  Become a part of the Youth Red Cross and contribute to humanitarian causes. Membership is open to all
                  students of Jeppiaar University.
                </p>
                <p className="mb-4">Benefits of joining YRC:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Develop leadership skills</li>
                  <li>Learn first aid and life-saving techniques</li>
                  <li>Participate in national and international events</li>
                  <li>Networking opportunities</li>
                  <li>Certificate of participation</li>
                </ul>
                <a
                  href="#"
                  className="block w-full bg-red-600 text-white text-center py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Register Now
                </a>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-red-700">Contact YRC</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-700 mr-2 mt-1"
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
                      <p className="font-semibold">YRC Coordinator</p>
                      <p>Dr. Priya Sharma</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-700 mr-2 mt-1"
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
                    <span>yrc@jeppiaaruniversity.ac.in</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-700 mr-2 mt-1"
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
                      className="h-5 w-5 text-red-700 mr-2 mt-1"
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
                    <span>YRC Office, Student Activity Center, Jeppiaar University Campus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-red-700">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-600 pl-3">
                    <h3 className="font-semibold">Blood Donation Camp</h3>
                    <p className="text-sm text-gray-600">April 14, 2025 | 9:00 AM - 4:00 PM</p>
                    <p className="text-sm mt-1">
                      Annual blood donation drive in collaboration with Red Cross Blood Bank.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-3">
                    <h3 className="font-semibold">First Aid Training Workshop</h3>
                    <p className="text-sm text-gray-600">April 28-29, 2025 | 10:00 AM - 4:00 PM</p>
                    <p className="text-sm mt-1">
                      Two-day workshop on basic first aid techniques and emergency response.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-3">
                    <h3 className="font-semibold">World Red Cross Day Celebration</h3>
                    <p className="text-sm text-gray-600">May 8, 2025 | 11:00 AM</p>
                    <p className="text-sm mt-1">
                      Cultural program and awareness campaign to celebrate World Red Cross Day.
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

