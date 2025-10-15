import type React from "react"
import type { Metadata } from "next"
import { Inter, Open_Sans } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MindfulScreen – Digital Wellbeing & Focus Tracker",
  description:
    "Boost your productivity and nurture healthier tech habits with MindfulScreen. Track screen time, run focus sessions, and reclaim balance—free and easy to use.",
  generator: "v0.app",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "MindfulScreen – Digital Wellbeing & Focus Tracker",
    description: "Track usage, run focus sessions, and restore digital balance. Free and easy to use.",
    url: "https://example.com",
    siteName: "Digicus",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Suspense fallback={<div>Loading...</div>}>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
