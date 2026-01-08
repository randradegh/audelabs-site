import BiografiaFundador from '@/components/sections/BiografiaFundador'
import Diferenciadores from '@/components/sections/Diferenciadores'
import ValoresSection from './ValoresSection'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export const metadata = {
  title: 'Sobre Nosotros - Audelabs | Conoce Nuestro Equipo y Visión',
  description: 'Conoce la historia, visión y valores de Audelabs. Somos tu partner estratégico digital comprometido con tu éxito.',
}

export default function SobreNosotrosPage() {

  const misionVision = {
    mision: 'Ayudar a empresas y profesionistas a transformar su presencia digital mediante soluciones integrales que combinan estrategia, marketing y tecnología, generando resultados medibles y sostenibles.',
    vision: 'Ser el partner estratégico digital de referencia en Latinoamérica, reconocido por nuestro enfoque integral, resultados comprobados y compromiso genuino con el éxito de nuestros clientes.',
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
              Sobre <span className="gradient-text">Audelabs</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Somos más que una agencia. Somos tu partner estratégico digital, 
              comprometido con tu éxito a largo plazo.
            </p>
          </div>
        </div>
      </section>

      <BiografiaFundador />
      <Diferenciadores />

      {/* Misión y Visión */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 p-8 border border-primary-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Nuestra Misión
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {misionVision.mision}
                </p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 border border-secondary-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Nuestra Visión
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {misionVision.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValoresSection />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              ¿Quieres trabajar con nosotros?
            </h2>
            <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Estamos listos para ayudarte a alcanzar tus objetivos digitales. 
              Hablemos de tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl gap-2"
              >
                Contactar ahora
                <FiArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

