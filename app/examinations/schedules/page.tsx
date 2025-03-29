import Image from "next/image"
import Link from "next/link"

export default function ExamSchedulesPage() {
  const upcomingExams = [
    {
      program: "B.Tech (All Branches)",
      semester: "8th Semester",
      startDate: "April 15, 2023",
      endDate: "May 5, 2023",
      link: "#",
    },
    {
      program: "B.Com & BBA",
      semester: "6th Semester",
      startDate: "April 18, 2023",
      endDate: "May 8, 2023",
      link: "#",
    },
    {
      program: "M.Tech (All Specializations)",
      semester: "4th Semester",
      startDate: "April 20, 2023",
      endDate: "May 10, 2023",
      link: "#",
    },
    {
      program: "MBA",
      semester: "4th Semester",
      startDate: "April 22, 2023",
      endDate: "May 12, 2023",
      link: "#",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative h-64 md:h-80 mb-12 overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Jeppiaar University Exam Schedules"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8 md:px-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Exam Schedules</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              View and download examination schedules for all programs and semesters.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Examinations</h2>
              <div className="flex space-x-2">
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-primary focus:border-primary">
                  <option>All Programs</option>
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>MBA</option>
                  <option>B.Com</option>
                  <option>BBA</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-primary focus:border-primary">
                  <option>All Semesters</option>
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>3rd Semester</option>
                  <option>4th Semester</option>
                  <option>5th Semester</option>
                  <option>6th Semester</option>
                  <option>7th Semester</option>
                  <option>8th Semester</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Program
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Semester
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      End Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Schedule
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {upcomingExams.map((exam, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exam.program}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.semester}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.startDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.endDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href={exam.link} className="text-primary hover:text-primary/80">
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Examination Calendar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Even Semester (January - May)</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Mid-Semester Examinations</span>
                    <span className="text-gray-500">March 1-10</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Practical Examinations</span>
                    <span className="text-gray-500">April 1-10</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">End-Semester Examinations</span>
                    <span className="text-gray-500">April 15 - May 15</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Result Declaration</span>
                    <span className="text-gray-500">June 15</span>
                  </li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Odd Semester (July - December)</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Mid-Semester Examinations</span>
                    <span className="text-gray-500">September 1-10</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Practical Examinations</span>
                    <span className="text-gray-500">October 20-30</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">End-Semester Examinations</span>
                    <span className="text-gray-500">November 15 - December 15</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Result Declaration</span>
                    <span className="text-gray-500">January 15</span>
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
                  href="/examinations/ju-exams"
                  className="text-primary hover:underline block p-2 hover:bg-gray-50 rounded"
                >
                  JU Examinations
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
                  Hall Tickets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline block p-2 hover:bg-gray-50 rounded">
                  Examination Forms
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
            <h2 className="text-xl font-bold mb-4 text-gray-900">Important Instructions</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Students must carry their hall ticket and university ID card to the examination hall.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mobile phones and electronic gadgets are strictly prohibited in the examination hall.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Students must report 30 minutes before the commencement of the examination.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  Students will not be allowed to enter the examination hall after 30 minutes of the commencement of the
                  examination.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>
                  Students are not allowed to leave the examination hall during the first hour and the last 15 minutes
                  of the examination.
                </span>
              </li>
            </ul>
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

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Previous Examination Schedules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">2022-2023</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Even Semester
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Odd Semester
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Supplementary
                </a>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">2021-2022</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Even Semester
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Odd Semester
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Supplementary
                </a>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">2020-2021</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Even Semester
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Odd Semester
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Supplementary
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

