import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function InternshipsPage() {
  // Sample internship opportunities
  const internships = [
    {
      company: "TCS",
      position: "Software Development Intern",
      duration: "2 months",
      stipend: "₹15,000/month",
      location: "Chennai",
      deadline: "30 April 2023",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      company: "Infosys",
      position: "Data Science Intern",
      duration: "3 months",
      stipend: "₹20,000/month",
      location: "Bangalore",
      deadline: "15 May 2023",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      company: "Wipro",
      position: "UI/UX Design Intern",
      duration: "2 months",
      stipend: "₹12,000/month",
      location: "Chennai",
      deadline: "10 May 2023",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      company: "HCL",
      position: "Network Engineering Intern",
      duration: "3 months",
      stipend: "₹18,000/month",
      location: "Noida",
      deadline: "20 May 2023",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  // Sample internship success stories
  const successStories = [
    {
      name: "Arun Kumar",
      department: "Computer Science",
      company: "Microsoft",
      year: "2022",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "My internship at Microsoft gave me hands-on experience with real-world projects and helped me secure a pre-placement offer.",
    },
    {
      name: "Divya Sharma",
      department: "Electronics & Communication",
      company: "Samsung",
      year: "2022",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The internship program at Samsung was well-structured and provided me with valuable industry exposure and technical skills.",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-primary mb-6">Internship Opportunities</h1>
            <p className="text-lg mb-6">
              Jeppiaar University facilitates internships for students to gain practical experience and industry
              exposure. Our internship program bridges the gap between academic learning and professional practice.
            </p>
            <Button asChild>
              <Link href="#current-opportunities">View Current Opportunities</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-[300px] w-full">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Students during internship"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Internship Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Benefits of Internships</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Practical Experience</h3>
              <p className="text-gray-600">
                Apply classroom knowledge to real-world situations and gain hands-on experience in your field of study.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Exposure</h3>
              <p className="text-gray-600">
                Understand industry practices, work culture, and professional expectations before entering the job
                market.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Career Opportunities</h3>
              <p className="text-gray-600">
                Increase your chances of securing pre-placement offers and build a professional network for future
                opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="mb-16" id="current-opportunities">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Current Internship Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center p-4 border-b">
                  <div className="w-12 h-12 mr-4 relative flex-shrink-0">
                    <Image
                      src={internship.logo || "/placeholder.svg"}
                      alt={`${internship.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{internship.position}</h3>
                    <p className="text-primary font-medium">{internship.company}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{internship.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Stipend</p>
                      <p className="font-medium">{internship.stipend}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{internship.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Application Deadline</p>
                      <p className="font-medium">{internship.deadline}</p>
                    </div>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/placements/all-internships">View All Opportunities</Link>
          </Button>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Internship Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {story.department}, Intern at {story.company} ({story.year})
                    </p>
                    <p className="text-gray-600">"{story.testimonial}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Internship Process */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Internship Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-primary/20"></div>
          <div className="space-y-12 relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="order-1 md:order-1 md:w-1/2 flex justify-end">
                <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
                  <h3 className="text-xl font-bold mb-2">Application</h3>
                  <p>
                    Students apply for internships through the placement portal with their updated resume and required
                    documents.
                  </p>
                </div>
              </div>
              <div className="order-0 md:order-0 z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                1
              </div>
              <div className="order-2 md:order-2 md:w-1/2"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="order-1 md:order-2 md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
                  <h3 className="text-xl font-bold mb-2">Shortlisting</h3>
                  <p>
                    Companies review applications and shortlist candidates based on academic performance and skill
                    requirements.
                  </p>
                </div>
              </div>
              <div className="order-0 md:order-0 z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                2
              </div>
              <div className="order-2 md:order-1 md:w-1/2"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="order-1 md:order-1 md:w-1/2 flex justify-end">
                <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
                  <h3 className="text-xl font-bold mb-2">Selection Process</h3>
                  <p>
                    Shortlisted students go through interviews, tests, or group discussions as per company requirements.
                  </p>
                </div>
              </div>
              <div className="order-0 md:order-0 z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                3
              </div>
              <div className="order-2 md:order-2 md:w-1/2"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="order-1 md:order-2 md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
                  <h3 className="text-xl font-bold mb-2">Internship Period</h3>
                  <p>
                    Selected students complete their internships under the guidance of industry mentors and faculty
                    coordinators.
                  </p>
                </div>
              </div>
              <div className="order-0 md:order-0 z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                4
              </div>
              <div className="order-2 md:order-1 md:w-1/2"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="order-1 md:order-1 md:w-1/2 flex justify-end">
                <div className="bg-white p-6 rounded-lg shadow-sm max-w-md">
                  <h3 className="text-xl font-bold mb-2">Evaluation & Certification</h3>
                  <p>
                    Students receive performance evaluations and internship completion certificates from the companies.
                  </p>
                </div>
              </div>
              <div className="order-0 md:order-0 z-10 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                5
              </div>
              <div className="order-2 md:order-2 md:w-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

