import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ChevronLeft } from "lucide-react"

// This would typically come from a database or API
const upcomingEvents = [
  {
    title: "Annual Technical Symposium",
    date: "March 18-19, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    description:
      "A platform for students to showcase their technical skills and innovations. The symposium will feature paper presentations, project exhibitions, technical quizzes, coding competitions, and workshops on emerging technologies. Industry experts will be invited to judge the competitions and provide feedback to participants. Certificates and prizes will be awarded to winners in various categories.",
    link: "/events/technical-symposium",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "International Conference on Emerging Technologies",
    date: "April 5-7, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Conference Hall",
    description:
      "Bringing together researchers and experts to discuss the latest developments in technology. The conference will cover topics such as artificial intelligence, machine learning, Internet of Things, blockchain, cloud computing, and cybersecurity. It will feature keynote speeches, panel discussions, paper presentations, and networking sessions. Researchers from around the world are invited to submit their papers for presentation.",
    link: "/events/international-conference",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Cultural Fest 'Rhythm 2024'",
    date: "April 12-14, 2024",
    time: "11:00 AM - 9:00 PM",
    location: "University Campus",
    description:
      "A celebration of art, music, dance, and cultural diversity. The fest will feature performances by students, inter-college competitions, art exhibitions, food stalls, and celebrity performances. It provides a platform for students to showcase their talents and creativity beyond academics. The event is open to all students, faculty, and staff members of the university.",
    link: "/events/rhythm-2024",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Alumni Meet 2024",
    date: "April 22, 2024",
    time: "5:00 PM - 9:00 PM",
    location: "Main Auditorium",
    description:
      "An opportunity for alumni to reconnect and network with fellow graduates and faculty. The meet will include interactive sessions, success stories sharing, cultural performances, and a gala dinner. It aims to strengthen the bond between the university and its alumni, and to create opportunities for current students to learn from the experiences of their predecessors.",
    link: "/events/alumni-meet",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Career Fair 2024",
    date: "May 5, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "University Campus",
    description:
      "A platform for students to interact with potential employers and explore career opportunities. The fair will host companies from various sectors offering internships, placements, and career guidance. Students can participate in on-the-spot interviews, resume reviews, and career counseling sessions. It is a great opportunity for final year students to secure job offers before graduation.",
    link: "/events/career-fair",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Workshop on Research Methodology",
    date: "May 15-16, 2024",
    time: "9:30 AM - 4:30 PM",
    location: "Seminar Hall",
    description:
      "A comprehensive workshop on research methods, data analysis, and academic writing. The workshop is designed for research scholars, faculty members, and students interested in pursuing research. It will cover topics such as research design, literature review, data collection methods, statistical analysis, and publication ethics. Participants will receive certificates upon completion.",
    link: "/events/research-methodology-workshop",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Sports Meet 2024",
    date: "June 1-5, 2024",
    time: "8:00 AM - 6:00 PM",
    location: "University Sports Complex",
    description:
      "An annual inter-departmental sports competition featuring various indoor and outdoor games. The event promotes physical fitness, team spirit, and healthy competition among students. Games include cricket, football, basketball, volleyball, badminton, table tennis, chess, and athletics. Trophies and medals will be awarded to winners and runners-up in each category.",
    link: "/events/sports-meet",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Entrepreneurship Summit",
    date: "June 20, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Conference Hall",
    description:
      "A platform for aspiring entrepreneurs to learn from successful business leaders and startup founders. The summit will feature keynote speeches, panel discussions, startup pitches, and networking sessions. It aims to inspire and equip students with the knowledge and skills needed to start and grow their own ventures. Mentorship opportunities and seed funding may be available for promising ideas.",
    link: "/events/entrepreneurship-summit",
    image: "/placeholder.svg?height=300&width=600",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-primary">Upcoming Events</h1>
        <p className="text-primary/70 mt-2">Join us for these exciting events at Jeppiaar University</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="relative h-56 w-full">
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-3">{event.title}</h2>

              <div className="flex flex-col space-y-2 mb-4">
                <div className="flex items-center text-primary/80">
                  <Calendar className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-primary/80">
                  <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-primary/80">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-primary/80 mb-6 line-clamp-3">{event.description}</p>

              <Button asChild>
                <Link href={event.link}>View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

