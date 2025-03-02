import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aman Paswan - Portfolio",
  description: "Full Stack Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

