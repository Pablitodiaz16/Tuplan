import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Cabin } from "next/font/google"

// Initialize the Cabin font
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cabin",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tu Plan - Tu despedida, a tu manera",
  description:
    "Planifica tu despedida con anticipación, desde la tranquilidad de tu casa, sin presiones ni llamadas incómodas.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={cabin.className}>{children}</body>
    </html>
  )
}



import './globals.css'