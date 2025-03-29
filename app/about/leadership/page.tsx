"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAdministrationLeaders, getAcademicCouncilLeaders } from "@/data/leadership"

export default function LeadershipPage() {
  const administrationLeaders = getAdministrationLeaders()
  const academicCouncilLeaders = getAcademicCouncilLeaders()

  return (
    <div className="container mx-auto py-7 px-4">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl text-primary font-bold mb-4">Leadership</h1>
        <p className="text-xl text-gray-600">
          Meet the visionary leaders guiding Jeppiaar University towards excellence and innovation.
        </p>
      </div>

      <Tabs defaultValue="administration" className="mb-16">
        <TabsContent value="administration">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {administrationLeaders.map((leader) => (
              <Card key={leader.id} className="overflow-hidden">
                <div className="relative h-80">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-gray-600 mb-4">{leader.title}</p>
                  <p className="text-sm text-gray-700 line-clamp-3">{leader.bio}</p>
                  <div className="mt-4">
                    <Link
                      href={`/about/leadership/${leader.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                    >
                      See More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

