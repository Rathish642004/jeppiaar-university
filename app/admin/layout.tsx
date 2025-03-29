import type React from "react"
export const metadata = {
  title: "Admin - Jeppiaar University",
  description: "Admin dashboard for Jeppiaar University",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="admin-layout">{children}</div>
}

