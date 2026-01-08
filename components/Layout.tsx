'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import Footer from './sections/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

