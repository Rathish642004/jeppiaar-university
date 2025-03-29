"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

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
    logo: "hhttps://res.cloudinary.com/dzpgjl9e3/image/upload/v1743094748/Website_related_content.pdf-image-003_ddoot2.png",
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

export default function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    if (scrollWidth <= clientWidth) return

    let scrollPosition = 0
    const scrollSpeed = 0.5
    let animationFrameId: number

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-black">Industry Connections</h2>
          <h3 className="mb-4 text-3xl text-primary font-bold md:text-4xl">OUR PARTNERS</h3>
          <p className="text-muted-foreground">
            We collaborate with leading companies and organizations to provide our students with industry exposure and
            career opportunities.
          </p>
        </div>

        <div className="relative mx-auto w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-hidden py-4 w-full"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex min-w-[150px] items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="relative h-20 w-40">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

