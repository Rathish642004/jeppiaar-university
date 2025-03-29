import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Jeppiaar University",
  description: "Get in touch with Jeppiaar University. Find our contact information, location, and ways to reach us.",
}

const ContactPage = () => {
  return <ContactPageClient />
}

export default ContactPage

