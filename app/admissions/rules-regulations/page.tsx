import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Book, UserCheck, Calendar, AlertTriangle, Download } from "lucide-react"

export default function RulesRegulationsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Rules & Regulations</h1>
        <p className="text-xl text-gray-600">
          Guidelines and policies that govern student life and academic conduct at Jeppiaar University.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="University campus with students"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Commitment to Excellence</h2>
          <p className="text-gray-700 mb-4">
            At Jeppiaar University, we are committed to creating a conducive environment for academic excellence and
            holistic development. Our rules and regulations are designed to foster discipline, integrity, and respect
            among all members of the university community.
          </p>
          <p className="text-gray-700 mb-4">
            These guidelines help maintain a harmonious campus atmosphere where students can focus on their studies and
            engage in extracurricular activities without disruption.
          </p>
          <p className="text-gray-700">
            All students are expected to be familiar with and adhere to these rules throughout their association with
            the university. Violation of these rules may result in disciplinary action.
          </p>
        </div>
      </div>

      <Tabs defaultValue="admission" className="mb-16">
        <TabsList className="mx-auto flex justify-center mb-8 flex-wrap">
          <TabsTrigger value="admission">Admission Rules</TabsTrigger>
          <TabsTrigger value="academic">Academic Regulations</TabsTrigger>
          <TabsTrigger value="conduct">Code of Conduct</TabsTrigger>
          <TabsTrigger value="hostel">Hostel Rules</TabsTrigger>
          <TabsTrigger value="disciplinary">Disciplinary Measures</TabsTrigger>
        </TabsList>

        <TabsContent value="admission">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Admission Rules & Regulations</h3>
                  <p className="text-gray-700">
                    These rules govern the process of admission to various programs offered by Jeppiaar University. They
                    ensure fair and transparent selection of candidates based on merit and other criteria.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Eligibility Requirements</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Candidates must meet the minimum eligibility criteria specified for each program.</li>
                    <li>All academic qualifications should be from recognized boards/universities.</li>
                    <li>
                      Candidates must have passed the qualifying examination with the required percentage of marks as
                      specified for different programs.
                    </li>
                    <li>
                      For programs requiring entrance exams, candidates must have valid scores as per the university's
                      requirements.
                    </li>
                    <li>
                      International students must have equivalent qualifications recognized by the Association of Indian
                      Universities (AIU) or relevant authorities.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Application Process</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>
                      Applications must be submitted through the official university portal or the prescribed
                      application form within the specified deadline.
                    </li>
                    <li>All required documents must be uploaded/submitted along with the application.</li>
                    <li>Incomplete applications or those received after the deadline will not be considered.</li>
                    <li>Application fees once paid are non-refundable regardless of the outcome of the application.</li>
                    <li>
                      Providing false information or submitting forged documents will result in immediate rejection of
                      the application and may lead to permanent disqualification.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Selection Process</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>
                      Selection is based on merit, entrance exam scores, and/or performance in interviews/group
                      discussions as applicable.
                    </li>
                    <li>
                      The university reserves the right to modify the selection criteria and process as deemed
                      necessary.
                    </li>
                    <li>Decisions of the admission committee are final and binding.</li>
                    <li>
                      Selected candidates must complete the admission formalities within the stipulated time, failing
                      which the offer of admission may be withdrawn.
                    </li>
                    <li>
                      Admission offered on the basis of provisional certificates is subject to verification of original
                      documents.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Reservation Policy</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>The university follows the reservation policy as per government norms.</li>
                    <li>
                      Candidates seeking admission under reserved categories must submit valid category certificates
                      issued by competent authorities.
                    </li>
                    <li>
                      In case of any doubt or dispute regarding the validity of category certificates, the decision of
                      the university shall be final.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Cancellation & Refund</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Cancellation of admission must be requested in writing through the official channel.</li>
                    <li>Refund of fees in case of cancellation shall be as per the university's refund policy.</li>
                    <li>
                      In case of withdrawal after the academic session has commenced, the student will be liable to pay
                      fees for the period of study as per university norms.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Book className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Academic Regulations</h3>
                  <p className="text-gray-700">
                    These regulations govern the academic activities, assessment methods, progression criteria, and
                    award of degrees/diplomas at Jeppiaar University.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Attendance Requirements</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>A minimum of 75% attendance in each course is mandatory for all students.</li>
                    <li>
                      Students with attendance below 75% in any course will not be allowed to appear for the
                      end-semester examination of that course.
                    </li>
                    <li>
                      Medical exemptions may be granted in case of prolonged illness, subject to submission of valid
                      medical certificates.
                    </li>
                    <li>
                      Attendance relaxation for participation in university-approved events will be as per the
                      university policy.
                    </li>
                    <li>
                      Students are responsible for tracking their own attendance and rectifying any discrepancies in
                      consultation with the concerned faculty member.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Examination System</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>
                      The university follows a continuous evaluation system comprising internal assessments and
                      end-semester examinations.
                    </li>
                    <li>
                      The weightage for internal assessment and end-semester examination varies as per program
                      requirements.
                    </li>
                    <li>
                      Students must obtain a minimum passing grade in both internal assessment and end-semester
                      examination separately.
                    </li>
                    <li>Use of unfair means during examinations will result in serious disciplinary action.</li>
                    <li>
                      Students must carry their identity cards to the examination hall and follow all examination rules.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Progression & Promotion</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>
                      Students must clear all courses of a particular semester/year to progress to the next
                      semester/year.
                    </li>
                    <li>A limited number of backlogs may be allowed as per the specific program regulations.</li>
                    <li>Students with backlogs must clear them within the specified timeframe.</li>
                    <li>
                      Maximum duration for completion of a program is limited to n+2 years, where n is the normal
                      duration of the program.
                    </li>
                    <li>
                      Students who fail to complete the program within the maximum duration will be required to exit the
                      program.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Grading System</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>The university follows a 10-point grading system for evaluation.</li>
                    <li>Grades are awarded based on the absolute marks obtained by students.</li>
                    <li>The minimum passing grade is 'D' which corresponds to 40% marks.</li>
                    <li>Cumulative Grade Point Average (CGPA) is calculated at the end of each semester.</li>
                    <li>The final degree classification is based on the CGPA obtained at the end of the program.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Academic Integrity</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Plagiarism, cheating, and other forms of academic dishonesty are strictly prohibited.</li>
                    <li>All assignments, projects, and research work must be original and properly cited.</li>
                    <li>
                      The university uses plagiarism detection software to check the originality of submitted work.
                    </li>
                    <li>
                      Penalties for academic dishonesty range from failure in the assignment/examination to expulsion
                      from the university.
                    </li>
                    <li>
                      Students are expected to familiarize themselves with the academic integrity policy of the
                      university.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conduct">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-primary/10 p-4 rounded-full">
                  <UserCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Code of Conduct</h3>
                  <p className="text-gray-700">
                    The code of conduct outlines the expected behavior of students at Jeppiaar University, promoting a
                    respectful, safe, and inclusive environment for all.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">General Conduct</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>
                      Students must behave with dignity and respect towards all members of the university community.
                    </li>
                    <li>Display of identification cards on campus is mandatory at all times.</li>
                    <li>Punctuality in attending classes, events, and other university activities is expected.</li>
                    <li>Proper dress code suitable for an academic environment should be maintained on campus.</li>
                    <li>
                      Use of mobile phones and other electronic devices in classrooms, laboratories, and library is
                      restricted unless permitted for academic purposes.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Prohibited Behaviors</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Ragging in any form is strictly prohibited and is a punishable offense.</li>
                    <li>
                      Harassment, discrimination, or bullying based on gender, race, religion, caste, or any other
                      grounds is not tolerated.
                    </li>
                    <li>
                      Possession, consumption, or distribution of alcohol, tobacco, or drugs on campus is strictly
                      prohibited.
                    </li>
                    <li>Damaging university property or facilities is a serious offense.</li>
                    <li>
                      Engaging in political activities or organizing unauthorized gatherings on campus is not permitted.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Digital Conduct</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>
                      Use of university computer resources, internet facilities, and digital platforms must be for
                      academic and legitimate purposes only.
                    </li>
                    <li>Sharing of university login credentials with others is prohibited.</li>
                    <li>
                      Posting defamatory, offensive, or inappropriate content about the university or its members on
                      social media is not acceptable.
                    </li>
                    <li>
                      Violation of cybersecurity measures or unauthorized access to university systems is a serious
                      offense.
                    </li>
                    <li>Respect for intellectual property rights in digital content must be maintained.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Classroom Etiquette</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Students must enter and leave classrooms in an orderly manner.</li>
                    <li>Engaging in discussions in a respectful manner, allowing others to express their views.</li>
                    <li>Maintaining silence during lectures and not disrupting the teaching-learning process.</li>
                    <li>Seeking permission before leaving the classroom during an ongoing lecture.</li>
                    <li>
                      Respecting the authority of faculty members and following their instructions in the classroom.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Campus Environment</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Contributing to the cleanliness and aesthetic maintenance of the campus.</li>
                    <li>Using designated areas for meals and refreshments.</li>
                    <li>
                      Following energy conservation measures by switching off lights, fans, and other electrical
                      equipment when not in use.
                    </li>
                    <li>Participating in environmental protection initiatives of the university.</li>
                    <li>Respecting the greenery on campus and not damaging plants or trees.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hostel">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Hostel Rules & Regulations</h3>
                  <p className="text-gray-700">
                    These rules govern the residential life of students staying in university hostels, ensuring safety,
                    discipline, and a conducive living environment.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Allotment & Occupancy</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>
                      Hostel accommodation is allotted on a first-come-first-served basis, subject to availability.
                    </li>
                    <li>
                      Room allotment is done by the Hostel Administration and cannot be changed without prior
                      permission.
                    </li>
                    <li>
                      Students must occupy the rooms allotted to them and should not change or exchange rooms without
                      permission.
                    </li>
                    <li>
                      Upon allotment, students must verify the condition of furniture and fixtures in their rooms and
                      report any deficiencies.
                    </li>
                    <li>Hostel rooms must be vacated during summer vacation unless special permission is obtained.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Attendance & Timings</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Attendance is taken in the hostel every day at a specified time.</li>
                    <li>Students must return to the hostel before the specified curfew time.</li>
                    <li>
                      For leaving the hostel premises during non-class hours, prior permission must be obtained from the
                      warden.
                    </li>
                    <li>
                      Overnight stay outside the hostel requires written permission from parents/guardians and approval
                      from the warden.
                    </li>
                    <li>
                      Students must sign the in/out register when leaving or returning to the hostel outside regular
                      hours.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Visitors & Guests</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Visitors are allowed only in the designated visitor's area during specified visiting hours.</li>
                    <li>Overnight stay of guests/relatives is not permitted in the hostel rooms.</li>
                    <li>Parents/guardians can visit the hostel after obtaining permission from the warden.</li>
                    <li>Students are responsible for the conduct of their visitors.</li>
                    <li>Entry of persons of the opposite gender in the respective hostels is strictly prohibited.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Maintenance & Cleanliness</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Students are responsible for keeping their rooms and surroundings clean and tidy.</li>
                    <li>Damage to hostel property will result in fines and disciplinary action.</li>
                    <li>Students must switch off lights, fans, and other electrical appliances when not in use.</li>
                    <li>Use of electrical appliances other than those permitted is not allowed.</li>
                    <li>
                      Students should not keep valuable items in their rooms; the university is not responsible for any
                      loss or theft.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Mess Rules</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Mess attendance is compulsory for all hostel residents.</li>
                    <li>Meals are served only during the specified timings.</li>
                    <li>Wastage of food is discouraged.</li>
                    <li>Utensils and cutlery should not be taken out of the dining hall.</li>
                    <li>Special diet requests due to health reasons require medical certificates.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="disciplinary">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-primary/10 p-4 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Disciplinary Measures</h3>
                  <p className="text-gray-700">
                    These guidelines outline the consequences of violating university rules and regulations, and the
                    disciplinary procedures followed.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Disciplinary Committee</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>The university has a Disciplinary Committee to address violations of rules and regulations.</li>
                    <li>
                      The committee comprises senior faculty members, administrative staff, and student representatives.
                    </li>
                    <li>All disciplinary issues are referred to and handled by this committee.</li>
                    <li>
                      The committee follows a fair and transparent process, giving the concerned student an opportunity
                      to present their case.
                    </li>
                    <li>Decisions of the Disciplinary Committee are binding on all concerned.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Types of Violations</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>
                      <strong>Minor Violations:</strong> Late attendance, dress code violations, unauthorized use of
                      mobile phones in restricted areas, etc.
                    </li>
                    <li>
                      <strong>Moderate Violations:</strong> Damaging university property, unauthorized absence,
                      disrupting classes, misbehaving with faculty or staff, etc.
                    </li>
                    <li>
                      <strong>Serious Violations:</strong> Ragging, harassment, discrimination, bullying, possession of
                      alcohol/drugs, violence, etc.
                    </li>
                    <li>
                      <strong>Academic Violations:</strong> Plagiarism, cheating in examinations, tampering with
                      academic records, etc.
                    </li>
                    <li>
                      <strong>Digital Violations:</strong> Cyberbullying, hacking university systems, posting defamatory
                      content about the university, etc.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Disciplinary Actions</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>
                      <strong>Verbal Warning:</strong> For first-time minor violations.
                    </li>
                    <li>
                      <strong>Written Warning:</strong> For repeated minor violations or moderate violations.
                    </li>
                    <li>
                      <strong>Fine:</strong> For damaging university property or other specific violations.
                    </li>
                    <li>
                      <strong>Community Service:</strong> Assigned work on campus as a corrective measure.
                    </li>
                    <li>
                      <strong>Suspension:</strong> Temporary prohibition from attending classes or staying in the
                      hostel.
                    </li>
                    <li>
                      <strong>Rustication:</strong> Removal from the university for a specified period.
                    </li>
                    <li>
                      <strong>Expulsion:</strong> Permanent removal from the university with no option for readmission.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Appeal Process</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>Students have the right to appeal against the decision of the Disciplinary Committee.</li>
                    <li>
                      Appeals must be submitted in writing to the Vice-Chancellor within 7 days of the committee's
                      decision.
                    </li>
                    <li>The Vice-Chancellor may form an Appeal Committee to review the case.</li>
                    <li>The decision of the Appeal Committee/Vice-Chancellor is final and binding.</li>
                    <li>
                      During the appeal process, the original disciplinary action remains in effect unless otherwise
                      specified.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Record Keeping</h4>
                  <ul className="space-y-3 text-gray-700 list-disc pl-6">
                    <li>All disciplinary actions are recorded in the student's personal file.</li>
                    <li>
                      Serious disciplinary actions may be mentioned in the student's character certificate/transcript.
                    </li>
                    <li>
                      Records of disciplinary actions are maintained for the entire duration of the student's study at
                      the university.
                    </li>
                    <li>
                      Students with a clean disciplinary record for a continuous period may apply for the removal of
                      previous minor violations from their record.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">Anti-Ragging Policy</h3>
            <p className="text-gray-700 mb-4">
              Jeppiaar University has a zero-tolerance policy towards ragging in any form. As per the Supreme Court
              directives, ragging is a punishable offense.
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6">
              <li>The university has an Anti-Ragging Committee and Squad to prevent incidents of ragging.</li>
              <li>All students must submit an anti-ragging undertaking at the time of admission.</li>
              <li>Ragging incidents can be reported to the Anti-Ragging Helpline or directly to the committee.</li>
              <li>Punishments for ragging include suspension, rustication, expulsion, and filing of criminal cases.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">Grievance Redressal Mechanism</h3>
            <p className="text-gray-700 mb-4">
              The university has a structured Grievance Redressal Mechanism to address the concerns and complaints of
              students.
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6">
              <li>
                Students can submit their grievances through the online portal, grievance box, or directly to the
                Grievance Redressal Cell.
              </li>
              <li>Each department has a Departmental Grievance Committee to address academic grievances.</li>
              <li>Hostel-related grievances are handled by the Hostel Grievance Committee.</li>
              <li>General grievances are addressed by the University Grievance Redressal Committee.</li>
              <li>
                Grievances are resolved within a specified timeframe, and feedback is provided to the complainant.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">Equal Opportunity Policy</h3>
            <p className="text-gray-700 mb-4">
              Jeppiaar University is committed to providing equal opportunities to all students regardless of gender,
              religion, caste, race, or socio-economic background.
            </p>
            <ul className="space-y-2 text-gray-700 list-disc pl-6">
              <li>
                The university has an Equal Opportunity Cell to ensure inclusive practices in all aspects of university
                life.
              </li>
              <li>
                Special provisions are made for differently-abled students to ensure accessibility and equal
                participation.
              </li>
              <li>Discrimination in any form is strictly prohibited and is a punishable offense.</li>
              <li>The university organizes awareness programs on diversity and inclusion.</li>
              <li>Feedback on equal opportunity measures is regularly collected and acted upon.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/5 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary">Student Rights & Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Student Rights</h3>
            <ul className="space-y-3 text-gray-700 list-disc pl-6">
              <li>Right to quality education and academic resources.</li>
              <li>Right to fair and unbiased evaluation.</li>
              <li>Right to participate in university governance through student councils.</li>
              <li>Right to access university facilities and services.</li>
              <li>Right to freedom of expression within the bounds of decorum.</li>
              <li>Right to a safe and harassment-free environment.</li>
              <li>Right to privacy and confidentiality of personal information.</li>
              <li>Right to redressal of grievances through proper channels.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Student Responsibilities</h3>
            <ul className="space-y-3 text-gray-700 list-disc pl-6">
              <li>Responsibility to adhere to university rules and regulations.</li>
              <li>Responsibility to maintain academic integrity and honesty.</li>
              <li>Responsibility to respect the rights and privacy of others.</li>
              <li>Responsibility to maintain the cleanliness and sanctity of the campus.</li>
              <li>Responsibility to participate actively in the learning process.</li>
              <li>Responsibility to use university resources judiciously.</li>
              <li>Responsibility to report violations and malpractices.</li>
              <li>Responsibility to represent the university with dignity and decorum.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-lg shadow-sm">
        <div>
          <h2 className="text-2xl font-bold mb-2">Download Complete Rules & Regulations</h2>
          <p className="text-gray-700">Get a comprehensive document of all rules and regulations.</p>
        </div>
        <Button className="flex items-center gap-2" variant="outline" asChild>
          <Link href="#download">
            <Download className="h-5 w-5" />
            Download PDF
          </Link>
        </Button>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Need Clarification?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          If you have any questions regarding the rules and regulations, feel free to contact our administrative office.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Contact Admin Office</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

