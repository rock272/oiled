import "./globals.css"
import { Inter } from "next/font/google"
import { Navigation } from "./components/Navigation"
import type React from "react"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Habit Tracker",
  description: "Transform your life with our gamified habit tracking app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
          <div className="container mx-auto p-4">
            <Navigation />
            {children}
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  )
}

