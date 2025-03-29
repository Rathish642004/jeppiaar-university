import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ChancellorProfilePage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <Link href="/about" className="text-primary hover:underline">
              About
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span className="text-gray-600">Chancellor Profile</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Image */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Dr. M. K. Surappa - Chancellor"
                width={400}
                height={600}
                className="w-full"
              />
              <div className="bg-primary text-white p-4 text-center">
                <h3 className="text-xl font-bold">Dr. M. K. Surappa</h3>
                <p className="text-sm">Chancellor</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Chancellor's Profile</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl mb-6">
                Dr. M. K. Surappa is a distinguished academician and administrator with over four decades of experience
                in higher education, research, and academic leadership.
              </p>

              <p className="mb-4">
                Dr. Surappa earned his Ph.D. in Metallurgical Engineering from the Indian Institute of Science,
                Bangalore, and has made significant contributions to the field of materials science and engineering. His
                research work on aluminum composites and materials processing has been widely recognized and has led to
                numerous innovations in the field.
              </p>

              <p className="mb-4">
                Prior to joining Jeppiaar University as Chancellor, Dr. Surappa served as the Vice-Chancellor of Anna
                University, Chennai, where he implemented several reforms to enhance the quality of technical education.
                He has also held prestigious positions at the Indian Institute of Science, Bangalore, and the Indian
                Institute of Technology, Madras.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Academic Achievements</h2>

              <ul className="list-disc pl-6 mb-6">
                <li>Fellow of the Indian National Academy of Engineering</li>
                <li>Fellow of the Indian Academy of Sciences</li>
                <li>Recipient of the Shanti Swarup Bhatnagar Prize for Science and Technology</li>
                <li>Published over 150 research papers in international journals</li>
                <li>Guided more than 30 Ph.D. scholars</li>
                <li>Holds several patents in materials engineering</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Vision for Jeppiaar University</h2>

              <p className="mb-4">
                As the Chancellor of Jeppiaar University, Dr. Surappa envisions transforming the institution into a
                center of excellence for education, research, and innovation. His focus is on fostering a culture of
                academic rigor, research orientation, and industry collaboration to prepare students for the challenges
                of the global workplace.
              </p>

              <p className="mb-4">
                Dr. Surappa is committed to enhancing the quality of education through curriculum innovation, faculty
                development, and state-of-the-art infrastructure. He believes in the power of education to transform
                lives and is dedicated to making Jeppiaar University a world-class institution that contributes
                significantly to the advancement of knowledge and the development of society.
              </p>

              <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                "Education is not just about acquiring knowledge; it's about developing the ability to think critically,
                solve problems creatively, and contribute meaningfully to society. At Jeppiaar University, we are
                committed to providing an education that empowers students to become leaders and change-makers in their
                chosen fields."
                <footer className="text-right font-bold mt-2">— Dr. M. K. Surappa</footer>
              </blockquote>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Professional Experience</h2>

              <ul className="list-disc pl-6 mb-6">
                <li>Vice-Chancellor, Anna University (2018-2021)</li>
                <li>Director, Indian Institute of Technology, Ropar (2009-2015)</li>
                <li>Professor, Department of Metallurgy, Indian Institute of Science, Bangalore (1998-2009)</li>
                <li>Visiting Professor, Technical University of Clausthal, Germany (1997-1998)</li>
                <li>Associate Professor, Indian Institute of Science, Bangalore (1992-1998)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

