'use client'

import { FiTarget, FiUsers, FiAward } from 'react-icons/fi'

export default function ValoresSection() {
  const valores = [
    {
      icon: FiTarget,
      title: 'Enfoque en Resultados',
      description: 'Cada proyecto está diseñado para generar impacto medible en tu negocio. No trabajamos por trabajar; trabajamos para generar resultados.',
    },
    {
      icon: FiUsers,
      title: 'Colaboración',
      description: 'Creemos en trabajar contigo, no para ti. Tu visión y nuestro expertise se combinan para crear soluciones únicas.',
    },
    {
      icon: FiAward,
      title: 'Excelencia',
      description: 'Nos comprometemos con la más alta calidad en cada proyecto. No aceptamos atajos ni soluciones mediocres.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
            Nuestros Valores
          </h2>
          <p className="text-lg text-gray-600">
            Los principios que guían cada proyecto y cada decisión
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {valores.map((valor, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-white shadow-md border border-gray-200"
            >
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary-100 text-primary-600">
                  <valor.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {valor.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {valor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

