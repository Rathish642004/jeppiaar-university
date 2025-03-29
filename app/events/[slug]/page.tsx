import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ChevronLeft, Share2, Download } from "lucide-react"

// This would typically come from a database or API based on the slug
const eventsData = {
  "technical-symposium": {
    title: "Annual Technical Symposium",
    date: "March 18-19, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    description:
      "A platform for students to showcase their technical skills and innovations. The symposium will feature paper presentations, project exhibitions, technical quizzes, coding competitions, and workshops on emerging technologies.",
    fullDescription:
      "The Annual Technical Symposium is one of the flagship events of Jeppiaar University, providing a platform for students to showcase their technical skills and innovations. The two-day event will feature a variety of activities designed to challenge and inspire participants.\n\nDay 1 will begin with an inaugural ceremony followed by paper presentations where students can present their research work and innovative ideas. The afternoon will be dedicated to project exhibitions, where teams can display their working models and prototypes. Technical quizzes will be conducted to test the knowledge of participants in various domains of technology.\n\nDay 2 will feature coding competitions where participants can demonstrate their programming skills by solving complex problems. Workshops on emerging technologies such as artificial intelligence, blockchain, and Internet of Things will be conducted by industry experts. The day will conclude with a valedictory ceremony and prize distribution.\n\nIndustry experts will be invited to judge the competitions and provide valuable feedback to participants. Certificates and prizes will be awarded to winners in various categories. The event is open to students from all colleges and universities, providing an opportunity for inter-institutional collaboration and knowledge sharing.",
    image: "/placeholder.svg?height=600&width=1200",
    schedule: [
      {
        day: "Day 1 - March 18, 2024",
        events: [
          { time: "9:00 AM - 10:00 AM", activity: "Inaugural Ceremony" },
          { time: "10:00 AM - 1:00 PM", activity: "Paper Presentations" },
          { time: "1:00 PM - 2:00 PM", activity: "Lunch Break" },
          { time: "2:00 PM - 5:00 PM", activity: "Project Exhibitions & Technical Quizzes" },
        ],
      },
      {
        day: "Day 2 - March 19, 2024",
        events: [
          { time: "9:00 AM - 12:00 PM", activity: "Coding Competitions" },
          { time: "12:00 PM - 1:00 PM", activity: "Lunch Break" },
          { time: "1:00 PM - 4:00 PM", activity: "Workshops on Emerging Technologies" },
          { time: "4:00 PM - 5:00 PM", activity: "Valedictory Ceremony & Prize Distribution" },
        ],
      },
    ],
    registrationLink: "https://example.com/register",
    contactPerson: "Dr. Rajesh Kumar",
    contactEmail: "rajesh.kumar@jeppiaaruniversity.ac.in",
    contactPhone: "+91 9876543210",
  },
  "international-conference": {
    title: "International Conference on Emerging Technologies",
    date: "April 5-7, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Conference Hall",
    description:
      "Bringing together researchers and experts to discuss the latest developments in technology. The conference will cover topics such as artificial intelligence, machine learning, Internet of Things, blockchain, cloud computing, and cybersecurity.",
    fullDescription:
      "The International Conference on Emerging Technologies is a prestigious event that brings together researchers, academicians, and industry experts from around the world to discuss the latest developments and future trends in technology.\n\nThe three-day conference will cover a wide range of topics including artificial intelligence, machine learning, Internet of Things, blockchain, cloud computing, cybersecurity, and more. It will feature keynote speeches by renowned experts, panel discussions on current challenges and opportunities, paper presentations by researchers, and interactive workshops.\n\nThe conference aims to provide a platform for knowledge exchange, networking, and collaboration among participants. It will facilitate discussions on how emerging technologies can be leveraged to address global challenges and create innovative solutions for various sectors including healthcare, education, agriculture, and manufacturing.\n\nResearchers are invited to submit their original research papers for presentation at the conference. All accepted papers will be published in the conference proceedings, which will be indexed in reputed databases. Selected papers may also be considered for publication in special issues of international journals.\n\nThe conference will also feature an exhibition where companies and research institutions can showcase their latest products, services, and research outputs. This will provide an opportunity for participants to explore potential collaborations and partnerships.",
    image: "/placeholder.svg?height=600&width=1200",
    schedule: [
      {
        day: "Day 1 - April 5, 2024",
        events: [
          { time: "10:00 AM - 11:00 AM", activity: "Inaugural Session" },
          { time: "11:00 AM - 12:30 PM", activity: "Keynote Speech: 'Future of AI'" },
          { time: "12:30 PM - 1:30 PM", activity: "Lunch Break" },
          { time: "1:30 PM - 3:30 PM", activity: "Paper Presentations (Session 1)" },
          { time: "3:30 PM - 4:00 PM", activity: "Tea Break" },
        ],
      },
      {
        day: "Day 2 - April 6, 2024",
        events: [
          { time: "10:00 AM - 11:30 AM", activity: "Panel Discussion: 'Ethical Implications of AI'" },
          { time: "11:30 AM - 1:00 PM", activity: "Paper Presentations (Session 2)" },
          { time: "1:00 PM - 2:00 PM", activity: "Lunch Break" },
          { time: "2:00 PM - 4:00 PM", activity: "Workshop on Blockchain Technology" },
        ],
      },
      {
        day: "Day 3 - April 7, 2024",
        events: [
          { time: "10:00 AM - 11:30 AM", activity: "Keynote Speech: 'IoT and Smart Cities'" },
          { time: "11:30 AM - 1:00 PM", activity: "Paper Presentations (Session 3)" },
          { time: "1:00 PM - 2:00 PM", activity: "Lunch Break" },
          { time: "2:00 PM - 3:30 PM", activity: "Panel Discussion: 'Future of Technology Education'" },
          { time: "3:30 PM - 4:00 PM", activity: "Valedictory Session" },
        ],
      },
    ],
    registrationLink: "https://example.com/register",
    contactPerson: "Dr. Priya Sharma",
    contactEmail: "priya.sharma@jeppiaaruniversity.ac.in",
    contactPhone: "+91 9876543211",
  },
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const event = eventsData[slug as keyof typeof eventsData]

  if (!event) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Event Not Found</h1>
        <p className="text-primary/70 mb-6">The event you are looking for does not exist.</p>
        <Link href="/events" className="text-primary font-medium hover:underline">
          Back to Events
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/events" className="inline-flex items-center text-primary hover:underline mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Events
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{event.title}</h1>

          <div className="flex flex-col space-y-3 mb-6">
            <div className="flex items-center text-primary/80">
              <Calendar className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-primary/80">
              <Clock className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-primary/80">
              <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="flex space-x-4 mb-8">
            <Button asChild>
              <Link href={event.registrationLink}>Register Now</Link>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">About the Event</h2>
          {event.fullDescription.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-primary/90">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Event Schedule</h2>
          <div className="space-y-6">
            {event.schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="border rounded-lg p-4">
                <h3 className="text-xl font-semibold text-primary mb-3">{day.day}</h3>
                <div className="space-y-2">
                  {day.events.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start py-2 border-b last:border-0">
                      <div className="w-1/3 font-medium text-primary">{item.time}</div>
                      <div className="w-2/3 text-primary/80">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
          <div className="bg-tertiary/30 rounded-lg p-6">
            <p className="text-lg font-medium text-primary mb-2">{event.contactPerson}</p>
            <p className="text-primary/80 mb-1">Email: {event.contactEmail}</p>
            <p className="text-primary/80">Phone: {event.contactPhone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

