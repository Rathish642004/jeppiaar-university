import Image from "next/image"

export default function QuestionPapersPage() {
  const departments = [
    "Computer Science Engineering",
    "Electronics & Communication Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Commerce & Management",
    "Science & Humanities",
  ]

  const recentPapers = [
    {
      title: "Data Structures and Algorithms",
      code: "CS2001",
      department: "Computer Science Engineering",
      semester: "3rd Semester",
      date: "November 2022",
      link: "#",
    },
    {
      title: "Digital Signal Processing",
      code: "EC2003",
      department: "Electronics & Communication Engineering",
      semester: "5th Semester",
      date: "November 2022",
      link: "#",
    },
    {
      title: "Thermodynamics",
      code: "ME2002",
      department: "Mechanical Engineering",
      semester: "3rd Semester",
      date: "November 2022",
      link: "#",
    },
    {
      title: "Financial Accounting",
      code: "CM2001",
      department: "Commerce & Management",
      semester: "3rd Semester",
      date: "November 2022",
      link: "#",
    },
    {
      title: "Engineering Mathematics",
      code: "MA1001",
      department: "Science & Humanities",
      semester: "1st Semester",
      date: "November 2022",
      link: "#",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Previous Question Papers</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access previous years' question papers to help you prepare for your examinations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent Question Papers</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Course
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Department
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentPapers.map((paper, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{paper.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{paper.semester}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href={paper.link} className="text-primary hover:text-primary/80">
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Search Question Papers</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select
                    id="department"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
                    Semester
                  </label>
                  <select
                    id="semester"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select Semester</option>
                    <option value="1">1st Semester</option>
                    <option value="2">2nd Semester</option>
                    <option value="3">3rd Semester</option>
                    <option value="4">4th Semester</option>
                    <option value="5">5th Semester</option>
                    <option value="6">6th Semester</option>
                    <option value="7">7th Semester</option>
                    <option value="8">8th Semester</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                    Year
                  </label>
                  <select
                    id="year"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select Year</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="course-code" className="block text-sm font-medium text-gray-700 mb-1">
                    Course Code (Optional)
                  </label>
                  <input
                    type="text"
                    id="course-code"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Enter course code"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Search Papers
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Browse by Department</h2>
            <div className="space-y-2">
              {departments.map((dept, index) => (
                <a key={index} href="#" className="block p-3 border rounded-lg hover:bg-gray-50 text-gray-900">
                  {dept}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Question Paper Archives</h2>
            <div className="space-y-3">
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <span className="text-2xl mr-3">📁</span>
                <div>
                  <p className="font-medium text-gray-900">2022</p>
                  <p className="text-sm text-gray-500">Odd & Even Semester</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <span className="text-2xl mr-3">📁</span>
                <div>
                  <p className="font-medium text-gray-900">2021</p>
                  <p className="text-sm text-gray-500">Odd & Even Semester</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <span className="text-2xl mr-3">📁</span>
                <div>
                  <p className="font-medium text-gray-900">2020</p>
                  <p className="text-sm text-gray-500">Odd & Even Semester</p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <span className="text-2xl mr-3">📁</span>
                <div>
                  <p className="font-medium text-gray-900">2019</p>
                  <p className="text-sm text-gray-500">Odd & Even Semester</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Study Resources</h2>
            <p className="text-gray-600 mb-4">
              Access additional study materials to help you prepare for your examinations.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Model Question Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Question Banks
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Syllabus
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Reference Books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mb-12">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Students studying in library"
          width={1200}
          height={400}
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent rounded-lg flex items-center">
          <div className="ml-12 max-w-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Prepare Better</h2>
            <p className="text-lg">
              Access previous years' question papers to understand the pattern and prepare effectively for your
              examinations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Need Help?</h2>
        <p className="text-gray-600 mb-4">
          If you face any issues accessing the question papers or have any queries, please contact the Examination
          Section.
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

