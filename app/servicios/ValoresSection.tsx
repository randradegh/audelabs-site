'use client'

import { FiCheckCircle } from 'react-icons/fi'

export default function ValoresSection() {
  const beneficios = [
    'Enfoque integral que conecta estrategia, marketing y tecnología',
    'Metodología probada con resultados medibles',
    'Equipo multidisciplinario con experiencia comprobada',
    'Acompañamiento continuo más allá del lanzamiento',
    'Transparencia total en procesos y resultados',
    'Soluciones escalables que crecen con tu negocio',
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
              ¿Por qué elegir nuestros servicios?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-gray-50 border border-gray-200"
              >
                <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

