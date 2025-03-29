import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import LogoOverlay from "@/components/header/logo";
import { Metadata } from "next";
import ClientProviders from "./client-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeppiaar University",
  description: "Official website of Jeppiaar University",
  metadataBase: new URL("https://jeppiaaruniversity.ac.in"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#3e4c29",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body
      className={`${inter.className} overflow-x-hidden`}
      style={{ overscrollBehavior: "none", userSelect: "none" }}
  >
        <ClientProviders>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-primary"
          >
            Skip to main content
          </a>
          <LogoOverlay />
          <Header />
          <main id="main-content" className="pt-0">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
