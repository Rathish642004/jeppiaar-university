import Image from "next/image"
import Link from "next/link"
import { FileText, Download, FileCheck, Award } from "lucide-react"

export default function ApprovalsAffiliationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="University documents"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Approvals & Affiliations</h1>
          <p className="text-xl max-w-3xl">
            Official documents and certifications that establish Jeppiaar University's credentials and compliance with
            regulatory standards.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileCheck className="mr-2 text-primary" />
              Official Documents
            </h2>
            <p className="text-gray-700 mb-8">
              Jeppiaar University is recognized by the University Grants Commission (UGC) and is affiliated with various
              regulatory bodies. The following documents establish our legal status and compliance with educational
              standards.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Gazette */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-primary transition-colors">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gazette</h3>
                <p className="text-gray-600 mb-4">
                  Official Gazette notification establishing Jeppiaar University as a recognized institution.
                </p>
                <Link
                  href="/documents/gazette.pdf"
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Gazette
                </Link>
              </div>

              {/* G.O */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-primary transition-colors">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Government Order</h3>
                <p className="text-gray-600 mb-4">
                  Government Order (G.O) confirming the university's establishment and operational authority.
                </p>
                <Link
                  href="/documents/government-order.pdf"
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download G.O
                </Link>
              </div>

              {/* Annual Report */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-primary transition-colors">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Annual Report</h3>
                <p className="text-gray-600 mb-4">
                  Latest annual report detailing the university's achievements, financial status, and future plans.
                </p>
                <Link
                  href="/documents/annual-report.pdf"
                  className="flex items-center text-primary font-medium hover:underline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Annual Report
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Information</h2>
            <p className="text-gray-700 mb-4">
              For more information about our approvals, accreditations, and affiliations, please contact the Registrar's
              Office:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="mb-2">
                <strong>Email:</strong> registrar@jeppiaaruniversity.ac.in
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +91-44-2345-6789
              </p>
              <p>
                <strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

