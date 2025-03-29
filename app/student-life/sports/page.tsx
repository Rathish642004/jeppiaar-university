import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Sports facilities at Jeppiaar University"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sports Facilities</h1>
          <p className="text-xl text-white max-w-2xl">
            State-of-the-art sports facilities to nurture talent and promote physical fitness among students.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            At Jeppiaar University, we believe in the holistic development of our students. Our world-class sports
            facilities provide students with opportunities to excel in various sports and maintain physical fitness.
          </p>

          <Tabs defaultValue="outdoor">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="outdoor">Outdoor Sports</TabsTrigger>
              <TabsTrigger value="indoor">Indoor Sports</TabsTrigger>
              <TabsTrigger value="fitness">Fitness Center</TabsTrigger>
              <TabsTrigger value="events">Sports Events</TabsTrigger>
            </TabsList>

            <TabsContent value="outdoor" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Outdoor Sports Facilities</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>400-meter standard track for athletics</li>
                    <li>Football ground with natural grass</li>
                    <li>Cricket ground with practice nets</li>
                    <li>Basketball courts (2)</li>
                    <li>Tennis courts (4)</li>
                    <li>Volleyball courts (3)</li>
                    <li>Hockey field</li>
                    <li>Kabaddi court</li>
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Outdoor sports facilities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="indoor" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Indoor Sports Facilities</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Badminton courts (6)</li>
                    <li>Table tennis tables (8)</li>
                    <li>Squash courts (2)</li>
                    <li>Chess and carrom facilities</li>
                    <li>Billiards and snooker tables</li>
                    <li>Boxing ring</li>
                    <li>Judo and wrestling mats</li>
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Indoor sports facilities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fitness" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Fitness Center</h3>
                  <p className="mb-4">
                    Our state-of-the-art fitness center is equipped with the latest equipment for cardio, strength
                    training, and flexibility exercises.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cardio section with treadmills, ellipticals, and bikes</li>
                    <li>Free weights area</li>
                    <li>Resistance training machines</li>
                    <li>Functional training zone</li>
                    <li>Yoga and aerobics studio</li>
                    <li>Professional trainers available</li>
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Fitness center"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Sports Events</h3>
                  <p className="mb-4">
                    Jeppiaar University hosts various sports events throughout the academic year to promote
                    sportsmanship and competitive spirit among students.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Annual Sports Meet</li>
                    <li>Inter-departmental tournaments</li>
                    <li>Inter-collegiate competitions</li>
                    <li>Sports scholarships for outstanding athletes</li>
                    <li>Special coaching for talented students</li>
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sports events"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sports Gallery */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Sports Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Sports+Image+${item}`}
                  alt={`Sports facility image ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sports Achievements */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Our Sports Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">State Championships</h3>
              <p>
                Our university teams have won multiple state-level championships in cricket, basketball, and athletics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">National Representation</h3>
              <p>
                Several of our students have represented at national level competitions and brought laurels to the
                university.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Sports Scholarships</h3>
              <p>
                We offer sports scholarships to talented athletes to nurture their skills and support their education.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to know more about our sports programs?</h2>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Sports Department
          </Link>
        </div>
      </div>
    </div>
  )
}

