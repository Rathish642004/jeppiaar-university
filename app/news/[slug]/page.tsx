import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"

// This would typically come from a database or API based on the slug
const newsItems = {
  "nirf-ranking-2024": {
    title: "Jeppiaar University Ranks Among Top 100 in NIRF 2024",
    excerpt: "The university has been recognized for its excellence in teaching, research, and placement.",
    content:
      "Jeppiaar University has achieved a significant milestone by securing a position among the top 100 universities in the National Institutional Ranking Framework (NIRF) 2024. This recognition is a testament to the university's commitment to academic excellence, research innovation, and industry-relevant education.\n\nThe ranking evaluates institutions based on parameters such as teaching, learning and resources, research and professional practice, graduation outcomes, outreach and inclusivity, and perception. Jeppiaar University has shown remarkable improvement in all these areas, reflecting its dedication to providing quality education and fostering a conducive environment for learning and research.\n\nThe university's focus on research and innovation has been a key factor in this achievement. Over the past year, faculty members and students have published numerous research papers in reputed international journals and presented their work at prestigious conferences. The university has also filed several patents for innovative technologies developed by its research teams.\n\nIndustry partnerships and placement opportunities have been another area of strength. The university has collaborated with leading companies to provide internships and job placements to students. The placement cell has worked tirelessly to ensure that students are well-prepared for their careers and have access to the best opportunities in their respective fields.\n\nThe university's infrastructure and facilities have also been upgraded to enhance the learning experience. State-of-the-art laboratories, a well-stocked library, smart classrooms, and recreational facilities have been developed to create a holistic educational environment.\n\nThe Vice-Chancellor expressed pride in this achievement and thanked the faculty, staff, and students for their contributions. He emphasized that this recognition would motivate the university to strive for even greater excellence in the future.",
    date: "February 15, 2024",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Achievement",
  },
  "ai-research-center": {
    title: "New Research Center for Artificial Intelligence Inaugurated",
    excerpt: "The state-of-the-art facility aims to foster innovation and research in AI and machine learning.",
    content:
      "Jeppiaar University has inaugurated a new Research Center for Artificial Intelligence, marking a significant step towards advancing research and innovation in the field of AI and machine learning. The center is equipped with cutting-edge technology and resources to support faculty and students in their research endeavors.\n\nThe center will focus on developing AI solutions for real-world problems, particularly in healthcare, agriculture, and education. It will also collaborate with industry partners to bridge the gap between academic research and practical applications. This initiative is expected to enhance the university's research output and provide students with opportunities to work on innovative projects.\n\nThe center is equipped with high-performance computing systems, specialized software for AI and machine learning, and a dedicated team of researchers and technical staff. It will offer training programs, workshops, and seminars to enhance the skills of students and faculty members in AI and related technologies.\n\nThe inauguration ceremony was attended by distinguished guests from academia and industry, who emphasized the importance of AI research in today's technological landscape. The Chief Guest, a renowned AI expert, delivered a keynote address on the future of AI and its potential impact on various sectors.\n\nThe Director of the center outlined the research priorities and projects that would be undertaken in the coming years. These include developing AI algorithms for medical diagnosis, creating intelligent systems for agricultural monitoring, and designing adaptive learning platforms for education.\n\nThe university has allocated substantial funding for the center and plans to establish collaborations with international universities and research institutions to promote knowledge exchange and joint research initiatives.",
    date: "January 28, 2024",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Research",
  },
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const news = newsItems[slug as keyof typeof newsItems]

  if (!news) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">News Not Found</h1>
        <p className="text-primary/70 mb-6">The news article you are looking for does not exist.</p>
        <Link href="/news" className="text-primary font-medium hover:underline">
          Back to News
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/news" className="inline-flex items-center text-primary hover:underline mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to News
        </Link>
      </div>

      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-2">
            {news.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{news.title}</h1>
          <p className="text-primary/70">{news.date}</p>
        </div>

        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          {news.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-primary/90">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
}

