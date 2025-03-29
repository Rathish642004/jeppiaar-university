import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"

const upcomingEvents = [
  {
    title: "Annual Technical Symposium",
    date: "March 18-19, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    description: "A platform for students to showcase their technical skills and innovations.",
    link: "/events/technical-symposium",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    title: "International Conference on Emerging Technologies",
    date: "April 5-7, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Conference Hall",
    description: "Bringing together researchers and experts to discuss the latest developments in technology.",
    link: "/events/international-conference",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    title: "Cultural Fest 'Rhythm 2024'",
    date: "April 12-14, 2024",
    time: "11:00 AM - 9:00 PM",
    location: "University Campus",
    description: "A celebration of art, music, dance, and cultural diversity.",
    link: "/events/rhythm-2024",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    title: "Alumni Meet 2024",
    date: "April 22, 2024",
    time: "5:00 PM - 9:00 PM",
    location: "Main Auditorium",
    description: "An opportunity for alumni to reconnect and network with fellow graduates and faculty.",
    link: "/events/alumni-meet",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function EventsSection() {
  return (
    <section className="text-primary">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary">Upcoming Events</h2>
      </div>

      <div className="space-y-4">
        {upcomingEvents.slice(0, 3).map((event, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 bg-tertiary relative hover:z-10 hover:scale-[1.02] hover:-translate-y-1 transform"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <div className="bg-tertiary rounded-lg p-2 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{event.title}</h3>
                    <div className="text-sm text-primary/70 mt-1 mb-2">
                      <p>
                        {event.date} • {event.time}
                      </p>
                      <p>{event.location}</p>
                    </div>
                    <p className="text-primary/80 text-sm mb-2">{event.description}</p>
                    <Link href={event.link} className="text-primary text-sm font-medium hover:underline">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button variant="secondary" asChild>
          <Link href="/events">All Events</Link>
        </Button>
      </div>
    </section>
  )
}

