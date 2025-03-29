import type React from "react"
export default function PlacementsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen mx-10">
      {/*<div className="bg-primary/5 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-primary">Placements</h1>
          <p className="text-gray-600">Building careers, creating opportunities</p>
        </div>
      </div>*/}
      {children}
    </div>
  )
}

