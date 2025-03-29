import { Card, CardContent } from "@/components/ui/card"

export default function VisionMissionPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary">Vision & Mission</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our guiding principles that shape our educational philosophy and institutional goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 transform transition-all duration-500 hover:scale-[1.01]">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
              <p className="text-gray-700 mb-6 text-lg">
                To emerge as a globally recognized institution of academic excellence and innovation, nurturing
                individuals who will lead positive transformation in technology, business, and society.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Global Recognition</h3>
                  <p>
                    Establish Jeppiaar University as a globally recognized center for education, research, and
                    innovation.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Centers of Excellence</h3>
                  <p>
                    Develop specialized centers of excellence in emerging disciplines to advance knowledge and research.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Future Leaders</h3>
                  <p>
                    Nurture future leaders with a global perspective, strong values, and the skills to drive positive
                    change.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Sustainable Impact</h3>
                  <p>
                    Create sustainable impact through innovation, research, and social initiatives that address
                    real-world challenges.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/5 border-secondary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-gray-700 mb-6 text-lg">
                To impart quality education and foster innovation by creating a conducive learning environment that
                empowers students with knowledge, skills, and values to excel in their chosen fields and contribute
                meaningfully to society.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Quality Education</h3>
                  <p>
                    Provide transformative education through innovative teaching-learning methods and industry-relevant
                    curriculum.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Research & Innovation</h3>
                  <p>
                    Promote research, innovation, and entrepreneurship to address contemporary challenges and create new
                    knowledge.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Holistic Development</h3>
                  <p>
                    Foster holistic development of students through a balanced focus on academics, co-curricular
                    activities, and life skills.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Industry Collaboration</h3>
                  <p>
                    Strengthen industry-academia partnerships to enhance practical learning, research, and employment
                    opportunities.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2">Social Responsibility</h3>
                  <p>
                    Instill ethical values and social responsibility to develop conscientious citizens who contribute
                    positively to society.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12 p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Commitment</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Jeppiaar University, we are committed to translating our vision and mission into tangible outcomes
            through strategic initiatives, quality education, innovative research, and meaningful community engagement.
            Our institutional goals and objectives are aligned with our vision and mission, guiding our academic
            programs, research activities, and administrative functions.
          </p>
        </div>
      </div>
    </div>
  )
}

