import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileText, Info, CreditCard, HelpCircle } from "lucide-react"

export default function FeesStructurePage() {
  return (
    <>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Fees Structure</h1>
          <p className="text-xl text-gray-600">
            Comprehensive information about tuition fees, accommodation charges, and other expenses for various programs
            at Jeppiaar University.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Investing in Your Future</h2>
            <p className="text-gray-700 mb-4">
              At Jeppiaar University, we strive to provide high-quality education at reasonable costs. Our fee structure
              is designed to be transparent and comprehensive, covering all essential academic and administrative
              services.
            </p>
            <p className="text-gray-700 mb-4">
              We offer various payment plans and financial aid options to help students manage their educational
              expenses effectively. Students can pay their fees in installments or opt for educational loans from our
              partner banks.
            </p>
            <p className="text-gray-700">
              For meritorious and economically disadvantaged students, we offer scholarships and fee waivers. Please
              visit our{" "}
              <Link href="/admissions/scholarships" className="text-primary hover:underline">
                Scholarships page
              </Link>{" "}
              for more information.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Students at campus"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Tabs defaultValue="engineering" className="mb-16">
          <TabsList className="mx-auto flex justify-center mb-8 flex-wrap">
            <TabsTrigger value="engineering">Engineering & Technology</TabsTrigger>
            <TabsTrigger value="arts">Arts & Management</TabsTrigger>
            <TabsTrigger value="science">Science & Health</TabsTrigger>
            <TabsTrigger value="physical">Physical Education</TabsTrigger>
            <TabsTrigger value="aero">Aeronautics</TabsTrigger>
          </TabsList>

          <TabsContent value="engineering">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">School of Engineering & Technology</h3>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Undergraduate Programs (B.Tech)</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">B.Tech Computer Science & Engineering</TableCell>
                          <TableCell>4 Years</TableCell>
                          <TableCell>₹1,20,000</TableCell>
                          <TableCell>₹25,000</TableCell>
                          <TableCell>₹1,45,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Tech Information Technology</TableCell>
                          <TableCell>4 Years</TableCell>
                          <TableCell>₹1,20,000</TableCell>
                          <TableCell>₹25,000</TableCell>
                          <TableCell>₹1,45,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Tech Electronics & Communication</TableCell>
                          <TableCell>4 Years</TableCell>
                          <TableCell>₹1,00,000</TableCell>
                          <TableCell>₹25,000</TableCell>
                          <TableCell>₹1,25,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Tech Mechanical Engineering</TableCell>
                          <TableCell>4 Years</TableCell>
                          <TableCell>₹90,000</TableCell>
                          <TableCell>₹25,000</TableCell>
                          <TableCell>₹1,15,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Tech Civil Engineering</TableCell>
                          <TableCell>4 Years</TableCell>
                          <TableCell>₹90,000</TableCell>
                          <TableCell>₹25,000</TableCell>
                          <TableCell>₹1,15,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Postgraduate Programs (M.Tech)</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">M.Tech Computer Science & Engineering</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹1,00,000</TableCell>
                          <TableCell>₹20,000</TableCell>
                          <TableCell>₹1,20,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">M.Tech AI & Machine Learning</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹1,10,000</TableCell>
                          <TableCell>₹20,000</TableCell>
                          <TableCell>₹1,30,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">M.Tech Structural Engineering</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹90,000</TableCell>
                          <TableCell>₹20,000</TableCell>
                          <TableCell>₹1,10,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">M.Tech Power Electronics</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹90,000</TableCell>
                          <TableCell>₹20,000</TableCell>
                          <TableCell>₹1,10,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="arts">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">School of Arts, Humanities & Management</h3>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Undergraduate Programs</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Bachelor of Business Administration (BBA)</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹70,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹85,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Com in Accounting & Finance</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹60,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹75,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">BA in English Literature</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹50,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹65,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">BA in Economics</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹50,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹65,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Postgraduate Programs</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Master of Business Administration (MBA)</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹1,10,000</TableCell>
                          <TableCell>₹20,000</TableCell>
                          <TableCell>₹1,30,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">MA in English</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹60,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹75,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">MA in Economics</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹60,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹75,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="science">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">School of Science & Health</h3>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Undergraduate Programs</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">B.Sc Computer Science</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹60,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹75,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Sc Mathematics</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹50,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹65,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Sc Physics</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹50,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹65,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Sc Chemistry</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹50,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹65,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Sc Biotechnology</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>���70,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹85,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Postgraduate Programs</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">M.Sc in Data Science</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹80,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹95,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">M.Sc in Physics</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹60,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹75,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">M.Sc in Chemistry</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹60,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹75,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="physical">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">School of Physical Education & Sports</h3>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Undergraduate Programs</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Bachelor of Physical Education (B.P.Ed)</TableCell>
                          <TableCell>4 Years</TableCell>
                          <TableCell>₹60,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹75,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Sc in Sports Science</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹65,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹80,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Sc in Sports Management</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹65,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹80,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Postgraduate Programs</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Master of Physical Education (M.P.Ed)</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹70,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹85,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">M.Sc in Sports Nutrition</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹75,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹90,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">M.Sc in Sports Psychology</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹75,000</TableCell>
                          <TableCell>₹15,000</TableCell>
                          <TableCell>₹90,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aero">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-primary">School of Aeronautics</h3>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Undergraduate Programs</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">B.Tech in Aerospace Engineering</TableCell>
                          <TableCell>4 Years</TableCell>
                          <TableCell>₹1,50,000</TableCell>
                          <TableCell>₹30,000</TableCell>
                          <TableCell>₹1,80,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Sc in Aviation Technology</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹1,20,000</TableCell>
                          <TableCell>₹25,000</TableCell>
                          <TableCell>₹1,45,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">B.Sc in Aircraft Maintenance Engineering</TableCell>
                          <TableCell>3 Years</TableCell>
                          <TableCell>₹1,30,000</TableCell>
                          <TableCell>₹25,000</TableCell>
                          <TableCell>₹1,55,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Postgraduate Programs</h4>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">Program</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Tuition Fee (per annum)</TableHead>
                          <TableHead>Development Fee (per annum)</TableHead>
                          <TableHead>Total (per annum)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">M.Tech in Aerospace Engineering</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹1,30,000</TableCell>
                          <TableCell>₹25,000</TableCell>
                          <TableCell>₹1,55,000</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">M.Sc in Avionics</TableCell>
                          <TableCell>2 Years</TableCell>
                          <TableCell>₹1,10,000</TableCell>
                          <TableCell>₹20,000</TableCell>
                          <TableCell>₹1,30,000</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Payment Options</h3>
                  <p className="text-gray-700">
                    Fees can be paid through various modes including online payment, demand draft, or bank transfer.
                    Students can also pay in installments as per the schedule provided.
                  </p>
                </div>
              </div>
              <div className="space-y-2 pl-16">
                <p className="text-sm text-gray-700">
                  <strong>Online Payment:</strong> Through the university payment portal
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Bank Transfer:</strong> To the university account (details provided at admission)
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Demand Draft:</strong> In favor of "Jeppiaar University" payable at Chennai
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Info className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Additional Fees</h3>
                  <p className="text-gray-700">
                    Besides tuition and development fees, students may need to pay for additional services and
                    facilities.
                  </p>
                </div>
              </div>
              <div className="space-y-2 pl-16">
                <p className="text-sm text-gray-700">
                  <strong>Registration Fee:</strong> ₹5,000 (one-time, non-refundable)
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Examination Fee:</strong> ₹5,000 per semester
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Hostel Fee:</strong> ₹75,000 - ₹1,00,000 per annum (depending on room type)
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Transportation Fee:</strong> ₹20,000 - ₹30,000 per annum (depending on distance)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Refund Policy</h3>
                  <p className="text-gray-700">
                    The university follows a structured refund policy in case of withdrawal or cancellation of
                    admission.
                  </p>
                </div>
              </div>
              <div className="space-y-2 pl-16">
                <p className="text-sm text-gray-700">
                  <strong>Before commencement of classes:</strong> 90% refund of tuition fee
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Within 15 days of commencement:</strong> 80% refund of tuition fee
                </p>
                <p className="text-sm text-gray-700">
                  <strong>15-30 days after commencement:</strong> 50% refund of tuition fee
                </p>
                <p className="text-sm text-gray-700">
                  <strong>After 30 days of commencement:</strong> No refund
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Financial Assistance</h3>
                  <p className="text-gray-700">
                    The university offers various financial assistance options to help students manage their educational
                    expenses.
                  </p>
                </div>
              </div>
              <div className="space-y-2 pl-16">
                <p className="text-sm text-gray-700">
                  <strong>Scholarships:</strong> Based on merit, sports achievements, and financial need
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Educational Loans:</strong> Partnership with various banks for easy loan processing
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Installment Options:</strong> Facility to pay fees in multiple installments
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Work-Study Programs:</strong> Opportunities to work part-time on campus
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">When do I need to pay the fees?</h3>
              <p className="text-gray-700">
                Fees are payable at the beginning of each academic year/semester as per the schedule provided in the
                admission letter. For new admissions, fees need to be paid within 7 days of receiving the admission
                offer to secure your seat.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Are there any hidden charges?</h3>
              <p className="text-gray-700">
                No, there are no hidden charges. All applicable fees are clearly mentioned in the fee structure. Any
                additional fees for special activities or facilities will be communicated well in advance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Can I get a fee waiver?</h3>
              <p className="text-gray-700">
                Fee waivers are available for meritorious students and those from economically disadvantaged
                backgrounds. Please refer to our Scholarships page for more information on eligibility criteria and
                application process.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">What is the mode of payment?</h3>
              <p className="text-gray-700">
                Fees can be paid through various modes including online payment, demand draft, or bank transfer. Details
                of payment options will be provided in your admission letter.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-lg shadow-sm">
          <div>
            <h2 className="text-2xl font-bold mb-2">Download Fee Structure</h2>
            <p className="text-gray-700">Get a detailed breakdown of all fees for different programs.</p>
          </div>
          <Button className="flex items-center gap-2" variant="outline" asChild>
            <Link href="#download">
              <Download className="h-5 w-5" />
              Download PDF
            </Link>
          </Button>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Need Further Assistance?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you have any questions regarding the fee structure or payment options, feel free to contact our finance
            department.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Finance Department</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

