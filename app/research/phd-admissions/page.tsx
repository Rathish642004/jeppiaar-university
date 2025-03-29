import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"

export default function PhDAdmissionsPage() {
  return (
    <main className="min-h-screen bg-secondary/10">
      {/* Hero Section */}
      <section className="bg-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ph.D Admissions</h1>
          <p className="text-lg max-w-3xl">
            Join our community of researchers and scholars to pursue doctoral studies in your field of interest.
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
                <h2 className="text-xl font-bold text-primary mb-4">Important Links</h2>
                <ul className="space-y-2">
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
                      Download Forms
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md mt-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-primary mb-4">Current Admission Status</h2>
                <div className="bg-green-100 border-l-4 border-green-500 p-4">
                  <p className="font-medium text-green-700">Applications Open</p>
                  <p className="text-sm text-green-600">For July 2023 Intake</p>
                  <p className="text-sm mt-2">Last Date: June 30, 2023</p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/research/phd-notifications"
                    className="text-primary hover:text-primary/80 text-sm flex items-center"
                  >
                    View all notifications
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Ph.D Programs at Jeppiaar University</h2>
                    <p className="mb-4">
                      Jeppiaar University offers doctoral programs across various disciplines, providing students with
                      opportunities to engage in cutting-edge research under the guidance of experienced faculty
                      members.
                    </p>
                    <p className="mb-6">
                      Our Ph.D programs are designed to foster innovation, critical thinking, and academic excellence.
                      Students are encouraged to pursue research that addresses real-world challenges and contributes to
                      the advancement of knowledge in their respective fields.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-3">Disciplines Offered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-bold text-primary mb-2">Engineering & Technology</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Computer Science & Engineering</li>
                          <li>Electronics & Communication Engineering</li>
                          <li>Mechanical Engineering</li>
                          <li>Civil Engineering</li>
                          <li>Electrical & Electronics Engineering</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-bold text-primary mb-2">Science & Allied Health Sciences</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Physics</li>
                          <li>Chemistry</li>
                          <li>Mathematics</li>
                          <li>Biotechnology</li>
                          <li>Environmental Science</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-bold text-primary mb-2">Arts, Humanities & Management</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Business Administration</li>
                          <li>Economics</li>
                          <li>English</li>
                          <li>Psychology</li>
                          <li>Education</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-bold text-primary mb-2">Other Disciplines</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Physical Education</li>
                          <li>Library Science</li>
                          <li>Journalism & Mass Communication</li>
                          <li>Social Work</li>
                          <li>Law</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3">Program Duration</h3>
                    <p className="mb-4">
                      The minimum duration for completing a Ph.D program at Jeppiaar University is 3 years for full-time
                      scholars and 4 years for part-time scholars. The maximum duration is 6 years.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-3">Research Facilities</h3>
                    <p className="mb-4">
                      Our research centers are equipped with state-of-the-art facilities and resources to support
                      high-quality research. We provide access to advanced laboratories, libraries, online databases,
                      and other research tools.
                    </p>

                    <div className="bg-primary/10 p-4 rounded-lg mt-6">
                      <h3 className="font-bold text-primary mb-2">Ready to Apply?</h3>
                      <p className="text-sm mb-3">
                        Check the eligibility criteria and application process in the respective tabs above.
                      </p>
                      <Link
                        href="/research/downloads"
                        className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded inline-flex items-center text-sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Application Form
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="eligibility" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Eligibility Criteria</h2>
                    <p className="mb-6">
                      To be eligible for admission to the Ph.D program at Jeppiaar University, candidates must meet the
                      following criteria:
                    </p>

                    <div className="space-y-6">
                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-bold text-primary mb-2">Educational Qualifications</h3>
                        <p className="mb-2">
                          Candidates must have a Master's degree or equivalent in the relevant discipline with at least
                          55% marks (50% for SC/ST/OBC candidates) from a recognized university.
                        </p>
                        <p className="text-sm text-gray-600">
                          Note: Candidates with M.Phil degree may be given preference.
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-bold text-primary mb-2">Entrance Test</h3>
                        <p className="mb-2">
                          Candidates must qualify in the Ph.D Entrance Test conducted by Jeppiaar University.
                        </p>
                        <p className="text-sm text-gray-600">
                          Candidates who have qualified UGC-NET/JRF, CSIR-NET/JRF, SLET, GATE, or other similar national
                          level tests may be exempted from the entrance test.
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-bold text-primary mb-2">Interview</h3>
                        <p>
                          Shortlisted candidates must appear for an interview to assess their research aptitude and
                          suitability for the program.
                        </p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h3 className="font-bold text-primary mb-2">
                          Additional Requirements for Part-Time Candidates
                        </h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>
                            Must be a regular employee of a recognized institution/organization with at least 2 years of
                            experience.
                          </li>
                          <li>Must obtain a No Objection Certificate (NOC) from the employer.</li>
                          <li>
                            Must be able to complete the course work and meet the attendance requirements as specified
                            by the university.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                      <h3 className="font-bold text-yellow-800 mb-2">Important Note</h3>
                      <p className="text-sm text-yellow-700">
                        The eligibility criteria may vary slightly for different disciplines. Candidates are advised to
                        check the specific requirements for their chosen field of study.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Application Process</h2>
                    <p className="mb-6">
                      The Ph.D admission process at Jeppiaar University involves several stages. Here's a step-by-step
                      guide to help you navigate through the process:
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          1
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-primary mb-2">Application Submission</h3>
                          <p className="mb-2">
                            Download the application form from our website and submit the completed form along with all
                            required documents and application fee.
                          </p>
                          <p className="text-sm text-gray-600">
                            Required documents include academic certificates, mark sheets, research proposal, and
                            identity proof.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          2
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-primary mb-2">Entrance Test</h3>
                          <p className="mb-2">
                            Eligible candidates will be required to appear for a written entrance test. The test will
                            assess your knowledge in the subject area and research aptitude.
                          </p>
                          <p className="text-sm text-gray-600">
                            Candidates who have qualified UGC-NET/JRF, CSIR-NET/JRF, SLET, GATE, or other similar
                            national level tests may be exempted from the entrance test.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          3
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-primary mb-2">Interview</h3>
                          <p>
                            Candidates who qualify in the entrance test will be called for an interview. The interview
                            panel will assess your research interests, aptitude, and suitability for the program.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          4
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-primary mb-2">Selection and Admission</h3>
                          <p className="mb-2">
                            Based on your performance in the entrance test and interview, the university will prepare a
                            merit list. Selected candidates will be notified and asked to complete the admission
                            formalities.
                          </p>
                          <p className="text-sm text-gray-600">
                            Admission formalities include payment of fees, submission of original documents, and
                            registration.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          5
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-primary mb-2">Course Work</h3>
                          <p>
                            After admission, you will be required to complete a mandatory course work of one semester.
                            The course work includes research methodology and subject-specific courses.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                          6
                        </div>
                        <div className="ml-4">
                          <h3 className="font-bold text-primary mb-2">Research Work</h3>
                          <p>
                            After successfully completing the course work, you will begin your research work under the
                            guidance of a supervisor. You will be required to submit progress reports periodically.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                      <h3 className="font-bold text-blue-800 mb-2">Application Timeline</h3>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>
                          <span className="font-medium">Application Submission:</span> May 1 - June 30, 2023
                        </li>
                        <li>
                          <span className="font-medium">Entrance Test:</span> July 15, 2023
                        </li>
                        <li>
                          <span className="font-medium">Interview:</span> July 25-30, 2023
                        </li>
                        <li>
                          <span className="font-medium">Announcement of Results:</span> August 10, 2023
                        </li>
                        <li>
                          <span className="font-medium">Admission:</span> August 15-25, 2023
                        </li>
                        <li>
                          <span className="font-medium">Commencement of Course Work:</span> September 1, 2023
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-primary mb-2">What is the duration of the Ph.D program?</h3>
                        <p>
                          The minimum duration for completing a Ph.D program at Jeppiaar University is 3 years for
                          full-time scholars and 4 years for part-time scholars. The maximum duration is 6 years.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-primary mb-2">
                          Can I pursue a Ph.D program while working full-time?
                        </h3>
                        <p>
                          Yes, Jeppiaar University offers part-time Ph.D programs for working professionals. However,
                          you must meet the additional requirements for part-time candidates, including obtaining a No
                          Objection Certificate (NOC) from your employer.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-primary mb-2">
                          Is there any relaxation in eligibility criteria for reserved category candidates?
                        </h3>
                        <p>
                          Yes, there is a 5% relaxation in the minimum marks requirement for SC/ST/OBC candidates. They
                          need to have at least 50% marks in their Master's degree, compared to 55% for general category
                          candidates.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-primary mb-2">
                          Do I need to appear for the entrance test if I have qualified UGC-NET/JRF?
                        </h3>
                        <p>
                          No, candidates who have qualified UGC-NET/JRF, CSIR-NET/JRF, SLET, GATE, or other similar
                          national level tests may be exempted from the entrance test. However, they will still need to
                          appear for the interview.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-primary mb-2">What is the fee structure for the Ph.D program?</h3>
                        <p>
                          The fee structure varies depending on the discipline and mode of study (full-time or
                          part-time). Please refer to the fee structure document available on our website or contact the
                          admissions office for detailed information.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-primary mb-2">
                          Are there any scholarships available for Ph.D students?
                        </h3>
                        <p>
                          Yes, Jeppiaar University offers various scholarships and fellowships for deserving Ph.D
                          students. Additionally, students who have qualified for JRF can avail the fellowship provided
                          by UGC/CSIR. Please check the scholarships section on our website for more details.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-primary mb-2">Can I change my research topic after admission?</h3>
                        <p>
                          Minor modifications in the research topic may be allowed with the approval of the Research
                          Advisory Committee. However, significant changes that alter the fundamental nature of the
                          research may require a fresh application and approval process.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-primary mb-2">
                          What is the course work requirement for Ph.D students?
                        </h3>
                        <p>
                          All Ph.D students are required to complete a mandatory course work of one semester. The course
                          work includes research methodology and subject-specific courses. Students must pass the course
                          work examination to continue with their research work.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-primary mb-2">Still have questions?</h3>
                      <p className="text-sm mb-3">
                        Contact our Research Office for more information about Ph.D admissions.
                      </p>
                      <div className="text-sm">
                        <p>
                          <span className="font-medium">Email:</span> research@jeppiaaruniversity.ac.in
                        </p>
                        <p>
                          <span className="font-medium">Phone:</span> +91-44-2345-6789
                        </p>
                      </div>
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

