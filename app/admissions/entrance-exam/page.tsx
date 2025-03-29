import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, CheckCircle2 } from "lucide-react"

export default function EntranceExamPage() {
  return (
    <>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Entrance Examinations</h1>
          <p className="text-xl text-gray-600">
            Information about entrance examinations for admission to various programs at Jeppiaar University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">About Our Entrance Exams</h2>
            <p className="text-gray-700 mb-4">
              Jeppiaar University conducts entrance examinations for admission to various undergraduate and postgraduate
              programs. These exams are designed to assess the aptitude, knowledge, and skills of candidates in relevant
              subjects.
            </p>
            <p className="text-gray-700 mb-4">
              In addition to our own entrance exams, we also accept scores from national-level entrance examinations
              like JEE, NEET, CAT, MAT, GATE, etc., for admission to respective programs.
            </p>
            <p className="text-gray-700">
              The entrance examinations are conducted in both online and offline modes at various centers across the
              country.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Students taking entrance exam"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Tabs defaultValue="jueet" className="mb-16">
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="jueet">JUEET (Engineering)</TabsTrigger>
            <TabsTrigger value="jumat">JUMAT (Management)</TabsTrigger>
            <TabsTrigger value="jupgee">JUPGEE (PG Programs)</TabsTrigger>
            <TabsTrigger value="jurat">JURAT (Research)</TabsTrigger>
          </TabsList>

          <TabsContent value="jueet">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      Jeppiaar University Engineering Entrance Test (JUEET)
                    </h3>
                    <p className="text-gray-700 mb-6">
                      JUEET is conducted for admission to B.Tech programs offered by the School of Engineering &
                      Technology at Jeppiaar University.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold mb-2">Exam Pattern</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Duration: 3 hours</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Total Questions: 120 multiple-choice questions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Sections: Physics (40 questions), Chemistry (40 questions), Mathematics (40 questions)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Marking Scheme: +4 for correct answer, -1 for incorrect answer</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">Eligibility</h4>
                        <p className="text-gray-700">
                          Candidates who have passed 10+2 or equivalent examination with Physics, Chemistry, and
                          Mathematics as core subjects with minimum 60% aggregate (55% for reserved categories).
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">Important Dates</h4>
                        <div className="space-y-2 text-gray-700">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Application Start Date:</strong> January 15, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Application End Date:</strong> April 30, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Exam Date:</strong> May 15, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Result Declaration:</strong> June 1, 2025
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 bg-primary/5 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-4 text-primary">Application Process</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Register Online</p>
                          <p className="text-sm text-gray-600">Create an account on the admission portal</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Fill Application Form</p>
                          <p className="text-sm text-gray-600">Complete all required details</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Upload Documents</p>
                          <p className="text-sm text-gray-600">Upload required documents and photographs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Pay Application Fee</p>
                          <p className="text-sm text-gray-600">₹1,200 for General/OBC, ₹800 for SC/ST/PwD</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <p className="font-medium">Download Admit Card</p>
                          <p className="text-sm text-gray-600">Available 10 days before the exam</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="w-full" asChild>
                        <Link href="/admissions/apply">Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jumat">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      Jeppiaar University Management Aptitude Test (JUMAT)
                    </h3>
                    <p className="text-gray-700 mb-6">
                      JUMAT is conducted for admission to MBA and other management programs offered by the School of
                      Arts, Humanities & Management at Jeppiaar University.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold mb-2">Exam Pattern</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Duration: 2 hours</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Total Questions: 100 multiple-choice questions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Sections: Verbal Ability, Quantitative Aptitude, Logical Reasoning, Data Interpretation,
                              General Awareness
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Marking Scheme: +3 for correct answer, -1 for incorrect answer</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">Eligibility</h4>
                        <p className="text-gray-700">
                          Candidates who have completed or are in the final year of their Bachelor's degree in any
                          discipline with minimum 50% aggregate (45% for reserved categories).
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">Important Dates</h4>
                        <div className="space-y-2 text-gray-700">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Application Start Date:</strong> February 1, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Application End Date:</strong> April 15, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Exam Date:</strong> May 10, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Result Declaration:</strong> May 25, 2025
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 bg-primary/5 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-4 text-primary">Selection Process</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Entrance Exam</p>
                          <p className="text-sm text-gray-600">JUMAT or CAT/MAT/XAT/GMAT scores</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Group Discussion</p>
                          <p className="text-sm text-gray-600">Evaluation of communication and analytical skills</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Personal Interview</p>
                          <p className="text-sm text-gray-600">Assessment of personality and career goals</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Final Merit List</p>
                          <p className="text-sm text-gray-600">Based on entrance exam, GD, PI, and academic record</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="w-full" asChild>
                        <Link href="/admissions/apply">Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jupgee">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      Jeppiaar University PG Entrance Examination (JUPGEE)
                    </h3>
                    <p className="text-gray-700 mb-6">
                      JUPGEE is conducted for admission to various postgraduate programs (M.Tech, M.Sc, MA) offered by
                      different schools at Jeppiaar University.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold mb-2">Exam Pattern</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Duration: 2 hours</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Total Questions: 100 multiple-choice questions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Sections: Subject-specific knowledge (80 questions), General Aptitude (20 questions)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Marking Scheme: +3 for correct answer, -1 for incorrect answer</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">Eligibility</h4>
                        <p className="text-gray-700">
                          Candidates who have completed or are in the final year of their Bachelor's degree in the
                          relevant discipline with minimum 55% aggregate (50% for reserved categories).
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">Important Dates</h4>
                        <div className="space-y-2 text-gray-700">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Application Start Date:</strong> March 1, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Application End Date:</strong> May 15, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Exam Date:</strong> June 5, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Result Declaration:</strong> June 20, 2025
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 bg-primary/5 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-4 text-primary">Programs Covered</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-primary">Engineering Programs</p>
                        <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
                          <li>M.Tech in Computer Science & Engineering</li>
                          <li>M.Tech in AI & Machine Learning</li>
                          <li>M.Tech in Structural Engineering</li>
                          <li>M.Tech in Power Electronics</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-primary">Science Programs</p>
                        <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
                          <li>M.Sc in Physics</li>
                          <li>M.Sc in Chemistry</li>
                          <li>M.Sc in Mathematics</li>
                          <li>M.Sc in Computer Science</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-primary">Arts & Humanities</p>
                        <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
                          <li>MA in English</li>
                          <li>MA in Economics</li>
                          <li>MA in Psychology</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="w-full" asChild>
                        <Link href="/admissions/apply">Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jurat">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      Jeppiaar University Research Aptitude Test (JURAT)
                    </h3>
                    <p className="text-gray-700 mb-6">
                      JURAT is conducted for admission to Ph.D. programs in various disciplines at Jeppiaar University.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold mb-2">Exam Pattern</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Duration: 3 hours</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Total Questions: 100 multiple-choice questions</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>
                              Sections: Research Methodology (50 questions), Subject-specific knowledge (50 questions)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>Marking Scheme: +3 for correct answer, -1 for incorrect answer</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">Eligibility</h4>
                        <p className="text-gray-700">
                          Candidates with a Master's degree in the relevant discipline with minimum 60% aggregate (55%
                          for reserved categories).
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">Important Dates</h4>
                        <div className="space-y-2 text-gray-700">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Application Start Date:</strong> April 1, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Application End Date:</strong> May 31, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Exam Date:</strong> June 25, 2025
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span>
                              <strong>Result Declaration:</strong> July 15, 2025
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 bg-primary/5 p-6 rounded-lg">
                    <h4 className="text-lg font-bold mb-4 text-primary">Selection Process</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Entrance Exam</p>
                          <p className="text-sm text-gray-600">JURAT or UGC-NET/CSIR-NET/GATE qualification</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Research Proposal</p>
                          <p className="text-sm text-gray-600">
                            Submission of research proposal in the area of interest
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Presentation</p>
                          <p className="text-sm text-gray-600">
                            Presentation of research proposal before the committee
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium">Personal Interview</p>
                          <p className="text-sm text-gray-600">In-depth interview to assess research aptitude</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <p className="font-medium">Final Selection</p>
                          <p className="text-sm text-gray-600">
                            Based on entrance exam, proposal, presentation, and interview
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="w-full" asChild>
                        <Link href="/research/phd-admissions">Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Exam Centers</h2>
          <p className="text-gray-700 mb-6">
            Jeppiaar University entrance examinations are conducted at various centers across India. The following
            cities have been designated as exam centers for the upcoming entrance exams:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Chennai</p>
                  <p className="text-sm text-gray-600">Tamil Nadu</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Bangalore</p>
                  <p className="text-sm text-gray-600">Karnataka</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Hyderabad</p>
                  <p className="text-sm text-gray-600">Telangana</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Kochi</p>
                  <p className="text-sm text-gray-600">Kerala</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mumbai</p>
                  <p className="text-sm text-gray-600">Maharashtra</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Delhi</p>
                  <p className="text-sm text-gray-600">Delhi NCR</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Kolkata</p>
                  <p className="text-sm text-gray-600">West Bengal</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Coimbatore</p>
                  <p className="text-sm text-gray-600">Tamil Nadu</p>
                </div>
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
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/admissions/resources">Download Syllabus</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

