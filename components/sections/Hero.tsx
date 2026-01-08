'use client'

import { FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Pensamos, construimos y hacemos crecer tu{' '}
            <span className="gradient-text">presencia digital</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Consultoría estratégica, marketing digital y desarrollo web y móvil 
            de alto desempeño. Todo en un solo partner que entiende tu negocio.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contacto"
              className="btn-primary text-lg px-8 py-4"
            >
              Solicitar diagnóstico gratuito
            </a>
            <a
              href="/servicios"
              className="btn-secondary text-lg px-8 py-4"
            >
              Conocer servicios
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="/servicios"
              className="flex flex-col items-center text-gray-500 hover:text-primary-600 transition-colors"
              aria-label="Ver servicios"
            >
              <span className="text-sm mb-2">Explorar más</span>
              <FiArrowDown className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

