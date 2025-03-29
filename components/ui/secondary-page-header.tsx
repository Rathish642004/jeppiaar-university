interface SecondaryPageHeaderProps {
  title: string
  description: string
}

export function SecondaryPageHeader({ title, description }: SecondaryPageHeaderProps) {
  return (
    <div className="bg-gray-100 py-8 mb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-primary mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

