import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Jeppiaar University</h1>
        <p className="text-xl text-gray-600">
          Established in 2022, Jeppiaar University has grown into a premier institution dedicated to academic
          excellence, innovation, and holistic development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741599080/hero-1_lecgro.jpg"
            alt="Jeppiaar University Campus"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Legacy</h2>
          <p className="text-gray-700 mb-4">
            Founded with a vision to create a world-class educational institution, Jeppiaar University was established
            by renowned educationist and industrialist Dr. Jeppiaar. His vision of providing quality education
            accessible to all continues to guide our institution's growth and development.
          </p>
          <p className="text-gray-700 mb-4">
            Over the years, the university has evolved into a multidisciplinary institution offering diverse programs
            across engineering, management, sciences, humanities, and more. Our commitment to academic excellence,
            research innovation, and industry collaboration has positioned us as a leading university in the region.
          </p>
          <p className="text-gray-700">
            Today, Jeppiaar University stands tall with state-of-the-art infrastructure, distinguished faculty, and a
            vibrant student community pursuing knowledge and innovation.
          </p>
        </div>
      </div>

      <Tabs defaultValue="mission" className="mb-16">
        <TabsList className="mx-auto flex justify-center mb-8">
          <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
          <TabsTrigger value="values">Core Values</TabsTrigger>
          <TabsTrigger value="achievements">Key Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="mission">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To impart quality education and foster innovation by creating a conducive learning environment that
                  empowers students with knowledge, skills, and values to excel in their chosen fields and contribute
                  meaningfully to society.
                </p>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Provide transformative education through innovative teaching-learning methods</li>
                  <li>Nurture critical thinking and problem-solving abilities</li>
                  <li>Promote research and scientific temper among students and faculty</li>
                  <li>Foster industry-academia collaborations for practical exposure</li>
                  <li>Instill ethical values and social responsibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-4">
                  To emerge as a globally recognized institution of academic excellence and innovation, nurturing
                  individuals who will lead positive transformation in technology, business, and society.
                </p>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Establish centers of excellence in emerging disciplines</li>
                  <li>Foster a culture of research and continuous learning</li>
                  <li>Achieve recognition among top 50 universities nationally</li>
                  <li>Develop future leaders with global perspective and strong values</li>
                  <li>Create sustainable impact through innovation and social initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="values">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-700">
                  Striving for the highest standards in all academic and administrative endeavors, constantly raising
                  the bar of performance and achievement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-700">
                  Encouraging creative thinking, embracing new ideas, and fostering an environment that promotes
                  innovative solutions to complex problems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-700">
                  Upholding honesty, transparency, and ethical conduct in all dealings, building trust and credibility
                  among stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
                <p className="text-gray-700">
                  Embracing diversity and ensuring equal opportunities for all, creating a welcoming environment that
                  respects different perspectives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Social Responsibility</h3>
                <p className="text-gray-700">
                  Contributing positively to society through education, research, and community service, addressing
                  societal challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Student-Centric</h3>
                <p className="text-gray-700">
                  Prioritizing the holistic development and welfare of students, making all institutional decisions with
                  student success as the core focus.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Ranked among top 100 universities in NIRF Rankings 2024</li>
                  <li>ISO 9001:2015 certification for quality management systems</li>
                  <li>NAAC 'A' Grade accreditation</li>
                  <li>NBA accreditation for engineering programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Research & Innovation</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Published over 500 research papers in international journals</li>
                  <li>Secured 25+ patents in various technological domains</li>
                  <li>Established 10 research centers in emerging areas</li>
                  <li>Received grants worth ₹15 crores for research projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Infrastructure & Facilities</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>State-of-the-art 100-acre campus with modern amenities</li>
                  <li>Digital library with access to over 50,000 e-journals and resources</li>
                  <li>Advanced laboratories with industry-standard equipment</li>
                  <li>Smart classrooms and seminar halls across all departments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
              <a href="/about/leadership/dr-regeena-j-murali">
                <Image
                  src="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741681228/rejeena_mamm_w28vvj.jpg"
                  alt="Founder & Chancellor Portrait"
                  fill
                  className="object-cover"
                />
              </a>

            </div>
            <a href="/about/leadership/dr-regeena-j-murali" className="text-xl font-bold">Dr. Regeena J Murali</a>
            <p className="text-gray-600">Founder & Chancellor</p>
          </div>

          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
              <a href="/about/leadership/mr-murali-subramanian">
                <Image
                  src="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741681228/muralii_sxlsgb.jpg"
                  alt="President Portrait"
                  fill
                  className="object-cover"
                />
              </a>

            </div>
            <a href="/about/leadership/mr-murali-subramanian" className="text-xl font-bold">Mr. Murali Subramanian</a>
            <p className="text-gray-600">President</p>
          </div>

          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
              <a href="/about/leadership/dr-shaleesha-a-stanley">
                <Image
                  src="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1741710239/selisha_h5tfez.jpg"
                  alt="Pro Chancellor Portrait"
                  fill
                  className="object-cover"
                />
              </a>
            </div>
            <a href="/about/leadership/dr-shaleesha-a-stanley" className="text-xl font-bold">Dr. Shaleesha A Stanley</a>
            <p className="text-gray-600">Pro Chancellor</p>
          </div>
        </div>
      </section>
    </div>
  )
}

