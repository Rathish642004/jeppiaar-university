import Image from "next/image"
import Link from "next/link"

export default function BankingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-r from-indigo-900 to-indigo-700">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Banking Facilities at Jeppiaar University"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Banking Facilities</h1>
          <p className="text-xl text-white max-w-2xl">
            Convenient banking services for students, staff, and faculty at Jeppiaar University.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Jeppiaar University provides comprehensive banking facilities on campus to cater to the financial needs of
            students, staff, and faculty. Our on-campus bank branch and ATMs offer a wide range of services to ensure
            convenient access to banking services.
          </p>

          {/* Bank Branch */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">On-Campus Bank Branch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Bank+Branch"
                  alt="On-Campus Bank Branch"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">State Bank of India - Jeppiaar University Branch</h3>
                <p className="mb-4">
                  Our campus hosts a full-service branch of State Bank of India, offering a comprehensive range of
                  banking services to the university community.
                </p>
                <h4 className="font-semibold mb-2">Branch Details:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Location: Administrative Block, Ground Floor</li>
                  <li>Working Hours: Monday to Friday, 10:00 AM to 4:00 PM</li>
                  <li>Saturday: 10:00 AM to 1:00 PM (First and Third Saturday of the month)</li>
                  <li>Branch Code: 12345</li>
                  <li>IFSC Code: SBIN0012345</li>
                  <li>MICR Code: 600002123</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Banking Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Banking Services</h2>
            <p className="mb-6">
              The on-campus bank branch offers a wide range of services to cater to the diverse needs of the university
              community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Account Services</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Savings Account</li>
                  <li>Current Account</li>
                  <li>Fixed Deposits</li>
                  <li>Recurring Deposits</li>
                  <li>Student Savings Account</li>
                  <li>Salary Account for Staff</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Loan Services</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Education Loans</li>
                  <li>Personal Loans</li>
                  <li>Home Loans</li>
                  <li>Vehicle Loans</li>
                  <li>Loan Against Deposits</li>
                  <li>Loan Against Securities</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Other Services</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Demand Drafts</li>
                  <li>NEFT/RTGS Transfers</li>
                  <li>Cheque Book Issuance</li>
                  <li>Internet Banking</li>
                  <li>Mobile Banking</li>
                  <li>Locker Facility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ATM Facilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">ATM Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Multiple ATMs are located across the campus to provide 24/7 access to cash withdrawal and other
                  banking services.
                </p>
                <h3 className="text-xl font-semibold mb-3">ATM Locations</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Administrative Block (SBI ATM)</li>
                  <li>Main Academic Block (SBI ATM)</li>
                  <li>Hostel Area (SBI ATM)</li>
                  <li>Library Building (ICICI Bank ATM)</li>
                  <li>Sports Complex (HDFC Bank ATM)</li>
                </ul>
                <h3 className="text-xl font-semibold mt-4 mb-3">ATM Services</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cash Withdrawal</li>
                  <li>Balance Inquiry</li>
                  <li>Mini Statement</li>
                  <li>PIN Change</li>
                  <li>Fund Transfer</li>
                  <li>Mobile Recharge</li>
                </ul>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=ATM+Facilities"
                  alt="ATM Facilities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Student-Specific Services */}
          <div className="mb-16 bg-indigo-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Student-Specific Banking Services</h2>
            <p className="mb-6">
              The bank offers special services tailored to the needs of students, making it easier for them to manage
              their finances during their academic journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Student Savings Account</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Zero balance account for students</li>
                  <li>Free debit card with special offers</li>
                  <li>No minimum balance requirement</li>
                  <li>Free internet and mobile banking</li>
                  <li>Discounted locker facility</li>
                  <li>Special offers on education loans</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Education Loans</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Competitive interest rates</li>
                  <li>Flexible repayment options</li>
                  <li>Moratorium period during study</li>
                  <li>Coverage for tuition fees, hostel fees, and other expenses</li>
                  <li>Special schemes for merit students</li>
                  <li>Tax benefits under Section 80E</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Digital Banking */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Digital Banking Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Digital+Banking"
                  alt="Digital Banking Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="mb-4">
                  The bank provides a range of digital banking services to enable convenient and secure banking from
                  anywhere.
                </p>
                <h3 className="text-xl font-semibold mb-3">Digital Services</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Internet Banking</li>
                  <li>Mobile Banking App</li>
                  <li>UPI Payments</li>
                  <li>BHIM SBI Pay</li>
                  <li>YONO SBI App</li>
                  <li>SMS Banking</li>
                  <li>E-Statements</li>
                  <li>Online Fee Payment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fee Payment */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Fee Payment Facility</h2>
            <p className="mb-6">
              The university has integrated its fee collection system with the bank to facilitate easy payment of
              tuition fees, hostel fees, and other charges.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Fee Payment Options</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Direct payment at the bank counter</li>
                <li>Online payment through internet banking</li>
                <li>Mobile banking app payment</li>
                <li>NEFT/RTGS transfer</li>
                <li>Demand Draft submission</li>
                <li>Cheque deposit</li>
                <li>UPI payment</li>
              </ul>
              <p className="mt-4">
                Students can obtain fee payment receipts immediately after payment, which can be submitted to the
                university accounts department.
              </p>
            </div>
          </div>

          {/* Financial Literacy Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Financial Literacy Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  The bank, in collaboration with the university, conducts regular financial literacy programs to
                  educate students about personal finance management.
                </p>
                <h3 className="text-xl font-semibold mb-3">Program Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Workshops on personal finance management</li>
                  <li>Seminars on investment options</li>
                  <li>Awareness sessions on digital banking security</li>
                  <li>Guidance on education loans and repayment</li>
                  <li>Information about government schemes for students</li>
                  <li>Career opportunities in banking and finance</li>
                </ul>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Financial+Literacy"
                  alt="Financial Literacy Programs"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-16 bg-indigo-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Bank Branch Contact</h3>
                <p className="mb-2">Branch Manager: Mr. Rajesh Kumar</p>
                <p className="mb-2">Email: rajesh.kumar@sbi.co.in</p>
                <p className="mb-2">Phone: +91-44-2345-6789</p>
                <p className="mb-2">Toll-Free: 1800-425-3800</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">University Banking Coordinator</h3>
                <p className="mb-2">Name: Dr. Priya Sharma</p>
                <p className="mb-2">Email: banking@jeppiaaruniversity.ac.in</p>
                <p className="mb-2">Phone: +91-44-2345-6790</p>
                <p className="mb-2">Office: Administrative Block, Room 105</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need assistance with banking services?</h2>
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Contact Banking Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

