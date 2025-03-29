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
      admissionLink="/admissions/science-health"
      // Add research areas specific to Science and Health
      researchAreas={[
        {
          title: "Molecular Biology & Genetic Engineering",
          description:
            "Research on gene editing, molecular diagnostics, and genetic modification for medical and agricultural applications",
        },
        {
          title: "Quantum Computing & Information Science",
          description: "Exploration of quantum algorithms, quantum cryptography, and quantum information processing",
        },
        {
          title: "Green Chemistry & Sustainable Materials",
          description: "Development of environmentally friendly chemical processes and sustainable materials",
        },
        {
          title: "Data Science & Bioinformatics",
          description:
            "Application of computational methods to analyze biological data and solve complex biological problems",
        },
      ]}
      // Add research publications
      researchPublications={[
        {
          title: "Quantum Entanglement in Multi-Particle Systems",
          author: "Dr. Meenakshi Sundaram",
          journal: "Physical Review Letters",
          year: "2023",
        },
        {
          title: "Novel Approaches in Green Synthesis of Pharmaceutical Compounds",
          author: "Dr. Rajesh Venkataraman",
          journal: "Journal of Medicinal Chemistry",
          year: "2022",
        },
        {
          title: "CRISPR-Cas9 Applications in Crop Improvement",
          author: "Dr. Sudha Ramalingam",
          journal: "Nature Biotechnology",
          year: "2023",
        },
      ]}
      // Add events
      events={[
        {
          title: "Science Innovation Summit",
          date: "April 10-12, 2025",
          description:
            "A platform for showcasing innovative scientific research, featuring keynote speakers, panel discussions, and student presentations.",
          image: "/placeholder.svg?height=300&width=500",
          isUpcoming: true,
        },
        {
          title: "Biotechnology Workshop Series",
          date: "March 5-15, 2025",
          description:
            "Hands-on workshops covering advanced techniques in molecular biology, genetic engineering, and cell culture.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Data Science Hackathon",
          date: "February 25-26, 2025",
          description:
            "A 48-hour competition challenging participants to solve real-world problems using data science and machine learning.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Chemistry Symposium",
          date: "May 18-19, 2025",
          description:
            "Annual symposium featuring research presentations, industry talks, and networking opportunities in chemical sciences.",
          image: "/placeholder.svg?height=300&width=500",
        },
      ]}
      // Add gallery images
      galleryImages={[
        {
          src: "/placeholder.svg?height=400&width=400&text=Lab+Research",
          alt: "Students conducting research in laboratory",
          caption: "Hands-on research experience in our advanced laboratories",
          category: "Research Facilities",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Science+Exhibition",
          alt: "Science exhibition showcasing student projects",
          caption: "Innovative student projects at our annual science exhibition",
          category: "Student Projects",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Guest+Lecture",
          alt: "Distinguished scientist giving a guest lecture",
          caption: "Learning from leading scientists in the field",
          category: "Academic Events",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Data+Analysis",
          alt: "Students analyzing data in computing lab",
          caption: "Data analysis and computational research",
          category: "Computing Facilities",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Biotech+Lab",
          alt: "Biotechnology laboratory equipment",
          caption: "State-of-the-art biotechnology research facilities",
          category: "Research Infrastructure",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Field+Work",
          alt: "Students conducting field research",
          caption: "Field research and data collection",
          category: "Field Studies",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Science+Conference",
          alt: "Students presenting at science conference",
          caption: "Student presentations at scientific conferences",
          category: "Academic Achievements",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Lab+Demonstration",
          alt: "Professor demonstrating laboratory technique",
          caption: "Expert guidance in laboratory techniques",
          category: "Teaching Excellence",
        },
      ]}
    />
  )
}

