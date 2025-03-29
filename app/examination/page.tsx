import Image from "next/image"
import Link from "next/link"

export default function ExaminationPage() {
  const examLinks = [
    {
      title: "Exam Schedule",
      description: "View the current semester examination timetable",
      href: "/examination/schedule",
      icon: "📅",
    },
    {
      title: "Results",
      description: "Check your semester examination results",
      href: "/examination/results",
      icon: "📊",
    },
    {
      title: "Hall Tickets",
      description: "Download your examination hall tickets",
      href: "/examination/hall-tickets",
      icon: "🎫",
    },
    {
      title: "Regulations",
      description: "View examination rules and regulations",
      href: "/examination/regulations",
      icon: "📜",
    },
    {
      title: "Question Papers",
      description: "Access previous years' question papers",
      href: "/examination/question-papers",
      icon: "📝",
    },
    {
      title: "Grievance",
      description: "Submit examination-related grievances",
      href: "/examination/grievance",
      icon: "🔍",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Examination</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Controller of Examinations office is responsible for the conduct of examinations, publication of results,
          and all other matters related to the examination process at Jeppiaar University.
        </p>
      </div>

      <div className="relative mb-16">
        <Image
          src="/placeholder.svg?height=500&width=1200"
          alt="Examination Hall at Jeppiaar University"
          width={1200}
          height={500}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent rounded-xl flex items-center">
          <div className="ml-12 max-w-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Excellence in Evaluation</h2>
            <p className="text-lg">
              Our examination system ensures fair, transparent, and rigorous evaluation to maintain the highest academic
              standards.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {examLinks.map((link) => (
          <Link
            href={link.href}
            key={link.title}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{link.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{link.title}</h3>
            <p className="text-gray-600">{link.description}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Important Announcements</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4 py-2">
            <p className="text-sm text-gray-500">March 15, 2023</p>
            <h3 className="font-medium text-gray-900">End Semester Examination Schedule Released</h3>
            <p className="text-gray-600">The schedule for the upcoming end semester examinations has been published.</p>
          </div>
          <div className="border-l-4 border-primary pl-4 py-2">
            <p className="text-sm text-gray-500">February 28, 2023</p>
            <h3 className="font-medium text-gray-900">Internal Assessment Marks Published</h3>
            <p className="text-gray-600">Students can check their internal assessment marks on the student portal.</p>
          </div>
          <div className="border-l-4 border-primary pl-4 py-2">
            <p className="text-sm text-gray-500">February 10, 2023</p>
            <h3 className="font-medium text-gray-900">Previous Semester Results Announced</h3>
            <p className="text-gray-600">Results for the previous semester examinations are now available.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact the Examination Office</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Office Hours</h3>
            <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Contact Information</h3>
            <p className="text-gray-600">Email: examinations@jeppiaaruniversity.ac.in</p>
            <p className="text-gray-600">Phone: +91-44-2345-6789</p>
            <p className="text-gray-600">Location: Administrative Block, 2nd Floor</p>
          </div>
        </div>
      </div>
    </div>
  )
}

