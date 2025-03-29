import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HostelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-green-900 to-green-700">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Hostel facilities at Jeppiaar University"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hostel Facilities</h1>
          <p className="text-xl text-white max-w-2xl">
            A home away from home for our students with comfortable accommodation and modern amenities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Jeppiaar University provides separate hostel facilities for boys and girls with a safe, secure, and
            comfortable living environment. Our hostels are designed to provide students with a conducive atmosphere for
            academic pursuits while ensuring their overall well-being.
          </p>

          <Tabs defaultValue="boys">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="boys">Boys Hostel</TabsTrigger>
              <TabsTrigger value="girls">Girls Hostel</TabsTrigger>
            </TabsList>

            <TabsContent value="boys" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=800&text=Boys+Hostel"
                    alt="Boys Hostel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Boys Hostel Facilities</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Accommodation for 1000+ students</li>
                    <li>Well-furnished rooms (single, double, and triple sharing options)</li>
                    <li>Attached bathrooms with 24/7 hot water supply</li>
                    <li>High-speed Wi-Fi connectivity</li>
                    <li>Common rooms with TV and recreational facilities</li>
                    <li>Reading rooms and study areas</li>
                    <li>Gym and indoor games facilities</li>
                    <li>Laundry services</li>
                    <li>24/7 security with CCTV surveillance</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Room Types</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Single occupancy (limited)</li>
                    <li>Double sharing (most common)</li>
                    <li>Triple sharing (economical)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Mess Facilities</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Spacious dining hall</li>
                    <li>Nutritious vegetarian and non-vegetarian options</li>
                    <li>Special diet accommodations</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Recreation</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Indoor games (carrom, chess, table tennis)</li>
                    <li>TV room with DTH connection</li>
                    <li>Outdoor sports facilities nearby</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="girls" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="relative h-72 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=800&text=Girls+Hostel"
                    alt="Girls Hostel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Girls Hostel Facilities</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Accommodation for 800+ students</li>
                    <li>Well-furnished rooms (single, double, and triple sharing options)</li>
                    <li>Attached bathrooms with 24/7 hot water supply</li>
                    <li>High-speed Wi-Fi connectivity</li>
                    <li>Common rooms with TV and recreational facilities</li>
                    <li>Reading rooms and study areas</li>
                    <li>Beauty salon and fitness center</li>
                    <li>Laundry services</li>
                    <li>24/7 security with female security staff and CCTV surveillance</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Room Types</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Single occupancy (limited)</li>
                    <li>Double sharing (most common)</li>
                    <li>Triple sharing (economical)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Mess Facilities</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Spacious dining hall</li>
                    <li>Nutritious vegetarian and non-vegetarian options</li>
                    <li>Special diet accommodations</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-3">Additional Facilities</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Female wardens available 24/7</li>
                    <li>Medical assistance</li>
                    <li>Visitor's lounge</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Mess and Dining */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Mess and Dining Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Our hostel mess facilities provide nutritious and balanced meals to students. The menu is designed by
                  nutritionists to ensure that students receive proper nutrition.
                </p>
                <h3 className="text-xl font-semibold mb-3">Mess Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Spacious dining halls with modern kitchen facilities</li>
                  <li>Hygienic food preparation and serving practices</li>
                  <li>Balanced menu with variety of dishes</li>
                  <li>Special meals on festivals and occasions</li>
                  <li>Provision for special dietary requirements</li>
                  <li>Regular quality checks by the mess committee</li>
                </ul>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Dining+Hall"
                  alt="Dining Hall"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Rules and Regulations */}
          <div className="mt-16 bg-green-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Hostel Rules and Regulations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">General Rules</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Students must maintain discipline and decorum in the hostel premises</li>
                  <li>Ragging in any form is strictly prohibited</li>
                  <li>Possession of alcohol, tobacco, and drugs is strictly prohibited</li>
                  <li>Students must follow the in-time regulations</li>
                  <li>Visitors are allowed only in designated areas during visiting hours</li>
                  <li>Students must take care of hostel property</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Leave Rules</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Students must obtain permission from the hostel warden before taking leave</li>
                  <li>Weekend/holiday leave requires prior application</li>
                  <li>Parents/guardians will be informed about the leave</li>
                  <li>Students must sign the movement register when leaving and returning</li>
                  <li>Extended leave requires special permission from the Chief Warden</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fee Structure */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Hostel Fee Structure</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Room Type</th>
                    <th className="py-3 px-4 text-left">Fee per Semester (₹)</th>
                    <th className="py-3 px-4 text-left">Mess Fee per Month (₹)</th>
                    <th className="py-3 px-4 text-left">Caution Deposit (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Single Occupancy</td>
                    <td className="py-3 px-4">45,000</td>
                    <td className="py-3 px-4">4,500</td>
                    <td className="py-3 px-4">10,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Double Sharing</td>
                    <td className="py-3 px-4">35,000</td>
                    <td className="py-3 px-4">4,500</td>
                    <td className="py-3 px-4">10,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Triple Sharing</td>
                    <td className="py-3 px-4">25,000</td>
                    <td className="py-3 px-4">4,500</td>
                    <td className="py-3 px-4">10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Fees are subject to change. Please contact the hostel office for the latest fee structure.
            </p>
          </div>

          {/* Hostel Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Hostel Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Hostel+Image+${item}`}
                    alt={`Hostel facility image ${item}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 bg-green-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Residents Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "Living in the hostel has been a wonderful experience. The facilities are excellent, and the staff is
                  very supportive. I've made lifelong friends here."
                </p>
                <p className="font-semibold">- Priya Sharma, B.Tech 3rd Year</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "The hostel provides a perfect balance of academic environment and recreational activities. The food
                  is delicious, and the rooms are comfortable."
                </p>
                <p className="font-semibold">- Rahul Verma, M.Tech 1st Year</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in hostel accommodation?</h2>
            <Link
              href="/contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              Apply for Hostel Accommodation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

