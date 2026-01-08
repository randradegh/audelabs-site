import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audelabs Terra - Sistema Digital Inmobiliario | Audelabs',
  description: 'Transforma la forma en que las inmobiliarias presentan y comercializan sus propiedades. Plataforma digital clara, rápida y enfocada en conversión.',
}

export default function AudelabsTerraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

