import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Examination | Jeppiaar University",
  description: "Examination information for Jeppiaar University students",
}

export default function ExaminationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  )
}

