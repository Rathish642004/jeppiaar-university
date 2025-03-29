"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const handleReset = () => {
    if (typeof reset === "function") {
      reset()
    } else {
      // Fallback if reset is not a function
      window.location.reload()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
      <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-6 text-center">
        We apologize for the inconvenience. Please try again or contact support if the problem persists.
      </p>
      <div className="flex gap-4">
        <Button onClick={handleReset} variant="default">
          Try again
        </Button>
        <Button onClick={() => (window.location.href = "/")} variant="outline">
          Go to homepage
        </Button>
      </div>
    </div>
  )
}

