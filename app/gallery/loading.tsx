export default function GalleryLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        {/* Hero Section Skeleton */}
        <div className="bg-gray-200 animate-pulse h-48 w-full rounded-lg mb-8"></div>

        {/* Categories Skeleton */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 w-24 bg-gray-200 animate-pulse rounded-full"></div>
          ))}
        </div>

        {/* Gallery Items Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-gray-200 animate-pulse h-64 w-full rounded-lg mb-2"></div>
              <div className="bg-gray-200 animate-pulse h-6 w-3/4 rounded mb-2"></div>
              <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
            </div>
          ))}
        </div>

        {/* CTA Skeleton */}
        <div className="bg-gray-200 animate-pulse h-40 w-full rounded-lg"></div>
      </div>
    </div>
  )
}

