import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import NewsSection from "./news-section"

export default function AboutSection() {
  return (
    <section className="md:py-10 text-primary">
      <div className="container ">
        <div className="grid items-start gap-8 md:gap-12 md:grid-cols-2">
          <div className="order-1 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-primary">Welcome to Jeppiaar University</h2>
              <p className="mb-6 text-primary">
                Established in 2014, Jeppiaar University is one of the premier educational institutions in Tamil Nadu.
                With state-of-the-art infrastructure, distinguished faculty, and innovative programs, we are committed
                to nurturing future leaders and pioneers across disciplines.
              </p>
              <div className="mb-8 space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <p className="text-primary">State-of-the-art infrastructure and modern laboratories</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <p className="text-primary">Highly qualified and experienced faculty members</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <p className="text-primary">Industry-aligned curriculum with focus on practical learning</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <p className="text-primary">Excellent placement record with top companies</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
                  <p className="text-primary">Vibrant campus life with numerous extracurricular activities</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary">
                  <a className="btn btn-secondary" href="/about">
                    Learn More
                  </a>
                </Button>
              </div>
          </div>
          <div className="order-2 md:order-2">
            <div className="h-[500px] md:h-[600px] overflow-hidden">
              <NewsSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

