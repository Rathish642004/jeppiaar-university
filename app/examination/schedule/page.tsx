import Image from "next/image"

export default function ExamSchedulePage() {
  const currentSchedules = [
    {
      program: "B.Tech Computer Science Engineering",
      semester: "Odd Semester (2023-24)",
      link: "#",
      date: "March 10, 2023",
    },
    {
      program: "B.Tech Electronics & Communication Engineering",
      semester: "Odd Semester (2023-24)",
      link: "#",
      date: "March 10, 2023",
    },
    {
      program: "B.Tech Mechanical Engineering",
      semester: "Odd Semester (2023-24)",
      link: "#",
      date: "March 10, 2023",
    },
    {
      program: "B.Com",
      semester: "Odd Semester (2023-24)",
      link: "#",
      date: "March 12, 2023",
    },
    {
      program: "BBA",
      semester: "Odd Semester (2023-24)",
      link: "#",
      date: "March 12, 2023",
    },
    {
      program: "M.Tech Programs",
      semester: "Odd Semester (2023-24)",
      link: "#",
      date: "March 15, 2023",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Examination Schedule</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find the latest examination schedules for all programs at Jeppiaar University.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Current Examination Schedules</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">Download All</button>
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
                  Published Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentSchedules.map((schedule, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{schedule.program}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule.semester}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{schedule.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href={schedule.link} className="text-primary hover:text-primary/80">
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Previous Examination Schedules</h2>
          <p className="text-gray-600 mb-4">Access examination schedules from previous semesters.</p>
          <div className="space-y-2">
            <a href="#" className="block text-primary hover:underline">
              Even Semester (2022-23)
            </a>
            <a href="#" className="block text-primary hover:underline">
              Odd Semester (2022-23)
            </a>
            <a href="#" className="block text-primary hover:underline">
              Even Semester (2021-22)
            </a>
            <a href="#" className="block text-primary hover:underline">
              Odd Semester (2021-22)
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Examination Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Students must carry their hall tickets and college ID cards to the examination hall.</li>
            <li>Mobile phones and electronic gadgets are strictly prohibited in the examination hall.</li>
            <li>Students should reach the examination venue at least 30 minutes before the scheduled time.</li>
            <li>
              No student will be allowed to enter the examination hall after 30 minutes from the commencement of the
              examination.
            </li>
            <li>
              No student will be allowed to leave the examination hall before 1 hour from the commencement of the
              examination.
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mb-12">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Students in examination hall"
          width={1200}
          height={400}
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Need Help?</h2>
        <p className="text-gray-600 mb-4">
          If you have any queries regarding the examination schedule, please contact the Examination Section.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Contact Information</h3>
            <p className="text-gray-600">Email: examinations@jeppiaaruniversity.ac.in</p>
            <p className="text-gray-600">Phone: +91-44-2345-6789</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Office Hours</h3>
            <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

