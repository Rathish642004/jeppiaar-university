import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ChevronRight, Search, Filter } from "lucide-react"

export default function ResearchSupervisorsPage() {
  return (
    <main className="min-h-screen bg-secondary/10">
      {/* Hero Section */}
      <section className="bg-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Research Supervisors</h1>
          <p className="text-lg max-w-3xl">
            Meet our distinguished faculty members who guide doctoral research across various disciplines.
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
                      href="/research/phd-notifications"
                      className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Ph.D Notifications
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
                <h2 className="text-xl font-bold text-primary mb-4">Search Supervisors</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                      Search by Name or Research Area
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="search"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Search..."
                      />
                      <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                      Filter by Department
                    </label>
                    <div className="relative">
                      <select
                        id="department"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                      >
                        <option value="">All Departments</option>
                        <option value="engineering">Engineering & Technology</option>
                        <option value="science">Science & Allied Health</option>
                        <option value="arts">Arts, Humanities & Management</option>
                        <option value="education">Physical Education</option>
                      </select>
                      <Filter className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Apply Filters
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="engineering" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="science">Science</TabsTrigger>
                <TabsTrigger value="arts">Arts & Management</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              <TabsContent value="engineering" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Engineering & Technology</h2>
                    <p className="mb-6">
                      Our Engineering & Technology departments have renowned faculty members who are actively engaged in
                      cutting-edge research across various domains.
                    </p>

                    <div className="space-y-6">
                      {/* Supervisor 1 */}
                      <div className="border-b pb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=96&width=96"
                              alt="Dr. Rajesh Kumar"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">Dr. Rajesh Kumar</h3>
                            <p className="text-gray-600 mb-2">Professor, Computer Science & Engineering</p>
                            <p className="mb-2">
                              <span className="font-medium">Research Areas:</span> Artificial Intelligence, Machine
                              Learning, Computer Vision, Data Analytics
                            </p>
                            <p className="mb-2">
                              <span className="font-medium">Email:</span> rajesh.kumar@jeppiaaruniversity.ac.in
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Machine Learning
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Computer Vision
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Data Analytics
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Supervisor 2 */}
                      <div className="border-b pb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=96&width=96"
                              alt="Dr. Priya Sharma"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">Dr. Priya Sharma</h3>
                            <p className="text-gray-600 mb-2">Associate Professor, Electronics & Communication</p>
                            <p className="mb-2">
                              <span className="font-medium">Research Areas:</span> VLSI Design, Embedded Systems, IoT,
                              Wireless Communication
                            </p>
                            <p className="mb-2">
                              <span className="font-medium">Email:</span> priya.sharma@jeppiaaruniversity.ac.in
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">VLSI Design</span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">IoT</span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Wireless Communication
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Supervisor 3 */}
                      <div className="border-b pb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=96&width=96"
                              alt="Dr. Anand Patel"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">Dr. Anand Patel</h3>
                            <p className="text-gray-600 mb-2">Professor, Mechanical Engineering</p>
                            <p className="mb-2">
                              <span className="font-medium">Research Areas:</span> Renewable Energy, Thermal
                              Engineering, Fluid Dynamics, Manufacturing Processes
                            </p>
                            <p className="mb-2">
                              <span className="font-medium">Email:</span> anand.patel@jeppiaaruniversity.ac.in
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Renewable Energy
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Thermal Engineering
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Manufacturing
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Supervisor 4 */}
                      <div>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=96&width=96"
                              alt="Dr. Meera Krishnan"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">Dr. Meera Krishnan</h3>
                            <p className="text-gray-600 mb-2">Associate Professor, Civil Engineering</p>
                            <p className="mb-2">
                              <span className="font-medium">Research Areas:</span> Structural Engineering, Environmental
                              Engineering, Sustainable Construction, Waste Management
                            </p>
                            <p className="mb-2">
                              <span className="font-medium">Email:</span> meera.krishnan@jeppiaaruniversity.ac.in
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Structural Engineering
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Sustainable Construction
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Waste Management
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
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
              </TabsContent>

              <TabsContent value="science" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Science & Allied Health Sciences</h2>
                    <p className="mb-6">
                      Our Science departments have distinguished faculty members who are actively engaged in pioneering
                      research across various scientific domains.
                    </p>

                    <div className="space-y-6">
                      {/* Supervisor 1 */}
                      <div className="border-b pb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=96&width=96"
                              alt="Dr. Kavita Reddy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">Dr. Kavita Reddy</h3>
                            <p className="text-gray-600 mb-2">Professor, Biotechnology</p>
                            <p className="mb-2">
                              <span className="font-medium">Research Areas:</span> Molecular Biology, Genetic
                              Engineering, Drug Delivery Systems, Cancer Research
                            </p>
                            <p className="mb-2">
                              <span className="font-medium">Email:</span> kavita.reddy@jeppiaaruniversity.ac.in
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Molecular Biology
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Genetic Engineering
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Cancer Research
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* More supervisors would be listed here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="arts" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Arts, Humanities & Management</h2>
                    <p className="mb-6">
                      Our Arts, Humanities & Management departments have esteemed faculty members who are actively
                      engaged in innovative research across various domains.
                    </p>

                    <div className="space-y-6">
                      {/* Supervisor 1 */}
                      <div className="border-b pb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=96&width=96"
                              alt="Dr. Suresh Menon"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">Dr. Suresh Menon</h3>
                            <p className="text-gray-600 mb-2">Professor, Business Administration</p>
                            <p className="mb-2">
                              <span className="font-medium">Research Areas:</span> Strategic Management, Digital
                              Transformation, Organizational Behavior, Business Analytics
                            </p>
                            <p className="mb-2">
                              <span className="font-medium">Email:</span> suresh.menon@jeppiaaruniversity.ac.in
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Strategic Management
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Digital Transformation
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Business Analytics
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* More supervisors would be listed here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Education & Physical Education</h2>
                    <p className="mb-6">
                      Our Education departments have experienced faculty members who are actively engaged in impactful
                      research across various educational domains.
                    </p>

                    <div className="space-y-6">
                      {/* Supervisor 1 */}
                      <div className="border-b pb-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src="/placeholder.svg?height=96&width=96"
                              alt="Dr. Ramesh Nair"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">Dr. Ramesh Nair</h3>
                            <p className="text-gray-600 mb-2">Professor, Physical Education</p>
                            <p className="mb-2">
                              <span className="font-medium">Research Areas:</span> Sports Psychology, Exercise
                              Physiology, Sports Biomechanics, Sports Management
                            </p>
                            <p className="mb-2">
                              <span className="font-medium">Email:</span> ramesh.nair@jeppiaaruniversity.ac.in
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Sports Psychology
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Exercise Physiology
                              </span>
                              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                Sports Management
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* More supervisors would be listed here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  )
}

