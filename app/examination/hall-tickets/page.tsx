import Image from "next/image"

export default function HallTicketsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Examination Hall Tickets</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Download your examination hall tickets and find important information about the examination process.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Hall Ticket Download</h2>
          <p className="text-gray-600 mb-6">
            Hall tickets for the current semester examinations are now available for download. Please enter your
            register number and date of birth to access your hall ticket.
          </p>
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="register-number" className="block text-sm font-medium text-gray-700 mb-1">
                Register Number
              </label>
              <input
                type="text"
                id="register-number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Enter your register number"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Download Hall Ticket
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Important Dates</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-1">
              <p className="font-medium text-gray-900">Hall Ticket Issue Date</p>
              <p className="text-gray-600">March 15, 2023</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-1">
              <p className="font-medium text-gray-900">Examination Start Date</p>
              <p className="text-gray-600">April 1, 2023</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-1">
              <p className="font-medium text-gray-900">Examination End Date</p>
              <p className="text-gray-600">April 20, 2023</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-1">
              <p className="font-medium text-gray-900">Results Announcement</p>
              <p className="text-gray-600">May 15, 2023 (Tentative)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Hall Ticket Instructions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Before the Examination</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Download and print your hall ticket on A4 size paper.</li>
              <li>Check all details on the hall ticket for accuracy.</li>
              <li>Report any discrepancies to the examination section immediately.</li>
              <li>Bring your college ID card along with the hall ticket.</li>
              <li>Check your examination venue and seating arrangement a day before.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">During the Examination</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Arrive at the examination venue at least 30 minutes before the scheduled time.</li>
              <li>Mobile phones and electronic gadgets are strictly prohibited.</li>
              <li>Carry only permitted stationery items to the examination hall.</li>
              <li>Follow all instructions given by the invigilators.</li>
              <li>Write your register number on the answer booklet as per instructions.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mb-12">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Students in examination hall"
          width={1200}
          height={400}
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent rounded-lg flex items-center">
          <div className="ml-12 max-w-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Examination Integrity</h2>
            <p className="text-lg">
              Jeppiaar University maintains the highest standards of examination integrity and fairness.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Need Help?</h2>
        <p className="text-gray-600 mb-4">
          If you face any issues downloading your hall ticket or have any queries, please contact the Examination
          Section.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Contact Information</h3>
            <p className="text-gray-600">Email: examinations@jeppiaaruniversity.ac.in</p>
            <p className="text-gray-600">Phone: +91-44-2345-6789</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Office Hours</h3>
            <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

