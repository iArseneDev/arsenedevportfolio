import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Stack Developer | Next.js & Node.js Expert',
  description: 'Professional Full Stack Web Developer specializing in building scalable web applications using Next.js, Node.js, MySQL, and Python. Available for freelance projects.',
  keywords: 'full stack developer, next.js developer, node.js developer, react developer, web development',
  openGraph: {
    title: 'Full Stack Developer Portfolio',
    description: 'Building scalable web apps using Next.js, Node.js, MySQL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}