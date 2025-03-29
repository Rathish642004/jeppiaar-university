import Image from "next/image"
import Link from "next/link"

export default function ExaminationsPage() {
  const examLinks = [
    {
      title: "JU Examinations",
      description: "Information about examination system, procedures, and guidelines.",
      href: "/examinations/ju-exams",
      icon: "📝",
    },
    {
      title: "JU Results",
      description: "Access your semester examination results and academic records.",
      href: "/examinations/results",
      icon: "🎓",
    },
    {
      title: "Exam Schedules",
      description: "View and download examination schedules for all programs.",
      href: "/examinations/schedules",
      icon: "📅",
    },
  ]

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
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Examinations</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              Access examination information, schedules, results, and resources.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {examLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{link.icon}</div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">{link.title}</h2>
            <p className="text-gray-600">{link.description}</p>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Latest Announcements</h2>
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
            <div className="border-l-4 border-primary pl-4">
              <p className="text-sm text-gray-500">February 28, 2023</p>
              <h3 className="font-medium">Hall Ticket Distribution</h3>
              <p className="text-sm text-gray-700">
                Hall tickets for Mid-Semester Examinations will be available for download from March 8, 2023.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Important Dates</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                <span>15</span>
              </div>
              <div>
                <h3 className="font-medium">March 15, 2023</h3>
                <p className="text-gray-600">Last date for examination registration without late fee</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                <span>20</span>
              </div>
              <div>
                <h3 className="font-medium">March 20, 2023</h3>
                <p className="text-gray-600">Last date for examination registration with late fee</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                <span>01</span>
              </div>
              <div>
                <h3 className="font-medium">April 1, 2023</h3>
                <p className="text-gray-600">Practical Examinations begin</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                <span>15</span>
              </div>
              <div>
                <h3 className="font-medium">April 15, 2023</h3>
                <p className="text-gray-600">End Semester Examinations begin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Examination Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📄</div>
            <h3 className="font-semibold mb-2">Examination Forms</h3>
            <a href="#" className="text-primary hover:underline text-sm">
              Download
            </a>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold mb-2">Question Papers</h3>
            <a href="#" className="text-primary hover:underline text-sm">
              Access
            </a>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="font-semibold mb-2">Regulations</h3>
            <a href="#" className="text-primary hover:underline text-sm">
              View
            </a>
          </div>
          <div className="border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">❓</div>
            <h3 className="font-semibold mb-2">FAQs</h3>
            <a href="#" className="text-primary hover:underline text-sm">
              Read
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Examination Department</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">
              Room No. 101, Administrative Block, Jeppiaar University Campus, Chennai - 600119
            </p>
          </div>
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

