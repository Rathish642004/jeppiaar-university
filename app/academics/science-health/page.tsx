import SchoolLayout from "@/components/academics/school-layout"

export default function ScienceHealthPage() {
  return (
    <SchoolLayout
      title="School of Science and Allied Health Science"
      subtitle="Advancing Knowledge Through Scientific Inquiry"
      description="The School of Science and Allied Health Science at Jeppiaar University is dedicated to excellence in scientific education and research. Our programs combine theoretical knowledge with practical applications, preparing students for careers in science, healthcare, and research. We emphasize hands-on learning, critical thinking, and innovative problem-solving."
      bannerImage="/placeholder.svg?height=800&width=1600"
      vision="To be a leading center for scientific education and research, contributing to advancements in science, healthcare, and technology for the betterment of society."
      mission="To provide quality education in science and allied health disciplines through innovative teaching methods, research opportunities, and industry collaboration, fostering scientific temper and ethical values in students."
      programs={[
        {
          name: "B.Sc in Computer Science",
          duration: "3 Years",
          eligibility: "10+2 with Science, minimum 55% aggregate",
          description:
            "Comprehensive program covering programming, algorithms, data structures, and computer applications.",
          category: "UG",
        },
        {
          name: "B.Sc in Mathematics",
          duration: "3 Years",
          eligibility: "10+2 with Mathematics, minimum 55% aggregate",
          description:
            "In-depth study of pure and applied mathematics, mathematical modeling, and computational methods.",
          category: "UG",
        },
        {
          name: "B.Sc in Physics",
          duration: "3 Years",
          eligibility: "10+2 with Physics and Mathematics, minimum 55% aggregate",
          description: "Covers classical and modern physics, experimental techniques, and theoretical physics.",
          category: "UG",
        },
        {
          name: "B.Sc in Chemistry",
          duration: "3 Years",
          eligibility: "10+2 with Chemistry, minimum 55% aggregate",
          description: "Comprehensive program covering organic, inorganic, physical, and analytical chemistry.",
          category: "UG",
        },
        {
          name: "B.Sc in Biotechnology",
          duration: "3 Years",
          eligibility: "10+2 with Biology, minimum 55% aggregate",
          description:
            "Interdisciplinary program covering molecular biology, genetic engineering, and biotechnological applications.",
          category: "UG",
        },
        {
          name: "M.Sc in Data Science",
          duration: "2 Years",
          eligibility: "B.Sc in relevant discipline, minimum 55% aggregate",
          description: "Advanced program focusing on data analysis, machine learning, and statistical methods.",
          category: "PG",
        },
        {
          name: "M.Sc in Physics",
          duration: "2 Years",
          eligibility: "B.Sc in Physics or related field, minimum 55% aggregate",
          description: "Advanced study in theoretical and experimental physics with research orientation.",
          category: "PG",
        },
        {
          name: "M.Sc in Chemistry",
          duration: "2 Years",
          eligibility: "B.Sc in Chemistry or related field, minimum 55% aggregate",
          description: "Advanced study in chemical sciences with specialization options and research focus.",
          category: "PG",
        },
        {
          name: "Diploma in Medical Laboratory Technology",
          duration: "2 Years",
          eligibility: "10+2 with Science, minimum 50% aggregate",
          description: "Practical training in laboratory techniques, sample analysis, and medical diagnostics.",
          category: "Diploma",
        },
        {
          name: "Diploma in Food Science and Quality Control",
          duration: "1 Year",
          eligibility: "10+2 with Science, minimum 50% aggregate",
          description: "Hands-on training in food processing, quality testing, and safety standards.",
          category: "Diploma",
        },
      ]}
      faculty={[
        {
          name: "Dr. Meenakshi Sundaram",
          position: "Dean & Professor",
          qualification: "Ph.D. in Physics, IISc Bangalore",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Quantum Physics, Materials Science",
        },
        {
          name: "Dr. Rajesh Venkataraman",
          position: "Professor",
          qualification: "Ph.D. in Chemistry, IIT Madras",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Organic Chemistry, Medicinal Chemistry",
        },
        {
          name: "Dr. Sudha Ramalingam",
          position: "Professor",
          qualification: "Ph.D. in Biotechnology, Anna University",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Molecular Biology, Genetic Engineering",
        },
        {
          name: "Dr. Balakrishnan N.",
          position: "Associate Professor",
          qualification: "Ph.D. in Mathematics, IIT Bombay",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Applied Mathematics, Numerical Analysis",
        },
        {
          name: "Dr. Kavitha Rangan",
          position: "Associate Professor",
          qualification: "Ph.D. in Computer Science, NIT Trichy",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Data Science, Machine Learning",
        },
        {
          name: "Dr. Ramesh Babu",
          position: "Assistant Professor",
          qualification: "Ph.D. in Biochemistry, University of Madras",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Biochemistry, Enzymology",
        },
      ]}
      facilities={[
        {
          name: "Advanced Science Laboratories",
          description:
            "Well-equipped laboratories for physics, chemistry, and biology with modern instruments and experimental setups for practical learning and research.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Biotechnology Research Center",
          description:
            "State-of-the-art facility with equipment for molecular biology, genetic engineering, cell culture, and biotechnological applications.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Data Science & Computing Lab",
          description:
            "Advanced computing facility with specialized software for data analysis, statistical computing, and machine learning applications.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Science Innovation Hub",
          description:
            "Collaborative space for interdisciplinary research projects, innovation, and scientific exploration with necessary resources and mentoring.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ]}
      admissionLink="/admissions/apply"
    />
  )
}

