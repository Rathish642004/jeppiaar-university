import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function StudentLifePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Student Life at Jeppiaar University"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Student Life</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Experience a vibrant and enriching campus life at Jeppiaar University
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Life at Jeppiaar University</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Jeppiaar University, we believe that education extends beyond the classroom. Our campus offers a rich
              tapestry of experiences that contribute to the holistic development of our students. From state-of-the-art
              infrastructure to vibrant cultural activities, we provide an environment where students can thrive
              academically, socially, and personally.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Campus Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Infrastructure",
                description: "Modern classrooms, labs, and learning spaces",
                image: "/placeholder.svg?height=400&width=600",
                link: "/student-life/infrastructure",
              },
              {
                title: "Library",
                description: "Extensive collection of books, journals, and digital resources",
                image: "/placeholder.svg?height=400&width=600",
                link: "/student-life/library",
              },
              {
                title: "Sports Facilities",
                description: "Indoor and outdoor sports facilities for various games",
                image: "/placeholder.svg?height=400&width=600",
                link: "/student-life/sports",
              },
              {
                title: "Auditorium",
                description: "State-of-the-art auditorium and conference halls",
                image: "/placeholder.svg?height=400&width=600",
                link: "/student-life/auditorium",
              },
              {
                title: "Hostel",
                description: "Comfortable and secure accommodation for students",
                image: "/placeholder.svg?height=400&width=600",
                link: "/student-life/hostel",
              },
              {
                title: "Dining Facilities",
                description: "Hygienic canteens and dining halls serving nutritious food",
                image: "/placeholder.svg?height=400&width=600",
                link: "/student-life/canteen",
              },
              {
                title: "Transportation",
                description: "Convenient transportation services for commuting students",
                image: "/placeholder.svg?height=400&width=600",
                link: "/student-life/transport",
              },
              {
                title: "Banking",
                description: "On-campus banking facilities for financial convenience",
                image: "/placeholder.svg?height=400&width=600",
                link: "/student-life/banking",
              },
            ].map((facility, index) => (
              <Link href={facility.link} key={index}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Campus Life Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="relative h-48 md:h-64 overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Campus Life ${index + 1}`}
                  alt={`Campus Life ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                course: "B.Tech Computer Science",
                quote:
                  "The campus life at Jeppiaar University has been transformative. The blend of academic rigor and extracurricular activities has helped me grow both personally and professionally.",
              },
              {
                name: "Rahul Verma",
                course: "MBA Finance",
                quote:
                  "The facilities here are world-class. From the library to the sports complex, everything is designed to provide students with the best possible experience.",
              },
              {
                name: "Ananya Patel",
                course: "B.Sc Physics",
                quote:
                  "Living in the hostel has been one of the best experiences of my life. I've made lifelong friends and learned valuable life skills beyond the classroom.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-none text-white">
                <CardContent className="p-6">
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm opacity-80">{testimonial.course}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the vibrant campus life at Jeppiaar University and be part of our diverse and dynamic community.
          </p>
          <Link
            href="/admissions"
            className="inline-block bg-white text-secondary font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  )
}

