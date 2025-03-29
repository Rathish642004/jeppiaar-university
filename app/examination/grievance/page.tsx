import Image from "next/image"

export default function GrievancePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Examination Grievance</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Submit your examination-related grievances and track their resolution status.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Submit a Grievance</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>
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
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select
                    id="department"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select Department</option>
                    <option value="cse">Computer Science Engineering</option>
                    <option value="ece">Electronics & Communication Engineering</option>
                    <option value="mech">Mechanical Engineering</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="eee">Electrical Engineering</option>
                    <option value="commerce">Commerce & Management</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
                    Semester
                  </label>
                  <select
                    id="semester"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select Semester</option>
                    <option value="1">1st Semester</option>
                    <option value="2">2nd Semester</option>
                    <option value="3">3rd Semester</option>
                    <option value="4">4th Semester</option>
                    <option value="5">5th Semester</option>
                    <option value="6">6th Semester</option>
                    <option value="7">7th Semester</option>
                    <option value="8">8th Semester</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="grievance-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Grievance Type
                </label>
                <select
                  id="grievance-type"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">Select Grievance Type</option>
                  <option value="marks">Marks Related</option>
                  <option value="hall-ticket">Hall Ticket Issue</option>
                  <option value="attendance">Attendance Issue</option>
                  <option value="exam-schedule">Examination Schedule</option>
                  <option value="result">Result Related</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject/Course
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Enter subject or course name"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Grievance Description
                </label>
                <textarea
                  id="description"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Describe your grievance in detail"
                ></textarea>
              </div>
              <div>
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
                  Attachment (if any)
                </label>
                <input
                  type="file"
                  id="attachment"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
                <p className="text-xs text-gray-500 mt-1">Accepted file formats: PDF, JPG, PNG (Max size: 2MB)</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Submit Grievance
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Track Grievance Status</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="grievance-id" className="block text-sm font-medium text-gray-700 mb-1">
                  Grievance ID
                </label>
                <input
                  type="text"
                  id="grievance-id"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Enter your grievance ID"
                />
              </div>
              <div>
                <label htmlFor="track-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="track-email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Track Status
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Grievance Resolution Process</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                  1
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Submission</p>
                  <p className="text-sm text-gray-500">Submit your grievance with all relevant details.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                  2
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Acknowledgment</p>
                  <p className="text-sm text-gray-500">Receive a confirmation email with your grievance ID.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                  3
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Review</p>
                  <p className="text-sm text-gray-500">Your grievance is reviewed by the concerned department.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                  4
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Resolution</p>
                  <p className="text-sm text-gray-500">Receive the resolution details via email.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h2>
            <p className="text-gray-600 mb-4">For any queries regarding the grievance process, please contact:</p>
            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-medium">Email:</span> grievance@jeppiaaruniversity.ac.in
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91-44-2345-6789
              </p>
              <p>
                <span className="font-medium">Location:</span> Examination Section, Administrative Block, 2nd Floor
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">What types of grievances can I submit?</h3>
            <p className="text-gray-600">
              You can submit grievances related to marks, hall tickets, attendance, examination schedule, results, and
              other examination-related issues.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">How long does it take to resolve a grievance?</h3>
            <p className="text-gray-600">
              Most grievances are resolved within 7-10 working days, depending on the complexity of the issue.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Can I submit multiple grievances?</h3>
            <p className="text-gray-600">
              Yes, you can submit multiple grievances, but each grievance should be submitted separately with a unique
              grievance ID.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">How will I be notified about the resolution?</h3>
            <p className="text-gray-600">
              You will receive an email notification once your grievance is resolved. You can also track the status
              using your grievance ID.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mb-12">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="University administration building"
          width={1200}
          height={400}
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent rounded-lg flex items-center">
          <div className="ml-12 max-w-xl text-white">
            <h2 className="text-3xl font-bold mb-4">Fair and Transparent</h2>
            <p className="text-lg">
              We are committed to addressing all examination-related grievances in a fair, transparent, and timely
              manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

