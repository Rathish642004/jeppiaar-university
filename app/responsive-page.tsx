import HeroSectionResponsive from "@/components/home/hero-section-responsive"
import NewsSection from "@/components/home/news-section"
import EventsSection from "@/components/home/events-section"
import FeaturedProgramsResponsive from "@/components/home/featured-programs-responsive"
import CampusGallery from "@/components/home/campus-gallery"
import StatisticsSectionResponsive from "@/components/home/statistics-section-responsive"
import AboutSection from "@/components/home/about-section"
import PartnersSection from "@/components/home/pattner-section"
import { ResponsiveContainer } from "@/components/ui/responsive-container"
import { ResponsiveGrid } from "@/components/ui/responsive-grid"

export default function ResponsivePage() {
  return (
    <>
      <HeroSectionResponsive />

      <ResponsiveContainer className="py-8 sm:py-12 md:py-16">
        <AboutSection />
        <StatisticsSectionResponsive />
        <FeaturedProgramsResponsive />

        <div className="my-8 sm:my-12 md:my-16">
          <ResponsiveGrid columns={{ sm: 1, md: 2 }} gap={8}>
            <NewsSection />
            <EventsSection />
          </ResponsiveGrid>
        </div>

        <CampusGallery />
        <PartnersSection />
      </ResponsiveContainer>
    </>
  )
}

