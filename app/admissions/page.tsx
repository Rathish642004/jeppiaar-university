import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, FileText, GraduationCap, Users } from "lucide-react"
import FeaturedPrograms from "@/components/home/featured-programs"

export default function AdmissionsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Admissions</h1>
        <p className="text-xl text-gray-600">
          Join our vibrant academic community and embark on a transformative educational journey.
        </p>
      </div>

      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Jeppiaar University?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Academic Excellence</h3>
                  <p className="text-gray-700">
                    Rigorous curriculum designed by industry experts and distinguished academicians to provide
                    comprehensive knowledge and practical skills.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Industry Connections</h3>
                  <p className="text-gray-700">
                    Strong partnerships with leading companies for internships, placements, and collaborative research
                    projects.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">State-of-the-Art Infrastructure</h3>
                  <p className="text-gray-700">
                    Modern campus with advanced laboratories, well-stocked library, smart classrooms, and recreational
                    facilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Research Opportunities</h3>
                  <p className="text-gray-700">
                    Vibrant research ecosystem with specialized centers and funding opportunities for innovative
                    projects.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Global Exposure</h3>
                  <p className="text-gray-700">
                    International collaborations, exchange programs, and global internship opportunities to broaden your
                    horizons.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/admissions/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Students at Jeppiaar University"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Admission Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Application</h3>
              <p className="text-gray-700">
                Complete the online application form and submit the required documents including academic transcripts,
                standardized test scores, and personal statement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Selection</h3>
              <p className="text-gray-700">
                Applications are reviewed by the admissions committee. Shortlisted candidates may be invited for
                entrance exams and/or interviews depending on the program applied for.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Admission</h3>
              <p className="text-gray-700">
                Selected candidates receive an offer letter. Complete the admission process by paying the fees and
                submitting the required documents within the specified timeline.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="mb-16">
        <FeaturedPrograms />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Important Dates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-primary" />
                Undergraduate Admissions
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Application Opens</span>
                  <span>January 15, 2024</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Application Deadline</span>
                  <span>May 31, 2024</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Entrance Exam</span>
                  <span>June 15-20, 2024</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Results Announcement</span>
                  <span>July 5, 2024</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Admission Confirmation</span>
                  <span>July 6-20, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Classes Begin</span>
                  <span>August 1, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-primary" />
                Postgraduate Admissions
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Application Opens</span>
                  <span>February 1, 2024</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Application Deadline</span>
                  <span>June 15, 2024</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Entrance Exam</span>
                  <span>June 25-30, 2024</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Interview Process</span>
                  <span>July 10-15, 2024</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Results Announcement</span>
                  <span>July 25, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Classes Begin</span>
                  <span>August 10, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Take the first step towards a transformative educational experience at Jeppiaar University. Our admissions
          team is here to guide you through every step of the process.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Admissions</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

