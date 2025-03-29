import { CustomLoader } from "@/components/ui/custom-loader"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <CustomLoader />
        <p className="text-primary font-medium">Loading Jeppiaar University...</p>
      </div>
    </div>
  )
}

