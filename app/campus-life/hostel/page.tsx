import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HostelPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hostel Life at Jeppiaar University"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hostel Life</h1>
          <p className="text-xl max-w-3xl">Your home away from home at Jeppiaar University</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Comfortable Living Spaces</h2>
            <p className="text-lg mb-6 text-gray-700">
              At Jeppiaar University, we understand that a comfortable living environment is essential for academic
              success. Our hostels are designed to provide students with a safe, supportive, and enriching residential
              experience.
            </p>
            <p className="text-lg text-gray-700">
              With separate accommodations for male and female students, our hostels offer modern amenities, nutritious
              meals, and a vibrant community atmosphere that fosters personal growth and lifelong friendships.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=800&width=600" alt="Hostel Building" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Hostel Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Hostels</h2>

          <Tabs defaultValue="boys" className="w-full">
            <TabsList className="grid grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger value="boys">Boys Hostel</TabsTrigger>
              <TabsTrigger value="girls">Girls Hostel</TabsTrigger>
            </TabsList>

            <TabsContent value="boys" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Boys Hostel Exterior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Boys Hostel Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Boys Hostel Common Area"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Boys Hostel Dining"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Boys Hostel Facilities</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Spacious rooms with 2, 3, and 4 sharing options
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Attached bathrooms with 24/7 hot water supply
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Study tables, chairs, and cupboards for each student
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wi-Fi connectivity throughout the hostel
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Common rooms with TV and recreational facilities
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Dining hall serving nutritious vegetarian and non-vegetarian meals
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Laundry services and housekeeping
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 security with CCTV surveillance
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="girls" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Girls Hostel Facilities</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Well-furnished rooms with 2 and 3 sharing options
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Attached bathrooms with 24/7 hot water supply
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Study tables, chairs, and cupboards for each student
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wi-Fi connectivity throughout the hostel
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Common rooms with TV and recreational facilities
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Dining hall serving nutritious vegetarian and non-vegetarian meals
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Laundry services and housekeeping
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 security with female wardens and CCTV surveillance
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Girls Hostel Exterior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Girls Hostel Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Girls Hostel Common Area"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Girls Hostel Dining"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Mess and Dining */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=800&width=600" alt="Hostel Dining Hall" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Mess and Dining</h2>
            <p className="text-lg mb-6 text-gray-700">
              Our hostel mess facilities provide nutritious and balanced meals prepared in hygienic conditions. The menu
              is carefully planned by nutritionists to ensure students receive proper nourishment.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Meal Schedule</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Breakfast</span>
                    <span>7:00 AM - 9:00 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lunch</span>
                    <span>12:00 PM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Evening Snacks</span>
                    <span>4:30 PM - 5:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dinner</span>
                    <span>7:00 PM - 9:00 PM</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700">
                Special dietary requirements are accommodated upon request, and the mess committee regularly collects
                feedback from students to improve the quality and variety of food served.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Life */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Hostel Life Experience</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Living",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Experience the joy of living in a diverse community, making lifelong friendships, and learning from peers.",
              },
              {
                title: "Cultural Activities",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Participate in hostel-organized cultural events, celebrations, and competitions throughout the year.",
              },
              {
                title: "Personal Growth",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Develop independence, time management, and interpersonal skills essential for personal and professional success.",
              },
              {
                title: "Study Environment",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Benefit from a conducive study environment with dedicated study rooms and peer learning opportunities.",
              },
              {
                title: "Recreational Activities",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Engage in various indoor and outdoor games, fitness activities, and entertainment programs.",
              },
              {
                title: "Mentorship",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Receive guidance from hostel wardens, senior students, and faculty mentors for academic and personal issues.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">What Our Residents Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ravi Kumar",
              program: "B.Tech Mechanical Engineering",
              year: "3rd Year",
              image: "/placeholder.svg?height=400&width=400",
              quote:
                "Living in the hostel has been one of the best parts of my university experience. The facilities are excellent, and I've made friends from different parts of the country.",
            },
            {
              name: "Priya Sharma",
              program: "MBA Finance",
              year: "2nd Year",
              image: "/placeholder.svg?height=400&width=400",
              quote:
                "The hostel provides a perfect balance of privacy and community. The staff is supportive, and the food is delicious. It truly feels like a home away from home.",
            },
            {
              name: "Ahmed Khan",
              program: "B.Sc Computer Science",
              year: "4th Year",
              image: "/placeholder.svg?height=400&width=400",
              quote:
                "As an international student, the hostel has helped me adjust to a new country. The cultural diversity and inclusive environment make it a great place to live and learn.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.program}, {testimonial.year}
                  </p>
                </div>
              </div>
              <p className="italic text-gray-700">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hostel Rules & Regulations */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Hostel Rules & Regulations</h2>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6 text-gray-700">
              To ensure a safe, comfortable, and conducive living environment for all residents, we have established the
              following rules and regulations:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">General Rules</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ragging in any form is strictly prohibited
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Possession of prohibited items (alcohol, drugs, etc.) is not allowed
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Students must maintain cleanliness in rooms and common areas
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Damaging hostel property is punishable
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Visitors are allowed only in designated areas during visiting hours
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Timings & Attendance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hostel gates close at 10:00 PM
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Daily attendance is taken at 9:00 PM
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Permission for late entry or overnight stay outside must be obtained in advance
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Quiet hours are from 10:30 PM to 6:00 AM
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Weekend outings require proper permission and documentation
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-gray-700">
              For a complete list of hostel rules and regulations, please refer to the Hostel Handbook provided during
              admission.
            </p>
          </div>
        </div>
      </section>

      {/* Hostel Fees & Application */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Hostel Fees & Application</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Hostel Fees Structure</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-3 px-4 text-left">Room Type</th>
                    <th className="py-3 px-4 text-left">Fees per Semester</th>
                    <th className="py-3 px-4 text-left">Caution Deposit</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-3 px-4">4 Sharing</td>
                    <td className="py-3 px-4">₹45,000</td>
                    <td className="py-3 px-4">₹5,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">3 Sharing</td>
                    <td className="py-3 px-4">₹55,000</td>
                    <td className="py-3 px-4">₹5,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">2 Sharing</td>
                    <td className="py-3 px-4">₹65,000</td>
                    <td className="py-3 px-4">₹5,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">AC Room (2 Sharing)</td>
                    <td className="py-3 px-4">₹85,000</td>
                    <td className="py-3 px-4">₹10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Fees include accommodation, meals, electricity, water, and internet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Application Process</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  1
                </span>
                <div>
                  <p className="font-medium">Submit Application</p>
                  <p className="text-sm">
                    Complete the hostel application form available on the university portal or at the hostel office.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  2
                </span>
                <div>
                  <p className="font-medium">Document Verification</p>
                  <p className="text-sm">
                    Submit required documents including admission letter, ID proof, medical certificate, and
                    photographs.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  3
                </span>
                <div>
                  <p className="font-medium">Fee Payment</p>
                  <p className="text-sm">
                    Pay the hostel fees and caution deposit through online payment or at the accounts office.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  4
                </span>
                <div>
                  <p className="font-medium">Room Allocation</p>
                  <p className="text-sm">
                    Rooms are allocated based on availability and preferences indicated in the application.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  5
                </span>
                <div>
                  <p className="font-medium">Check-in</p>
                  <p className="text-sm">
                    Complete the check-in process at the hostel office and receive your room key and hostel handbook.
                  </p>
                </div>
              </li>
            </ol>
            <div className="mt-6">
              <Link
                href="/admissions/hostel-application"
                className="inline-block px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Apply for Hostel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Contact Information</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto mb-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-700">+91 44 2345 6789</p>
              <p className="text-gray-700">+91 44 2345 6780</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto mb-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-700">hostel@jeppiaar.edu.in</p>
              <p className="text-gray-700">hostelwarden@jeppiaar.edu.in</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto mb-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-lg font-bold mb-2">Address</h3>
              <p className="text-gray-700">Hostel Office, Jeppiaar University</p>
              <p className="text-gray-700">Chennai, Tamil Nadu - 600119</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience Hostel Life?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Join our vibrant hostel community and make the most of your university experience at Jeppiaar University.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/admissions/hostel-application"
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Apply for Hostel
          </Link>
          <Link
            href="/virtual-tour/hostel"
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            Virtual Tour
          </Link>
        </div>
      </section>
    </div>
  )
}

