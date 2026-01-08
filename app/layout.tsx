import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audelabs - Consultoría Digital, Marketing y Desarrollo Web',
  description: 'Ayudamos a empresas y profesionistas a mejorar sus resultados mediante tecnología, diseño, marketing y acompañamiento estratégico continuo.',
  keywords: 'consultoría digital, marketing digital, desarrollo web, desarrollo móvil, estrategia digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

