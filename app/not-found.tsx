import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="mb-6 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <p className="mb-8 text-sm text-gray-500">Error 404</p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
        Return Home
      </Link>
    </div>
  )
}

