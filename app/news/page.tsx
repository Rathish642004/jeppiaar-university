import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"

// This would typically come from a database or API
const newsItems = [
  {
    title: "Jeppiaar University Ranks Among Top 100 in NIRF 2024",
    excerpt: "The university has been recognized for its excellence in teaching, research, and placement.",
    content:
      "Jeppiaar University has achieved a significant milestone by securing a position among the top 100 universities in the National Institutional Ranking Framework (NIRF) 2024. This recognition is a testament to the university's commitment to academic excellence, research innovation, and industry-relevant education. The ranking evaluates institutions based on parameters such as teaching, learning and resources, research and professional practice, graduation outcomes, outreach and inclusivity, and perception. Jeppiaar University has shown remarkable improvement in all these areas, reflecting its dedication to providing quality education and fostering a conducive environment for learning and research.",
    date: "February 15, 2024",
    image: "/placeholder.svg?height=300&width=600",
    category: "Achievement",
    link: "/news/nirf-ranking-2024",
  },
  {
    title: "New Research Center for Artificial Intelligence Inaugurated",
    excerpt: "The state-of-the-art facility aims to foster innovation and research in AI and machine learning.",
    content:
      "Jeppiaar University has inaugurated a new Research Center for Artificial Intelligence, marking a significant step towards advancing research and innovation in the field of AI and machine learning. The center is equipped with cutting-edge technology and resources to support faculty and students in their research endeavors. It will focus on developing AI solutions for real-world problems, particularly in healthcare, agriculture, and education. The center will also collaborate with industry partners to bridge the gap between academic research and practical applications. This initiative is expected to enhance the university's research output and provide students with opportunities to work on innovative projects.",
    date: "January 28, 2024",
    image: "/placeholder.svg?height=300&width=600",
    category: "Research",
    link: "/news/ai-research-center",
  },
  {
    title: "Jeppiaar University Signs MoU with Leading Industry Partners",
    excerpt: "The collaboration will provide students with internship opportunities and industry exposure.",
    content:
      "Jeppiaar University has signed Memorandums of Understanding (MoUs) with several leading industry partners to enhance student learning experiences and provide them with practical exposure to the industry. The partnerships will facilitate internships, industrial visits, guest lectures, and collaborative research projects. This initiative is part of the university's efforts to bridge the gap between academic learning and industry requirements, ensuring that students are well-prepared for their professional careers. The MoUs will also enable faculty members to engage in industry-relevant research and stay updated with the latest developments in their respective fields.",
    date: "January 10, 2024",
    image: "/placeholder.svg?height=300&width=600",
    category: "Partnership",
    link: "/news/industry-partnerships",
  },
  {
    title: "Annual Cultural Festival 'Jepfest' Announced",
    excerpt: "The week-long celebration will showcase student talents in arts, music, and cultural performances.",
    content:
      "Jeppiaar University has announced the dates for its annual cultural festival 'Jepfest'. The week-long celebration will feature a variety of events including music performances, dance competitions, art exhibitions, literary contests, and cultural showcases. The festival provides a platform for students to express their creativity and showcase their talents beyond academics. It also promotes cultural diversity and fosters a sense of community among students from different backgrounds. The event is open to all students and faculty members, and special invitations are extended to alumni and industry partners.",
    date: "December 15, 2023",
    image: "/placeholder.svg?height=300&width=600",
    category: "Event",
    link: "/news/jepfest-2024",
  },
  {
    title: "Jeppiaar University Launches New Scholarship Program",
    excerpt:
      "The merit-based scholarship aims to support academically outstanding students from underprivileged backgrounds.",
    content:
      "Jeppiaar University has launched a new scholarship program to support academically outstanding students from underprivileged backgrounds. The merit-based scholarship will cover tuition fees, accommodation, and other educational expenses for deserving students. The initiative is part of the university's commitment to making quality education accessible to all, regardless of their financial circumstances. The scholarship will be awarded based on academic performance, extracurricular achievements, and financial need. The university has allocated a significant portion of its budget to this program, reflecting its dedication to fostering talent and promoting educational equity.",
    date: "December 5, 2023",
    image: "/placeholder.svg?height=300&width=600",
    category: "Scholarship",
    link: "/news/scholarship-program",
  },
  {
    title: "Jeppiaar University Hosts International Conference on Sustainable Development",
    excerpt:
      "The conference brought together researchers, policymakers, and practitioners to discuss sustainable development goals.",
    content:
      "Jeppiaar University recently hosted an International Conference on Sustainable Development, bringing together researchers, policymakers, and practitioners from around the world. The conference focused on discussing strategies and solutions to achieve the United Nations' Sustainable Development Goals (SDGs). Key topics included climate action, clean energy, sustainable cities, responsible consumption, and partnerships for the goals. The event featured keynote speeches, panel discussions, paper presentations, and workshops. It provided a platform for knowledge exchange and networking, fostering collaborations that can contribute to sustainable development efforts globally.",
    date: "November 20, 2023",
    image: "/placeholder.svg?height=300&width=600",
    category: "Conference",
    link: "/news/sustainable-development-conference",
  },
  {
    title: "Jeppiaar University Students Win National Robotics Competition",
    excerpt: "The team's innovative robot design secured first place in the prestigious competition.",
    content:
      "A team of students from Jeppiaar University has won the National Robotics Competition, showcasing their technical skills and innovative thinking. The team designed and built a robot that could navigate complex terrains and perform specific tasks with precision. Their creation stood out for its efficiency, reliability, and innovative features. The competition, which saw participation from over 100 teams across the country, tested the students' knowledge of robotics, programming, and problem-solving abilities. The victory has brought recognition to the university and highlighted the quality of its engineering education.",
    date: "November 5, 2023",
    image: "/placeholder.svg?height=300&width=600",
    category: "Achievement",
    link: "/news/robotics-competition-win",
  },
  {
    title: "Jeppiaar University Introduces New Courses in Data Science and Cybersecurity",
    excerpt: "The new programs aim to prepare students for careers in high-demand technology fields.",
    content:
      "Jeppiaar University has introduced new undergraduate and postgraduate courses in Data Science and Cybersecurity, responding to the growing demand for professionals in these fields. The programs are designed to provide students with a strong foundation in theoretical concepts and practical skills, preparing them for careers in data analysis, machine learning, cybersecurity, and related areas. The curriculum includes hands-on projects, industry internships, and certification opportunities. The university has also established dedicated labs with advanced software and hardware to support these programs. Faculty members with expertise in these domains have been recruited to ensure high-quality education.",
    date: "October 15, 2023",
    image: "/placeholder.svg?height=300&width=600",
    category: "Academics",
    link: "/news/new-tech-courses",
  },
]

export default function NewsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-primary">Latest News</h1>
        <p className="text-primary/70 mt-2">Stay updated with the latest happenings at Jeppiaar University</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((news, index) => (
          <article
            key={index}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white transform hover:scale-[1.02] duration-300"
          >
            <div className="relative h-48 w-full">
              <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="mb-2">
                <Badge variant="secondary">{news.category}</Badge>
                <span className="text-sm text-primary/70 ml-2">{news.date}</span>
              </div>
              <h2 className="text-xl font-bold text-primary mb-2">{news.title}</h2>
              <p className="text-primary/80 mb-4 line-clamp-3">{news.excerpt}</p>
              <Link href={news.link} className="text-primary font-medium hover:underline">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

