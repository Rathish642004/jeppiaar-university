import Link from "next/link"
import Image from "next/image"
import { Briefcase, BookOpen, Users, Award, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function PlacementProcessPage() {
  // Training plan from PDF
  const trainingPlan = [
    { semester: "I", training: "Foundation- Communication Skills" },
    { semester: "II", training: "Soft skills training- Personality Development" },
    { semester: "III", training: "Aptitude - Basic" },
    { semester: "IV", training: "Aptitude- Intermediate, Soft Skills – Problem Solving" },
    { semester: "V", training: "Aptitude -Advanced, Technical – Intermediate Level" },
    { semester: "VI", training: "Department specific- Technical-Advanced Level" },
    { semester: "VII", training: "Company specific training and Tests, Resume Builder, Mock Interview/Mock GD" },
  ]

  // Skills imparted during training
  const trainingSkills = [
    {
      category: "Aptitude",
      skills: ["Quants", "Verbal", "Reasoning"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving Skills", "Interpersonal Skills", "Interview Skills", "Life Skills"],
    },
    {
      category: "Technical",
      skills: ["Programming", "Coding"],
    },
  ]

  // Placement Officer Responsibilities
  const officerResponsibilities = [
    "Developing a comprehensive strategy for industry interactions in collaboration with Deans and faculty.",
    "Facilitating industry collaborations and partnerships that align with our liberal education approach.",
    "Managing university internship and placement drives across all schools.",
    "Engaging with students to identify internship and employment options aligned with their career interests.",
    "Conducting and facilitating training programs for soft skills, interview skills, resume writing, and personal branding.",
    "Scheduling and advertising campus recruitment for employers.",
    "Organizing and executing on-campus events and annual career fairs.",
    "Creating and maintaining databases for employers and student internships and placements.",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Training & Placement Process</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          At Jeppiaar University, we prepare our students for successful careers through comprehensive training and a
          structured placement process. Our dedicated Training and Placement Cell works tirelessly to bridge the gap
          between academia and industry.
        </p>
      </div>
      {/* Training Programs Section */}
      <section className="mb-12">
  <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">Placement Training Plan</h2>
  <div className="grid md:grid-cols-2">
    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
      <div className="space-y-4">
        {[
          {
            semester: "1st Semester",
            activities: [
              "Foundation - Communication Skills",
              "Basic Grammar and Vocabulary Enhancement",
              "Public Speaking and Confidence Building"
            ],
          },
          {
            semester: "2nd Semester",
            activities: [
              "Soft Skills Training - Personality Development",
              "Time Management and Goal Setting",
              "Teamwork and Leadership Activities"
            ],
          },
          {
            semester: "3rd Semester",
            activities: [
              "Aptitude - Basic",
              "Logical Reasoning and Problem-Solving",
              "Introduction to Group Discussions"
            ],
          },
          {
            semester: "4th Semester",
            activities: [
              "Aptitude - Intermediate",
              "Resume Writing and Cover Letter Preparation",
              "Mock Interviews - HR Round"
            ],
          },
        ].map((phase, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4">
            <h4 className="font-semibold text-primary">{phase.semester}</h4>
            <ul className="mt-2 space-y-1">
              {phase.activities.map((activity, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
      <div className="space-y-4">
        {[
          {
            semester: "5th Semester",
            activities: [
              "Soft Skills – Problem Solving",
              "Advanced Group Discussion Techniques",
              "Corporate Etiquette and Email Writing"
            ],
          },
          {
            semester: "6th Semester",
            activities: [
              "Aptitude - Advanced",
              "Technical Interview Preparation",
              "Industry-Specific Mock Tests"
            ],
          },
          {
            semester: "7th Semester",
            activities: [
              "Company-Specific Training and Tests",
              "Behavioral Interview Strategies",
              "Networking and Job Search Techniques"
            ],
          },
          {
            semester: "8th Semester",
            activities: [
              "Successfully Placed",
              "Onboarding Preparation and Workplace Ethics",
              "Continuous Learning and Career Growth Strategies"
            ],
          },
        ].map((phase, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4">
            <h4 className="font-semibold text-primary">{phase.semester}</h4>
            <ul className="mt-2 space-y-1">
              {phase.activities.map((activity, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Skills Imparted Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">Skills Imparted During Training</h2>
        <p className="mb-6 text-gray-700">
          Our comprehensive training program focuses on developing three key areas that are essential for success in the
          professional world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingSkills.map((category, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

 {/* Training Programs Section */}
<section className="mb-12">
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-20">
    <div className="max-w-lg">
      <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">
        Pre-Placement Training
      </h2>
      <p className="mb-4 text-gray-700">
        Our comprehensive pre-placement training program is designed to equip students with the necessary skills
        and knowledge to excel in their careers. The training begins from the pre-final year and continues until
        the students are placed.
      </p>
      <ul className="space-y-3">
        {[
          {
            icon: <BookOpen className="h-5 w-5 text-primary" />,
            title: "Technical Skills Enhancement",
            description: "Domain-specific training to strengthen core technical competencies",
          },
          {
            icon: <Users className="h-5 w-5 text-primary" />,
            title: "Soft Skills Development",
            description: "Communication, presentation, and interpersonal skills training",
          },
          {
            icon: <Briefcase className="h-5 w-5 text-primary" />,
            title: "Mock Interviews",
            description: "Practice sessions with industry experts and alumni",
          },
          {
            icon: <Award className="h-5 w-5 text-primary" />,
            title: "Aptitude Training",
            description: "Quantitative, logical reasoning, and verbal ability preparation",
          },
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-1">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex justify-center">
      <Image
        src="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743103707/Website_related_content.pdf-image-048_r0ojfd.jpg"
        alt="Students at placement drive"
        height={600}
        width={600}
        className="object-contain rounded-2xl"
      />
    </div>
  </div>
</section>


      {/* Placement Process Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">Placement Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "Step 1",
              title: "Pre-Placement Talks",
              description:
                "Companies visit the campus to introduce their organization, job profiles, and selection process.",
              icon: <Users className="h-10 w-10 text-primary" />,
            },
            {
              step: "Step 2",
              title: "Aptitude Test",
              description:
                "Students take written tests that assess their quantitative, logical reasoning, and verbal abilities.",
              icon: <BookOpen className="h-10 w-10 text-primary" />,
            },
            {
              step: "Step 3",
              title: "Technical Interview",
              description:
                "Candidates demonstrate their technical knowledge and problem-solving skills to the recruiters.",
              icon: <Briefcase className="h-10 w-10 text-primary" />,
            },
            {
              step: "Step 4",
              title: "HR Interview",
              description: "Final round to assess the candidate's personality, communication skills, and cultural fit.",
              icon: <Users className="h-10 w-10 text-primary" />,
            },
            {
              step: "Step 5",
              title: "Job Offer",
              description:
                "Successful candidates receive offer letters with details about role, compensation, and joining date.",
              icon: <Award className="h-10 w-10 text-primary" />,
            },
            {
              step: "Step 6",
              title: "Post-Placement Support",
              description: "Guidance on offer acceptance, documentation, and preparation for the corporate world.",
              icon: <CheckCircle className="h-10 w-10 text-primary" />,
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">
                  {step.step}
                </span>
                <div className="p-2 bg-primary/5 rounded-full">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placement Officer Responsibilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">Placement Officer Responsibilities</h2>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4 text-center">Shaping Futures, Building Connections</h3>
            <ul className="space-y-3">
              {officerResponsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{responsibility}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

{/* Eligibility & Guidelines */}
<section className="mb-12">
  <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">Eligibility & Guidelines</h2>
  
  <div className="flex flex-col md:flex-row gap-8">
    {/* Placement Eligibility */}
    <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-lg text-primary mb-3">Placement Eligibility</h3>
      <ul className="space-y-2 text-gray-700">
      <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>Minimum of 60% aggregate in all semesters with no history of backlogs</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>Attendance of at least 75% in all semesters</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>Participation in mandatory pre-placement training programs</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>No disciplinary actions or pending dues</span>
            </li>
      </ul>
    </div>

    {/* Placement Guidelines */}
    <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-lg text-primary mb-3">Placement Guidelines</h3>
      <ul className="space-y-2 text-gray-700">
      <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>
                Students must register with the Training & Placement Cell to participate in placement activities
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>
                Once a student is placed, they are not eligible for further placement drives unless specified otherwise
              </span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>Students must maintain professional conduct during all placement activities</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>Attendance is mandatory for all registered placement drives</span>
            </li>
      </ul>
    </div>
  </div>
</section>


      <section className="mb-12">
        
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative">
    {/* Heading above first image */}
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-primary font-bold text-center mb-4">Training Road Map</h1>
      <Image
        src="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743104736/Website_related_content.pdf-image-047_bi2vta.jpg"
        alt="Students at placement drive"
        height={600}
        width={600}
        className="object-contain rounded-2xl"
      />
    </div>

    <div className="flex justify-center">
      <Image
        src="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743104548/Website_related_content.pdf-image-050_svn5oc.jpg"
        alt="Students at placement drive"
        height={600}
        width={600}
        className="object-contain rounded-2xl"
      />
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Ready to Begin Your Career Journey?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our Training & Placement Cell is dedicated to helping you achieve your career goals. Reach out to us for
          personalized guidance and support.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Placement Cell
          </Link>
          <Link
            href="/placements/recruiters"
            className="bg-white text-primary border border-primary px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            View Our Recruiters
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-primary">
            Join us at Jeppiaar University as we empower leaders for a future without limits. Your journey towards
            success begins here!
          </p>
          <p className="mt-2 text-lg font-bold">ENTRY IS NOT IMPORTANT, EXIT IS IMPORTANT</p>
        </div>
      </section>
    </div>
  )
}

