"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  ChevronRight,
  GraduationCap,
  HelpCircle,
  User,
  Calendar,
  BookOpen,
  Phone,
  Mail,
} from "lucide-react"

export default function ApplyPage() {
  const [activeTab, setActiveTab] = useState("personal")
  const [formData, setFormData] = useState({
    // Personal info
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    email: "",
    mobile: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",

    // Academic info
    schoolName: "",
    board: "",
    yearOfPassing: "",
    percentage: "",
    collegeName: "",
    degree: "",
    collegeYear: "",
    collegePercentage: "",
    examName: "",
    rollNumber: "",
    examYear: "",
    score: "",

    // Program info
    school: "",
    programLevel: "",
    program: "",
    specialization: "",
    academicYear: "",
    intake: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validatePersonalTab = () => {
    const newErrors = {}
    if (!formData.fullName) newErrors.fullName = "Full name is required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.gender) newErrors.gender = "Gender is required"
    if (!formData.nationality) newErrors.nationality = "Nationality is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.mobile) newErrors.mobile = "Mobile number is required"
    if (!formData.addressLine1) newErrors.addressLine1 = "Address is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.state) newErrors.state = "State is required"
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required"
    if (!formData.country) newErrors.country = "Country is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateAcademicTab = () => {
    const newErrors = {}
    if (!formData.schoolName) newErrors.schoolName = "School name is required"
    if (!formData.board) newErrors.board = "Board is required"
    if (!formData.yearOfPassing) newErrors.yearOfPassing = "Year of passing is required"
    if (!formData.percentage) newErrors.percentage = "Percentage/CGPA is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextToAcademic = () => {
    if (validatePersonalTab()) {
      setActiveTab("academic")
    }
  }

  const handleNextToProgram = () => {
    if (validateAcademicTab()) {
      setActiveTab("program")
    }
  }

  const handlePrevious = (tab) => {
    setActiveTab(tab)
  }

  const handleSubmit = async () => {
    // Validate program tab
    const newErrors = {}
    if (!formData.school) newErrors.school = "School is required"
    if (!formData.programLevel) newErrors.programLevel = "Program level is required"
    if (!formData.program) newErrors.program = "Program is required"
    if (!formData.academicYear) newErrors.academicYear = "Academic year is required"
    if (!formData.intake) newErrors.intake = "Intake is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)

      try {
        const response = await fetch("/api/admission", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setIsSubmitted(true)
        } else {
          alert("Something went wrong. Please try again.")
        }
      } catch (error) {
        console.error("Error submitting form:", error)
        alert("Something went wrong. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Banner Section */}
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Jeppiaar University Admissions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-900/80 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Online Application Portal</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                Take the first step towards your future at Jeppiaar University. Complete your application online.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Application Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardContent className="p-0">
                  <Tabs value={activeTab} className="w-full">
                    <div className="bg-gray-100 p-4 border-b">
                      <TabsList className="grid grid-cols-3 bg-transparent h-auto p-0 gap-2">
                        <TabsTrigger
                          value="personal"
                          className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full flex flex-col items-center p-2 h-auto cursor-default"
                          disabled={true}
                        >
                          <div className="bg-white p-2 rounded-full mb-1">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-xs">Personal</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="academic"
                          className={`${activeTab === "academic" || activeTab === "program" ? "data-[state=active]:bg-primary data-[state=active]:text-white" : "opacity-50"} rounded-full flex flex-col items-center p-2 h-auto cursor-default`}
                          disabled={true}
                        >
                          <div className="bg-white p-2 rounded-full mb-1">
                            <GraduationCap className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-xs">Academic</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="program"
                          className={`${activeTab === "program" ? "data-[state=active]:bg-primary data-[state=active]:text-white" : "opacity-50"} rounded-full flex flex-col items-center p-2 h-auto cursor-default`}
                          disabled={true}
                        >
                          <div className="bg-white p-2 rounded-full mb-1">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-xs">Program</span>
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    {/* Personal Information Tab */}
                    <TabsContent value="personal" className="p-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                            placeholder="Enter your full name"
                          />
                          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                          />
                          {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Gender*</label>
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.gender ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Nationality*</label>
                          <input
                            type="text"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.nationality ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                            placeholder="Enter your nationality"
                          />
                          {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                            placeholder="Enter your email address"
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number*</label>
                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.mobile ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                            placeholder="Enter your mobile number"
                          />
                          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Address Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1*</label>
                          <input
                            type="text"
                            name="addressLine1"
                            value={formData.addressLine1}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.addressLine1 ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                            placeholder="Enter your street address"
                          />
                          {errors.addressLine1 && <p className="text-red-500 text-xs mt-1">{errors.addressLine1}</p>}
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                          <input
                            type="text"
                            name="addressLine2"
                            value={formData.addressLine2}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Apartment, suite, unit, building, floor, etc."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                            placeholder="Enter your city"
                          />
                          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">State/Province*</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.state ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                            placeholder="Enter your state/province"
                          />
                          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Postal/Zip Code*</label>
                          <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.postalCode ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                            placeholder="Enter your postal/zip code"
                          />
                          {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className={`w-full p-2 border ${errors.country ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                          >
                            <option value="">Select Country</option>
                            <option value="india">India</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="canada">Canada</option>
                            <option value="australia">Australia</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <Button onClick={handleNextToAcademic} className="bg-primary hover:bg-primary/90 text-white">
                          Next: Academic Information <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>

                    {/* Academic Background Tab */}
                    <TabsContent value="academic" className="p-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Academic Background</h2>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">High School / 10+2 Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">School Name*</label>
                            <input
                              type="text"
                              name="schoolName"
                              value={formData.schoolName}
                              onChange={handleInputChange}
                              className={`w-full p-2 border ${errors.schoolName ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                              placeholder="Enter your school name"
                            />
                            {errors.schoolName && <p className="text-red-500 text-xs mt-1">{errors.schoolName}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Board*</label>
                            <select
                              name="board"
                              value={formData.board}
                              onChange={handleInputChange}
                              className={`w-full p-2 border ${errors.board ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                            >
                              <option value="">Select Board</option>
                              <option value="cbse">CBSE</option>
                              <option value="icse">ICSE</option>
                              <option value="state">State Board</option>
                              <option value="international">International Baccalaureate</option>
                              <option value="other">Other</option>
                            </select>
                            {errors.board && <p className="text-red-500 text-xs mt-1">{errors.board}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Year of Passing*</label>
                            <input
                              type="number"
                              name="yearOfPassing"
                              value={formData.yearOfPassing}
                              onChange={handleInputChange}
                              className={`w-full p-2 border ${errors.yearOfPassing ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                              placeholder="Enter year of passing"
                              min="2000"
                              max="2030"
                            />
                            {errors.yearOfPassing && (
                              <p className="text-red-500 text-xs mt-1">{errors.yearOfPassing}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Percentage/CGPA*</label>
                            <input
                              type="text"
                              name="percentage"
                              value={formData.percentage}
                              onChange={handleInputChange}
                              className={`w-full p-2 border ${errors.percentage ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                              placeholder="Enter percentage or CGPA"
                            />
                            {errors.percentage && <p className="text-red-500 text-xs mt-1">{errors.percentage}</p>}
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          Undergraduate Information (if applicable)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              College/University Name
                            </label>
                            <input
                              type="text"
                              name="collegeName"
                              value={formData.collegeName}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter your college/university name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                            <input
                              type="text"
                              name="degree"
                              value={formData.degree}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter your degree"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Year of Passing</label>
                            <input
                              type="number"
                              name="collegeYear"
                              value={formData.collegeYear}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter year of passing"
                              min="2000"
                              max="2030"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Percentage/CGPA</label>
                            <input
                              type="text"
                              name="collegePercentage"
                              value={formData.collegePercentage}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter percentage or CGPA"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          Entrance Exam Details (if applicable)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Exam Name</label>
                            <select
                              name="examName"
                              value={formData.examName}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                            >
                              <option value="">Select Exam</option>
                              <option value="jee">JEE Main</option>
                              <option value="neet">NEET</option>
                              <option value="cat">CAT</option>
                              <option value="gate">GATE</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
                            <input
                              type="text"
                              name="rollNumber"
                              value={formData.rollNumber}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter your roll number"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                            <input
                              type="number"
                              name="examYear"
                              value={formData.examYear}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter exam year"
                              min="2000"
                              max="2030"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Score/Rank</label>
                            <input
                              type="text"
                              name="score"
                              value={formData.score}
                              onChange={handleInputChange}
                              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                              placeholder="Enter your score or rank"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-between">
                        <Button variant="outline" onClick={() => handlePrevious("personal")}>
                          <ChevronRight className="mr-2 h-4 w-4 rotate-180" /> Previous: Personal Information
                        </Button>
                        <Button onClick={handleNextToProgram} className="bg-primary hover:bg-primary/90 text-white">
                          Next: Program Selection <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>

                    {/* Program Selection Tab */}
                    <TabsContent value="program" className="p-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Selection</h2>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">School*</label>
                        <select
                          name="school"
                          value={formData.school}
                          onChange={handleInputChange}
                          className={`w-full p-2 border ${errors.school ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                        >
                          <option value="">Select School</option>
                          <option value="engineering">School of Engineering & Technology</option>
                          <option value="arts">School of Arts, Humanities & Management</option>
                          <option value="science">School of Science & Health</option>
                          <option value="physical">School of Physical Education</option>
                          <option value="aeronautics">School of Aeronautics</option>
                        </select>
                        {errors.school && <p className="text-red-500 text-xs mt-1">{errors.school}</p>}
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Program Level*</label>
                        <select
                          name="programLevel"
                          value={formData.programLevel}
                          onChange={handleInputChange}
                          className={`w-full p-2 border ${errors.programLevel ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                        >
                          <option value="">Select Program Level</option>
                          <option value="undergraduate">Undergraduate (Bachelor's)</option>
                          <option value="postgraduate">Postgraduate (Master's)</option>
                          <option value="phd">Doctoral (Ph.D.)</option>
                          <option value="diploma">Diploma</option>
                          <option value="certificate">Certificate</option>
                        </select>
                        {errors.programLevel && <p className="text-red-500 text-xs mt-1">{errors.programLevel}</p>}
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Program*</label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleInputChange}
                          className={`w-full p-2 border ${errors.program ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                        >
                          <option value="">Select Program</option>
                          <option value="btech_cse">B.Tech Computer Science & Engineering</option>
                          <option value="btech_ece">B.Tech Electronics & Communication Engineering</option>
                          <option value="btech_mech">B.Tech Mechanical Engineering</option>
                          <option value="btech_civil">B.Tech Civil Engineering</option>
                          <option value="btech_eee">B.Tech Electrical & Electronics Engineering</option>
                        </select>
                        {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Specialization (if applicable)
                        </label>
                        <select
                          name="specialization"
                          value={formData.specialization}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select Specialization</option>
                          <option value="ai_ml">Artificial Intelligence & Machine Learning</option>
                          <option value="data_science">Data Science</option>
                          <option value="cyber_security">Cyber Security</option>
                          <option value="iot">Internet of Things</option>
                          <option value="robotics">Robotics</option>
                        </select>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year*</label>
                        <select
                          name="academicYear"
                          value={formData.academicYear}
                          onChange={handleInputChange}
                          className={`w-full p-2 border ${errors.academicYear ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                        >
                          <option value="">Select Academic Year</option>
                          <option value="2023-2024">2023-2024</option>
                          <option value="2024-2025">2024-2025</option>
                        </select>
                        {errors.academicYear && <p className="text-red-500 text-xs mt-1">{errors.academicYear}</p>}
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Intake*</label>
                        <select
                          name="intake"
                          value={formData.intake}
                          onChange={handleInputChange}
                          className={`w-full p-2 border ${errors.intake ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-primary focus:border-primary`}
                        >
                          <option value="">Select Intake</option>
                          <option value="june">June</option>
                          <option value="september">September</option>
                          <option value="january">January</option>
                        </select>
                        {errors.intake && <p className="text-red-500 text-xs mt-1">{errors.intake}</p>}
                      </div>

                      <div className="mt-8 flex justify-between">
                        <Button variant="outline" onClick={() => handlePrevious("academic")}>
                          <ChevronRight className="mr-2 h-4 w-4 rotate-180" /> Previous: Academic Information
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="bg-primary hover:bg-primary/90 text-white"
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}{" "}
                          {!isSubmitting && <CheckCircle className="ml-2 h-4 w-4" />}
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="shadow-lg border-0 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Application Guide</h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="bg-primary/10 rounded-full p-2 mr-3 text-primary">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Personal Information</h4>
                          <p className="text-sm text-gray-600">Fill in your personal and contact details</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary/10 rounded-full p-2 mr-3 text-primary">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Academic Background</h4>
                          <p className="text-sm text-gray-600">Provide your educational qualifications</p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary/10 rounded-full p-2 mr-3 text-primary">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Program Selection</h4>
                          <p className="text-sm text-gray-600">Choose your preferred course and specialization</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
                    <div className="space-y-4">
                      <div className="flex">
                        <Phone className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">Call Us</h4>
                          <p className="text-sm text-gray-600">+91 44 2450 1622</p>
                        </div>
                      </div>
                      <div className="flex">
                        <Mail className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">Email Us</h4>
                          <p className="text-sm text-gray-600">admissions@jeppiaaruniversity.ac.in</p>
                        </div>
                      </div>
                      <div className="flex">
                        <HelpCircle className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-800">FAQs</h4>
                          <p className="text-sm text-gray-600">View frequently asked questions</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Important Dates</h3>
                    <ul className="space-y-3">
                      <li className="flex">
                        <Calendar className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Application Deadline</p>
                          <p className="text-sm text-gray-600">July 31, 2024</p>
                        </div>
                      </li>
                      <li className="flex">
                        <Calendar className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Entrance Exam Date</p>
                          <p className="text-sm text-gray-600">August 15, 2024</p>
                        </div>
                      </li>
                      <li className="flex">
                        <Calendar className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Result Announcement</p>
                          <p className="text-sm text-gray-600">August 25, 2024</p>
                        </div>
                      </li>
                      <li className="flex">
                        <Calendar className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">Session Begins</p>
                          <p className="text-sm text-gray-600">September 15, 2024</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-center mb-2">Application Submitted!</h2>
            <p className="text-center text-gray-600 mb-6">
              Thank you for applying to Jeppiaar University. We have received your application and will contact you
              soon.
            </p>
            <div className="text-center">
              <Button
                onClick={() => (window.location.href = "/")}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Return to Homepage
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

