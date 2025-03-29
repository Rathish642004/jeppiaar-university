import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Calendar, Download, Bell } from "lucide-react"

export default function PhDNotificationsPage() {
  return (
    <main className="min-h-screen bg-secondary/10">
      {/* Hero Section */}
      <section className="bg-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ph.D Notifications</h1>
          <p className="text-lg max-w-3xl">
            Stay updated with the latest announcements, schedules, and important information related to Ph.D programs at
            Jeppiaar University.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-primary mb-4">Quick Links</h2>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/research/phd-admissions"
                      className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Ph.D Admissions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research/phd-regulations"
                      className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Ph.D Regulations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research/supervisors"
                      className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Research Supervisors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research/downloads"
                      className="flex items-center text-primary hover:text-primary/80 py-2"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Downloads
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md mt-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-primary mb-4">Notification Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#admissions"
                      className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Admission Notifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#examinations"
                      className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Examination Notifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#coursework"
                      className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Course Work Notifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#thesis"
                      className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Thesis Submission Notifications
                    </Link>
                  </li>
                  <li>
                    <Link href="#general" className="flex items-center text-primary hover:text-primary/80 py-2">
                      <Bell className="h-4 w-4 mr-2" />
                      General Notifications
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">Latest Notifications</h2>

                <div className="space-y-6">
                  {/* Notification 1 */}
                  <div className="border-l-4 border-green-500 pl-4 py-1">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-primary text-lg">Ph.D Admission Notification - July 2023</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Posted on: May 15, 2023</span>
                        </div>
                        <p className="mb-3">
                          Applications are invited for admission to Ph.D programs in various disciplines for the July
                          2023 session. Last date for submission of applications is June 30, 2023.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Admissions</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">July 2023</span>
                        </div>
                        <div className="mt-3">
                          <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            Download Notification
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification 2 */}
                  <div className="border-l-4 border-blue-500 pl-4 py-1">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-primary text-lg">Ph.D Course Work Schedule - July 2023 Batch</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Posted on: June 20, 2023</span>
                        </div>
                        <p className="mb-3">
                          The course work for Ph.D scholars admitted in July 2023 batch will commence from August 1,
                          2023. All scholars are required to register for the course work by July 25, 2023.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Course Work</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Schedule</span>
                        </div>
                        <div className="mt-3">
                          <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            Download Schedule
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification 3 */}
                  <div className="border-l-4 border-yellow-500 pl-4 py-1">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-primary text-lg">
                          Ph.D Comprehensive Examination - January 2023 Batch
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Posted on: June 15, 2023</span>
                        </div>
                        <p className="mb-3">
                          The Comprehensive Examination for Ph.D scholars admitted in January 2023 batch will be
                          conducted from July 10-15, 2023. Scholars are required to submit their research proposals by
                          July 5, 2023.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Examination</span>
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Important</span>
                        </div>
                        <div className="mt-3">
                          <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            Download Guidelines
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification 4 */}
                  <div className="border-l-4 border-purple-500 pl-4 py-1">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-primary text-lg">Workshop on Research Methodology</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Posted on: June 10, 2023</span>
                        </div>
                        <p className="mb-3">
                          A five-day workshop on Research Methodology will be conducted from July 5-9, 2023. All Ph.D
                          scholars are encouraged to attend. Registration is mandatory.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Workshop</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Training</span>
                        </div>
                        <div className="mt-3">
                          <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            Download Brochure
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification 5 */}
                  <div className="border-l-4 border-red-500 pl-4 py-1">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-primary text-lg">Revised Guidelines for Thesis Submission</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Posted on: June 5, 2023</span>
                        </div>
                        <p className="mb-3">
                          The university has revised the guidelines for Ph.D thesis submission. The new guidelines will
                          be effective from July 1, 2023. All scholars are advised to follow the new format.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Thesis</span>
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Guidelines</span>
                        </div>
                        <div className="mt-3">
                          <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            Download Guidelines
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="px-3 py-1 rounded border border-gray-300 text-gray-500">Previous</button>
                    <button className="px-3 py-1 rounded bg-primary text-white">1</button>
                    <button className="px-3 py-1 rounded border border-gray-300 text-gray-700">2</button>
                    <button className="px-3 py-1 rounded border border-gray-300 text-gray-700">3</button>
                    <button className="px-3 py-1 rounded border border-gray-300 text-gray-700">Next</button>
                  </nav>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

