import { Card, CardContent } from "@/components/ui/card"

export default function YUVAPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">YUVA - Youth Leadership Program</h1>
            <p className="text-xl max-w-3xl">
              Empowering young minds to become future leaders through skill development, innovation, and social
              responsibility.
            </p>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <img
              src="/placeholder.svg?height=250&width=250"
              alt="YUVA Program Logo"
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
          {/* About YUVA */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-700">About YUVA</h2>
                <p className="mb-4">
                  YUVA (Youth United for Vision and Action) at Jeppiaar University is a dynamic youth leadership program
                  designed to harness the potential of young minds and transform them into responsible leaders of
                  tomorrow. The program focuses on developing leadership skills, promoting innovation, and instilling a
                  sense of social responsibility among students.
                </p>
                <p className="mb-4">
                  Established in alignment with the National Education Policy 2020, YUVA aims to create a platform where
                  students can explore their potential, develop critical thinking abilities, and contribute meaningfully
                  to society through various initiatives and projects.
                </p>
                <p>
                  Through a blend of theoretical learning and practical experiences, YUVA prepares students to face
                  real-world challenges with confidence and innovative solutions, making them not just job-seekers but
                  job-creators and change-makers.
                </p>
              </CardContent>
            </Card>

            {/* Program Components */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-700">Program Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <img
                    src="/placeholder.svg?height=250&width=400"
                    alt="Leadership Workshop"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={400}
                    height={250}
                  />
                  <img
                    src="/placeholder.svg?height=250&width=400"
                    alt="Innovation Challenge"
                    className="rounded-lg shadow-md w-full h-auto"
                    width={400}
                    height={250}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-purple-600">Leadership Development</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Leadership workshops and seminars</li>
                      <li>Mentorship programs</li>
                      <li>Team building activities</li>
                      <li>Public speaking and communication skills</li>
                      <li>Decision-making and problem-solving</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-purple-600">Innovation & Entrepreneurship</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Idea generation workshops</li>
                      <li>Business plan competitions</li>
                      <li>Startup incubation support</li>
                      <li>Industry-academia collaboration</li>
                      <li>Innovation challenges</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-purple-600">Social Responsibility</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Community service projects</li>
                      <li>Environmental conservation initiatives</li>
                      <li>Social awareness campaigns</li>
                      <li>Rural development programs</li>
                      <li>Volunteer opportunities</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="font-semibold text-lg mb-2 text-purple-600">Skill Enhancement</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Digital literacy programs</li>
                      <li>Financial literacy workshops</li>
                      <li>Soft skills development</li>
                      <li>Career guidance and counseling</li>
                      <li>Industry-relevant technical skills</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-700">Success Stories</h2>
                <div className="space-y-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">EcoSolutions - Environmental Startup</h3>
                    <p className="mb-2">
                      A team of YUVA members developed a sustainable waste management solution that has been implemented
                      in 5 villages around Chennai, significantly reducing plastic waste and creating employment
                      opportunities.
                    </p>
                    <div className="text-sm text-gray-600 italic">
                      - Team led by Arun Kumar, Final Year Environmental Engineering
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Digital Literacy Campaign</h3>
                    <p className="mb-2">
                      YUVA members conducted digital literacy workshops for over 1000 senior citizens in Chennai,
                      helping them navigate the digital world and access essential online services.
                    </p>
                    <div className="text-sm text-gray-600 italic">
                      - Initiative by Priya Sharma, Computer Science Department
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Rural Education Project</h3>
                    <p className="mb-2">
                      A group of YUVA volunteers established a weekend learning center in a rural area, providing
                      quality education to underprivileged children and improving their academic performance.
                    </p>
                    <div className="text-sm text-gray-600 italic">
                      - Project coordinated by Rahul Mehta, Education Department
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Join YUVA */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-purple-700">Join YUVA</h2>
                <p className="mb-4">
                  Become a part of the YUVA program and embark on a journey of leadership, innovation, and social
                  impact. Open to all students of Jeppiaar University.
                </p>
                <p className="mb-4">Selection process includes:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Written application</li>
                  <li>Group discussion</li>
                  <li>Personal interview</li>
                  <li>Idea presentation</li>
                </ul>
                <a
                  href="#"
                  className="block w-full bg-purple-600 text-white text-center py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Apply Now
                </a>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-purple-700">Contact YUVA</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-700 mr-2 mt-1"
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
                      <p className="font-semibold">YUVA Coordinator</p>
                      <p>Dr. Vikram Singh</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-700 mr-2 mt-1"
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
                    <span>yuva@jeppiaaruniversity.ac.in</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-700 mr-2 mt-1"
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
                      className="h-5 w-5 text-purple-700 mr-2 mt-1"
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
                    <span>YUVA Office, Innovation Center, Jeppiaar University Campus</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-purple-700">Upcoming Events</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-600 pl-3">
                    <h3 className="font-semibold">Leadership Summit 2025</h3>
                    <p className="text-sm text-gray-600">June 15-16, 2025</p>
                    <p className="text-sm mt-1">
                      Annual leadership conference with renowned speakers and interactive sessions.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-3">
                    <h3 className="font-semibold">Startup Pitch Competition</h3>
                    <p className="text-sm text-gray-600">July 10, 2025</p>
                    <p className="text-sm mt-1">
                      Platform for student entrepreneurs to pitch their business ideas to investors.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-3">
                    <h3 className="font-semibold">Social Impact Hackathon</h3>
                    <p className="text-sm text-gray-600">August 5-7, 2025</p>
                    <p className="text-sm mt-1">
                      48-hour hackathon focused on developing solutions for social challenges.
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

