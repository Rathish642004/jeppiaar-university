import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function EligibilityPage() {
  return (
    <>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Eligibility Criteria</h1>
          <p className="text-xl text-gray-600">Find out if you meet the requirements for admission to our programs.</p>
        </div>

        <Tabs defaultValue="undergraduate" className="mb-16">
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
            <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
            <TabsTrigger value="doctoral">Doctoral</TabsTrigger>
            <TabsTrigger value="diploma">Diploma & Certificate</TabsTrigger>
          </TabsList>

          <TabsContent value="undergraduate">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Engineering Programs (B.Tech)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Academic Qualification</p>
                        <p className="text-gray-700">
                          10+2 or equivalent with Physics, Chemistry, and Mathematics as core subjects
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimum Marks</p>
                        <p className="text-gray-700">Minimum 60% aggregate in PCM (55% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Entrance Exam</p>
                        <p className="text-gray-700">
                          Valid JEE Main score or Jeppiaar University Engineering Entrance Test (JUEET)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Science Programs (B.Sc)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Academic Qualification</p>
                        <p className="text-gray-700">10+2 or equivalent with relevant science subjects</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimum Marks</p>
                        <p className="text-gray-700">Minimum 55% aggregate (50% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Selection Process</p>
                        <p className="text-gray-700">
                          Merit-based on 10+2 marks or entrance test conducted by the university
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Management & Arts Programs (BBA/BA/B.Com)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Academic Qualification</p>
                        <p className="text-gray-700">10+2 or equivalent in any stream</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimum Marks</p>
                        <p className="text-gray-700">Minimum 50% aggregate (45% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Selection Process</p>
                        <p className="text-gray-700">
                          Merit-based on 10+2 marks and/or entrance test followed by personal interview
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="postgraduate">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Engineering Programs (M.Tech)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Academic Qualification</p>
                        <p className="text-gray-700">B.Tech/B.E or equivalent in relevant discipline</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimum Marks</p>
                        <p className="text-gray-700">Minimum 60% aggregate (55% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Entrance Exam</p>
                        <p className="text-gray-700">Valid GATE score or Jeppiaar University PG Entrance Test</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Science Programs (M.Sc)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Academic Qualification</p>
                        <p className="text-gray-700">B.Sc or equivalent in relevant discipline</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimum Marks</p>
                        <p className="text-gray-700">Minimum 55% aggregate (50% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Selection Process</p>
                        <p className="text-gray-700">Merit-based on graduation marks and/or entrance test</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Management Programs (MBA)</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Academic Qualification</p>
                        <p className="text-gray-700">Bachelor's degree in any discipline</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimum Marks</p>
                        <p className="text-gray-700">Minimum 50% aggregate (45% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Entrance Exam</p>
                        <p className="text-gray-700">
                          Valid CAT/MAT/XAT/GMAT scores or Jeppiaar University Management Entrance Test
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Selection Process</p>
                        <p className="text-gray-700">Group Discussion and Personal Interview</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="doctoral">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Ph.D. Programs</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Academic Qualification</p>
                        <p className="text-gray-700">Master's degree in relevant discipline</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimum Marks</p>
                        <p className="text-gray-700">Minimum 60% aggregate (55% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Entrance Exam</p>
                        <p className="text-gray-700">Jeppiaar University Research Aptitude Test (JURAT)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Selection Process</p>
                        <p className="text-gray-700">Research proposal presentation and personal interview</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Exemptions</p>
                        <p className="text-gray-700">
                          Candidates with valid UGC-NET/CSIR-NET/SLET/GATE or equivalent qualification may be exempted
                          from the entrance test
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="diploma">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Diploma Programs</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Academic Qualification</p>
                        <p className="text-gray-700">10th pass or 10+2 pass (depending on the program)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimum Marks</p>
                        <p className="text-gray-700">Minimum 50% aggregate (45% for reserved categories)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Selection Process</p>
                        <p className="text-gray-700">Merit-based on qualifying examination marks</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Certificate Programs</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Academic Qualification</p>
                        <p className="text-gray-700">Varies by program (10th pass or 10+2 pass or Bachelor's degree)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimum Marks</p>
                        <p className="text-gray-700">Minimum 45% aggregate in qualifying examination</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Selection Process</p>
                        <p className="text-gray-700">Direct admission based on availability of seats</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">Reservation Policy</h2>
          <p className="text-gray-700 mb-6">
            Jeppiaar University follows the reservation policy as per government norms. The following categories are
            eligible for reservation:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Scheduled Caste (SC): 15%</li>
            <li>Scheduled Tribe (ST): 7.5%</li>
            <li>Other Backward Classes (OBC): 27%</li>
            <li>Economically Weaker Sections (EWS): 10%</li>
            <li>Persons with Disabilities (PwD): 5% horizontal reservation</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you meet the eligibility criteria, take the next step towards your academic journey at Jeppiaar
            University.
          </p>
          <Button size="lg" asChild>
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

