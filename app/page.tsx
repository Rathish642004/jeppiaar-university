import HeroSection from "@/components/home/hero-section"
import FeaturedPrograms from "@/components/home/featured-programs"
import CampusGallery from "@/components/home/campus-gallery"
import StatisticsSection from "@/components/home/statistics-section"
import AboutSection from "@/components/home/about-section"
import PartnersSection from "@/components/home/pattner-section"

console.log("Home page component rendering")

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto py-16 px-10">
        <AboutSection />
        <StatisticsSection />
        <FeaturedPrograms />
        <CampusGallery />
        <PartnersSection />
      </div>
    </>
  )
}

