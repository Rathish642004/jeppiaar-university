"use client"
import { CustomLoader } from "./custom-loader"

interface LoadingStateProps {
  message?: string
  fullScreen?: boolean
  minHeight?: string
}

export function LoadingState({
  message = "Loading content...",
  fullScreen = false,
  minHeight = "min-h-[300px]",
}: LoadingStateProps) {
  const containerClasses = fullScreen
    ? "fixed inset-0 bg-white/80 dark:bg-gray-900/80 z-50 flex items-center justify-center"
    : `flex items-center justify-center ${minHeight}`

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center gap-4">
        <CustomLoader />
        {message && <p className="text-primary font-medium">{message}</p>}
      </div>
    </div>
  )
}

