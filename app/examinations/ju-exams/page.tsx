import Image from "next/image"
import Link from "next/link"

export default function JUExamsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative h-64 md:h-80 mb-12 overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Jeppiaar University Examinations"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8 md:px-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">JU Examinations</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              Information about Jeppiaar University examination system, procedures, and guidelines.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Examination System</h2>
            <p className="text-gray-700 mb-4">
              Jeppiaar University follows a comprehensive examination system designed to evaluate students' academic
              performance through continuous assessment and end-semester examinations. The university conducts
              examinations for all undergraduate and postgraduate programs as per the academic calendar.
            </p>
            <p className="text-gray-700 mb-4">
              The examination pattern includes both internal assessment (continuous evaluation) and external assessment
              (end-semester examination). The weightage for internal and external assessments varies based on the
              program and course requirements.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Internal Assessment</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Continuous evaluation through assignments</li>
                  <li>Class tests and quizzes</li>
                  <li>Mid-semester examinations</li>
                  <li>Practical/Laboratory work</li>
                  <li>Project work and presentations</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">External Assessment</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>End-semester theory examinations</li>
                  <li>Practical examinations</li>
                  <li>Viva-voce examinations</li>
                  <li>Project evaluations</li>
                  <li>Comprehensive viva</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Examination Guidelines</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Eligibility Criteria</h3>
                <p className="text-gray-700">
                  Students must maintain a minimum of 75% attendance in each course to be eligible to appear for the
                  end-semester examinations. Students with medical emergencies may be permitted with a minimum of 65%
                  attendance subject to submission of valid medical certificates and approval from the concerned
                  authorities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Examination Registration</h3>
                <p className="text-gray-700">
                  Students must register for examinations through the online portal within the specified registration
                  period. Late registration may be permitted with a late fee as per university regulations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Examination Hall Rules</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Students must carry their hall ticket and university ID card to the examination hall</li>
                  <li>Mobile phones and electronic gadgets are strictly prohibited</li>
                  <li>
                    Students must report to the examination hall 30 minutes before the commencement of the examination
                  </li>
                  <li>
                    No student will be permitted to enter the examination hall after 30 minutes of the commencement of
                    the examination
                  </li>
                  <li>
                    No student will be allowed to leave the examination hall during the first hour and the last 15
                    minutes of the examination
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/examinations/schedules"
                  className="text-primary hover:underline block p-2 hover:bg-gray-50 rounded"
                >
                  Examination Schedules
                </Link>
              </li>
              <li>
                <Link
                  href="/examinations/results"
                  className="text-primary hover:underline block p-2 hover:bg-gray-50 rounded"
                >
                  Examination Results
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline block p-2 hover:bg-gray-50 rounded">
                  Examination Forms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline block p-2 hover:bg-gray-50 rounded">
                  Examination Rules
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline block p-2 hover:bg-gray-50 rounded">
                  Grading System
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline block p-2 hover:bg-gray-50 rounded">
                  Previous Question Papers
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Important Announcements</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-gray-500">March 15, 2023</p>
                <h3 className="font-medium">End Semester Examination Registration Open</h3>
                <p className="text-sm text-gray-700">
                  Registration for Even Semester Examinations 2023 is now open. Last date: April 5, 2023.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-gray-500">March 10, 2023</p>
                <h3 className="font-medium">Supplementary Examination Results</h3>
                <p className="text-sm text-gray-700">
                  Results for Supplementary Examinations held in February 2023 have been declared.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-gray-500">March 5, 2023</p>
                <h3 className="font-medium">Mid-Semester Examination Schedule</h3>
                <p className="text-sm text-gray-700">
                  Mid-Semester Examination schedule for Even Semester 2023 has been published.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Contact Examination Department</h2>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Room No. 101, Administrative Block, Jeppiaar University Campus</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">📞</span>
                <span>+91-44-2345-6789</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">✉️</span>
                <span>examinations@jeppiaaruniversity.ac.in</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">⏰</span>
                <span>Monday to Friday: 9:00 AM - 5:00 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">How can I apply for a revaluation?</h3>
            <p className="text-gray-700">
              Students can apply for revaluation through the online portal within 10 days of the declaration of results.
              The revaluation fee must be paid online as per the university norms.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">What is the passing criteria?</h3>
            <p className="text-gray-700">
              Students must secure a minimum of 40% marks in each course (both internal and external combined) to pass
              the examination. For practical examinations, a minimum of 50% marks is required.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">How can I get a duplicate hall ticket?</h3>
            <p className="text-gray-700">
              Students can download duplicate hall tickets from the examination portal. In case of any issues, they can
              approach the examination department with their ID card and a written application.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">What is the procedure for supplementary examinations?</h3>
            <p className="text-gray-700">
              Students who fail in any course can appear for supplementary examinations conducted after the declaration
              of results. Registration for supplementary examinations must be done within the specified period.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

