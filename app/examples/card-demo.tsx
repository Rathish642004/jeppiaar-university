import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CardDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Example card with See More link */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Dr. James Wilson</CardTitle>
          <CardDescription>Professor of Engineering</CardDescription>
        </CardHeader>
        <CardContent seeMoreLink="/faculty/james-wilson">
          <div className="space-y-2">
            <img
              src="/placeholder.svg?height=200&width=400"
              alt="Dr. James Wilson"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p>Dr. Wilson specializes in robotics and has published over 50 research papers in leading journals.</p>
          </div>
        </CardContent>
      </Card>

      {/* More example cards */}
      <Card>
        <CardHeader>
          <CardTitle>Dr. Sarah Johnson</CardTitle>
          <CardDescription>Head of Computer Science</CardDescription>
        </CardHeader>
        <CardContent seeMoreLink="/faculty/sarah-johnson" seeMoreText="View Profile">
          <p>Leading researcher in artificial intelligence with 15+ years of experience in the field.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Research Lab</CardTitle>
          <CardDescription>Advanced Technologies</CardDescription>
        </CardHeader>
        <CardContent seeMoreLink="/facilities/research-lab">
          <p>Our state-of-the-art research lab is equipped with the latest technology for cutting-edge research.</p>
        </CardContent>
        <CardFooter>
          <p>Established in 2010</p>
        </CardFooter>
      </Card>
    </div>
  )
}

