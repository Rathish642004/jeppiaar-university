import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function CampusLifePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Campus Life at Jeppiaar University"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Campus Life</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Experience a vibrant and enriching student life at Jeppiaar University
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Life at Jeppiaar University</h2>
            <p className="text-lg mb-6 text-gray-700">
              At Jeppiaar University, we believe that education extends beyond the classroom. Our vibrant campus offers
              a rich tapestry of experiences that contribute to the holistic development of our students.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              From state-of-the-art facilities to diverse student activities, comfortable accommodation to competitive
              sports programs, we provide an environment where students can thrive academically, socially, and
              personally.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Students at Jeppiaar University"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Campus Life Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Explore Campus Life</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Student Activities",
                image: "/placeholder.svg?height=600&width=800",
                description: "Engage in clubs, events, and cultural activities that enrich your university experience.",
                link: "/campus-life/activities",
              },
              {
                title: "Campus Facilities",
                image: "/placeholder.svg?height=600&width=800",
                description: "Discover our modern infrastructure designed to support learning and recreation.",
                link: "/campus-life/facilities",
              },
              {
                title: "Hostel Life",
                image: "/placeholder.svg?height=600&width=800",
                description: "Experience comfortable and secure accommodation in our on-campus hostels.",
                link: "/campus-life/hostel",
              },
              {
                title: "Sports & Recreation",
                image: "/placeholder.svg?height=600&width=800",
                description: "Participate in a wide range of sports and recreational activities for physical fitness.",
                link: "/campus-life/sports",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link href={item.link} className="text-primary font-medium hover:underline inline-flex items-center">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Campus Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={`/placeholder.svg?height=600&width=800&text=Campus Image ${index + 1}`}
                alt={`Campus Gallery Image ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                program: "B.Tech Computer Science",
                quote:
                  "The campus life at Jeppiaar University has been transformative. The diverse activities and supportive environment have helped me grow both personally and professionally.",
              },
              {
                name: "Rahul Verma",
                program: "MBA Finance",
                quote:
                  "Living in the university hostel has been an amazing experience. I've made lifelong friends and the facilities are excellent, making it a true home away from home.",
              },
              {
                name: "Ananya Patel",
                program: "B.Sc Physics",
                quote:
                  "The sports facilities here are world-class. As a university athlete, I've had the opportunity to compete at national levels while pursuing my academic goals.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <svg className="h-8 w-8 text-white/60 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="italic mb-4">{testimonial.quote}</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-white/80">{testimonial.program}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join Our Vibrant Community?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Experience the rich campus life at Jeppiaar University and be part of a community that nurtures excellence.
        </p>
        <Link
          href="/admissions"
          className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          Apply Now
        </Link>
      </section>
    </div>
  )
}

