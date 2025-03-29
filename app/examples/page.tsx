import CardDemo from "./card-demo"

export default function ExamplesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Card Examples with See More</h1>
      <p className="mb-8">Below are examples of cards with the See More option that redirects to detail pages.</p>

      <CardDemo />
    </div>
  )
}

