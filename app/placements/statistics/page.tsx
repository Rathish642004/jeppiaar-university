import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PlacementStatisticsPage() {
  // Sample yearly placement statistics
  const yearlyStats = [
    {
      year: "2022-23",
      totalPlaced: 450,
      totalStudents: 520,
      highestPackage: 42,
      averagePackage: 8.5,
      topRecruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"],
    },
    {
      year: "2021-22",
      totalPlaced: 420,
      totalStudents: 500,
      highestPackage: 38,
      averagePackage: 7.8,
      topRecruiters: ["Wipro", "Cognizant", "HCL", "Accenture", "IBM"],
    },
    {
      year: "2020-21",
      totalPlaced: 380,
      totalStudents: 480,
      highestPackage: 35,
      averagePackage: 7.2,
      topRecruiters: ["TCS", "Infosys", "Capgemini", "Tech Mahindra", "Mindtree"],
    },
  ]

  // Sample department-wise statistics
  const departmentStats = [
    { department: "Computer Science & Engineering", placementRate: 95, averagePackage: 9.2 },
    { department: "Electronics & Communication", placementRate: 88, averagePackage: 8.1 },
    { department: "Mechanical Engineering", placementRate: 82, averagePackage: 7.5 },
    { department: "Electrical & Electronics", placementRate: 85, averagePackage: 7.8 },
    { department: "Civil Engineering", placementRate: 78, averagePackage: 6.9 },
    { department: "Information Technology", placementRate: 92, averagePackage: 8.9 },
    { department: "MBA", placementRate: 90, averagePackage: 8.5 },
    { department: "MCA", placementRate: 88, averagePackage: 8.2 },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-primary mb-6">Placement Statistics</h1>
            <p className="text-lg mb-4">
              Jeppiaar University has a strong track record of placements across all disciplines. Our students are
              recruited by leading companies from various sectors.
            </p>
            <p className="text-lg">
              Here's a detailed breakdown of our placement statistics over the years and across departments.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[300px] w-full">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Placement statistics graph"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Yearly Statistics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8">Year-wise Placement Statistics</h2>
        <div className="space-y-8">
          {yearlyStats.map((stat, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-bold">Academic Year {stat.year}</h3>
              </div>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-500 text-sm">Students Placed</p>
                        <p className="text-2xl font-bold text-primary">{stat.totalPlaced}</p>
                        <p className="text-sm text-gray-500">out of {stat.totalStudents}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-500 text-sm">Placement Rate</p>
                        <p className="text-2xl font-bold text-primary">
                          {Math.round((stat.totalPlaced / stat.totalStudents) * 100)}%
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-500 text-sm">Highest Package</p>
                        <p className="text-2xl font-bold text-primary">₹{stat.highestPackage} LPA</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-500 text-sm">Average Package</p>
                        <p className="text-2xl font-bold text-primary">₹{stat.averagePackage} LPA</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Top Recruiters</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stat.topRecruiters.map((recruiter, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>{recruiter}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Department-wise Statistics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8">Department-wise Placement Statistics (2022-23)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left border-b">Department</th>
                <th className="py-3 px-4 text-left border-b">Placement Rate</th>
                <th className="py-3 px-4 text-left border-b">Average Package (LPA)</th>
              </tr>
            </thead>
            <tbody>
              {departmentStats.map((dept, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-3 px-4 border-b">{dept.department}</td>
                  <td className="py-3 px-4 border-b">{dept.placementRate}%</td>
                  <td className="py-3 px-4 border-b">₹{dept.averagePackage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Placement Growth Chart */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8">Placement Growth Over the Years</h2>
        <div className="relative h-[400px] w-full">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Placement growth chart"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-center text-gray-500 mt-4">
          *The chart shows the consistent growth in placements at Jeppiaar University over the last 5 years.
        </p>
      </section>
    </div>
  )
}

