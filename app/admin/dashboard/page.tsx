"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Download, LogOut, Filter, User, Mail, FileText, X } from "lucide-react"
import React from "react"

// Update the ContactFormData type to match the API response structure
type ContactFormData = {
  id: number | string
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
  agreeToTerms: boolean
  createdAt: string
}

// Add API response type for contact submissions
type ApiContactResponse = {
  data: ContactFormData[]
  totalRecords: number
  totalPages: number
  currentPage: number
}

// Update the ApplicationData type to match the actual API response structure
type ApplicationData = {
  id: string
  fullName: string
  dateOfBirth?: string
  gender?: string
  nationality?: string
  email: string
  mobile: string
  addressLine1?: string
  addressLine2?: string
  city?: string
  state?: string
  postalCode?: string
  country?: string
  createdAt: string
  academicInfo: {
    id: string
    personalInfoId: string
    schoolName?: string
    board?: string
    yearOfPassing?: string
    percentage?: string
    collegeName?: string
    degree?: string
    collegeYear?: string
    collegePercentage?: string
    examName?: string
    rollNumber?: string
    examYear?: string
    score?: string
    createdAt: string
  }
  programInfo: {
    id: string
    personalInfoId: string
    school?: string
    programLevel?: string
    program?: string
    specialization?: string
    academicYear?: string
    intake?: string
    createdAt: string
  }
}

// API response type
type ApiResponse = {
  data: ApplicationData[]
  totalRecords: number
  totalPages: number
  currentPage: number
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"contacts" | "applications">("contacts")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [filteredApplications, setFilteredApplications] = useState<ApplicationData[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  const [selectedContact, setSelectedContact] = useState<ContactFormData | null>(null)
  const [selectedApplication, setSelectedApplication] = useState<ApplicationData | null>(null)

  // Add these new state variables after the existing state declarations
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [expandedApplication, setExpandedApplication] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState(1)
  const [totalRecords, setTotalRecords] = useState(0)

  // Replace the mock contact data with an empty array as initial state
  const [filteredContacts, setFilteredContacts] = useState<ContactFormData[]>([])
  const [contactsLoading, setContactsLoading] = useState(false)
  const [contactsPage, setContactsPage] = useState(1)
  const [contactsHasMore, setContactsHasMore] = useState(true)
  const [contactsTotalRecords, setContactsTotalRecords] = useState(0)
  const [contactsTotalPages, setContactsTotalPages] = useState(1)

  // Program name mapping
  const programMapping: Record<string, string> = {
    btech_cse: "B.Tech Computer Science",
    btech_ece: "B.Tech Electronics & Communication",
    btech_mech: "B.Tech Mechanical Engineering",
    btech_civil: "B.Tech Civil Engineering",
    btech_eee: "B.Tech Electrical & Electronics",
    mba_finance: "MBA Finance",
    mba_marketing: "MBA Marketing",
    mba_hr: "MBA Human Resources",
    mca: "Master of Computer Applications",
    msc_cs: "M.Sc Computer Science",
  }

  // Specialization mapping
  const specializationMapping: Record<string, string> = {
    cyber_security: "Cyber Security",
    data_science: "Data Science",
    ai_ml: "Artificial Intelligence & Machine Learning",
    iot: "Internet of Things",
    cloud_computing: "Cloud Computing",
  }

  // Update the handleContactClick function to use the new data structure
  const handleContactClick = (contact: ContactFormData) => {
    console.log("Contact clicked:", contact.firstName + " " + contact.lastName) // Debug log
    setSelectedContact(contact)
  }

  const closeModal = () => {
    setSelectedContact(null)
  }

  // Update the handleApplicationClick function to use the new data structure
  const handleApplicationClick = (application: ApplicationData) => {
    console.log("Application clicked:", application.fullName) // Debug log
    setSelectedApplication(application)
  }

  const closeApplicationModal = () => {
    setSelectedApplication(null)
  }

  // Handle tab switch - clear selected items
  useEffect(() => {
    setSelectedContact(null)
    setSelectedApplication(null)
  }, [activeTab])

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem("adminAuthenticated")
    if (authStatus !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  // Replace the useEffect that filters data with this function to fetch data from API
  useEffect(() => {
    const fetchApplications = async () => {
      if (activeTab !== "applications") return

      setLoading(true)
      try {
        let url = `/api/admission-details?page=${page}&limit=10`

        if (startDate) {
          url += `&startDate=${startDate}`
        }

        if (endDate) {
          url += `&endDate=${endDate}`
        }

        const response = await fetch(url)
        const data: ApiResponse = await response.json()

        setTotalPages(data.totalPages)
        setTotalRecords(data.totalRecords)

        if (data.data.length === 0) {
          setHasMore(false)
        } else {
          setFilteredApplications((prev) => (page === 1 ? data.data : [...prev, ...data.data]))
          setHasMore(data.currentPage < data.totalPages)
        }
      } catch (error) {
        console.error("Error fetching applications:", error)
        // Fallback to mock data for demo purposes
        if (page === 1) {
          setFilteredApplications([])
        }
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [page, startDate, endDate, activeTab])

  // Add this function to handle infinite scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget

    if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      if (!loading && hasMore) {
        setPage((prev) => prev + 1)
      }
    }
  }

  // Add this function to handle infinite scroll for contacts
  const handleContactsScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget

    if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      if (!contactsLoading && contactsHasMore) {
        setContactsPage((prev) => prev + 1)
      }
    }
  }

  // Add this useEffect to fetch contact submissions
  useEffect(() => {
    const fetchContacts = async () => {
      if (activeTab !== "contacts") return

      setContactsLoading(true)
      try {
        let url = `/api/contact-details?page=${contactsPage}&limit=10`

        if (startDate) {
          url += `&startDate=${startDate}`
        }

        if (endDate) {
          url += `&endDate=${endDate}`
        }

        const response = await fetch(url)
        const data: ApiContactResponse = await response.json()

        setContactsTotalPages(data.totalPages)
        setContactsTotalRecords(data.totalRecords)

        if (data.data.length === 0) {
          setContactsHasMore(false)
        } else {
          setFilteredContacts((prev) => (contactsPage === 1 ? data.data : [...prev, ...data.data]))
          setContactsHasMore(data.currentPage < data.totalPages)
        }
      } catch (error) {
        console.error("Error fetching contacts:", error)
        // Fallback to empty array for demo purposes
        if (contactsPage === 1) {
          setFilteredContacts([])
        }
      } finally {
        setContactsLoading(false)
      }
    }

    fetchContacts()
  }, [contactsPage, startDate, endDate, activeTab])

  // Add this function to toggle expanded application
  const toggleExpandApplication = (id: string) => {
    if (expandedApplication === id) {
      setExpandedApplication(null)
    } else {
      setExpandedApplication(id)
    }
  }

  // Replace the clear filter function with this one to reset pagination
  const clearFilters = () => {
    setStartDate("")
    setEndDate("")
    setPage(1)
    setHasMore(true)
    setExpandedApplication(null)
    setContactsPage(1)
    setContactsHasMore(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    router.push("/admin/login")
  }

  // Helper function to format program names
  const formatProgramName = (programCode: string | undefined) => {
    if (!programCode) return "N/A"
    return programMapping[programCode] || programCode.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  // Helper function to format specialization names
  const formatSpecialization = (specializationCode: string | undefined) => {
    if (!specializationCode) return "N/A"
    return (
      specializationMapping[specializationCode] ||
      specializationCode.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    )
  }

  const downloadCSV = (data: any[], filename: string) => {
    // Convert data to CSV format
    const headers = Object.keys(data[0]).join(",")
    const rows = data.map((item) => Object.values(item).join(","))
    const csv = [headers, ...rows].join("\n")

    // Create download link
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (!isAuthenticated) {
    return null // Don't render anything until authentication check is complete
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button onClick={handleLogout} className="flex items-center text-sm text-red-600 hover:text-red-800">
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === "contacts"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("contacts")}
          >
            <Mail className="inline h-4 w-4 mr-2" />
            Contact Form Submissions
          </button>
          <button
            className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === "applications"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("applications")}
          >
            <FileText className="inline h-4 w-4 mr-2" />
            Online Applications
          </button>
        </div>

        {/* Date Filter */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium mb-4 flex items-center">
            <Filter className="h-5 w-5 mr-2 text-gray-500" />
            Filter by Date
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full px-3 py-2 border border-gray-300 bg-gray-50 rounded-md shadow-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>

        {/* Data Tables */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {activeTab === "contacts" && (
            <>
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Contact Form Submissions ({contactsTotalRecords})
                </h3>
                <button
                  onClick={() => downloadCSV(filteredContacts, "contact-submissions.csv")}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download CSV
                </button>
              </div>
              <div className="overflow-x-auto overflow-y-auto max-h-[500px]" onScroll={handleContactsScroll}>
                {contactsLoading && contactsPage === 1 ? (
                  <div className="flex justify-center items-center p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  </div>
                ) : filteredContacts.length === 0 ? (
                  <div className="text-center p-8 text-gray-500">
                    No contact submissions found for the selected date range.
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredContacts.map((contact) => (
                        <tr
                          key={contact.id}
                          className="hover:bg-gray-50 cursor-pointer h-16"
                          onClick={() => handleContactClick(contact)}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <User className="h-4 w-4 text-blue-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {contact.firstName} {contact.lastName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{contact.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{contact.phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{contact.subject}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {contactsLoading && contactsPage > 1 && (
                  <div className="flex justify-center items-center p-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  </div>
                )}
                {!contactsHasMore && filteredContacts.length > 0 && (
                  <div className="text-center p-4 text-gray-500">No more contact submissions to load.</div>
                )}
              </div>
            </>
          )}

          {activeTab === "applications" && (
            <>
              <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Online Applications ({totalRecords})</h3>
                <button
                  onClick={() => downloadCSV(filteredApplications, "applications.csv")}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download CSV
                </button>
              </div>
              <div className="overflow-x-auto overflow-y-auto max-h-[500px]" onScroll={handleScroll}>
                {loading && page === 1 ? (
                  <div className="flex justify-center items-center p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  </div>
                ) : filteredApplications.length === 0 ? (
                  <div className="text-center p-8 text-gray-500">
                    No applications found for the selected date range.
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Program
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Education
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredApplications.map((application) => (
                        <React.Fragment key={application.id}>
                          <tr
                            className={`hover:bg-gray-50 cursor-pointer h-16 ${expandedApplication === application.id ? "bg-blue-50" : ""}`}
                            onClick={() => toggleExpandApplication(application.id)}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <User className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{application.fullName}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{application.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{application.mobile}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {formatProgramName(application.programInfo.program)}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {application.academicInfo.degree || application.academicInfo.schoolName || "N/A"}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(application.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                          {expandedApplication === application.id && (
                            <tr>
                              <td colSpan={6} className="px-6 py-4 bg-gray-50">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                                  <div className="bg-white p-4 rounded shadow">
                                    <h4 className="font-medium text-lg mb-3 text-blue-600">Personal Information</h4>
                                    <div className="space-y-2">
                                      <div>
                                        <span className="text-sm font-medium text-gray-500">Full Name: </span>
                                        <span className="text-sm text-gray-900">{application.fullName}</span>
                                      </div>
                                      <div>
                                        <span className="text-sm font-medium text-gray-500">Email: </span>
                                        <span className="text-sm text-gray-900">{application.email}</span>
                                      </div>
                                      <div>
                                        <span className="text-sm font-medium text-gray-500">Mobile: </span>
                                        <span className="text-sm text-gray-900">{application.mobile}</span>
                                      </div>
                                      {application.dateOfBirth && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Date of Birth: </span>
                                          <span className="text-sm text-gray-900">
                                            {new Date(application.dateOfBirth).toLocaleDateString()}
                                          </span>
                                        </div>
                                      )}
                                      {application.gender && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Gender: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.gender.charAt(0).toUpperCase() + application.gender.slice(1)}
                                          </span>
                                        </div>
                                      )}
                                      {application.nationality && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Nationality: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.nationality.charAt(0).toUpperCase() +
                                              application.nationality.slice(1)}
                                          </span>
                                        </div>
                                      )}
                                      <h5 className="text-sm font-medium text-gray-700 mt-4 mb-2">Address</h5>
                                      {application.addressLine1 && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Address Line 1: </span>
                                          <span className="text-sm text-gray-900">{application.addressLine1}</span>
                                        </div>
                                      )}
                                      {application.addressLine2 && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Address Line 2: </span>
                                          <span className="text-sm text-gray-900">{application.addressLine2}</span>
                                        </div>
                                      )}
                                      {application.city && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">City: </span>
                                          <span className="text-sm text-gray-900">{application.city}</span>
                                        </div>
                                      )}
                                      {application.state && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">State: </span>
                                          <span className="text-sm text-gray-900">{application.state}</span>
                                        </div>
                                      )}
                                      {application.postalCode && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Postal Code: </span>
                                          <span className="text-sm text-gray-900">{application.postalCode}</span>
                                        </div>
                                      )}
                                      {application.country && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Country: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.country.charAt(0).toUpperCase() + application.country.slice(1)}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="bg-white p-4 rounded shadow">
                                    <h4 className="font-medium text-lg mb-3 text-blue-600">Academic Information</h4>
                                    <div className="space-y-2">
                                      <h5 className="text-sm font-medium text-gray-700 mb-2">School Education</h5>
                                      {application.academicInfo.schoolName && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">School Name: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.schoolName}
                                          </span>
                                        </div>
                                      )}
                                      {application.academicInfo.board && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Board: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.board.toUpperCase()}
                                          </span>
                                        </div>
                                      )}
                                      {application.academicInfo.yearOfPassing && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Year of Passing: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.yearOfPassing}
                                          </span>
                                        </div>
                                      )}
                                      {application.academicInfo.percentage && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Percentage: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.percentage}%
                                          </span>
                                        </div>
                                      )}

                                      {(application.academicInfo.collegeName || application.academicInfo.degree) && (
                                        <h5 className="text-sm font-medium text-gray-700 mt-4 mb-2">
                                          College Education
                                        </h5>
                                      )}
                                      {application.academicInfo.collegeName && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">College Name: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.collegeName}
                                          </span>
                                        </div>
                                      )}
                                      {application.academicInfo.degree && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Degree: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.degree}
                                          </span>
                                        </div>
                                      )}
                                      {application.academicInfo.collegeYear && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Year of Passing: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.collegeYear}
                                          </span>
                                        </div>
                                      )}
                                      {application.academicInfo.collegePercentage && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Percentage: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.collegePercentage}%
                                          </span>
                                        </div>
                                      )}

                                      {(application.academicInfo.examName || application.academicInfo.rollNumber) && (
                                        <h5 className="text-sm font-medium text-gray-700 mt-4 mb-2">Entrance Exam</h5>
                                      )}
                                      {application.academicInfo.examName && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Exam Name: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.examName}
                                          </span>
                                        </div>
                                      )}
                                      {application.academicInfo.rollNumber && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Roll Number:</span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.rollNumber}
                                          </span>
                                        </div>
                                      )}
                                      {application.academicInfo.examYear && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Year: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.examYear}
                                          </span>
                                        </div>
                                      )}
                                      {application.academicInfo.score && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Score: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.academicInfo.score}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="bg-white p-4 rounded shadow">
                                    <h4 className="font-medium text-lg mb-3 text-blue-600">Program Information</h4>
                                    <div className="space-y-2">
                                      {application.programInfo.school && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">School: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.programInfo.school.charAt(0).toUpperCase() +
                                              application.programInfo.school.slice(1).replace(/_/g, " ")}
                                          </span>
                                        </div>
                                      )}
                                      {application.programInfo.programLevel && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Program Level: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.programInfo.programLevel.charAt(0).toUpperCase() +
                                              application.programInfo.programLevel.slice(1).replace(/_/g, " ")}
                                          </span>
                                        </div>
                                      )}
                                      {application.programInfo.program && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Program: </span>
                                          <span className="text-sm text-gray-900">
                                            {formatProgramName(application.programInfo.program)}
                                          </span>
                                        </div>
                                      )}
                                      {application.programInfo.specialization && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Specialization: </span>
                                          <span className="text-sm text-gray-900">
                                            {formatSpecialization(application.programInfo.specialization)}
                                          </span>
                                        </div>
                                      )}
                                      {application.programInfo.academicYear && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Academic Year: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.programInfo.academicYear}
                                          </span>
                                        </div>
                                      )}
                                      {application.programInfo.intake && (
                                        <div>
                                          <span className="text-sm font-medium text-gray-500">Intake: </span>
                                          <span className="text-sm text-gray-900">
                                            {application.programInfo.intake.charAt(0).toUpperCase() +
                                              application.programInfo.intake.slice(1)}
                                          </span>
                                        </div>
                                      )}
                                      <div>
                                        <span className="text-sm font-medium text-gray-500">Date Applied: </span>
                                        <span className="text-sm text-gray-900">
                                          {new Date(application.createdAt).toLocaleString()}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                )}
                {loading && page > 1 && (
                  <div className="flex justify-center items-center p-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  </div>
                )}
                {!hasMore && filteredApplications.length > 0 && (
                  <div className="text-center p-4 text-gray-500">No more applications to load.</div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
      {/* Contact Details Section */}
      {activeTab === "contacts" && selectedContact && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Contact Details</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={closeModal}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Name</h4>
              <p className="text-base text-gray-900">
                {selectedContact.firstName} {selectedContact.lastName}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Email</h4>
              <p className="text-base text-gray-900">{selectedContact.email}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Phone</h4>
              <p className="text-base text-gray-900">{selectedContact.phone}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Subject</h4>
              <p className="text-base text-gray-900">{selectedContact.subject}</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-sm font-medium text-gray-500">Message</h4>
              <p className="text-base text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Date Submitted</h4>
              <p className="text-base text-gray-900">{new Date(selectedContact.createdAt).toLocaleString()}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Agreed to Terms</h4>
              <p className="text-base text-gray-900">{selectedContact.agreeToTerms ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
      )}
      {/* Application Details Section */}
      {activeTab === "applications" && selectedApplication && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Application Details</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={closeApplicationModal}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-blue-600">Personal Information</h4>
              <div>
                <h5 className="text-sm font-medium text-gray-500">Full Name</h5>
                <p className="text-base text-gray-900">{selectedApplication.fullName}</p>
              </div>
              <div>
                <h5 className="text-sm font-medium text-gray-500">Email</h5>
                <p className="text-base text-gray-900">{selectedApplication.email}</p>
              </div>
              <div>
                <h5 className="text-sm font-medium text-gray-500">Mobile</h5>
                <p className="text-base text-gray-900">{selectedApplication.mobile}</p>
              </div>
              {selectedApplication.dateOfBirth && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Date of Birth</h5>
                  <p className="text-base text-gray-900">
                    {new Date(selectedApplication.dateOfBirth).toLocaleDateString()}
                  </p>
                </div>
              )}
              {selectedApplication.gender && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Gender</h5>
                  <p className="text-base text-gray-900">
                    {selectedApplication.gender.charAt(0).toUpperCase() + selectedApplication.gender.slice(1)}
                  </p>
                </div>
              )}
              {selectedApplication.nationality && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Nationality</h5>
                  <p className="text-base text-gray-900">
                    {selectedApplication.nationality.charAt(0).toUpperCase() + selectedApplication.nationality.slice(1)}
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-blue-600">Academic Information</h4>
              {selectedApplication.academicInfo.schoolName && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">School Name</h5>
                  <p className="text-base text-gray-900">{selectedApplication.academicInfo.schoolName}</p>
                </div>
              )}
              {selectedApplication.academicInfo.board && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Board</h5>
                  <p className="text-base text-gray-900">{selectedApplication.academicInfo.board.toUpperCase()}</p>
                </div>
              )}
              {selectedApplication.academicInfo.yearOfPassing && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Year of Passing</h5>
                  <p className="text-base text-gray-900">{selectedApplication.academicInfo.yearOfPassing}</p>
                </div>
              )}
              {selectedApplication.academicInfo.percentage && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Percentage</h5>
                  <p className="text-base text-gray-900">{selectedApplication.academicInfo.percentage}%</p>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-lg text-blue-600">Program Information</h4>
              {selectedApplication.programInfo.program && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Program</h5>
                  <p className="text-base text-gray-900">
                    {formatProgramName(selectedApplication.programInfo.program)}
                  </p>
                </div>
              )}
              {selectedApplication.programInfo.specialization && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Specialization</h5>
                  <p className="text-base text-gray-900">
                    {formatSpecialization(selectedApplication.programInfo.specialization)}
                  </p>
                </div>
              )}
              {selectedApplication.programInfo.academicYear && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Academic Year</h5>
                  <p className="text-base text-gray-900">{selectedApplication.programInfo.academicYear}</p>
                </div>
              )}
              {selectedApplication.programInfo.intake && (
                <div>
                  <h5 className="text-sm font-medium text-gray-500">Intake</h5>
                  <p className="text-base text-gray-900">
                    {selectedApplication.programInfo.intake.charAt(0).toUpperCase() +
                      selectedApplication.programInfo.intake.slice(1)}
                  </p>
                </div>
              )}
              <div>
                <h5 className="text-sm font-medium text-gray-500">Date Applied</h5>
                <p className="text-base text-gray-900">{new Date(selectedApplication.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

