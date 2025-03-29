import Image from "next/image"

export default function LibraryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=University Library"
          alt="Library at Jeppiaar University"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">University Library</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            A treasure trove of knowledge and resources for academic excellence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">About Our Library</h2>
            <p className="text-lg text-gray-700 mb-8">
              The Jeppiaar University Library is a hub of academic resources, providing students and faculty with access
              to a vast collection of books, journals, digital resources, and research materials. Our library is
              designed to support learning, teaching, and research activities across all disciplines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <p className="text-gray-700">Books</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-gray-700">E-Journals</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-gray-700">Digital Databases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Library Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Reading Halls"
                alt="Reading Halls"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Reading Halls</h3>
              <p className="text-gray-700 mb-4">
                Our spacious reading halls provide a quiet and comfortable environment for study and research. The halls
                are well-lit, air-conditioned, and equipped with ergonomic furniture to ensure a conducive learning
                atmosphere.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Seating capacity for 500+ students</li>
                <li>Individual study carrels</li>
                <li>Group study areas</li>
                <li>Wi-Fi connectivity</li>
                <li>Power outlets at every seat</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
            <div className="md:order-2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Digital Library"
                alt="Digital Library"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold text-primary mb-4">Digital Library</h3>
              <p className="text-gray-700 mb-4">
                Our state-of-the-art digital library provides access to a vast collection of e-books, e-journals, online
                databases, and digital archives. Students and faculty can access these resources both on-campus and
                remotely.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access to major research databases</li>
                <li>E-book collections across disciplines</li>
                <li>Digital thesis and dissertation repository</li>
                <li>Online academic journals</li>
                <li>Multimedia resources</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Reference Section"
                alt="Reference Section"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Reference Section</h3>
              <p className="text-gray-700 mb-4">
                Our reference section houses a comprehensive collection of encyclopedias, dictionaries, handbooks, and
                other reference materials. This section is designed to support research and provide quick access to
                essential information.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Subject-specific encyclopedias</li>
                <li>Specialized dictionaries</li>
                <li>Research handbooks</li>
                <li>Yearbooks and almanacs</li>
                <li>Bibliographies and indexes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Library Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Library Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Circulation Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Book lending</li>
                <li>Reserve collections</li>
                <li>Inter-library loan</li>
                <li>Document delivery</li>
                <li>Self-checkout kiosks</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Information Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Reference assistance</li>
                <li>Research consultations</li>
                <li>Information literacy workshops</li>
                <li>Database search assistance</li>
                <li>Citation management support</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Technical Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Printing and scanning</li>
                <li>Photocopying</li>
                <li>Computer workstations</li>
                <li>Wi-Fi access</li>
                <li>Multimedia resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Library Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Library Collections</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Engineering & Technology</h3>
              <p className="text-gray-700">
                Books, journals, and digital resources covering various engineering disciplines including computer
                science, mechanical, electrical, civil, and more.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Science & Mathematics</h3>
              <p className="text-gray-700">
                Comprehensive collection of resources in physics, chemistry, biology, mathematics, and other scientific
                disciplines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Management & Commerce</h3>
              <p className="text-gray-700">
                Resources on business administration, finance, marketing, economics, accounting, and related fields.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Humanities & Social Sciences</h3>
              <p className="text-gray-700">
                Literature, history, philosophy, psychology, sociology, and other humanities and social science
                disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Library Rules */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Library Rules & Regulations</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">General Rules</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintain silence in the library premises</li>
                <li>Mobile phones must be kept in silent mode</li>
                <li>Food and beverages are not allowed inside the library</li>
                <li>Library ID card is mandatory for entry and borrowing books</li>
                <li>Personal belongings should be kept at the property counter</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Borrowing Rules</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Undergraduate students can borrow up to 4 books for 14 days</li>
                <li>Postgraduate students can borrow up to 6 books for 21 days</li>
                <li>Faculty members can borrow up to 10 books for 30 days</li>
                <li>Reference books, journals, and rare collections cannot be borrowed</li>
                <li>Late returns are subject to fines as per library policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Library Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Library Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Library ${index + 1}`}
                  alt={`Library ${index + 1}`}
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

