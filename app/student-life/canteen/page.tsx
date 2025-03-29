import Image from "next/image"
import Link from "next/link"

export default function CanteenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-amber-900 to-amber-700">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Dining Hall and Canteen at Jeppiaar University"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dining Hall & Canteen</h1>
          <p className="text-xl text-white max-w-2xl">
            Nutritious and delicious food options for students and staff at Jeppiaar University.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Jeppiaar University provides excellent dining facilities for students and staff. Our dining halls and
            canteens offer a variety of nutritious and delicious food options to cater to diverse tastes and dietary
            requirements.
          </p>

          {/* Main Dining Hall */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Main Dining Hall</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Main+Dining+Hall"
                  alt="Main Dining Hall"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Spacious seating capacity for 500+ students</li>
                  <li>Modern kitchen with state-of-the-art equipment</li>
                  <li>Hygienic food preparation and serving practices</li>
                  <li>Balanced menu with variety of dishes</li>
                  <li>Special meals on festivals and occasions</li>
                  <li>Separate vegetarian and non-vegetarian counters</li>
                  <li>Self-service system for efficient service</li>
                  <li>Digital payment options available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Food Court */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Food Court</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Our modern food court offers a variety of cuisines to cater to diverse tastes. Students can choose
                  from multiple food stalls offering different types of food.
                </p>
                <h3 className="text-xl font-semibold mb-3">Available Cuisines</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>South Indian</li>
                  <li>North Indian</li>
                  <li>Chinese</li>
                  <li>Continental</li>
                  <li>Fast Food</li>
                  <li>Bakery and Confectionery</li>
                  <li>Beverages and Juices</li>
                </ul>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Food+Court"
                  alt="Food Court"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Canteens */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Canteens</h2>
            <p className="mb-6">
              In addition to the main dining hall and food court, we have several canteens located across the campus for
              quick snacks and beverages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Academic+Block+Canteen"
                    alt="Academic Block Canteen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Academic Block Canteen</h3>
                <p className="text-gray-700 mb-3">Located near the academic blocks for easy access during breaks.</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Quick snacks and beverages</li>
                  <li>Open from 8:00 AM to 6:00 PM</li>
                  <li>Seating capacity: 100</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Library+Cafe"
                    alt="Library Cafe"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Library Cafe</h3>
                <p className="text-gray-700 mb-3">A quiet cafe near the library for study breaks.</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Coffee, tea, and light snacks</li>
                  <li>Open from 9:00 AM to 9:00 PM</li>
                  <li>Quiet study-friendly environment</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Sports+Complex+Canteen"
                    alt="Sports Complex Canteen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sports Complex Canteen</h3>
                <p className="text-gray-700 mb-3">Located near the sports facilities.</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Energy drinks and protein snacks</li>
                  <li>Open during sports activities</li>
                  <li>Outdoor seating available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Meal Plans */}
          <div className="mb-16 bg-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Meal Plans</h2>
            <p className="mb-6">
              We offer various meal plans to cater to the needs of our students. Hostel residents are automatically
              enrolled in the standard meal plan, while day scholars can opt for different meal plans.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-amber-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Meal Plan</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-left">Price per Month (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">Standard (Hostel)</td>
                    <td className="py-3 px-4">Breakfast, Lunch, Evening Snacks, Dinner</td>
                    <td className="py-3 px-4">4,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Day Scholar Full</td>
                    <td className="py-3 px-4">Breakfast, Lunch, Evening Snacks</td>
                    <td className="py-3 px-4">3,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Day Scholar Basic</td>
                    <td className="py-3 px-4">Lunch only</td>
                    <td className="py-3 px-4">2,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Pay-as-you-go</td>
                    <td className="py-3 px-4">Individual meal payments</td>
                    <td className="py-3 px-4">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Prices are subject to change. Please contact the dining services office for the latest rates.
            </p>
          </div>

          {/* Nutrition and Quality */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Nutrition and Quality</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Quality+Food"
                  alt="Quality Food"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="mb-4">
                  We prioritize the nutritional value and quality of food served in our dining facilities. Our menus are
                  designed by nutritionists to ensure balanced meals.
                </p>
                <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use of fresh and high-quality ingredients</li>
                  <li>Regular quality checks and inspections</li>
                  <li>Adherence to food safety standards</li>
                  <li>Balanced nutritional content in meals</li>
                  <li>Accommodation of special dietary requirements</li>
                  <li>Regular feedback collection and implementation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Food Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Food Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Food+Image+${item}`}
                    alt={`Food image ${item}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16 bg-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "The food at our university canteen is delicious and offers great variety. I particularly enjoy the
                  South Indian dishes."
                </p>
                <p className="font-semibold">- Ananya Patel, B.Com 2nd Year</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  "As someone with dietary restrictions, I appreciate how accommodating the dining staff is. They always
                  ensure I have suitable options."
                </p>
                <p className="font-semibold">- Vikram Singh, MBA 1st Year</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Have suggestions for our dining services?</h2>
            <Link
              href="/contact"
              className="inline-block bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors"
            >
              Share Your Feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

