import { Card, CardContent } from "@/components/ui/card"

export default function NCCPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">National Cadet Corps (NCC)</h1>
            <p className="text-xl max-w-3xl">
              Developing leadership, character, comradeship, spirit of sportsmanship, and the ideal of service among
              youth.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="NCC Logo"
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
          {/* About NCC */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-green-700">About NCC at Jeppiaar University</h2>
                <p className="mb-4">
                  The National Cadet Corps (NCC) at Jeppiaar University is a premier youth development movement
                  dedicated to creating a pool of organized, trained, and motivated youth with leadership qualities in
                  all walks of life.
                </p>
                <p className="mb-4">
                  Our NCC unit provides students with military training, adventure activities, and social service
                  opportunities that help develop character, comradeship, discipline, leadership, secular outlook,
                  spirit of adventure, and ideals of selfless service among the youth of our nation.
                </p>
                <p>
                  The NCC program at Jeppiaar University is affiliated with the Tamil Nadu NCC Directorate and offers
                  both Army and Air Wing options for students to join and experience the unique blend of military
                  training and academic excellence.
                </p>
              </CardContent>
            </Card>

            {/* Activities and Training */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-green-700">Activities and Training</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="NCC Parade"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={300}
                    height={200}
                  />
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Weapon Training"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={300}
                    height={200}
                  />
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Adventure Camp"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-green-600">Institutional Training</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Drill and parade training</li>
                      <li>Weapon training and firing</li>
                      <li>Map reading and navigation</li>
                      <li>Field craft and battle craft</li>
                      <li>Disaster management</li>
                      <li>First aid and health hygiene</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-green-600">Camp Training</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Annual Training Camps (ATC)</li>
                      <li>Centrally Organized Camps (COC)</li>
                      <li>Republic Day Camp (RDC)</li>
                      <li>Thal Sainik Camp (TSC)</li>
                      <li>Vayu Sainik Camp (VSC)</li>
                      <li>National Integration Camps (NIC)</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-green-600">Adventure Activities</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Trekking and mountaineering</li>
                      <li>Parasailing and paragliding</li>
                      <li>Rock climbing and rappelling</li>
                      <li>Cycle and motorcycle expeditions</li>
                      <li>Sailing and river rafting</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-green-600">Social Service</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Tree plantation drives</li>
                      <li>Blood donation camps</li>
                      <li>Swachh Bharat Abhiyan</li>
                      <li>Awareness campaigns</li>
                      <li>Community development</li>
                      <li>Disaster relief operations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-green-700">Benefits of Joining NCC</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Career Opportunities</h3>
                      <p>
                        NCC cadets get preference in Armed Forces, Police Services, and other government jobs. NCC 'C'
                        certificate holders get bonus marks in competitive exams.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Personality Development</h3>
                      <p>
                        NCC training develops leadership qualities, discipline, teamwork, time management, and
                        self-confidence among cadets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Global Exposure</h3>
                      <p>
                        Selected cadets get opportunities to participate in Youth Exchange Programs (YEP) with foreign
                        countries, enhancing their global perspective.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Scholarships and Financial Aid</h3>
                      <p>
                        NCC cadets are eligible for various scholarships and financial assistance for higher education
                        in India and abroad.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Join NCC */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-green-700">Join NCC</h2>
                <p className="mb-4">
                  Enrollment for NCC is open to all students of Jeppiaar University who meet the following criteria:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Indian citizen</li>
                  <li>Age between 17-26 years</li>
                  <li>Good moral character</li>
                  <li>Medically fit</li>
                </ul>
                <p className="mb-4">
                  Selection is based on physical fitness, medical fitness, and interview performance.
                </p>
                <a
                  href="#"
                  className="block w-full bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Apply Now
                </a>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-green-700">Contact NCC Office</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-700 mr-2 mt-1"
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
                      <p className="font-semibold">ANO (Army Wing)</p>
                      <p>Capt. Dr. Rajesh Kumar</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-700 mr-2 mt-1"
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
                    <span>ncc@jeppiaaruniversity.ac.in</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-700 mr-2 mt-1"
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
                      className="h-5 w-5 text-green-700 mr-2 mt-1"
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
                    <span>NCC Office, Sports Complex, Jeppiaar University Campus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-green-700">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-3">
                    <h3 className="font-semibold">Annual Training Camp</h3>
                    <p className="text-sm text-gray-600">May 10-20, 2025</p>
                    <p className="text-sm mt-1">10-day residential camp for all enrolled cadets.</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-3">
                    <h3 className="font-semibold">Republic Day Parade Selection</h3>
                    <p className="text-sm text-gray-600">August 15, 2025</p>
                    <p className="text-sm mt-1">Selection trials for Republic Day Parade contingent.</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-3">
                    <h3 className="font-semibold">NCC Day Celebration</h3>
                    <p className="text-sm text-gray-600">November 27, 2025</p>
                    <p className="text-sm mt-1">Cultural program and parade to celebrate NCC Day.</p>
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

