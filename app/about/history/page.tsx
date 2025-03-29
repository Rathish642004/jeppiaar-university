import Image from "next/image"

export default function HistoryPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl text-primary font-bold mb-4">Our History</h1>
        <p className="text-xl text-gray-600">
          The journey of Jeppiaar University from its inception to becoming a premier institution of higher learning.
        </p>
      </div>

      <div className="relative mb-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

        <div className="space-y-16">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-12">
                <h2 className="text-2xl text-primary font-bold mb-4">2014: Foundation</h2>
                <p className="text-gray-700">
                  Jeppiaar University was established by the visionary educationist and industrialist Dr. Jeppiaar with
                  a mission to provide quality education accessible to all. The university was formally inaugurated on
                  August 15, 2014, with its first batch of 500 students across 5 undergraduate programs.
                </p>
              </div>
              <div className="md:pl-12">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="University Foundation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 md:text-left md:pl-12">
                <h2 className="text-2xl font-bold text-primary mb-4">2016: Expansion</h2>
                <p className="text-gray-700">
                  Within two years of its establishment, the university expanded its academic offerings to include
                  postgraduate programs and added three new schools: School of Management, School of Sciences, and
                  School of Humanities & Social Sciences. The campus infrastructure was enhanced with new academic
                  blocks and research facilities.
                </p>
              </div>
              <div className="md:order-1 md:pr-12">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="University Expansion"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-12">
                <h2 className="text-2xl font-bold  text-primary mb-4">2018: Recognition</h2>
                <p className="text-gray-700">
                  Jeppiaar University received its first major recognition when it was accredited by the National
                  Assessment and Accreditation Council (NAAC) with an 'A' grade. The university also established its
                  first research centers in emerging areas like Artificial Intelligence, Renewable Energy, and
                  Biotechnology.
                </p>
              </div>
              <div className="md:pl-12">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="University Recognition"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 md:text-left md:pl-12">
                <h2 className="text-2xl text-primary font-bold mb-4">2020: Innovation Hub</h2>
                <p className="text-gray-700">
                  The university established the Jeppiaar Innovation Hub, a state-of-the-art facility to foster
                  entrepreneurship and innovation among students and faculty. The hub has incubated over 30 startups and
                  filed 15 patents. During this period, the university also strengthened its international
                  collaborations with universities in the USA, UK, Singapore, and Australia.
                </p>
              </div>
              <div className="md:order-1 md:pr-12">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Innovation Hub"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-12">
                <h2 className="text-2xl text-primary font-bold mb-4">2022: Research Excellence</h2>
                <p className="text-gray-700">
                  Jeppiaar University was recognized for its research contributions when it secured significant research
                  grants from national and international funding agencies. The university's research output increased
                  substantially with over 200 publications in reputed international journals in a single year.
                </p>
              </div>
              <div className="md:pl-12">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Research Excellence"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 md:text-left md:pl-12">
                <h2 className="text-2xl text-primary font-bold mb-4">2024: Present Day</h2>
                <p className="text-gray-700 ">
                  Today, Jeppiaar University stands as a premier institution with over 10,000 students, 500 faculty
                  members, and 15 academic departments. The university has been ranked among the top 100 universities in
                  India by the National Institutional Ranking Framework (NIRF) and continues to expand its academic and
                  research horizons.
                </p>
              </div>
              <div className="md:order-1 md:pr-12">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Present Day Campus"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl text-primary font-bold mb-6">Looking to the Future</h2>
        <p className="text-lg text-gray-700 mb-8">
          As we move forward, Jeppiaar University remains committed to its founding vision of providing accessible
          quality education while embracing new challenges and opportunities in the rapidly evolving educational
          landscape. Our strategic plan for the next decade focuses on enhancing global collaborations, strengthening
          research capabilities, and leveraging technology to create innovative learning experiences.
        </p>
        <div className="relative h-64 rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=800" alt="Future Vision" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

