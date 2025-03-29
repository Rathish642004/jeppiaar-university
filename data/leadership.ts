// Leadership team data
export interface LeaderProfile {
  id: string
  name: string
  title: string
  image: string
  bio: string
  education: string[]
  experience: string[]
  achievements: string[]
  quote?: string
}

export const leadershipTeam: LeaderProfile[] = [
  {
    id: "dr-regeena-j-murali",
    name: "Dr. Regeena J Murali",
    title: "Founder & Chancellor",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Dr. Regeena J Murali is a visionary leader in higher education with over three decades of experience in academic administration and research. Her dedication to educational excellence has been the driving force behind Jeppiaar University's growth and success.",
    education: [
      "Ph.D. in Electrical Engineering, Anna University",
      "M.Tech in Power Systems, IIT Madras",
      "B.E. in Electrical Engineering, University of Madras",
    ],
    experience: [
      "Founder & Chancellor, Jeppiaar University (2010-Present)",
      "Director, Sathyabama Institute of Science and Technology (2000-2010)",
      "Professor, Department of Electrical Engineering, Anna University (1990-2000)",
      "Visiting Professor, Massachusetts Institute of Technology, USA (1997-1998)",
    ],
    achievements: [
      "Padma Shri Award for contribution to education (2015)",
      "Distinguished Educator Award, Government of Tamil Nadu (2012)",
      "Women in Leadership Award, Education Council of India (2010)",
      "Published over 100 research papers in international journals",
      "Led 15+ major research projects funded by UGC, AICTE, and DST",
    ],
    quote:
      "Education is not preparation for life; education is life itself. We must create learning environments that nurture both intellectual growth and character development.",
  },
  {
    id: "mr-murali-subramanian",
    name: "Mr. Murali Subramanian",
    title: "President",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Mr. Murali Subramanian is a distinguished academician with expertise in Computer Science and academic administration. His innovative approach to education has helped transform Jeppiaar University into a center of academic excellence and technological innovation.",
    education: [
      "Ph.D. in Computer Science, IIT Madras",
      "M.S. in Computer Science, Stanford University, USA",
      "B.Tech in Computer Science and Engineering, NIT Trichy",
    ],
    experience: [
      "President, Jeppiaar University (2015-Present)",
      "Director of Research, Tata Consultancy Services (2010-2015)",
      "Dean, School of Computing Sciences, VIT University (2005-2010)",
      "Senior Research Scientist, IBM Research Labs, Bangalore (2000-2005)",
    ],
    achievements: [
      "Fellow of the Indian National Academy of Engineering",
      "Recipient of the National Award for Excellence in Higher Education Leadership",
      "Holds 5 patents in AI and Cloud Computing",
      "Author of 3 books on Computer Science and Digital Transformation",
      "Founded 2 successful EdTech startups",
    ],
    quote:
      "Technology in education is not just about digitizing existing processes; it's about reimagining learning for the digital age and preparing students for jobs that don't yet exist.",
  },
  {
    id: "dr-shaleesha-a-stanley",
    name: "Dr. Shaleesha A Stanley",
    title: "Pro Chancellor",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Dr. Shaleesha A Stanley is an experienced administrator with a strong background in Educational Management and Public Administration. Her expertise in institutional governance and regulatory compliance has been instrumental in establishing Jeppiaar University's reputation for excellence.",
    education: [
      "Ph.D. in Public Administration, University of Madras",
      "M.A. in Educational Management, Loyola College",
      "B.A. in Economics, Stella Maris College",
    ],
    experience: [
      "Pro Chancellor, Jeppiaar University (2012-Present)",
      "Director of Higher Education (Technical), Government of Tamil Nadu (2008-2012)",
      "Registrar, Anna University (2005-2008)",
      "Consultant, National Assessment and Accreditation Council (2002-2005)",
    ],
    achievements: [
      "Best Administrator Award, Association of Indian Universities (2018)",
      "Excellence in Higher Education Management Award (2015)",
      "Led the university through multiple successful NAAC accreditation cycles",
      "Developed innovative governance models adopted by several institutions",
      "Member of various national committees on higher education policy",
    ],
    quote:
      "Good governance in educational institutions requires a delicate balance between administrative efficiency and academic freedom. Our goal is to create systems that empower our faculty and students while ensuring accountability.",
  },
  {
    id: "dr-r-baskaran",
    name: "Dr. R. Baskaran",
    title: "Vice Chancellor",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Dr. R. Baskaran is a renowned educator with expertise in curriculum development and academic administration. With over 25 years of teaching and leadership experience, he has been pivotal in developing innovative academic programs that blend theoretical knowledge with practical skills.",
    education: [
      "Ph.D. in Education, University of Madras",
      "M.Ed. in Educational Technology, Bharathidasan University",
      "B.Sc. in Mathematics, St. Joseph's College",
    ],
    experience: [
      "Vice Chancellor, Jeppiaar University (2018-Present)",
      "Dean of Academics, SRM University (2012-2018)",
      "Professor of Education, Madras University (2005-2012)",
      "Head, Department of Educational Technology, NCERT (2000-2005)",
    ],
    achievements: [
      "National Award for Innovative Teaching Methodologies (2017)",
      "Best Academic Leader Award, Education World (2015)",
      "Authored 5 books on higher education pedagogy",
      "Developed the widely adopted STEAM-focused curriculum framework",
      "Led the development of 20+ new interdisciplinary programs",
    ],
    quote:
      "Education should not be about filling buckets, but lighting fires. Our role is to ignite curiosity, foster critical thinking, and nurture a passion for lifelong learning in every student who walks through our doors.",
  },
  {
    id: "dr-s-k-binu-siva-singh",
    name: "Dr. S. K. Binu Siva Singh",
    title: "Registrar",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Dr. S. K. Binu Siva Singh is a leading researcher and administrator with significant contributions to scientific advancements. His extensive experience in research management and academic administration has strengthened the university's research capabilities and international collaborations.",
    education: [
      "Ph.D. in Physics, IIT Bombay",
      "M.Sc. in Applied Physics, Delhi University",
      "B.Sc. in Physics, Loyola College",
    ],
    experience: [
      "Registrar, Jeppiaar University (2016-Present)",
      "Director of Research Operations, CSIR Laboratory (2010-2016)",
      "Associate Professor, Department of Physics, Anna University (2005-2010)",
      "Research Scientist, Defense Research and Development Organization (2000-2005)",
    ],
    achievements: [
      "Fellow of the Indian Academy of Sciences",
      "Recipient of the Young Scientist Award, Department of Science and Technology",
      "Holds 4 patents in materials science",
      "Published over 80 research papers in international journals",
      "Successfully secured ₹15+ crore in research grants for the university",
    ],
    quote:
      "Research is the foundation of knowledge creation and innovation. By fostering a robust research ecosystem, we not only advance human understanding but also prepare our students to be problem-solvers and innovators of tomorrow.",
  },
  {
    id: "ms-margarette-r",
    name: "Ms. Margarette R",
    title: "Vice President",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Ms. Margarette R is a financial expert with extensive experience in educational institution finance management. Her strategic financial planning and resource management have been key to the university's sustainable growth and infrastructure development.",
    education: [
      "MBA in Finance, Harvard Business School",
      "Chartered Accountant, Institute of Chartered Accountants of India",
      "B.Com in Accounting, Stella Maris College",
    ],
    experience: [
      "Vice President, Jeppiaar University (2014-Present)",
      "Chief Financial Officer, Apollo Hospitals Educational Trust (2008-2014)",
      "Financial Controller, Infosys Foundation (2004-2008)",
      "Senior Finance Manager, Ernst & Young (2000-2004)",
    ],
    achievements: [
      "Best Education Finance Professional Award (2019)",
      "Implemented cost-efficient financial models saving 20% operational costs",
      "Led the successful financial planning for campus expansion projects",
      "Secured favorable financial partnerships with leading banks and institutions",
      "Developed scholarship endowment funds exceeding ₹50 crore",
    ],
    quote:
      "Financial sustainability is essential for educational excellence. Our goal is to ensure that resources are optimally allocated to support academic quality, infrastructure development, and student success while maintaining affordability and accessibility.",
  },
]

// Get leader by ID
export function getLeaderById(id: string): LeaderProfile | undefined {
  return leadershipTeam.find((leader) => leader.id === id)
}

// Get all leader IDs for static path generation
export function getAllLeaderIds(): string[] {
  return leadershipTeam.map((leader) => leader.id)
}

// Get administration leaders (for admin tab)
export function getAdministrationLeaders(): LeaderProfile[] {
  return leadershipTeam
}

// Get academic council leaders (would be expanded in a real application)
export function getAcademicCouncilLeaders(): LeaderProfile[] {
  // Just returning the first two leaders as examples for academic council
  // In a real app, you would have separate data for academic council members
  return leadershipTeam.slice(0, 2)
}

