import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ChevronRight, Download, FileText, Search } from "lucide-react"

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-secondary/10">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Downloads</h1>
          <p className="text-lg max-w-3xl">
            Access and download forms, guidelines, and other important documents related to Ph.D programs at Jeppiaar
            University.
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
                      href="/research/phd-notifications"
                      className="flex items-center text-primary hover:text-primary/80 py-2"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Ph.D Notifications
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md mt-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-primary mb-4">Search Documents</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                      Search by Document Name
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
                  <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Search
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="forms" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                <TabsTrigger value="formats">Formats</TabsTrigger>
                <TabsTrigger value="others">Others</TabsTrigger>
              </TabsList>

              <TabsContent value="forms" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Application Forms</h2>
                    <p className="mb-6">
                      Download application forms and other related documents for Ph.D programs at Jeppiaar University.
                    </p>

                    <div className="space-y-4">
                      {/* Form 1 */}
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-lg mr-4">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary">Ph.D Application Form</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Application form for admission to Ph.D programs at Jeppiaar University.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">Last Updated: May 15, 2023</span>
                              <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Form 2 */}
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-lg mr-4">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary">Research Proposal Format</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Format for preparing research proposal for Ph.D admission.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">Last Updated: April 10, 2023</span>
                              <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Form 3 */}
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-lg mr-4">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary">No Objection Certificate (NOC) Format</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Format for No Objection Certificate for part-time Ph.D candidates.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">Last Updated: March 20, 2023</span>
                              <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Form 4 */}
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-lg mr-4">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary">Course Work Registration Form</h3>
                            <p className="text-sm text-gray-600 mb-2">Form for registration of Ph.D course work.</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">Last Updated: February 15, 2023</span>
                              <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Form 5 */}
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-lg mr-4">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary">Progress Report Format</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Format for submitting six-monthly progress report by Ph.D scholars.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">Last Updated: January 10, 2023</span>
                              <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guidelines" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Guidelines & Manuals</h2>
                    <p className="mb-6">
                      Download guidelines, manuals, and other instructional documents for Ph.D programs at Jeppiaar
                      University.
                    </p>

                    <div className="space-y-4">
                      {/* Guideline 1 */}
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-lg mr-4">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary">Ph.D Regulations 2023</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Comprehensive regulations governing Ph.D programs at Jeppiaar University.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">Last Updated: May 1, 2023</span>
                              <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* More guidelines would be listed here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="formats" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Document Formats</h2>
                    <p className="mb-6">
                      Download standard formats for various documents required during the Ph.D program at Jeppiaar
                      University.
                    </p>

                    <div className="space-y-4">
                      {/* Format 1 */}
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-lg mr-4">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary">Thesis Format</h3>
                            <p className="text-sm text-gray-600 mb-2">Standard format for preparing Ph.D thesis.</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">Last Updated: June 5, 2023</span>
                              <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* More formats would be listed here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="others" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Other Documents</h2>
                    <p className="mb-6">
                      Download other important documents related to Ph.D programs at Jeppiaar University.
                    </p>

                    <div className="space-y-4">
                      {/* Document 1 */}
                      <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-lg mr-4">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-primary">Fee Structure</h3>
                            <p className="text-sm text-gray-600 mb-2">
                              Fee structure for Ph.D programs at Jeppiaar University.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">Last Updated: April 1, 2023</span>
                              <Link href="#" className="text-primary hover:text-primary/80 text-sm flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* More documents would be listed here */}
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

