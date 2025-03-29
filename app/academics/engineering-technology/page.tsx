import SchoolLayout from "@/components/academics/school-layout"

export default function EngineeringTechnologyPage() {
  return (
    <SchoolLayout
      title="School of Engineering & Technology"
      subtitle="Innovating for a Better Tomorrow"
      description="The School of Engineering & Technology at Jeppiaar University is dedicated to providing world-class education in various engineering disciplines. Our programs are designed to develop technical expertise, problem-solving skills, and innovative thinking in students, preparing them for successful careers in the rapidly evolving technological landscape."
      bannerImage="/placeholder.svg?height=800&width=1600"
      vision="To be a center of excellence in engineering education and research, producing innovative engineers who contribute to technological advancement and sustainable development."
      mission="To provide quality engineering education through innovative teaching methods, industry collaboration, and research opportunities, fostering technical competence, ethical values, and leadership qualities in students."
      programs={[
        {
          name: "B.Tech in Computer Science & Engineering",
          duration: "4 Years",
          eligibility: "10+2 with PCM, minimum 60% aggregate",
          description:
            "This program covers advanced topics in computer science including artificial intelligence, machine learning, data science, and software engineering.",
          category: "UG",
        },
        {
          name: "B.Tech in Information Technology",
          duration: "4 Years",
          eligibility: "10+2 with PCM, minimum 60% aggregate",
          description:
            "Focuses on information systems, network security, database management, and web technologies for the digital age.",
          category: "UG",
        },
        {
          name: "B.Tech in Electronics & Communication",
          duration: "4 Years",
          eligibility: "10+2 with PCM, minimum 60% aggregate",
          description:
            "Covers electronic systems, communication networks, signal processing, and embedded systems design.",
          category: "UG",
        },
        {
          name: "M.Tech in Computer Science & Engineering",
          duration: "2 Years",
          eligibility: "B.Tech/B.E in relevant discipline, minimum 60% aggregate",
          description:
            "Advanced research-oriented program focusing on specialized areas of computer science and engineering.",
          category: "PG",
        },
        {
          name: "M.Tech in AI & Machine Learning",
          duration: "2 Years",
          eligibility: "B.Tech/B.E in relevant discipline, minimum 60% aggregate",
          description:
            "Specialized program focusing on artificial intelligence, machine learning algorithms, and their applications.",
          category: "PG",
        },
        {
          name: "Ph.D. in Engineering",
          duration: "3-5 Years",
          eligibility: "M.Tech/M.E in relevant discipline, minimum 60% aggregate",
          description:
            "Research-focused doctoral program for advanced study and original research in engineering disciplines.",
          category: "PG",
        },
        {
          name: "Diploma in Computer Engineering",
          duration: "3 Years",
          eligibility: "10th with Mathematics, minimum 50% aggregate",
          description: "Practical training in computer hardware, software, and network systems with industry exposure.",
          category: "Diploma",
        },
        {
          name: "Diploma in Electronics Engineering",
          duration: "3 Years",
          eligibility: "10th with Science and Mathematics, minimum 50% aggregate",
          description:
            "Hands-on program in electronic circuits, devices, and systems with practical laboratory experience.",
          category: "Diploma",
        },
      ]}
      faculty={[
        {
          name: "Dr. Anand Ramanathan",
          position: "Dean & Professor",
          qualification: "Ph.D. in Computer Science, IIT Madras",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Artificial Intelligence, Machine Learning",
        },
        {
          name: "Dr. Priya Sundaram",
          position: "Professor",
          qualification: "Ph.D. in Electronics Engineering, Anna University",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "VLSI Design, Embedded Systems",
        },
        {
          name: "Dr. Rajesh Kumar",
          position: "Associate Professor",
          qualification: "Ph.D. in Computer Science, IISc Bangalore",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Data Science, Cloud Computing",
        },
        {
          name: "Dr. Meena Krishnan",
          position: "Associate Professor",
          qualification: "Ph.D. in Information Technology, NIT Trichy",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Cybersecurity, Network Systems",
        },
        {
          name: "Dr. Venkatesh S.",
          position: "Assistant Professor",
          qualification: "Ph.D. in Mechanical Engineering, Anna University",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Robotics, Automation",
        },
        {
          name: "Dr. Lakshmi Narayanan",
          position: "Assistant Professor",
          qualification: "Ph.D. in Civil Engineering, IIT Bombay",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Structural Engineering, Sustainable Construction",
        },
      ]}
      facilities={[
        {
          name: "Advanced Computing Lab",
          description:
            "State-of-the-art computing facility with high-performance workstations, GPU servers for AI/ML research, and specialized software for various engineering disciplines.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Electronics & Embedded Systems Lab",
          description:
            "Equipped with advanced electronic testing equipment, microcontroller kits, FPGA boards, and IoT development platforms for hands-on learning.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Robotics & Automation Lab",
          description:
            "Features industrial robots, collaborative robots, automation systems, and 3D printers for prototyping and research in robotics and automation.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Research Center",
          description:
            "Dedicated space for faculty and student research with specialized equipment and resources for various engineering disciplines.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ]}
      admissionLink="/admissions/apply"
      // Add new detailed props for research areas
      researchAreas={[
        {
          title: "Artificial Intelligence & Machine Learning",
          description: "Research on advanced AI algorithms, deep learning, and applications in various domains",
        },
        {
          title: "Internet of Things (IoT)",
          description: "Development of smart systems, sensor networks, and IoT applications for industry and society",
        },
        {
          title: "Renewable Energy Systems",
          description: "Research on solar, wind, and other renewable energy technologies for sustainable development",
        },
        {
          title: "Advanced Materials & Nanotechnology",
          description: "Development and characterization of novel materials for engineering applications",
        },
      ]}
      // Add research publications
      researchPublications={[
        {
          title: "Deep Learning Approaches for Medical Image Analysis",
          author: "Dr. Anand Ramanathan",
          journal: "IEEE Transactions on Medical Imaging",
          year: "2023",
        },
        {
          title: "Energy-Efficient IoT Architectures for Smart Cities",
          author: "Dr. Rajesh Kumar",
          journal: "Journal of Smart Cities and Society",
          year: "2022",
        },
        {
          title: "Novel Nanomaterials for Next-Generation Electronics",
          author: "Dr. Priya Sundaram",
          journal: "Advanced Materials Research",
          year: "2023",
        },
      ]}
      // Add events
      events={[
        {
          title: "Annual Technical Symposium - TechVista 2025",
          date: "March 15-16, 2025",
          description:
            "A national-level technical symposium featuring paper presentations, project exhibitions, and technical workshops.",
          image: "/placeholder.svg?height=300&width=500",
          isUpcoming: true,
        },
        {
          title: "Industry-Academia Conclave",
          date: "April 5, 2025",
          description:
            "A platform for interaction between industry experts and academic researchers to discuss emerging technologies and collaboration opportunities.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Workshop on Emerging Technologies",
          date: "February 10, 2025",
          description:
            "Hands-on workshop covering AI, IoT, Blockchain, and other cutting-edge technologies with industry experts.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Engineering Innovation Challenge",
          date: "May 20, 2025",
          description:
            "A competition for students to showcase innovative solutions to real-world engineering problems.",
          image: "/placeholder.svg?height=300&width=500",
        },
      ]}
      // Add gallery images
      galleryImages={[
        {
          src: "/placeholder.svg?height=400&width=400&text=Lab+Session",
          alt: "Students working in the Advanced Computing Lab",
          caption: "Hands-on learning in our state-of-the-art labs",
          category: "Academic Facilities",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Project+Exhibition",
          alt: "Student project exhibition",
          caption: "Innovative student projects on display",
          category: "Student Achievements",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Guest+Lecture",
          alt: "Industry expert giving a guest lecture",
          caption: "Learning from industry experts",
          category: "Events",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Robotics+Competition",
          alt: "Students participating in robotics competition",
          caption: "Showcasing technical skills in competitions",
          category: "Student Activities",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Research+Lab",
          alt: "Research laboratory equipment",
          caption: "Advanced research facilities",
          category: "Research Infrastructure",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Workshop",
          alt: "Students attending a technical workshop",
          caption: "Skill development through workshops",
          category: "Training Programs",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Industry+Visit",
          alt: "Students visiting an industry facility",
          caption: "Industry exposure through field visits",
          category: "Industrial Connections",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Graduation+Day",
          alt: "Engineering graduates on graduation day",
          caption: "Celebrating academic achievements",
          category: "Student Success",
        },
      ]}
    />
  )
}

