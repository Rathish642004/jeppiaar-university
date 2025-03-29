import Image from "next/image"
import Link from "next/link"

export default function RevaluationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=500&width=1920"
            alt="Revaluation department"
            width={1920}
            height={500}
            className="h-[300px] w-full object-cover brightness-50 md:h-[400px]"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Revaluation
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-white">
            Application for revaluation of answer scripts and review of revaluation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900">Revaluation Process</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Information about applying for revaluation of answer scripts.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-gray-900">Eligibility Criteria</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                <li>
                  Students who have appeared for the end semester examinations are eligible to apply for revaluation.
                </li>
                <li>
                  Applications for revaluation must be submitted within 10 days from the date of publication of results.
                </li>
                <li>Students can apply for revaluation for a maximum of 3 courses per semester.</li>
                <li>
                  Students who have applied for revaluation are not eligible to apply for supplementary examination in
                  that course until the revaluation results are announced.
                </li>
              </ul>

              <h3 className="mt-8 text-xl font-semibold text-gray-900">Revaluation Fee Structure</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Program</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Fee per Course (₹)</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Review Fee (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">UG Programs</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">500</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1000</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">PG Programs</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">750</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-gray-900">Application Procedure</h3>
              <ol className="mt-3 list-decimal pl-5 text-gray-700">
                <li>
                  Download the revaluation application form from the university website or collect it from the
                  Examination Section.
                </li>
                <li>
                  Fill in the required details such as Register Number, Name, Program, Semester, Course Code, Course
                  Title, etc.
                </li>
                <li>Pay the prescribed fee through online payment portal or at the university finance section.</li>
                <li>
                  Submit the completed application form along with the fee receipt to the Examination Section within the
                  stipulated time.
                </li>
                <li>Retain a copy of the application form and fee receipt for future reference.</li>
              </ol>

              <h3 className="mt-8 text-xl font-semibold text-gray-900">Important Guidelines</h3>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                <li>The revaluation process typically takes 4-6 weeks from the last date of application.</li>
                <li>
                  In case there is a change in marks after revaluation, the revised mark statement will be issued.
                </li>
                <li>
                  If there is a significant difference (more than 15%) between the original and revaluation marks, the
                  paper will be sent for a third evaluation.
                </li>
                <li>The average of the nearest two marks will be considered as the final mark.</li>
                <li>The decision of the Controller of Examinations in the matter of revaluation shall be final.</li>
              </ul>

              <h3 className="mt-8 text-xl font-semibold text-gray-900">Review of Revaluation</h3>
              <p className="mt-3 text-gray-700">
                If a student is not satisfied with the result of revaluation, they can apply for review of revaluation
                within 7 days from the date of publication of revaluation results. The review of revaluation is subject
                to the following conditions:
              </p>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                <li>The review will be done by a committee constituted by the Controller of Examinations.</li>
                <li>The committee's decision will be final and binding.</li>
                <li>The review fee will not be refunded under any circumstances.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-10 overflow-hidden bg-white shadow-lg sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900">Downloads</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Application forms and guidelines for revaluation</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  Revaluation Application Form
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  Review of Revaluation Application Form
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  Revaluation Guidelines and Procedures
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  Fee Structure for Revaluation and Review
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-10 overflow-hidden bg-white shadow-lg sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Common queries regarding revaluation process</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">How long does the revaluation process take?</h3>
                <p className="mt-2 text-gray-700">
                  The revaluation process typically takes 4-6 weeks from the last date of application. However, the
                  process may take longer during peak periods.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Can I apply for revaluation for more than one subject?
                </h3>
                <p className="mt-2 text-gray-700">
                  Yes, you can apply for revaluation for up to 3 courses per semester.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Will my marks be reduced after revaluation?</h3>
                <p className="mt-2 text-gray-700">
                  The revaluation result can be higher, lower, or the same as the original result. The marks obtained
                  after revaluation will be final.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Can I see my answer script before applying for revaluation?
                </h3>
                <p className="mt-2 text-gray-700">
                  No, students are not allowed to see their answer scripts before applying for revaluation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Is the revaluation fee refundable if my marks are increased?
                </h3>
                <p className="mt-2 text-gray-700">No, the revaluation fee is non-refundable under any circumstances.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 overflow-hidden bg-white shadow-lg sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900">Contact Information</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">For queries related to revaluation process</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-5 w-5 text-gray-500"
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
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-500">+91 44 2450 1060</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-5 w-5 text-gray-500"
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
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-500">examinations@jeppiaaruniv.edu.in</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-5 w-5 text-gray-500"
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
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-500">
                    Office of the Controller of Examinations,
                    <br />
                    Jeppiaar University,
                    <br />
                    Rajiv Gandhi Salai (OMR),
                    <br />
                    Chennai - 600 119, Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Office Hours</p>
                  <p className="text-sm text-gray-500">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Closed on Sundays and Public Holidays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

