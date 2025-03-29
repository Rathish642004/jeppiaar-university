import Image from "next/image"
import Link from "next/link"
export default function RecruitersPage() {
  // List of all recruiting partners
  const partners = [
    {
      id: 1,
      name: "keyence",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094752/Website_related_content.pdf-image-047_xr73pv.jpg",
    },
    {
      id: 2,
      name: "durus",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094752/Website_related_content.pdf-image-046_rgheme.png",
    },
    {
      id: 3,
      name: "kotakLife",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094752/Website_related_content.pdf-image-045_xkwsef.png",
    },
    {
      id: 4,
      name: "planetSpark",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-043_nhpck6.jpg",
    },
    {
      id: 5,
      name: "firstsource",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094752/Website_related_content.pdf-image-044_c4fbdt.png",
    },
    {
      id: 6,
      name: "kvncapital",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-041_thuqcp.png",
    },
    {
      id: 7,
      name: "unique",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-039_twfn0h.jpg",
    },
    {
      id: 8,
      name: "spiders",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-040_iidknk.jpg",
    },
    {
      id: 9,
      name: "suryadev",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-037_lsomvx.png",
    },
    {
      id: 10,
      name: "aniban",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-036_mhxbj0.png",
    },
    {
      id: 11,
      name: "digitwin",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-035_xckgq4.png",
    },
    {
      id: 12,
      name: "l&t",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-034_dkqwwg.png",
    },
    {
      id: 13,
      name: "sands",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-033_xnzuht.png",
    },
    {
      id: 14,
      name: "asianpaints",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094751/Website_related_content.pdf-image-032_gtvaq2.png",
    },
    {
      id: 15,
      name: "tekraa",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094750/Website_related_content.pdf-image-019_b41vjk.png",
    },
    {
      id: 16,
      name: "oytize",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094750/Website_related_content.pdf-image-031_ltmuc2.png",
    },
    {
      id: 17,
      name: "terv",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094750/Website_related_content.pdf-image-030_xtjtzl.png",
    },
    {
      id: 18,
      name: "hr",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094750/Website_related_content.pdf-image-017_u2uehm.png",
    },
    {
      id: 19,
      name: "chr",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094750/Website_related_content.pdf-image-018_j7zllj.jpg",
    },
    {
      id: 20,
      name: "syrma",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094750/Website_related_content.pdf-image-014_hycdrz.png",
    },
    {
      id: 21,
      name: "zepto",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094750/Website_related_content.pdf-image-016_owmnpf.jpg",
    },
    {
      id: 22,
      name: "Larsen",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094750/Website_related_content.pdf-image-029_hbir1p.png",
    },
    {
      id: 23,
      name: "capgemini",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-028_xonuit.png",
    },
    {
      id: 24,
      name: "precision",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-012_fxrpzn.png",
    },
    {
      id: 25,
      name: "inypeople",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-011_oiwjai.png",
    },
    {
      id: 26,
      name: "kotakmahindra",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-027_d0ndsh.jpg",
    },
    {
      id: 27,
      name: "consolidated",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-010_yytiik.jpg",
    },
    {
      id: 28,
      name: "kapitus",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-009_nbvd3m.jpg",
    },
    {
      id: 29,
      name: "bandhanbank",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-007_bdmjhd.jpg",
    },
    {
      id: 30,
      name: "zenlinen",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-026_lcbvtd.png",
    },
    {
      id: 31,
      name: "avacend",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094749/Website_related_content.pdf-image-008_y3wvao.png",
    },
    {
      id: 32,
      name: "inchcare",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-024_d3zjwk.png",
    },
    {
      id: 33,
      name: "thetadirect",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-003_ddoot2.png",
    },
    {
      id: 34,
      name: "renewbuy",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-005_dxhuwi.png",
    },
    {
      id: 35,
      name: "newtgloble",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-021_pt6wih.png",
    },
    {
      id: 36,
      name: "criodo",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-006_gaqf2j.png",
    },
    {
      id: 37,
      name: "hdfc",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-001_hhcrrx.png",
    },
    {
      id: 38,
      name: "hcl",
      logo: "https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-023_dmvqot.jpg",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">Our Recruiters</h1>
          <p className="text-lg mb-8">
            Jeppiaar University has strong industry connections with leading companies across various sectors. Our
            students are recruited by some of the most prestigious organizations globally.
          </p>
        </div>
        <div className="relative h-[200px] w-full">
          <Image
            src="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743099238/Website_related_content.pdf-image-001-removebg-preview_vcpczn.png"
            alt="Companies logos collage"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* All Recruiters in a single section */}
      <section className="mb-16">
        {/*<h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Recruiting Partners</h2>*/}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((company) => (
            <div
              key={company.id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center h-32"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={115}
                height={90}
                className="object-fill mb-2"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials from Recruiters */}
      {/*<section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">What Recruiters Say About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="italic text-gray-600 mb-4">
              "Jeppiaar University students demonstrate strong technical skills and a great attitude towards learning.
              They adapt quickly to our work environment and contribute significantly to our projects."
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=48&width=48" alt="Recruiter" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold">Rajesh Kumar</p>
                <p className="text-sm text-gray-500">HR Manager, TCS</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="italic text-gray-600 mb-4">
              "We've been recruiting from Jeppiaar University for several years now. The quality of students and the
              placement process is very professional. We look forward to strengthening this partnership."
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=48&width=48" alt="Recruiter" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold">Priya Sharma</p>
                <p className="text-sm text-gray-500">Talent Acquisition Lead, Infosys</p>
              </div>
            </div>
          </div>
        </div>*/}

      {/* Become a Recruiter */}
      <section className="bg-primary/5 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Become a Recruiter</h2>
          <p className="text-lg mb-6">
            Interested in recruiting from Jeppiaar University? We invite you to partner with us and access our pool of
            talented students.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:placement@jeppiaaruniversity.ac.in"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Placement Cell
            </a>
            <Link 
              href="https://res.cloudinary.com/dzpgjl9e3/image/upload/v1743096222/Placement_Brochure_y5ihnm.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              download
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

