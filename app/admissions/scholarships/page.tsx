import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ScholarshipsPage() {
  return (
    <>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Scholarships & Financial Aid</h1>
          <p className="text-xl text-gray-600">
            Jeppiaar University is committed to making quality education accessible to deserving students through
            various scholarship and financial aid programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Students receiving scholarships"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Commitment</h2>
            <p className="text-gray-700 mb-4">
              At Jeppiaar University, we believe that financial constraints should not be a barrier to quality
              education. Our comprehensive scholarship and financial aid programs are designed to support academically
              brilliant, sports-talented, and economically disadvantaged students.
            </p>
            <p className="text-gray-700 mb-4">
              Through these initiatives, we aim to recognize and reward excellence, promote diversity, and ensure that
              deserving students have the opportunity to pursue their academic and career goals without financial
              burden.
            </p>
            <p className="text-gray-700">
              Our scholarships are awarded based on various criteria including academic merit, sports achievements,
              economic background, and special talents.
            </p>
          </div>
        </div>

        <Tabs defaultValue="merit" className="mb-16">
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="merit">Merit Scholarships</TabsTrigger>
            <TabsTrigger value="sports">Sports Scholarships</TabsTrigger>
            <TabsTrigger value="need">Need-Based Aid</TabsTrigger>
            <TabsTrigger value="special">Special Scholarships</TabsTrigger>
          </TabsList>

          <TabsContent value="merit">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Chancellor's Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Students with 95% or above in qualifying examination</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">100% tuition fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Renewal Criteria</p>
                    <p className="text-gray-700">Maintain CGPA of 9.0 or above</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Academic Excellence Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Students with 90-95% in qualifying examination</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">75% tuition fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Renewal Criteria</p>
                    <p className="text-gray-700">Maintain CGPA of 8.5 or above</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Merit Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Students with 85-90% in qualifying examination</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">50% tuition fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Renewal Criteria</p>
                    <p className="text-gray-700">Maintain CGPA of 8.0 or above</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">JEE/NEET Excellence Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Top 1000 rank holders in JEE Main or NEET</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">100% tuition fee waiver + laptop</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Renewal Criteria</p>
                    <p className="text-gray-700">Maintain CGPA of 8.5 or above</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Postgraduate Merit Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Students with 80% or above in undergraduate degree</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">50% tuition fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Renewal Criteria</p>
                    <p className="text-gray-700">Maintain CGPA of 8.0 or above</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sports">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">International Sports Achievers</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Represented country in international sports events</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">100% tuition fee waiver + hostel fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Renewal Criteria</p>
                    <p className="text-gray-700">
                      Continue sports participation and maintain minimum academic requirements
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">National Sports Achievers</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Represented state in national sports events</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">75% tuition fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Renewal Criteria</p>
                    <p className="text-gray-700">
                      Continue sports participation and maintain minimum academic requirements
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">State Sports Achievers</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Represented district in state sports events</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">50% tuition fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Renewal Criteria</p>
                    <p className="text-gray-700">
                      Continue sports participation and maintain minimum academic requirements
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="need">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Financial Need Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Family income less than ₹3 lakhs per annum</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">Up to 75% tuition fee waiver based on need assessment</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Application Process</p>
                    <p className="text-gray-700">Submit income certificate and financial need statement</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">First-Generation Learner Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">First person in the family to pursue higher education</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">50% tuition fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Application Process</p>
                    <p className="text-gray-700">Submit declaration and supporting documents</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Educational Loan Interest Subsidy</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Students who have taken educational loans</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">Interest subsidy during the study period</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Application Process</p>
                    <p className="text-gray-700">Submit loan documents and application form</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="special">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Girl Child Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Female students with 75% or above in qualifying examination</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">25% additional scholarship on merit scholarship</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Renewal Criteria</p>
                    <p className="text-gray-700">Maintain CGPA of 7.5 or above</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Differently-Abled Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Students with disability certificate</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">50% tuition fee waiver + special facilities</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Application Process</p>
                    <p className="text-gray-700">Submit disability certificate and application form</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Sibling Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Second or third sibling studying at Jeppiaar University</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">25% tuition fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Application Process</p>
                    <p className="text-gray-700">Submit proof of sibling relationship and enrollment</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Alumni Dependent Scholarship</h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Eligibility</p>
                    <p className="text-gray-700">Children of Jeppiaar University alumni</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-500">Award</p>
                    <p className="text-gray-700">20% tuition fee waiver</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">Application Process</p>
                    <p className="text-gray-700">Submit parent's degree certificate and relationship proof</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">How to Apply</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg">Complete Admission Application</h3>
                <p className="text-gray-700">First, complete your admission application to Jeppiaar University.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg">Submit Scholarship Application</h3>
                <p className="text-gray-700">
                  After receiving admission offer, submit the scholarship application form available on the university
                  portal.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg">Provide Supporting Documents</h3>
                <p className="text-gray-700">
                  Submit all required supporting documents as per the scholarship category you are applying for.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg">Scholarship Review</h3>
                <p className="text-gray-700">
                  The Scholarship Committee will review your application and supporting documents.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-bold text-lg">Award Notification</h3>
                <p className="text-gray-700">
                  Scholarship decisions will be communicated along with the admission offer or separately via email.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Take the first step towards a transformative educational experience at Jeppiaar University.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/admissions/apply">Apply for Admission</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Financial Aid Office</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

