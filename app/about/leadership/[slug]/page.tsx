import { notFound } from "next/navigation"
import { LeaderProfileComponent } from "@/components/leadership/leader-profile"
import { getLeaderById } from "@/data/leadership"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const leader = getLeaderById(params.slug)

  if (!leader) {
    return {
      title: "Leader Not Found",
    }
  }

  return {
    title: `${leader.name} - ${leader.title} | Jeppiaar University`,
    description: leader.bio.substring(0, 160),
  }
}

export default function Page({ params }: Props) {
  const leader = getLeaderById(params.slug)

  if (!leader) {
    notFound()
  }

  return <LeaderProfileComponent leader={leader} />
}

