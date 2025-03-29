import Image from "next/image"

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Infrastructure"
          alt="Infrastructure at Jeppiaar University"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            State-of-the-art facilities designed to enhance learning and student experience
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">World-Class Infrastructure</h2>
            <p className="text-lg text-gray-700 mb-8">
              Jeppiaar University boasts state-of-the-art infrastructure that provides an ideal environment for academic
              excellence and holistic development. Our campus is designed to meet international standards, offering
              students access to modern facilities that enhance their learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Academic Infrastructure</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Modern Classrooms"
                alt="Modern Classrooms"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Modern Classrooms</h3>
              <p className="text-gray-700 mb-4">
                Our classrooms are equipped with the latest audio-visual technology, comfortable seating, and optimal
                lighting to create an ideal learning environment. Smart boards, projectors, and sound systems enhance
                the teaching-learning process.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Air-conditioned lecture halls</li>
                <li>Interactive smart boards</li>
                <li>Ergonomic furniture</li>
                <li>High-speed internet connectivity</li>
                <li>Acoustically designed spaces</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
            <div className="md:order-2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Advanced Laboratories"
                alt="Advanced Laboratories"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold text-primary mb-4">Advanced Laboratories</h3>
              <p className="text-gray-700 mb-4">
                Our laboratories are equipped with cutting-edge equipment and technology that allow students to gain
                practical experience and conduct research in their respective fields. Each department has dedicated labs
                that cater to specific academic requirements.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Engineering labs with industry-standard equipment</li>
                <li>Science labs with advanced research facilities</li>
                <li>Computer labs with the latest hardware and software</li>
                <li>Language labs for communication skills development</li>
                <li>Research labs for postgraduate and doctoral studies</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Digital Learning Resources"
                alt="Digital Learning Resources"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Digital Learning Resources</h3>
              <p className="text-gray-700 mb-4">
                We have invested in comprehensive digital learning resources that complement traditional teaching
                methods. Our digital infrastructure enables students to access learning materials, participate in online
                discussions, and collaborate on projects from anywhere on campus.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Campus-wide Wi-Fi connectivity</li>
                <li>Digital library with e-books and journals</li>
                <li>Learning management system</li>
                <li>Virtual classrooms for remote learning</li>
                <li>Online assessment platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Infrastructure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Administrative Infrastructure</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Administrative Block"
                  alt="Administrative Block"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Administrative Block</h3>
              <p className="text-gray-700">
                Our administrative block houses various offices including admissions, examinations, finance, and student
                affairs. The building is designed to provide easy access to administrative services for students and
                faculty.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Conference Rooms"
                  alt="Conference Rooms"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Conference Rooms</h3>
              <p className="text-gray-700">
                Multiple conference rooms equipped with video conferencing facilities, presentation equipment, and
                comfortable seating are available for meetings, seminars, and discussions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-48 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Faculty Offices"
                  alt="Faculty Offices"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Faculty Offices</h3>
              <p className="text-gray-700">
                Well-designed faculty offices provide a conducive environment for academic work, research, and student
                consultations. Each department has dedicated spaces for faculty members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Development */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ongoing Campus Development</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              At Jeppiaar University, we are committed to continuous improvement of our infrastructure. Our ongoing
              development projects include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">New Research Center</h3>
                <p>
                  A state-of-the-art research center with advanced laboratories and equipment to support cutting-edge
                  research in various disciplines.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Innovation Hub</h3>
                <p>
                  An innovation hub designed to foster creativity, entrepreneurship, and collaboration among students
                  and faculty.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Green Initiatives</h3>
                <p>
                  Sustainable infrastructure projects including solar panels, rainwater harvesting, and waste management
                  systems.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Sports Complex Expansion</h3>
                <p>
                  Expansion of our sports facilities to include more indoor and outdoor sports options for students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Infrastructure Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Infrastructure ${index + 1}`}
                  alt={`Infrastructure ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

