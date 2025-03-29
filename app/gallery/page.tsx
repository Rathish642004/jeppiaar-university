import type { Metadata } from "next"
import GalleryClientPage from "./GalleryClientPage"

export const metadata: Metadata = {
  title: "Gallery | Jeppiaar University",
  description:
    "Explore the visual journey of Jeppiaar University through our gallery of campus, events, and student activities.",
}

export default function GalleryPage() {
  return <GalleryClientPage />
}

