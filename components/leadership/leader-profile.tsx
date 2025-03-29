import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { LeaderProfile } from "@/data/leadership"

interface LeaderProfileComponentProps {
  leader: LeaderProfile
}

export function LeaderProfileComponent({ leader }: LeaderProfileComponentProps) {
  if (!leader) return <div>Leader information not available</div>

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Image */}
          <div className="md:col-span-1">
            <div className="sticky top-24 rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <Image
                src={leader.image || "/placeholder.svg"}
                alt={`${leader.name} - ${leader.title}`}
                width={400}
                height={600}
                className="w-full"
              />
              <div className="bg-primary text-white p-4 text-center z-10">
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-sm">{leader.title}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">{leader.title}'s Profile</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl mb-6">{leader.bio}</p>

              {leader.education.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Education</h2>
                  <ul className="list-disc pl-6 mb-6">
                    {leader.education.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {leader.experience.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Professional Experience</h2>
                  <ul className="list-disc pl-6 mb-6">
                    {leader.experience.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {leader.achievements.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Achievements</h2>
                  <ul className="list-disc pl-6 mb-6">
                    {leader.achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {leader.quote && (
                <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                  "{leader.quote}"<footer className="text-right font-bold mt-2">— {leader.name}</footer>
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

