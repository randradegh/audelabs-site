import ServiciosEstrategicos from '@/components/sections/ServiciosEstrategicos'
import ServiciosEjecucion from '@/components/sections/ServiciosEjecucion'
import ProcesoSection from './ProcesoSection'
import ValoresSection from './ValoresSection'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export const metadata = {
  title: 'Servicios - Audelabs | Consultoría, Marketing y Desarrollo',
  description: 'Servicios integrales de consultoría estratégica, marketing digital y desarrollo web y móvil. Enfoque completo para tu transformación digital.',
}

export default function ServiciosPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
              Nuestros <span className="gradient-text">Servicios</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Soluciones integrales que combinan consultoría estratégica, marketing digital 
              y desarrollo tecnológico para generar resultados reales en tu negocio.
            </p>
          </div>
        </div>
      </section>

      <ServiciosEstrategicos />
      <ServiciosEjecucion />
      <ProcesoSection />
      <ValoresSection />

      {/* Audelabs Terra CTA */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-8 md:p-12 border-2 border-primary-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  ¿Eres una inmobiliaria?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Descubre <strong>Audelabs Terra</strong>, nuestro sistema digital inmobiliario 
                  diseñado específicamente para transformar la forma en que presentas y comercializas propiedades.
                </p>
                <Link
                  href="/audelabs-terra"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-700 hover:shadow-xl gap-2"
                >
                  Conocer Audelabs Terra
                  <FiArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Agendemos una consulta gratuita para discutir cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl gap-2"
            >
              Solicitar consulta gratuita
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

