import type { Metadata } from "next";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import PublicHeader from "@/components/layouts/header";
import Footer from "@/components/sections/Footer";


const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const nunito = Nunito({subsets:['latin'],variable:'--font-heading'});

import { env } from "@/lib/env";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || 'https://d2ndigitalmarketing.in'),
  title: {
    default: "Digital Marketing Agency in Coimbatore | D2N",
    template: "%s | D2N Digital Marketing",
  },
  description: "SEO, Google Ads, Meta Ads, and lead generation for Coimbatore businesses. Call 9787205707 for a free consultation.",
};

import SmoothScrollProvider from "@/components/providers/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, nunito.variable)}>
      <body className="overflow-x-hidden body">
        <SmoothScrollProvider>
          <PublicHeader />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}
