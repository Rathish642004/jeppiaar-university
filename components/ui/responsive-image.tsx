import Image from "next/image"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps {
  src: string
  alt: string
  aspectRatio?: "auto" | "square" | "video" | "portrait" | "custom"
  customRatio?: string
  fill?: boolean
  className?: string
  containerClassName?: string
  priority?: boolean
  sizes?: string
}

export function ResponsiveImage({
  src,
  alt,
  aspectRatio = "auto",
  customRatio,
  fill = false,
  className,
  containerClassName,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}: ResponsiveImageProps) {
  const aspectRatioClasses = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    custom: customRatio ? `aspect-[${customRatio}]` : "",
  }

  if (fill) {
    return (
      <div className={cn("relative w-full h-full", containerClassName)}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={cn("object-cover", className)}
          priority={priority}
          sizes={sizes}
          {...props}
        />
      </div>
    )
  }

  return (
    <div className={cn("relative w-full", aspectRatioClasses[aspectRatio], containerClassName)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        priority={priority}
        sizes={sizes}
        {...props}
      />
    </div>
  )
}

