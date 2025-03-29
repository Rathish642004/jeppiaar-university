import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudentActivitiesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Student Activities at Jeppiaar University"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Activities</h1>
          <p className="text-xl max-w-3xl">
            Discover the vibrant student life and diverse activities at Jeppiaar University
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Enriching Student Experiences</h2>
            <p className="text-lg mb-6 text-gray-700">
              At Jeppiaar University, we believe in the holistic development of our students. Our diverse range of
              student activities provides opportunities for personal growth, leadership development, and community
              engagement.
            </p>
            <p className="text-lg text-gray-700">
              From cultural festivals to technical symposiums, literary clubs to social service initiatives, our campus
              buzzes with activities that cater to varied interests and talents.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Students participating in activities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Activities Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Explore Our Activities</h2>

          <Tabs defaultValue="cultural" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="clubs">Clubs & Societies</TabsTrigger>
              <TabsTrigger value="events">Annual Events</TabsTrigger>
            </TabsList>

            <TabsContent value="cultural" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Cultural Fest",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Our annual cultural extravaganza featuring music, dance, drama, and more.",
                  },
                  {
                    title: "Dance Club",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Express yourself through various dance forms from classical to contemporary.",
                  },
                  {
                    title: "Music Society",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Nurture your musical talents with our active music society and regular performances.",
                  },
                  {
                    title: "Theatre Group",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Develop your acting skills and stage presence with our passionate theatre group.",
                  },
                  {
                    title: "Art & Craft",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Explore your creativity through various art forms and exhibitions.",
                  },
                  {
                    title: "Cultural Exchange",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Experience diverse cultures through our international exchange programs.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technical" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Tech Symposium",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Annual technical festival showcasing innovation and technical prowess.",
                  },
                  {
                    title: "Coding Club",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Enhance your programming skills through workshops, hackathons, and competitions.",
                  },
                  {
                    title: "Robotics Society",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Design and build robots for various applications and competitions.",
                  },
                  {
                    title: "Research Groups",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Collaborate on cutting-edge research projects with faculty mentors.",
                  },
                  {
                    title: "Innovation Hub",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Transform your ideas into reality with support from our innovation ecosystem.",
                  },
                  {
                    title: "Industry Connect",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Interact with industry experts through guest lectures and workshops.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="clubs" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Literary Club",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Nurture your love for literature, writing, and public speaking.",
                  },
                  {
                    title: "Photography Club",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Capture moments and develop your photography skills with like-minded peers.",
                  },
                  {
                    title: "Environmental Club",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Promote sustainability and environmental awareness through various initiatives.",
                  },
                  {
                    title: "Debate Society",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Sharpen your critical thinking and oratory skills through regular debates.",
                  },
                  {
                    title: "Social Service Club",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Give back to society through community service and outreach programs.",
                  },
                  {
                    title: "Entrepreneurship Cell",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Develop your business acumen and entrepreneurial spirit.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Freshers' Welcome",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "A warm welcome to new students with performances and interactive sessions.",
                  },
                  {
                    title: "Annual Day",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Celebration of achievements and talents with awards and performances.",
                  },
                  {
                    title: "Sports Meet",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Annual sports competition showcasing athletic prowess and team spirit.",
                  },
                  {
                    title: "Alumni Reunion",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Reconnect with alumni and build networks for current students.",
                  },
                  {
                    title: "Graduation Ceremony",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Formal ceremony celebrating the academic achievements of graduating students.",
                  },
                  {
                    title: "International Conferences",
                    image: "/placeholder.svg?height=600&width=800",
                    description: "Host and participate in global academic conferences and seminars.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Activity Calendar */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Upcoming Events</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Annual Cultural Fest",
              date: "March 15-17, 2025",
              location: "Main Auditorium",
              image: "/placeholder.svg?height=600&width=800",
            },
            {
              title: "Technical Symposium",
              date: "April 5-6, 2025",
              location: "Engineering Block",
              image: "/placeholder.svg?height=600&width=800",
            },
            {
              title: "Literary Week",
              date: "May 10-15, 2025",
              location: "Central Library",
              image: "/placeholder.svg?height=600&width=800",
            },
            {
              title: "Sports Tournament",
              date: "June 1-7, 2025",
              location: "University Stadium",
              image: "/placeholder.svg?height=600&width=800",
            },
            {
              title: "Alumni Meet",
              date: "July 20, 2025",
              location: "Convention Center",
              image: "/placeholder.svg?height=600&width=800",
            },
            {
              title: "Entrepreneurship Summit",
              date: "August 12-13, 2025",
              location: "Business School",
              image: "/placeholder.svg?height=600&width=800",
            },
          ].map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 rounded-bl-lg font-medium">
                  {event.date.split(",")[0]}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Student Achievements</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arun Kumar",
                achievement: "National Robotics Competition Winner",
                image: "/placeholder.svg?height=400&width=400",
                quote:
                  "The support from faculty and the resources available at Jeppiaar University were instrumental in our team's success.",
              },
              {
                name: "Meera Patel",
                achievement: "International Dance Festival Finalist",
                image: "/placeholder.svg?height=400&width=400",
                quote:
                  "The cultural activities at Jeppiaar helped me hone my talents and represent India on an international platform.",
              },
              {
                name: "Vikram Singh",
                achievement: "Published Research Paper in IEEE",
                image: "/placeholder.svg?height=400&width=400",
                quote:
                  "The research environment and mentorship at Jeppiaar University encouraged me to pursue my research interests.",
              },
            ].map((student, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={student.image || "/placeholder.svg"} alt={student.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">{student.name}</h3>
                <p className="text-primary font-medium mb-4">{student.achievement}</p>
                <p className="italic text-gray-600">"{student.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Activities CTA */}
      <section className="py-12 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get Involved!</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Discover your passion, develop new skills, and make lasting friendships by participating in our diverse
          student activities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/campus-life"
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Explore Campus Life
          </Link>
          <Link
            href="/admissions"
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}

