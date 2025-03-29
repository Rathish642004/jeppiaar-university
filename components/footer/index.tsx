import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Jeppiaar University Logo"
                width={60}
                height={60}
                className="h-14 w-auto mr-3 bg-white rounded-full p-1"
              />
              <h2 className="text-xl font-bold">Jeppiaar University</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering students through quality education and innovation for over a decade.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Jeppiaar Nagar, Rajiv Gandhi Salai, Chennai - 600 119, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 44 2450 1060</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@jeppiaaruniversity.ac.in</span>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Academics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Overview</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/engineering-technology"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Engineering & Technology</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/arts-humanities-management"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Arts & Management</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/science-health"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Science & Health</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/physical-education"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Physical Education</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics/aeronautics"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Aeronautics</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Important Links</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Admissions</span>
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Research</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/examinations"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Examinations</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/approvals-affiliations"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Approvals & Affiliations</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Jeppiaar University. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
              <Link href="/admin/login" className="text-gray-400 hover:text-white text-sm transition-colors">
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

