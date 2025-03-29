import SchoolLayout from "@/components/academics/school-layout"

export default function AeronauticsPage() {
  return (
    <SchoolLayout
      title="School of Aeronautics"
      subtitle="Soaring to New Heights in Aviation Education"
      description="The School of Aeronautics at Jeppiaar University is dedicated to providing world-class education in aerospace engineering and aviation technology. Our programs combine theoretical knowledge with hands-on training, preparing students for successful careers in the aviation industry. We emphasize innovation, safety, and technical excellence in all aspects of aeronautical education."
      bannerImage="/placeholder.svg?height=800&width=1600"
      vision="To be a leading center for aeronautical education and research, producing skilled professionals who contribute to advancements in aviation technology and aerospace engineering."
      mission="To provide quality education in aeronautics through innovative teaching methods, industry collaboration, and practical training, fostering technical competence, safety consciousness, and ethical values in students."
      programs={[
        {
          name: "B.Tech in Aerospace Engineering",
          duration: "4 Years",
          eligibility: "10+2 with PCM, minimum 60% aggregate",
          description:
            "Comprehensive program covering aircraft design, propulsion systems, aerodynamics, and aerospace structures.",
          category: "UG",
        },
        {
          name: "B.Sc in Aviation Technology",
          duration: "3 Years",
          eligibility: "10+2 with Science, minimum 55% aggregate",
          description: "Focuses on aircraft maintenance, avionics, flight operations, and aviation safety.",
          category: "UG",
        },
        {
          name: "B.Sc in Aircraft Maintenance Engineering",
          duration: "3 Years",
          eligibility: "10+2 with PCM, minimum 55% aggregate",
          description: "Specialized program focusing on aircraft systems, maintenance procedures, and troubleshooting.",
          category: "UG",
        },
        {
          name: "M.Tech in Aerospace Engineering",
          duration: "2 Years",
          eligibility: "B.Tech/B.E in relevant discipline, minimum 60% aggregate",
          description: "Advanced program focusing on specialized areas of aerospace engineering and research.",
          category: "PG",
        },
        {
          name: "M.Sc in Avionics",
          duration: "2 Years",
          eligibility: "B.Sc/B.Tech in Electronics, Avionics or related field, minimum 55% aggregate",
          description: "Advanced study in aircraft electronics, navigation systems, and communication technologies.",
          category: "PG",
        },
        {
          name: "Ph.D. in Aerospace Engineering",
          duration: "3-5 Years",
          eligibility: "M.Tech/M.E in relevant discipline, minimum 60% aggregate",
          description:
            "Research-focused doctoral program for advanced study and original research in aerospace engineering.",
          category: "PG",
        },
        {
          name: "Diploma in Aircraft Maintenance Engineering",
          duration: "3 Years",
          eligibility: "10+2 with PCM, minimum 50% aggregate",
          description: "Specialized program preparing students for aircraft maintenance and servicing roles.",
          category: "Diploma",
        },
        {
          name: "Certificate in Drone Technology",
          duration: "6 Months",
          eligibility: "10+2 in Science stream, minimum 50% aggregate",
          description: "Short-term program covering drone design, operation, maintenance, and applications.",
          category: "Diploma",
        },
        {
          name: "Diploma in Aviation Management",
          duration: "1 Year",
          eligibility: "10+2 in any stream, minimum 50% aggregate",
          description: "Focuses on airport operations, airline management, and aviation business administration.",
          category: "Diploma",
        },
      ]}
      faculty={[
        {
          name: "Dr. Suresh Kumar",
          position: "Dean & Professor",
          qualification: "Ph.D. in Aerospace Engineering, IIT Madras",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Aircraft Design, Aerodynamics",
        },
        {
          name: "Dr. Ramesh Chandran",
          position: "Professor",
          qualification: "Ph.D. in Mechanical Engineering, MIT, USA",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Propulsion Systems, Thermodynamics",
        },
        {
          name: "Dr. Priya Venkatesh",
          position: "Professor",
          qualification: "Ph.D. in Avionics, Anna University",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Avionics, Flight Control Systems",
        },
        {
          name: "Dr. Arun Prakash",
          position: "Associate Professor",
          qualification: "Ph.D. in Aerospace Structures, IISc Bangalore",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Aerospace Structures, Composite Materials",
        },
        {
          name: "Dr. Lakshmi Narayan",
          position: "Associate Professor",
          qualification: "Ph.D. in Flight Dynamics, University of Sydney",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Flight Dynamics, Simulation",
        },
        {
          name: "Capt. Rajiv Sharma",
          position: "Assistant Professor",
          qualification: "Commercial Pilot License, MBA in Aviation Management",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Flight Operations, Aviation Management",
        },
      ]}
      facilities={[
        {
          name: "Aircraft Hangar & Maintenance Bay",
          description:
            "Fully equipped facility with actual aircraft and components for hands-on training in aircraft maintenance, inspection, and troubleshooting.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Flight Simulator Lab",
          description:
            "Advanced flight simulators providing realistic flight training experience for various aircraft types and flying conditions.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Aerodynamics & Propulsion Lab",
          description:
            "Equipped with wind tunnels, propulsion test benches, and computational facilities for aerodynamic and propulsion studies.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Avionics & Navigation Lab",
          description:
            "Modern facility with avionics systems, navigation equipment, and simulation tools for practical training in aircraft electronics.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ]}
      admissionLink="/admissions/apply"
      // Add research areas specific to Aeronautics
      researchAreas={[
        {
          title: "Advanced Aircraft Design & Aerodynamics",
          description:
            "Research on innovative aircraft configurations, computational fluid dynamics, and aerodynamic optimization",
        },
        {
          title: "Propulsion Systems & Alternative Fuels",
          description: "Development of efficient propulsion technologies and exploration of sustainable aviation fuels",
        },
        {
          title: "Unmanned Aerial Vehicles & Drone Technology",
          description: "Research on UAV design, autonomous flight systems, and applications in various sectors",
        },
        {
          title: "Aviation Safety & Human Factors",
          description:
            "Study of human-machine interaction, safety management systems, and accident prevention in aviation",
        },
      ]}
      // Add research publications
      researchPublications={[
        {
          title: "Computational Analysis of Wing-Tip Vortices in Transonic Flow",
          author: "Dr. Suresh Kumar",
          journal: "Journal of Aircraft",
          year: "2023",
        },
        {
          title: "Performance Evaluation of Biofuels in Gas Turbine Engines",
          author: "Dr. Ramesh Chandran",
          journal: "Aerospace Science and Technology",
          year: "2022",
        },
        {
          title: "Fault-Tolerant Flight Control Systems for Commercial Aircraft",
          author: "Dr. Priya Venkatesh",
          journal: "IEEE Transactions on Aerospace and Electronic Systems",
          year: "2023",
        },
      ]}
      // Add events
      events={[
        {
          title: "Aero Expo 2025",
          date: "February 15-17, 2025",
          description:
            "Exhibition showcasing the latest advancements in aerospace technology, featuring industry displays, technical sessions, and career opportunities.",
          image: "/placeholder.svg?height=300&width=500",
          isUpcoming: true,
        },
        {
          title: "International Conference on Aerospace Engineering",
          date: "March 25-27, 2025",
          description:
            "Global platform for researchers, industry professionals, and students to share knowledge and innovations in aerospace engineering.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Drone Design Competition",
          date: "April 10, 2025",
          description:
            "Student competition for designing and demonstrating innovative drone applications for various sectors including agriculture, surveillance, and disaster management.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Aviation Safety Workshop",
          date: "May 5-6, 2025",
          description:
            "Professional development program focusing on safety management systems, human factors in aviation, and accident investigation techniques.",
          image: "/placeholder.svg?height=300&width=500",
        },
      ]}
      // Add gallery images
      galleryImages={[
        {
          src: "/placeholder.svg?height=400&width=400&text=Aircraft+Hangar",
          alt: "Students working in aircraft hangar",
          caption: "Hands-on training in our aircraft maintenance facility",
          category: "Training Facilities",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Flight+Simulator",
          alt: "Student using flight simulator",
          caption: "Advanced flight simulation training",
          category: "Simulation Technology",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Wind+Tunnel+Testing",
          alt: "Wind tunnel experiment in progress",
          caption: "Aerodynamic testing in our wind tunnel facility",
          category: "Research Equipment",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Drone+Workshop",
          alt: "Students building drones",
          caption: "Innovative drone development projects",
          category: "Student Projects",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Industry+Visit",
          alt: "Students visiting aerospace industry",
          caption: "Learning from industry through field visits",
          category: "Industry Connect",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Aircraft+Components",
          alt: "Aircraft engine components display",
          caption: "Study of aircraft propulsion systems",
          category: "Educational Resources",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Avionics+Lab",
          alt: "Students working in avionics laboratory",
          caption: "Practical training in aircraft electronics",
          category: "Laboratory Facilities",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Graduation+Day",
          alt: "Aeronautics graduates on graduation day",
          caption: "Celebrating the success of our graduates",
          category: "Student Achievements",
        },
      ]}
    />
  )
}

