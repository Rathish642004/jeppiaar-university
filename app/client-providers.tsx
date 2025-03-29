"use client";

import { ScrollToTop } from "@/components/scroll-to-top";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}
