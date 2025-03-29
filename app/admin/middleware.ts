// Note: In a real application, you would implement proper authentication
// This is just a placeholder to show where you would add route protection
export { default } from "next/middleware"

export const config = {
  matcher: ["/admin/:path*"],
}

