import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SportsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Sports at Jeppiaar University"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports & Recreation</h1>
          <p className="text-xl max-w-3xl">Nurturing physical excellence and team spirit at Jeppiaar University</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Excellence in Sports</h2>
            <p className="text-lg mb-6 text-gray-700">
              At Jeppiaar University, we believe in the holistic development of our students. Our sports program is
              designed to promote physical fitness, teamwork, leadership, and competitive spirit.
            </p>
            <p className="text-lg text-gray-700">
              With state-of-the-art facilities, professional coaching, and regular tournaments, we provide ample
              opportunities for students to excel in their chosen sports and represent the university at regional,
              national, and international levels.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Sports at Jeppiaar University"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sports Facilities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Sports Facilities</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Olympic-sized Swimming Pool",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "8-lane swimming pool with temperature control and professional coaching for swimmers of all levels.",
              },
              {
                title: "Indoor Sports Complex",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Multi-purpose indoor stadium for badminton, basketball, volleyball, table tennis, and more.",
              },
              {
                title: "Cricket Ground",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Well-maintained cricket ground with practice nets and professional pitch for matches and practice.",
              },
              {
                title: "Football Field",
                image: "/placeholder.svg?height=600&width=800",
                description: "FIFA standard football field with floodlights for evening matches and training sessions.",
              },
              {
                title: "Tennis Courts",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Multiple synthetic and clay tennis courts with coaching facilities for beginners and advanced players.",
              },
              {
                title: "Fitness Center",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Modern gym equipped with cardio and strength training equipment, supervised by qualified trainers.",
              },
              {
                title: "Athletics Track",
                image: "/placeholder.svg?height=600&width=800",
                description: "400-meter synthetic track for athletics events with facilities for jumps and throws.",
              },
              {
                title: "Yoga and Meditation Center",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Dedicated space for yoga and meditation practices to promote mental and physical well-being.",
              },
              {
                title: "Indoor Games Room",
                image: "/placeholder.svg?height=600&width=800",
                description: "Facilities for chess, carrom, billiards, and other indoor recreational games.",
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Programs */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Sports Programs</h2>

        <Tabs defaultValue="team" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="team">Team Sports</TabsTrigger>
            <TabsTrigger value="individual">Individual Sports</TabsTrigger>
            <TabsTrigger value="aquatic">Aquatic Sports</TabsTrigger>
            <TabsTrigger value="fitness">Fitness Programs</TabsTrigger>
          </TabsList>

          <TabsContent value="team" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Cricket",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Our cricket team has a strong tradition of excellence, with regular participation in inter-university tournaments.",
                  achievements: ["University Champions 2022", "State Runners-up 2023"],
                },
                {
                  title: "Football",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "The football team trains under experienced coaches and competes in various collegiate tournaments.",
                  achievements: ["Inter-University Champions 2023", "City League Winners 2022"],
                },
                {
                  title: "Basketball",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Both men's and women's basketball teams represent the university in national competitions.",
                  achievements: ["National Collegiate Quarter-finalists 2023", "State Champions 2022"],
                },
                {
                  title: "Volleyball",
                  image: "/placeholder.svg?height=600&width=800",
                  description: "Our volleyball program focuses on developing technical skills and team coordination.",
                  achievements: ["Inter-Collegiate Champions 2023", "University Games Gold Medal 2022"],
                },
              ].map((sport, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48 md:h-auto md:w-1/3">
                    <Image src={sport.image || "/placeholder.svg"} alt={sport.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{sport.title}</h3>
                    <p className="text-gray-600 mb-4">{sport.description}</p>
                    <h4 className="font-bold text-primary mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {sport.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="individual" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Tennis",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Our tennis program caters to players of all levels, from beginners to competitive athletes.",
                  achievements: ["National Collegiate Singles Champion 2023", "Doubles Runners-up 2022"],
                },
                {
                  title: "Athletics",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Track and field athletes receive specialized training in sprints, middle and long distance, jumps, and throws.",
                  achievements: ["National 400m Gold Medal 2023", "University Games Multi-medal Winners 2022"],
                },
                {
                  title: "Badminton",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "The badminton program offers coaching for singles and doubles play at recreational and competitive levels.",
                  achievements: ["State Singles Champion 2023", "Inter-University Team Bronze 2022"],
                },
                {
                  title: "Table Tennis",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Our table tennis facilities and coaching have produced several state and national level players.",
                  achievements: ["National Collegiate Team Semi-finalists 2023", "State Mixed Doubles Champions 2022"],
                },
              ].map((sport, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48 md:h-auto md:w-1/3">
                    <Image src={sport.image || "/placeholder.svg"} alt={sport.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{sport.title}</h3>
                    <p className="text-gray-600 mb-4">{sport.description}</p>
                    <h4 className="font-bold text-primary mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {sport.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="aquatic" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Swimming",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Our swimming program offers training in all competitive strokes with specialized coaching for various distances.",
                  achievements: ["National Collegiate 100m Freestyle Gold 2023", "State Relay Champions 2022"],
                },
                {
                  title: "Water Polo",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "The water polo team trains regularly and competes in regional and national tournaments.",
                  achievements: ["Inter-University Semi-finalists 2023", "Regional Champions 2022"],
                },
                {
                  title: "Diving",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Our diving program includes training for springboard and platform diving with professional coaches.",
                  achievements: ["National Collegiate Bronze Medal 2023", "University Games Gold Medal 2022"],
                },
                {
                  title: "Aqua Fitness",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Recreational aqua fitness classes are offered for students interested in non-competitive water activities.",
                  achievements: ["Regular fitness programs", "Special sessions for beginners"],
                },
              ].map((sport, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48 md:h-auto md:w-1/3">
                    <Image src={sport.image || "/placeholder.svg"} alt={sport.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{sport.title}</h3>
                    <p className="text-gray-600 mb-4">{sport.description}</p>
                    <h4 className="font-bold text-primary mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {sport.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fitness" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Strength Training",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Our fitness center offers comprehensive strength training programs with professional guidance.",
                  features: ["Modern equipment", "Personalized training plans", "Regular fitness assessments"],
                },
                {
                  title: "Cardio Fitness",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Cardio programs designed to improve cardiovascular health and endurance for all fitness levels.",
                  features: [
                    "Treadmills, ellipticals, and rowing machines",
                    "Group cardio classes",
                    "Heart rate monitoring",
                  ],
                },
                {
                  title: "Yoga & Meditation",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "Regular yoga and meditation sessions to promote physical flexibility, mental clarity, and stress reduction.",
                  features: ["Multiple yoga styles", "Qualified instructors", "Daily sessions"],
                },
                {
                  title: "Aerobics & Zumba",
                  image: "/placeholder.svg?height=600&width=800",
                  description:
                    "High-energy group fitness classes combining music and movement for a fun workout experience.",
                  features: ["Regular weekly classes", "Beginner to advanced levels", "Special themed sessions"],
                },
              ].map((program, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48 md:h-auto md:w-1/3">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <h4 className="font-bold text-primary mb-2">Program Features:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {program.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Sports Events & Tournaments */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Sports Events & Tournaments</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Sports Meet",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "A week-long celebration of sports featuring competitions in various disciplines for students across departments.",
                date: "February 2025",
              },
              {
                title: "Inter-Collegiate Tournament",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Hosting colleges from across the region to compete in basketball, volleyball, cricket, and athletics.",
                date: "November 2024",
              },
              {
                title: "Chancellor's Cup",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Prestigious cricket tournament between departments with the final match attended by the university Chancellor.",
                date: "December 2024",
              },
              {
                title: "Swimming Championship",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Annual swimming competition featuring individual and relay events across different strokes and distances.",
                date: "April 2025",
              },
              {
                title: "Fitness Challenge",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Month-long fitness challenge encouraging students and staff to adopt healthy lifestyle habits.",
                date: "January 2025",
              },
              {
                title: "Alumni Sports Meet",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Special sports event bringing together current students and alumni for friendly competitions and networking.",
                date: "March 2025",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 rounded-bl-lg font-medium">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Achievements */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Champions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Rahul Sharma",
              sport: "Cricket",
              achievement: "National University Cricket Captain",
              image: "/placeholder.svg?height=400&width=400",
              quote:
                "The sports facilities and coaching at Jeppiaar University helped me develop my skills and leadership abilities.",
            },
            {
              name: "Priya Patel",
              sport: "Swimming",
              achievement: "National Gold Medalist in 100m Freestyle",
              image: "/placeholder.svg?height=400&width=400",
              quote:
                "The Olympic-sized pool and professional coaching at Jeppiaar University were instrumental in my success.",
            },
            {
              name: "Vikram Singh",
              sport: "Athletics",
              achievement: "University Games 400m Record Holder",
              image: "/placeholder.svg?height=400&width=400",
              quote:
                "The athletics program at Jeppiaar University provided me with the perfect platform to achieve my sporting goals.",
            },
          ].map((athlete, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={athlete.image || "/placeholder.svg"} alt={athlete.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">{athlete.name}</h3>
              <p className="text-primary font-medium mb-1">{athlete.sport}</p>
              <p className="font-medium mb-4">{athlete.achievement}</p>
              <p className="italic text-gray-600">"{athlete.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sports Scholarships */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Sports Scholarships</h2>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6 text-gray-700">
              Jeppiaar University offers sports scholarships to talented athletes who represent the university in
              various competitions. These scholarships recognize sporting excellence and help students balance their
              academic and athletic pursuits.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Scholarship Categories</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Gold Category</p>
                      <p className="text-sm">For national level athletes with exceptional achievements</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Silver Category</p>
                      <p className="text-sm">For state level athletes with significant achievements</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Bronze Category</p>
                      <p className="text-sm">For promising athletes with potential for growth</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Tuition Fee Waiver</p>
                      <p className="text-sm">Partial to full tuition fee waiver based on category</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Hostel Fee Concession</p>
                      <p className="text-sm">Reduced hostel fees for scholarship holders</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Special Training</p>
                      <p className="text-sm">Access to specialized coaching and training programs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium">Academic Flexibility</p>
                      <p className="text-sm">Special academic arrangements during competitions</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/admissions/sports-scholarships"
                className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Apply for Sports Scholarship
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Coaching Staff</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Coach Rajiv Kumar",
              position: "Director of Sports",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Former national cricket player with over 20 years of coaching experience.",
            },
            {
              name: "Coach Meera Singh",
              position: "Swimming Coach",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Olympic swimmer and certified international swimming coach.",
            },
            {
              name: "Coach David Thomas",
              position: "Basketball Coach",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Former professional basketball player with experience coaching university teams.",
            },
            {
              name: "Coach Anita Desai",
              position: "Athletics Coach",
              image: "/placeholder.svg?height=400&width=400",
              bio: "National athletics champion and certified strength and conditioning specialist.",
            },
            {
              name: "Coach Suresh Patel",
              position: "Football Coach",
              image: "/placeholder.svg?height=400&width=400",
              bio: "AFC licensed coach with experience in professional football leagues.",
            },
            {
              name: "Coach Priya Nair",
              position: "Yoga Instructor",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Internationally certified yoga instructor with specialization in sports yoga.",
            },
            {
              name: "Coach Vikram Reddy",
              position: "Tennis Coach",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Former Davis Cup player with extensive coaching experience.",
            },
            {
              name: "Coach Sanjay Verma",
              position: "Fitness Trainer",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Certified fitness professional specializing in sports-specific training.",
            },
          ].map((coach, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="relative h-64">
                <Image src={coach.image || "/placeholder.svg"} alt={coach.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                <p className="text-primary font-medium mb-3">{coach.position}</p>
                <p className="text-gray-600">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sports Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Sports Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`/placeholder.svg?height=600&width=800&text=Sports Image ${index + 1}`}
                  alt={`Sports Gallery Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Sports Teams */}
      <section className="py-12 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Sports Teams</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Whether you're a competitive athlete or simply interested in recreational sports, there's a place for you in
          our sports community. Join us to stay fit, make friends, and develop valuable life skills.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/campus-life/sports/teams"
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Sports Team Tryouts
          </Link>
          <Link
            href="/campus-life/sports/recreational"
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            Recreational Programs
          </Link>
        </div>
      </section>
    </div>
  )
}

