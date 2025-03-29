import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-secondary/10">
      {/* Hero Section */}
      <section className="bg-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Research at Jeppiaar University</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Discover our cutting-edge research initiatives, doctoral programs, and opportunities for academic
            advancement and innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Quick Links */}
          <div className="lg:col-span-1">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-primary mb-4">Research Quick Links</h2>
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
                <h2 className="text-xl font-bold text-primary mb-4">Research Highlights</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-medium text-primary">100+ Research Publications</h3>
                    <p className="text-sm text-gray-600">In international journals annually</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-medium text-primary">25+ Research Centers</h3>
                    <p className="text-sm text-gray-600">Across various disciplines</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-medium text-primary">₹50+ Crore</h3>
                    <p className="text-sm text-gray-600">In research grants and funding</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="areas">Research Areas</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Research at Jeppiaar University</h2>
                    <p className="mb-4">
                      Jeppiaar University is committed to advancing knowledge through innovative research across various
                      disciplines. Our research programs are designed to address real-world challenges and contribute to
                      the global knowledge economy.
                    </p>
                    <p className="mb-4">
                      The university offers doctoral programs in various disciplines, providing students with
                      opportunities to engage in cutting-edge research under the guidance of experienced faculty
                      members.
                    </p>
                    <p className="mb-4">
                      Our research centers are equipped with state-of-the-art facilities and resources to support
                      high-quality research. We collaborate with industry partners, government agencies, and other
                      academic institutions to enhance the impact of our research.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h3 className="font-bold text-primary mb-2">Ph.D Programs</h3>
                        <p className="text-sm">
                          We offer doctoral programs in Engineering, Sciences, Management, Humanities, and more.
                        </p>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h3 className="font-bold text-primary mb-2">Research Funding</h3>
                        <p className="text-sm">
                          We provide funding opportunities for research projects through various grants and
                          scholarships.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="areas" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Research Areas</h2>
                    <p className="mb-6">
                      Our research spans across multiple disciplines, focusing on areas that have significant societal
                      impact. Some of our key research areas include:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-bold text-primary mb-2">Engineering & Technology</h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Artificial Intelligence and Machine Learning</li>
                          <li>Renewable Energy Systems</li>
                          <li>Advanced Materials and Nanotechnology</li>
                          <li>Robotics and Automation</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-bold text-primary mb-2">Science & Health</h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Biotechnology and Genomics</li>
                          <li>Environmental Science and Sustainability</li>
                          <li>Pharmaceutical Sciences</li>
                          <li>Public Health and Epidemiology</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-bold text-primary mb-2">Management & Social Sciences</h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Business Analytics and Finance</li>
                          <li>Organizational Behavior and Leadership</li>
                          <li>Economics and Public Policy</li>
                          <li>Digital Marketing and E-commerce</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-bold text-primary mb-2">Arts & Humanities</h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Cultural Studies and Heritage</li>
                          <li>Language and Linguistics</li>
                          <li>Media and Communication</li>
                          <li>Philosophy and Ethics</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="publications" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Recent Publications</h2>
                    <p className="mb-6">
                      Our faculty and research scholars regularly publish their research findings in reputed
                      international journals and conferences. Here are some recent publications:
                    </p>
                    <div className="space-y-6">
                      <div className="border-b pb-4">
                        <h3 className="font-bold text-primary">
                          Machine Learning Approaches for Predictive Maintenance in Manufacturing
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Authors: Dr. Rajesh Kumar, Dr. Priya Sharma, et al.
                        </p>
                        <p className="text-sm">
                          Published in International Journal of Advanced Manufacturing Technology, 2023
                        </p>
                      </div>
                      <div className="border-b pb-4">
                        <h3 className="font-bold text-primary">
                          Sustainable Energy Solutions for Rural Communities in India
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Authors: Dr. Anand Patel, Dr. Meera Krishnan, et al.
                        </p>
                        <p className="text-sm">Published in Renewable Energy Journal, 2023</p>
                      </div>
                      <div className="border-b pb-4">
                        <h3 className="font-bold text-primary">
                          Impact of Digital Transformation on Business Models in the Post-Pandemic Era
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Authors: Dr. Suresh Menon, Dr. Lakshmi Narayan, et al.
                        </p>
                        <p className="text-sm">Published in Journal of Business Research, 2022</p>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">
                          Novel Approaches in Drug Delivery Systems for Cancer Treatment
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Authors: Dr. Kavita Reddy, Dr. Sanjay Gupta, et al.
                        </p>
                        <p className="text-sm">Published in Journal of Pharmaceutical Sciences, 2022</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/research/publications"
                        className="text-primary hover:text-primary/80 font-medium flex items-center"
                      >
                        View all publications
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
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

