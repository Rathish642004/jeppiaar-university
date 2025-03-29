import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PlacementsPage() {
  // Sample placement statistics
  const placementStats = [
    { label: "Students Placed", value: "1200+", icon: "👨‍🎓" },
    { label: "Companies Visited", value: "250+", icon: "🏢" },
    { label: "Highest Package", value: "₹42 LPA", icon: "💰" },
    { label: "Average Package", value: "₹8.5 LPA", icon: "📈" },
  ]

  // Sample top recruiters
  const topRecruiters = [
    {
      id: 3,
      name: "kotakLife",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094752/Website_related_content.pdf-image-045_xkwsef.png",
    },
    {
      id: 14,
      name: "asianpaints",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-032_gtvaq2.png",
    },
    {
      id: 12,
      name: "l&t",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-034_dkqwwg.png",
    },
    {
      id: 21,
      name: "zepto",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094750/Website_related_content.pdf-image-016_owmnpf.jpg",
    },
    {
      id: 37,
      name: "hdfc",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-001_hhcrrx.png",
    },
    {
      id: 38,
      name: "hcl",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-023_dmvqot.jpg",
    },
    {
      id: 36,
      name: "criodo",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-006_gaqf2j.png",
    },
      {
    id: 23,
    name: "capgemini",
    logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-028_xonuit.png",
  },
  ]
  const placedstudents = [
    {
      id: 1,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101598/Unique_Poster_fau8h7.jpg",
    },
    {
      id: 2,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101598/Priyanka_Mohan_tdjsfh.jpg",
    },
    {
      id: 3,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101597/Suraj_Zepto_Poster_xhhtof.jpg",
    },
    {
      id: 4,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101597/QSpider_Selects_mcopmu.jpg",
    },
    {
      id: 5,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101597/Poster_1_axxvjb.jpg",
    },
    {
      id: 6,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101597/Poster_isgojo.jpg",
    },
    {
      id: 7,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101596/KOTAK_LIFE_POSTER_zpo4y6.jpg",
    },
    {
      id: 8,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101596/Placed_Students_6.7.2024_eesmh2.jpg",
    },
    {
      id: 9,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101596/KNV_Capital_Selects_rseh5x.jpg",
    },
    {
      id: 10,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101596/Mrudula_vvypf0.jpg",
    },
    {
      id: 11,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101596/Anushaa_Zepto_Poster_xmyted.jpg",
    },
    {
      id: 12,
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743101595/Emimal_K_efmxrv.jpg",
    },

  ]
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Vision */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Placements at Jeppiaar University</h1>
            <div className="bg-primary/5 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold text-primary mb-3">
                Vision: Empowering Leaders for a Limitless Future
              </h2>
              <p className="text-lg">
                At Jeppiaar University, we envision a future where our students emerge as exceptional leaders, equipped
                not just with academic prowess but with the skills, mindset, and adaptability to thrive in any industry.
                Our Training and Placement Department is committed to forging seamless connections with top recruiters,
                propelling careers towards unparalleled success. Together, we redefine traditional boundaries, inspire
                innovation, and shape a future where limitless opportunities await.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button
                asChild
                size="lg"
                className="border-2 border-primary  text-secondary hover:bg-primary/90 font-semibold px-6 py-3 text-base shadow-md hover:shadow-lg transition-all"
              >
                <Link href="/placements/recruiters">Our Recruiters</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-primary  text-secondary hover:bg-primary/90 font-semibold px-6 py-3 text-base shadow-md hover:shadow-lg transition-all"
              >
                <Link href="/placements/process">Training & Process</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-secondary font-semibold px-6 py-3 text-base shadow-md hover:shadow-lg transition-all"
              >
                  <Link 
                    href="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743096222/Placement_Brochure_y5ihnm.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    download
                  >
                    Download Brochure
                  </Link>

              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Students at placement drive"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Mission: Shaping Careers, Fostering Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Skill Development</h3>
              <p className="text-gray-600">
                We strive to equip our students with cutting-edge skills and practical experience, ensuring they are
                well-prepared for the dynamic job market.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Industry-Integrated Curriculum</h3>
              <p className="text-gray-600">
                Collaborating closely with industries, we offer real-world knowledge, ensuring our students are exposed
                to current challenges and industry best practices.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Internships and Experiential Learning</h3>
              <p className="text-gray-600">
                We provide hands-on opportunities for industry insights, forging valuable connections that enhance our
                students' employability.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Career Counselling</h3>
              <p className="text-gray-600">
                Guiding students in making informed career choices aligned with their passions, recognizing and
                nurturing their unique strengths.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Partnerships</h3>
              <p className="text-gray-600">
                Building strong connections with leading employers for seamless recruitment processes, creating pathways
                for our students' success.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Entrepreneurial Support</h3>
              <p className="text-gray-600">
                Fostering a culture of entrepreneurship through mentorship and resources, empowering aspiring founders
                within our university community.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Placement Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Top Recruiters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {topRecruiters.map((recruiter, index) => (
            <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center h-32"
          >
              <Image
                src={recruiter.logo || "/placeholder.svg"}
                alt={`${recruiter.name} logo`}
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="outline"
            asChild
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-all"
          >
            <Link href="/placements/recruiters">View All Recruiters</Link>
          </Button>
        </div>
      </section>
      
      {/* plced students */}
      <section className="mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {placedstudents.map((recruiter, index) => (
            <div
            key={index}
            className="bg-transparent p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center h-auto"
          >
              <Image
                src={recruiter.logo || "/placeholder.svg"}
                alt={`Image`}
                width={350}
                height={450}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="outline"
            asChild
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-all"
          >
            {/*<Link href="/placements/recruiters">View All</Link>*/}
          </Button>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Ready to Begin Your Career Journey?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our Training & Placement Cell is dedicated to helping you achieve your career goals. Reach out to us for
          personalized guidance and support.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Placement Cell
          </Link>
          <Link
            href="/placements/recruiters"
            className="bg-white text-primary border border-primary px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            View Our Recruiters
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-primary">
            Join us at Jeppiaar University as we empower leaders for a future without limits. Your journey towards
            success begins here!
          </p>
          <p className="mt-2 text-[25px] font-bold text-primary">"ENTRY IS NOT IMPORTANT, EXIT IS IMPORTANT"</p>
        </div>
      </section>
    </div>
  )
}

