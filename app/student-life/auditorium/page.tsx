import Image from "next/image"
import Link from "next/link"

export default function AuditoriumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Auditorium and Conference Halls at Jeppiaar University"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Auditorium & Conference Halls</h1>
          <p className="text-xl text-white max-w-2xl">
            State-of-the-art venues for academic, cultural, and professional events at Jeppiaar University.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Jeppiaar University boasts world-class auditoriums and conference halls equipped with the latest
            audio-visual technology and comfortable seating arrangements to host a variety of events ranging from
            academic conferences to cultural performances.
          </p>

          {/* Main Auditorium */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Main Auditorium</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Main+Auditorium"
                  alt="Main Auditorium"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>1500 seating capacity</li>
                  <li>State-of-the-art acoustics</li>
                  <li>Advanced lighting system</li>
                  <li>High-definition projection system</li>
                  <li>Professional sound system</li>
                  <li>Climate-controlled environment</li>
                  <li>Spacious stage for performances</li>
                  <li>Green rooms for performers</li>
                  <li>Wheelchair accessibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conference Halls */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Conference Halls</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Hall+A"
                    alt="Conference Hall A"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Conference Hall A</h3>
                <p className="text-gray-700 mb-3">Capacity: 300 people</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Interactive digital displays</li>
                  <li>Video conferencing facilities</li>
                  <li>Modular seating arrangement</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Hall+B"
                    alt="Conference Hall B"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Conference Hall B</h3>
                <p className="text-gray-700 mb-3">Capacity: 200 people</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Surround sound system</li>
                  <li>Multiple projection screens</li>
                  <li>Breakout room access</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Hall+C"
                    alt="Conference Hall C"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Conference Hall C</h3>
                <p className="text-gray-700 mb-3">Capacity: 150 people</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Integrated recording system</li>
                  <li>Translation booth</li>
                  <li>Flexible seating layout</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seminar Rooms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Seminar Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  In addition to our main auditorium and conference halls, we have multiple seminar rooms designed for
                  smaller gatherings, workshops, and presentations.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>10 seminar rooms with capacities ranging from 30 to 100 people</li>
                  <li>Smart boards and interactive displays</li>
                  <li>High-speed internet connectivity</li>
                  <li>Comfortable seating with writing tablets</li>
                  <li>Integrated audio-visual systems</li>
                  <li>Natural lighting with blackout options</li>
                </ul>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Seminar+Room"
                  alt="Seminar Room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Events Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Events Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Event+${item}`}
                    alt={`Event image ${item}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-purple-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Booking Information</h2>
            <p className="mb-4">
              Our auditorium and conference halls are available for booking for academic, cultural, and professional
              events. Please contact the Facilities Management Office for availability and booking procedures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Booking Process</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Submit a booking request form (available online or at the Facilities Office)</li>
                  <li>Receive confirmation of availability</li>
                  <li>Pay the booking fee</li>
                  <li>Submit event details and technical requirements</li>
                  <li>Attend a pre-event briefing</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <p className="mb-2">Facilities Management Office</p>
                <p className="mb-2">Email: facilities@jeppiaaruniversity.ac.in</p>
                <p className="mb-2">Phone: +91-44-2345-6789</p>
                <p className="mb-2">Office Hours: Monday to Friday, 9:00 AM to 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in booking our venues?</h2>
            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
            >
              Contact Facilities Management
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

