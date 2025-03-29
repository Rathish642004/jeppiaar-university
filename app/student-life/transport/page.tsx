import Image from "next/image"
import Link from "next/link"

export default function TransportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Transportation Facilities at Jeppiaar University"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Transportation Facilities</h1>
          <p className="text-xl text-white max-w-2xl">
            Safe, reliable, and comfortable transportation services for students and staff.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Jeppiaar University provides comprehensive transportation services to ensure that students and staff can
            commute to and from the campus safely and conveniently. Our fleet of buses covers various routes across the
            city and neighboring areas.
          </p>

          {/* Bus Fleet */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Bus Fleet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=University+Bus+Fleet"
                  alt="University Bus Fleet"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Fleet Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>50+ modern buses covering all major areas of the city</li>
                  <li>Air-conditioned buses for comfortable travel</li>
                  <li>GPS tracking for real-time location updates</li>
                  <li>Experienced and trained drivers</li>
                  <li>Regular maintenance and safety checks</li>
                  <li>First-aid kits and emergency equipment on board</li>
                  <li>Separate seating arrangements for staff and students</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Route Coverage */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Route Coverage</h2>
            <p className="mb-6">
              Our transportation service covers various routes across the city and neighboring areas. The buses operate
              on fixed schedules to ensure timely arrival and departure.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Major Routes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Route 1: Tambaram - Chromepet - Pallavaram - Campus</li>
                  <li>Route 2: T. Nagar - Saidapet - Guindy - Campus</li>
                  <li>Route 3: Velachery - Medavakkam - Sholinganallur - Campus</li>
                  <li>Route 4: Adyar - Thiruvanmiyur - ECR - Campus</li>
                  <li>Route 5: Anna Nagar - Aminjikarai - Kilpauk - Campus</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Route 6: Porur - Vadapalani - Ashok Nagar - Campus</li>
                  <li>Route 7: Avadi - Ambattur - Padi - Campus</li>
                  <li>Route 8: Poonamallee - Maduravoyal - Koyambedu - Campus</li>
                  <li>Route 9: Chengalpattu - Singaperumal Koil - Campus</li>
                  <li>Route 10: Kanchipuram - Sriperumbudur - Campus</li>
                </ul>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Route+Map"
                alt="Bus Route Map"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Schedule and Timings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Schedule and Timings</h2>
            <p className="mb-6">
              Our buses operate on fixed schedules to ensure timely arrival and departure. The schedule is designed to
              accommodate the academic timetable of the university.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Service</th>
                    <th className="py-3 px-4 text-left">Morning Departure</th>
                    <th className="py-3 px-4 text-left">Arrival at Campus</th>
                    <th className="py-3 px-4 text-left">Evening Departure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Regular Service</td>
                    <td className="py-3 px-4">6:30 AM - 7:30 AM</td>
                    <td className="py-3 px-4">8:00 AM - 8:45 AM</td>
                    <td className="py-3 px-4">4:30 PM - 5:30 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Express Service</td>
                    <td className="py-3 px-4">7:00 AM - 7:45 AM</td>
                    <td className="py-3 px-4">8:15 AM - 8:45 AM</td>
                    <td className="py-3 px-4">5:00 PM - 5:45 PM</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Late Service</td>
                    <td className="py-3 px-4">8:00 AM - 8:30 AM</td>
                    <td className="py-3 px-4">9:15 AM - 9:45 AM</td>
                    <td className="py-3 px-4">6:00 PM - 6:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Additional services are available for special events and examinations.
            </p>
          </div>

          {/* Fee Structure */}
          <div className="mb-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Transportation Fee Structure</h2>
            <p className="mb-6">
              The transportation fee varies based on the distance from the campus. The fee is collected on a semester
              basis.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Zone</th>
                    <th className="py-3 px-4 text-left">Distance from Campus</th>
                    <th className="py-3 px-4 text-left">Fee per Semester (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Zone A</td>
                    <td className="py-3 px-4">Up to 10 km</td>
                    <td className="py-3 px-4">12,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Zone B</td>
                    <td className="py-3 px-4">10 - 20 km</td>
                    <td className="py-3 px-4">15,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Zone C</td>
                    <td className="py-3 px-4">20 - 30 km</td>
                    <td className="py-3 px-4">18,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Zone D</td>
                    <td className="py-3 px-4">Above 30 km</td>
                    <td className="py-3 px-4">22,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Fees are subject to change. Please contact the transportation office for the latest fee structure.
            </p>
          </div>

          {/* Safety Measures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Safety Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Safety is our top priority. We have implemented various safety measures to ensure the well-being of
                  our students and staff during transit.
                </p>
                <h3 className="text-xl font-semibold mb-3">Safety Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>GPS tracking for real-time location monitoring</li>
                  <li>CCTV cameras in all buses</li>
                  <li>Speed governors to limit maximum speed</li>
                  <li>Regular vehicle maintenance and safety checks</li>
                  <li>Trained and experienced drivers with clean records</li>
                  <li>First-aid kits and emergency equipment on board</li>
                  <li>Faculty coordinators assigned to each bus</li>
                  <li>Emergency contact numbers displayed prominently</li>
                </ul>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Safety+Measures"
                  alt="Transportation Safety Measures"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile App */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Transportation Mobile App</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Mobile+App"
                  alt="Transportation Mobile App"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="mb-4">
                  Our transportation service is integrated with a mobile app that provides real-time information and
                  various features to enhance the commuting experience.
                </p>
                <h3 className="text-xl font-semibold mb-3">App Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Real-time bus tracking</li>
                  <li>Estimated arrival time notifications</li>
                  <li>Route information and updates</li>
                  <li>Schedule changes and announcements</li>
                  <li>Online fee payment</li>
                  <li>Feedback submission</li>
                  <li>Emergency contact information</li>
                  <li>Direct communication with transportation office</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Transportation Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Transportation Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Transport+Image+${item}`}
                    alt={`Transportation facility image ${item}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Transportation Office</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <p className="mb-2">Transportation Office, Administrative Block</p>
                <p className="mb-2">Email: transport@jeppiaaruniversity.ac.in</p>
                <p className="mb-2">Phone: +91-44-2345-6789</p>
                <p className="mb-2">Office Hours: Monday to Friday, 9:00 AM to 5:00 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">For Emergencies</h3>
                <p className="mb-2">Transport Coordinator: +91-98765-43210</p>
                <p className="mb-2">Security Office: +91-98765-43211</p>
                <p className="mb-2">24/7 Helpline: +91-98765-43212</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need more information about our transportation services?</h2>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Transportation Office
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

