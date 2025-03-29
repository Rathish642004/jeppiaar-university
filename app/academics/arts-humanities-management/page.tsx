import SchoolLayout from "@/components/academics/school-layout"

export default function ArtsHumanitiesManagementPage() {
  return (
    <SchoolLayout
      title="School of Arts, Humanities & Management"
      subtitle="Nurturing Creative Minds and Future Leaders"
      description="The School of Arts, Humanities & Management at Jeppiaar University offers diverse programs that develop critical thinking, creativity, and leadership skills. Our interdisciplinary approach combines theoretical knowledge with practical applications, preparing students for successful careers in business, arts, and humanities."
      bannerImage="/placeholder.svg?height=800&width=1600"
      vision="To be a leading center for education in arts, humanities, and management, fostering creative thinking, ethical leadership, and cultural understanding."
      mission="To provide holistic education that develops intellectual curiosity, artistic expression, and management skills, empowering students to become responsible leaders and creative professionals."
      programs={[
        {
          name: "Bachelor of Business Administration (BBA)",
          duration: "3 Years",
          eligibility: "10+2 in any stream, minimum 50% aggregate",
          description:
            "Comprehensive program covering business fundamentals, management principles, and entrepreneurship skills.",
          category: "UG",
        },
        {
          name: "B.Com in Accounting & Finance",
          duration: "3 Years",
          eligibility: "10+2 in any stream, minimum 50% aggregate",
          description: "Specialized program focusing on accounting principles, financial management, and taxation.",
          category: "UG",
        },
        {
          name: "BA in English Literature",
          duration: "3 Years",
          eligibility: "10+2 in any stream, minimum 50% aggregate",
          description: "In-depth study of English literature, critical theory, and creative writing.",
          category: "UG",
        },
        {
          name: "BA in Economics",
          duration: "3 Years",
          eligibility: "10+2 in any stream, minimum 50% aggregate",
          description: "Comprehensive program covering micro and macroeconomics, econometrics, and economic policy.",
          category: "UG",
        },
        {
          name: "Master of Business Administration (MBA)",
          duration: "2 Years",
          eligibility: "Bachelor's degree in any discipline, minimum 50% aggregate",
          description: "Advanced program with specializations in Finance, Marketing, HR, and Operations Management.",
          category: "PG",
        },
        {
          name: "MA in English",
          duration: "2 Years",
          eligibility: "Bachelor's degree in relevant discipline, minimum 50% aggregate",
          description: "Advanced study of English literature, literary criticism, and research methodologies.",
          category: "PG",
        },
        {
          name: "MA in Economics",
          duration: "2 Years",
          eligibility: "Bachelor's degree in Economics or related field, minimum 50% aggregate",
          description: "Advanced study of economic theory, policy analysis, and research methods.",
          category: "PG",
        },
        {
          name: "Diploma in Business Administration",
          duration: "1 Year",
          eligibility: "10+2 in any stream, minimum 45% aggregate",
          description: "Foundation in business principles, management skills, and organizational behavior.",
          category: "Diploma",
        },
        {
          name: "Diploma in Creative Writing",
          duration: "1 Year",
          eligibility: "10+2 in any stream, minimum 45% aggregate",
          description:
            "Practical training in creative writing across various genres including fiction, poetry, and screenwriting.",
          category: "Diploma",
        },
      ]}
      faculty={[
        {
          name: "Dr. Priya Gopalakrishnan",
          position: "Dean & Professor",
          qualification: "Ph.D. in Management, IIM Bangalore",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Strategic Management, Entrepreneurship",
        },
        {
          name: "Dr. Ramachandran K.",
          position: "Professor",
          qualification: "Ph.D. in English Literature, University of Madras",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Modern Literature, Literary Criticism",
        },
        {
          name: "Dr. Sujatha Mohan",
          position: "Professor",
          qualification: "Ph.D. in Economics, Delhi School of Economics",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Development Economics, Public Policy",
        },
        {
          name: "Dr. Venkatesh Babu",
          position: "Associate Professor",
          qualification: "Ph.D. in Finance, Anna University",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Financial Management, Investment Analysis",
        },
        {
          name: "Dr. Lakshmi Devi",
          position: "Associate Professor",
          qualification: "Ph.D. in Marketing, IIM Calcutta",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Consumer Behavior, Digital Marketing",
        },
        {
          name: "Dr. Arun Kumar",
          position: "Assistant Professor",
          qualification: "Ph.D. in Human Resource Management, XLRI Jamshedpur",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Organizational Behavior, Leadership Development",
        },
      ]}
      facilities={[
        {
          name: "Management Development Center",
          description:
            "Modern facility for management training, workshops, and simulations with advanced audio-visual equipment and collaborative spaces.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Language Lab",
          description:
            "Equipped with audio-visual tools, language learning software, and resources for enhancing communication skills in multiple languages.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Creative Arts Studio",
          description:
            "Dedicated space for artistic expression, performances, and creative projects with necessary equipment and materials.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Business Incubation Center",
          description:
            "Supports student entrepreneurship with mentoring, networking opportunities, and resources for startup development.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ]}
      admissionLink="/admissions/apply"
      // Add research areas specific to Arts, Humanities & Management
      researchAreas={[
        {
          title: "Business Ethics & Corporate Governance",
          description:
            "Research on ethical business practices, corporate social responsibility, and governance frameworks",
        },
        {
          title: "Cultural Studies & Literary Theory",
          description:
            "Exploration of cultural phenomena, literary criticism, and interdisciplinary approaches to texts",
        },
        {
          title: "Behavioral Economics",
          description:
            "Study of psychological, cognitive, emotional, and social factors that influence economic decisions",
        },
        {
          title: "Digital Marketing & Consumer Behavior",
          description: "Research on online consumer behavior, digital marketing strategies, and social media analytics",
        },
      ]}
      // Add research publications
      researchPublications={[
        {
          title: "Sustainable Business Models in the Post-Pandemic Era",
          author: "Dr. Priya Gopalakrishnan",
          journal: "Journal of Business Strategy",
          year: "2023",
        },
        {
          title: "Postcolonial Perspectives in Contemporary Indian Literature",
          author: "Dr. Ramachandran K.",
          journal: "Literary Studies Quarterly",
          year: "2022",
        },
        {
          title: "Economic Implications of Climate Change Policies in Developing Nations",
          author: "Dr. Sujatha Mohan",
          journal: "International Journal of Environmental Economics",
          year: "2023",
        },
      ]}
      // Add events
      events={[
        {
          title: "Annual Management Conclave - LeaderSpeak 2025",
          date: "February 20-21, 2025",
          description:
            "A platform for interaction between industry leaders, management experts, and students to discuss emerging business trends.",
          image: "/placeholder.svg?height=300&width=500",
          isUpcoming: true,
        },
        {
          title: "Literary Festival - WordCraft 2025",
          date: "March 10-12, 2025",
          description:
            "A celebration of literature featuring book readings, author interactions, poetry slams, and creative writing workshops.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Economics Summit",
          date: "April 15, 2025",
          description:
            "A conference focusing on current economic challenges, policy discussions, and future economic trends.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Entrepreneurship Boot Camp",
          date: "May 5-10, 2025",
          description:
            "An intensive program for aspiring entrepreneurs to develop business ideas, create business plans, and pitch to potential investors.",
          image: "/placeholder.svg?height=300&width=500",
        },
      ]}
      // Add gallery images
      galleryImages={[
        {
          src: "/placeholder.svg?height=400&width=400&text=Management+Workshop",
          alt: "Students participating in a management workshop",
          caption: "Developing leadership skills through interactive workshops",
          category: "Management Training",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Literary+Event",
          alt: "Literary event on campus",
          caption: "Celebrating literature and creative expression",
          category: "Cultural Activities",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Business+Plan+Competition",
          alt: "Students presenting business plans",
          caption: "Showcasing entrepreneurial ideas",
          category: "Student Competitions",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Guest+Lecture",
          alt: "Industry expert giving a guest lecture",
          caption: "Learning from industry leaders",
          category: "Guest Lectures",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Cultural+Performance",
          alt: "Students performing in a cultural event",
          caption: "Expressing creativity through performances",
          category: "Arts & Culture",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Economics+Seminar",
          alt: "Economics seminar in progress",
          caption: "Engaging in economic discourse",
          category: "Academic Events",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Corporate+Visit",
          alt: "Students visiting a corporate office",
          caption: "Industry exposure through corporate visits",
          category: "Industry Connect",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Alumni+Interaction",
          alt: "Alumni interacting with current students",
          caption: "Learning from successful alumni",
          category: "Alumni Relations",
        },
      ]}
    />
  )
}

