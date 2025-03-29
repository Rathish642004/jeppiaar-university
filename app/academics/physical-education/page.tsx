import SchoolLayout from "@/components/academics/school-layout"

export default function PhysicalEducationPage() {
  return (
    <SchoolLayout
      title="School of Physical Education and Sports"
      subtitle="Developing Athletic Excellence and Sports Leadership"
      description="The School of Physical Education and Sports at Jeppiaar University is dedicated to promoting physical fitness, sports excellence, and professional development in sports management. Our programs combine theoretical knowledge with practical training, preparing students for careers in sports coaching, physical education, sports management, and fitness training."
      bannerImage="/placeholder.svg?height=800&width=1600"
      vision="To be a center of excellence in physical education and sports, developing skilled professionals who contribute to sports development and promote physical fitness in society."
      mission="To provide quality education in physical education and sports through comprehensive curriculum, practical training, and research opportunities, fostering athletic excellence, leadership qualities, and ethical values in students."
      programs={[
        {
          name: "Bachelor of Physical Education (B.P.Ed)",
          duration: "2 Years",
          eligibility: "Bachelor's degree in any discipline with participation in sports, minimum 50% aggregate",
          description:
            "Professional program preparing students for careers in physical education teaching and sports coaching.",
          category: "UG",
        },
        {
          name: "B.Sc in Sports Science",
          duration: "3 Years",
          eligibility: "10+2 in any stream with participation in sports, minimum 50% aggregate",
          description:
            "Interdisciplinary program covering sports physiology, biomechanics, sports psychology, and nutrition.",
          category: "UG",
        },
        {
          name: "B.Sc in Sports Management",
          duration: "3 Years",
          eligibility: "10+2 in any stream, minimum 50% aggregate",
          description:
            "Comprehensive program covering sports administration, event management, marketing, and facility management.",
          category: "UG",
        },
        {
          name: "Master of Physical Education (M.P.Ed)",
          duration: "2 Years",
          eligibility: "B.P.Ed or equivalent, minimum 50% aggregate",
          description:
            "Advanced program focusing on sports science, coaching methodologies, and research in physical education.",
          category: "PG",
        },
        {
          name: "M.Sc in Sports Nutrition",
          duration: "2 Years",
          eligibility: "B.Sc in Nutrition, Sports Science or related field, minimum 50% aggregate",
          description: "Specialized program focusing on nutritional aspects of athletic performance and recovery.",
          category: "PG",
        },
        {
          name: "M.Sc in Sports Psychology",
          duration: "2 Years",
          eligibility: "B.Sc in Psychology, Sports Science or related field, minimum 50% aggregate",
          description:
            "Advanced study in psychological aspects of sports performance, motivation, and mental training.",
          category: "PG",
        },
        {
          name: "Diploma in Sports Coaching",
          duration: "1 Year",
          eligibility: "10+2 in any stream with participation in sports, minimum 50% aggregate",
          description:
            "Specialized program focusing on coaching techniques, sports psychology, and athlete development.",
          category: "Diploma",
        },
        {
          name: "Certificate in Fitness Training",
          duration: "6 Months",
          eligibility: "10+2 in any stream, minimum 50% aggregate",
          description:
            "Short-term program covering fitness assessment, exercise prescription, and personal training techniques.",
          category: "Diploma",
        },
        {
          name: "Diploma in Sports Injury Management",
          duration: "1 Year",
          eligibility: "10+2 with Biology, minimum 50% aggregate",
          description: "Specialized training in prevention, assessment, and management of sports injuries.",
          category: "Diploma",
        },
      ]}
      faculty={[
        {
          name: "Dr. Ramesh Kumar",
          position: "Dean & Professor",
          qualification: "Ph.D. in Physical Education, Lakshmibai National Institute of Physical Education",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Sports Pedagogy, Athletic Training",
        },
        {
          name: "Dr. Sunita Sharma",
          position: "Professor",
          qualification: "Ph.D. in Sports Science, University of Madras",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Sports Biomechanics, Exercise Physiology",
        },
        {
          name: "Dr. Rajiv Mehta",
          position: "Associate Professor",
          qualification: "Ph.D. in Sports Management, Jamia Millia Islamia",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Sports Administration, Event Management",
        },
        {
          name: "Dr. Priya Rajan",
          position: "Associate Professor",
          qualification: "Ph.D. in Sports Psychology, University of Delhi",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Sports Psychology, Mental Training",
        },
        {
          name: "Mr. Arjun Singh",
          position: "Assistant Professor",
          qualification: "M.P.Ed, Former National Athlete",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Athletics Coaching, Sports Performance",
        },
        {
          name: "Ms. Lakshmi Devi",
          position: "Assistant Professor",
          qualification: "M.Sc in Sports Nutrition, Former National Basketball Player",
          image: "/placeholder.svg?height=400&width=300",
          specialization: "Sports Nutrition, Fitness Training",
        },
      ]}
      facilities={[
        {
          name: "Multi-purpose Sports Complex",
          description:
            "State-of-the-art facility with indoor courts for basketball, volleyball, badminton, and table tennis, along with a fitness center and aerobics studio.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Athletic Track & Field",
          description:
            "400-meter synthetic track with facilities for all track and field events, including jumping pits and throwing areas.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Sports Science Laboratory",
          description:
            "Equipped with advanced equipment for fitness assessment, biomechanical analysis, physiological testing, and sports performance evaluation.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Swimming Pool",
          description:
            "Olympic-size swimming pool with diving facilities, spectator seating, and training equipment for swimming instruction and competition.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ]}
      admissionLink="/admissions/apply"
      // Add research areas specific to Physical Education
      researchAreas={[
        {
          title: "Sports Performance Enhancement",
          description: "Research on training methodologies, performance analysis, and athlete development strategies",
        },
        {
          title: "Sports Biomechanics & Injury Prevention",
          description: "Study of movement patterns, injury mechanisms, and preventive measures in various sports",
        },
        {
          title: "Sports Psychology & Mental Training",
          description:
            "Research on psychological factors affecting sports performance and mental conditioning techniques",
        },
        {
          title: "Sports Nutrition & Recovery",
          description: "Study of nutritional strategies for optimal athletic performance and recovery protocols",
        },
      ]}
      // Add research publications
      researchPublications={[
        {
          title: "Effect of Plyometric Training on Vertical Jump Performance in Collegiate Athletes",
          author: "Dr. Ramesh Kumar",
          journal: "Journal of Strength and Conditioning Research",
          year: "2023",
        },
        {
          title: "Biomechanical Analysis of Fast Bowling Techniques in Cricket",
          author: "Dr. Sunita Sharma",
          journal: "International Journal of Sports Biomechanics",
          year: "2022",
        },
        {
          title: "Impact of Mental Imagery on Performance Anxiety in Competitive Sports",
          author: "Dr. Priya Rajan",
          journal: "Journal of Sports Psychology",
          year: "2023",
        },
      ]}
      // Add events
      events={[
        {
          title: "Annual Sports Meet - Athlos 2025",
          date: "January 25-27, 2025",
          description:
            "University-wide sports competition featuring track and field events, team sports, and individual competitions.",
          image: "/placeholder.svg?height=300&width=500",
          isUpcoming: true,
        },
        {
          title: "Sports Science Conference",
          date: "March 18-19, 2025",
          description:
            "International conference on advancements in sports science, featuring keynote speakers, research presentations, and workshops.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Fitness Expo",
          date: "April 8, 2025",
          description:
            "Exhibition showcasing the latest fitness equipment, nutrition products, and training methodologies with demonstrations and trials.",
          image: "/placeholder.svg?height=300&width=500",
        },
        {
          title: "Coaching Certification Workshop",
          date: "May 12-16, 2025",
          description:
            "Professional development program for sports coaches, covering advanced coaching techniques, athlete management, and sports psychology.",
          image: "/placeholder.svg?height=300&width=500",
        },
      ]}
      // Add gallery images
      galleryImages={[
        {
          src: "/placeholder.svg?height=400&width=400&text=Track+Event",
          alt: "Athletes competing in track event",
          caption: "Annual inter-collegiate track competition",
          category: "Athletics",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Basketball+Match",
          alt: "University basketball team in action",
          caption: "University basketball team competing in national tournament",
          category: "Team Sports",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Fitness+Training",
          alt: "Students in fitness training session",
          caption: "Strength and conditioning program for student athletes",
          category: "Fitness",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Swimming+Competition",
          alt: "Swimming competition in university pool",
          caption: "Annual swimming championship",
          category: "Aquatics",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Sports+Science+Lab",
          alt: "Students in sports science laboratory",
          caption: "Performance testing in our sports science laboratory",
          category: "Research Facilities",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Yoga+Session",
          alt: "Students in yoga session",
          caption: "Mind-body wellness through yoga practice",
          category: "Wellness Programs",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Award+Ceremony",
          alt: "Sports awards ceremony",
          caption: "Recognizing athletic excellence at annual sports awards",
          category: "Achievements",
        },
        {
          src: "/placeholder.svg?height=400&width=400&text=Coaching+Session",
          alt: "Coach training student athletes",
          caption: "Expert coaching for performance enhancement",
          category: "Coaching",
        },
      ]}
    />
  )
}

