export default function RegulationsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Examination Regulations</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive guidelines and regulations governing the examination process at Jeppiaar University.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">General Examination Regulations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">1. Eligibility for Examinations</h3>
                <p className="text-gray-600 mb-2">
                  To be eligible to appear for the end semester examinations, a student must:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Have a minimum of 75% attendance in each course.</li>
                  <li>Have completed all assignments and practical work as prescribed.</li>
                  <li>Have paid all university and examination fees.</li>
                  <li>Not be under any disciplinary action or proceedings.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">2. Examination Pattern</h3>
                <p className="text-gray-600 mb-2">The university follows a continuous evaluation system with:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Internal Assessment: 30% of the total marks.</li>
                  <li>End Semester Examination: 70% of the total marks.</li>
                  <li>Minimum passing marks: 40% in both internal and external examinations separately.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">3. Conduct During Examinations</h3>
                <p className="text-gray-600 mb-2">Students are expected to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Arrive at the examination venue at least 30 minutes before the scheduled time.</li>
                  <li>Carry their hall ticket and college ID card to the examination hall.</li>
                  <li>Not carry any unauthorized materials, mobile phones, or electronic gadgets.</li>
                  <li>Follow all instructions given by the invigilators.</li>
                  <li>Not engage in any form of malpractice or unfair means.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">4. Grading System</h3>
                <p className="text-gray-600 mb-2">The university follows a 10-point grading system:</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Marks Range</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                          Grade Points
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">90-100</td>
                        <td className="px-4 py-2 text-sm text-gray-900">O</td>
                        <td className="px-4 py-2 text-sm text-gray-900">10</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Outstanding</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">80-89</td>
                        <td className="px-4 py-2 text-sm text-gray-900">A+</td>
                        <td className="px-4 py-2 text-sm text-gray-900">9</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Excellent</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">70-79</td>
                        <td className="px-4 py-2 text-sm text-gray-900">A</td>
                        <td className="px-4 py-2 text-sm text-gray-900">8</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Very Good</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">60-69</td>
                        <td className="px-4 py-2 text-sm text-gray-900">B+</td>
                        <td className="px-4 py-2 text-sm text-gray-900">7</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Good</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">50-59</td>
                        <td className="px-4 py-2 text-sm text-gray-900">B</td>
                        <td className="px-4 py-2 text-sm text-gray-900">6</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Above Average</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">45-49</td>
                        <td className="px-4 py-2 text-sm text-gray-900">C</td>
                        <td className="px-4 py-2 text-sm text-gray-900">5</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Average</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">40-44</td>
                        <td className="px-4 py-2 text-sm text-gray-900">P</td>
                        <td className="px-4 py-2 text-sm text-gray-900">4</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Pass</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Below 40</td>
                        <td className="px-4 py-2 text-sm text-gray-900">F</td>
                        <td className="px-4 py-2 text-sm text-gray-900">0</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Fail</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Malpractice and Disciplinary Actions</h2>
            <p className="text-gray-600 mb-4">
              The university maintains a zero-tolerance policy towards examination malpractice. Any student found
              engaging in unfair means will face strict disciplinary action.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Types of Malpractice</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Possession of unauthorized materials in the examination hall.</li>
                  <li>Copying from other students or allowing others to copy.</li>
                  <li>Impersonation or arranging for impersonation.</li>
                  <li>Disruptive behavior in the examination hall.</li>
                  <li>Tampering with answer scripts or evaluation records.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Penalties</h3>
                <p className="text-gray-600 mb-2">
                  Depending on the severity of the malpractice, penalties may include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Cancellation of the particular examination.</li>
                  <li>Cancellation of all examinations in the current semester.</li>
                  <li>Debarring from examinations for a specified period.</li>
                  <li>Rustication from the university.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Download Regulations</h2>
            <p className="text-gray-600 mb-4">Download the complete examination regulations for your program.</p>
            <div className="space-y-3">
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <p className="font-medium text-gray-900">B.Tech Regulations</p>
                  <p className="text-sm text-gray-500">PDF, 2.3 MB</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <p className="font-medium text-gray-900">M.Tech Regulations</p>
                  <p className="text-sm text-gray-500">PDF, 1.8 MB</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <p className="font-medium text-gray-900">B.Com & BBA Regulations</p>
                  <p className="text-sm text-gray-500">PDF, 1.5 MB</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <p className="font-medium text-gray-900">Ph.D. Regulations</p>
                  <p className="text-sm text-gray-500">PDF, 2.1 MB</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Examination Committee</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  DP
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Dr. Priya Sharma</p>
                  <p className="text-sm text-gray-500">Controller of Examinations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  RK
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Dr. Rajesh Kumar</p>
                  <p className="text-sm text-gray-500">Deputy Controller</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  SM
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Dr. Sanjay Mehta</p>
                  <p className="text-sm text-gray-500">Assistant Controller</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Need Clarification?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions regarding the examination regulations, please contact the Examination Section.
            </p>
            <a href="#" className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">What is the minimum attendance requirement?</h3>
            <p className="text-gray-600">
              Students must have a minimum of 75% attendance in each course to be eligible for the end semester
              examinations.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">How is the CGPA calculated?</h3>
            <p className="text-gray-600">
              CGPA is calculated as the weighted average of grade points obtained in all courses, excluding additional
              courses.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">What is the passing criterion?</h3>
            <p className="text-gray-600">
              Students must secure a minimum of 40% marks in both internal assessment and end semester examination
              separately.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">How many attempts are allowed for clearing a course?</h3>
            <p className="text-gray-600">
              Students can avail a maximum of three attempts to clear a course, including the regular examination.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

