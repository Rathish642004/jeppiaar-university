import Image from "next/image"

export default function ResultsPage() {
  const recentResults = [
    {
      program: "B.Tech All Branches",
      semester: "7th Semester",
      date: "February 10, 2023",
      link: "#",
    },
    {
      program: "B.Tech All Branches",
      semester: "5th Semester",
      date: "February 8, 2023",
      link: "#",
    },
    {
      program: "B.Tech All Branches",
      semester: "3rd Semester",
      date: "February 5, 2023",
      link: "#",
    },
    {
      program: "B.Com & BBA",
      semester: "5th Semester",
      date: "February 3, 2023",
      link: "#",
    },
    {
      program: "M.Tech All Specializations",
      semester: "3rd Semester",
      date: "January 28, 2023",
      link: "#",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative h-64 md:h-80 mb-12 overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Jeppiaar University Results"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8 md:px-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">JU Results</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              Access your semester examination results and academic performance records.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent Results</h2>
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
                {recentResults.map((result, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{result.program}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{result.semester}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{result.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href={result.link} className="text-primary hover:text-primary/80">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Student Result Portal</h2>
          <p className="text-gray-600 mb-6">Login to view your personal examination results and academic records.</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="register-number" className="block text-sm font-medium text-gray-700 mb-1">
                Register Number
              </label>
              <input
                type="text"
                id="register-number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Enter your register number"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              View Results
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Previous Results Archives</h2>
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

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Students checking results"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Result Analysis</h2>
          <p className="text-gray-600 mb-4">
            Jeppiaar University maintains high academic standards with consistent performance across all departments.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-800 rounded-full mr-2">
                95%
              </span>
              <span>Average pass percentage across all programs</span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mr-2">
                120
              </span>
              <span>University rank holders in the last academic year</span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-800 rounded-full mr-2">
                85%
              </span>
              <span>Students securing first class and above</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Need Help?</h2>
        <p className="text-gray-600 mb-4">
          If you have any queries regarding your results or face any issues accessing them, please contact the
          Examination Section.
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

