import type React from "react";
import type { Metadata, Viewport } from "next";
import ClientComponent from "./client";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeppiaar University",
  description: "Official website of Jeppiaar University",
  metadataBase: new URL("http://localhost:3000"),
  generator: "v0.dev",
};

// ✅ Move viewport settings to a separate export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3e4c29", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientComponent>{children}</ClientComponent>;
}
