"use client"

import { useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "";

function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
        <p className="mb-4">
          {/* Add your terms and conditions text here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam tincidunt, nisl nunc
          tincidunt nunc, vitae aliquam nunc nunc vitae nunc. Sed euismod, nunc id aliquam tincidunt, nisl nunc
          tincidunt nunc, vitae aliquam nunc nunc vitae nunc.
        </p>
        <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Close
        </button>
      </div>
    </div>
  )
}

const ContactPageClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }
  
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
  
    // Get reCAPTCHA token
    const recaptchaToken = (window as any).grecaptcha.getResponse();
  
    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA.");
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken, // Include reCAPTCHA token in the request
        }),
      });
  
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          agreeToTerms: false,
        });
  
        (window as any).grecaptcha.reset(); // Reset reCAPTCHA
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-[#1877F2] hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-[#1DA1F2] hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-[#E4405F] hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-[#0A66C2] hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-[#FF0000] hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>
          <p className="mb-4">
            We'd love to hear from you. Please feel free to contact us with any questions or inquiries.
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Phone:</strong> +91 123 456 7890
            </li>
            <li>
              <strong>Email:</strong> info@jeppiaaruniversity.ac.in
            </li>
            <li>
              <strong>Address:</strong> 123 University Road, Chennai, Tamil Nadu 600001, India
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Office Hours</h2>
          <p className="mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 1:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Add the contact form section here */}
      <section className="mt-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">Contact Form</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <button type="button" onClick={() => setIsModalOpen(true)} className="text-blue-600 hover:underline">
                    terms and conditions
                  </button>
                </label>
              </div>

              <div className="g-recaptcha" data-sitekey={RECAPTCHA_SECRET_KEY}></div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <div className="w-full h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.542821113835!2d80.22399405036272!3d12.864101048106903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525be16dfb6941%3A0x521b129731f0a452!2sJEPPIAAR%20UNIVERSITY!5e1!3m2!1sen!2sin!4v1742296352342!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>


        </div>
      </section>

      {formSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
            <p className="mb-6">Your information has been received successfully. We will contact you soon.</p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </div>
  )
}

export default ContactPageClient

