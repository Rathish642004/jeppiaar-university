import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ChevronRight, Download, FileText } from "lucide-react"

export default function PhDRegulationsPage() {
  return (
    <main className="min-h-screen bg-secondary/10">
      {/* Hero Section */}
      <section className="bg-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ph.D Regulations</h1>
          <p className="text-lg max-w-3xl">
            Comprehensive guidelines and regulations governing doctoral research at Jeppiaar University.
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
                <h2 className="text-xl font-bold text-primary mb-4">Download Regulations</h2>
                <div className="space-y-4">
                  <Link
                    href="#"
                    className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="flex-1">Ph.D Regulations 2023</span>
                    <Download className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="flex-1">Ph.D Guidelines for Supervisors</span>
                    <Download className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center text-primary hover:text-primary/80 py-2 border-b border-gray-100"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="flex-1">Thesis Submission Guidelines</span>
                    <Download className="h-4 w-4" />
                  </Link>
                  <Link href="#" className="flex items-center text-primary hover:text-primary/80 py-2">
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="flex-1">Publication Guidelines</span>
                    <Download className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="admission">Admission</TabsTrigger>
                <TabsTrigger value="coursework">Course Work</TabsTrigger>
                <TabsTrigger value="thesis">Thesis & Evaluation</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">General Regulations</h2>
                    <p className="mb-6">
                      These regulations govern the conditions for admission, award of the degree of Doctor of Philosophy
                      (Ph.D), and other related matters at Jeppiaar University.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">1. Preamble</h3>
                        <p className="mb-4">
                          The Degree of Doctor of Philosophy (Ph.D) is awarded to a candidate who has submitted a thesis
                          on the basis of original and independent research in any particular discipline or involving
                          more than one discipline (inter-disciplinary), that makes a contribution to the advancement of
                          knowledge, which is approved by Board of examiners as required.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">2. Eligibility Criteria for Admission</h3>
                        <p className="mb-4">
                          Candidates for admission to the Ph.D program shall have a Master's degree or a professional
                          degree declared equivalent to the Master's degree by the corresponding statutory regulatory
                          body, with at least 55% marks in aggregate or its equivalent grade 'B' in the UGC 7-point
                          scale (or an equivalent grade in a point scale wherever grading system is followed) or an
                          equivalent degree from a foreign educational Institution accredited by an Assessment and
                          Accreditation Agency which is approved, recognized or authorized by an authority, established
                          or incorporated under a law in its home country or any other statutory authority in that
                          country for the purpose of assessing, accrediting or assuring quality and standards of
                          educational institutions.
                        </p>
                        <p>
                          A relaxation of 5% of marks, from 55% to 50%, or an equivalent relaxation of grade, may be
                          allowed for those belonging to SC/ST/OBC (non-creamy layer)/Differently-Abled and other
                          categories of candidates as per the decision of the Commission from time to time, or for those
                          who had obtained their Master's degree prior to 19th September, 1991. The eligibility marks of
                          55% (or an equivalent grade in a point scale wherever grading system is followed) and the
                          relaxation of 5% to the categories mentioned above are permissible based only on the
                          qualifying marks without including the grace mark procedures.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">3. Duration of the Program</h3>
                        <p className="mb-2">
                          Ph.D program shall be for a minimum duration of three years, including course work and a
                          maximum of six years.
                        </p>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                          <li>
                            <span className="font-medium">Minimum Duration:</span> 3 years (including course work) for
                            full-time scholars and 4 years for part-time scholars
                          </li>
                          <li>
                            <span className="font-medium">Maximum Duration:</span> 6 years for both full-time and
                            part-time scholars
                          </li>
                        </ul>
                        <p>
                          Extension beyond the above limits may be considered by the Research Board on the
                          recommendation of the Research Advisory Committee, with proper justification.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">4. Mode of Ph.D Program</h3>
                        <p className="mb-2">Jeppiaar University offers Ph.D programs in the following modes:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            <span className="font-medium">Full-time:</span> Scholars shall work under the supervision of
                            a Research Supervisor on a full-time basis.
                          </li>
                          <li>
                            <span className="font-medium">Part-time (Internal):</span> Candidates who are employed in
                            Jeppiaar University can pursue Ph.D on a part-time basis.
                          </li>
                          <li>
                            <span className="font-medium">Part-time (External):</span> Candidates who are employed in
                            other organizations can pursue Ph.D on a part-time basis, subject to fulfilling the
                            attendance requirements for course work.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">5. Research Committees</h3>
                        <p className="mb-2">
                          The following committees shall be involved in the Ph.D program at Jeppiaar University:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            <span className="font-medium">Research Board:</span> The apex body that oversees all
                            research activities at the university.
                          </li>
                          <li>
                            <span className="font-medium">Departmental Research Committee (DRC):</span> Responsible for
                            the selection of candidates and allocation of supervisors.
                          </li>
                          <li>
                            <span className="font-medium">Research Advisory Committee (RAC):</span> Monitors the
                            progress of each research scholar and provides guidance.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                      <h3 className="font-bold text-blue-800 mb-2">Note</h3>
                      <p className="text-sm text-blue-700">
                        These regulations are subject to change as per the guidelines of UGC and other regulatory
                        bodies. Scholars are advised to check the latest regulations on the university website or
                        contact the Research Office for any clarifications.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="admission" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Admission Regulations</h2>
                    <p className="mb-6">
                      This section outlines the regulations governing the admission process for Ph.D programs at
                      Jeppiaar University.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">1. Admission Process</h3>
                        <p className="mb-4">
                          Jeppiaar University shall admit Ph.D students through an Entrance Test conducted at the level
                          of the University. The University may decide separate terms and conditions for those students
                          who qualify UGC-NET (including JRF)/UGC-CSIR NET (including JRF)/SLET/GATE/teacher fellowship
                          holder or have passed M.Phil program.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">2. Entrance Test</h3>
                        <p className="mb-2">
                          The Entrance Test shall consist of two papers with the following structure:
                        </p>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                          <li>
                            <span className="font-medium">Paper 1:</span> Research Methodology (50 marks) - MCQs on
                            research aptitude, reasoning, data interpretation, and research ethics.
                          </li>
                          <li>
                            <span className="font-medium">Paper 2:</span> Subject Specific (50 marks) - Questions
                            related to the subject in which the candidate wishes to pursue research.
                          </li>
                        </ul>
                        <p className="mb-4">
                          Candidates must secure a minimum of 50% marks (45% for SC/ST/OBC candidates) in the entrance
                          test to be eligible for the interview.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">3. Interview</h3>
                        <p className="mb-2">
                          The interview shall consider the following aspects to determine the suitability of the
                          candidate:
                        </p>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                          <li>The candidate possesses the competence for the proposed research.</li>
                          <li>The research work can be suitably undertaken at the Institution/College.</li>
                          <li>The proposed area of research can contribute to new/additional knowledge.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">4. Allocation of Research Supervisor</h3>
                        <p className="mb-4">
                          The allocation of Research Supervisor for a selected research scholar shall be decided by the
                          Departmental Research Committee (DRC) concerned depending on the number of scholars per
                          Research Supervisor, the available specialization among the Supervisors and research interests
                          of the scholars as indicated by them at the time of interview/viva voce.
                        </p>
                        <p>
                          In case of topics which are of inter-disciplinary nature where the Department concerned feels
                          that the expertise in the Department has to be supplemented from outside, the Department may
                          appoint a Research Supervisor from the Department itself, who shall be known as the Research
                          Supervisor, and a Co-Supervisor from outside the Department/Faculty/College/Institution on
                          such terms and conditions as may be specified and agreed upon by the consenting
                          Institutions/Colleges.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">5. Number of Scholars per Supervisor</h3>
                        <p className="mb-2">
                          A Research Supervisor/Co-supervisor who is a Professor, at any given point of time, cannot
                          guide more than Eight (8) Ph.D. scholars. An Associate Professor as Research Supervisor can
                          guide up to a maximum of six (6) Ph.D. scholars and an Assistant Professor as Research
                          Supervisor can guide up to a maximum of four (4) Ph.D. scholars.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">6. Change of Supervisor</h3>
                        <p>
                          In case of a supervisor retiring or leaving the university, the Research Board shall appoint a
                          new supervisor for the scholar based on the recommendation of the Departmental Research
                          Committee. In other exceptional circumstances, change of supervisor may be permitted by the
                          Research Board on the recommendation of the Departmental Research Committee.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                      <h3 className="font-bold text-yellow-800 mb-2">Important Note</h3>
                      <p className="text-sm text-yellow-700">
                        The admission process is conducted twice a year, in January and July. Candidates are advised to
                        check the university website for the notification of admissions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="coursework" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Course Work Regulations</h2>
                    <p className="mb-6">
                      This section outlines the regulations governing the course work component of the Ph.D program at
                      Jeppiaar University.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">1. Course Work Requirements</h3>
                        <p className="mb-4">
                          All Ph.D scholars admitted to the program shall be required to complete the course work
                          prescribed by the Department during the initial one or two semesters.
                        </p>
                        <p>
                          The credit assigned to the Ph.D. course work shall be a minimum of 12 credits and a maximum of
                          16 credits.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">2. Course Structure</h3>
                        <p className="mb-2">The course work shall consist of the following components:</p>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                          <li>
                            <span className="font-medium">Research Methodology:</span> 4 credits - This course shall
                            cover areas such as quantitative methods, computer applications, research ethics, and review
                            of published research.
                          </li>
                          <li>
                            <span className="font-medium">Advanced Course in the Subject:</span> 4 credits - This course
                            shall be designed to provide advanced knowledge in the specific area of research.
                          </li>
                          <li>
                            <span className="font-medium">Research and Publication Ethics:</span> 2 credits - This
                            course shall cover aspects of ethics in research and publication.
                          </li>
                          <li>
                            <span className="font-medium">Elective Course:</span> 2-4 credits - This course shall be
                            chosen by the scholar in consultation with the supervisor, based on the research area.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">3. Attendance Requirements</h3>
                        <p className="mb-4">
                          All Ph.D scholars, both full-time and part-time, are required to maintain a minimum of 75%
                          attendance in the course work.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">4. Evaluation of Course Work</h3>
                        <p className="mb-2">
                          The evaluation of the course work shall be done as per the following scheme:
                        </p>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                          <li>
                            <span className="font-medium">Continuous Assessment:</span> 40% - This shall include
                            assignments, seminars, and mid-term tests.
                          </li>
                          <li>
                            <span className="font-medium">End-Semester Examination:</span> 60% - This shall be a written
                            examination conducted at the end of the semester.
                          </li>
                        </ul>
                        <p className="mb-4">
                          Scholars must secure a minimum of 55% marks or its equivalent grade in the UGC 7-point scale
                          in each course to pass the course work.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">5. Exemption from Course Work</h3>
                        <p>
                          Scholars who have completed M.Phil degree with course work in the same or related subject may
                          be exempted from the course work, except for the course on Research and Publication Ethics,
                          subject to the approval of the Research Advisory Committee.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">6. Failure in Course Work</h3>
                        <p>
                          If a scholar fails to pass any course, he/she shall be allowed to reappear for the examination
                          in the next semester. A maximum of two attempts shall be allowed for each course. If a scholar
                          fails to pass the course work in the stipulated time, his/her registration shall be cancelled.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-6">
                      <h3 className="font-bold text-green-800 mb-2">Course Work Schedule</h3>
                      <p className="text-sm text-green-700 mb-2">
                        The course work is conducted in the following schedule:
                      </p>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>
                          <span className="font-medium">For January Admissions:</span> January to May
                        </li>
                        <li>
                          <span className="font-medium">For July Admissions:</span> July to November
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="thesis" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">Thesis and Evaluation Regulations</h2>
                    <p className="mb-6">
                      This section outlines the regulations governing the thesis submission, evaluation, and award of
                      the Ph.D degree at Jeppiaar University.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">1. Progress Reports</h3>
                        <p className="mb-4">
                          Every Ph.D scholar shall submit a progress report to the Research Advisory Committee (RAC)
                          through the Research Supervisor once in six months. The RAC shall evaluate the progress and
                          make recommendations for the improvement of the research work.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">2. Pre-Submission Seminar</h3>
                        <p className="mb-4">
                          Prior to the submission of the thesis, the scholar shall make a pre-submission presentation in
                          the Department that may be open to all faculty members and research scholars, for getting
                          feedback and comments, which may be suitably incorporated into the draft thesis under the
                          advice of the supervisor.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">3. Publication Requirement</h3>
                        <p className="mb-4">
                          Ph.D scholars must publish at least one research paper in a refereed journal and make two
                          paper presentations in conferences/seminars before the submission of the thesis for
                          adjudication, and produce evidence for the same in the form of presentation certificates
                          and/or reprints.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">4. Plagiarism Check</h3>
                        <p className="mb-4">
                          The thesis shall be subjected to a plagiarism check using anti-plagiarism software approved by
                          the university. The similarity index should not exceed 10% (excluding bibliography,
                          references, and properly cited content).
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">5. Thesis Submission</h3>
                        <p className="mb-4">
                          The thesis shall be submitted in the format prescribed by the university. The scholar shall
                          submit four copies of the thesis along with a soft copy (PDF) to the Research Office through
                          the Research Supervisor and Head of the Department.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">6. Thesis Evaluation</h3>
                        <p className="mb-4">
                          The Ph.D thesis submitted by a research scholar shall be evaluated by at least two external
                          examiners, who are not in employment of the University, of whom one examiner may be from
                          outside the country. The viva-voce examination, based among other things, on the critiques
                          given in the evaluation report, shall be conducted by the Research Supervisor and at least one
                          of the two external examiners.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">7. Viva-Voce Examination</h3>
                        <p className="mb-4">
                          The public viva-voce of the research scholar to defend the thesis shall be conducted only if
                          the evaluation report(s) of the external examiner(s) on the thesis is/are satisfactory and
                          include a specific recommendation for conducting the viva-voce examination. If the evaluation
                          report of one of the external examiners is unsatisfactory, the University shall send the
                          thesis to another external examiner and the viva-voce examination shall be held only if the
                          report of the latest examiner is satisfactory.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">8. Award of Ph.D Degree</h3>
                        <p>
                          Based on the reports of the examiners and the viva-voce examination, the Research Board shall
                          recommend to the Academic Council for the award of the Ph.D degree to the scholar. A
                          Provisional Certificate shall be issued by the University certifying that the Degree has been
                          awarded in accordance with the provisions of the UGC Regulations, 2016.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
                      <h3 className="font-bold text-red-800 mb-2">Important Note</h3>
                      <p className="text-sm text-red-700">
                        The thesis must be submitted within the maximum duration of the program (6 years). Extension
                        beyond this period may be granted by the Research Board in exceptional cases, subject to the
                        payment of the prescribed fee and fulfillment of other conditions.
                      </p>
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

