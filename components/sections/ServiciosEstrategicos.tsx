'use client'

import { FiTarget, FiTrendingUp, FiLink } from 'react-icons/fi'

export default function ServiciosEstrategicos() {
  const servicios = [
    {
      icon: FiTarget,
      title: 'Consultoría Estratégica de Negocio e IT',
      description: 'Diagnóstico de negocio y objetivos comerciales, asesoría en arquitectura tecnológica y procesos, y alineación entre negocio, marketing y tecnología.',
      items: [
        'Diagnóstico de negocio y objetivos comerciales',
        'Asesoría en arquitectura tecnológica y procesos',
        'Alineación entre negocio, marketing y tecnología',
      ],
    },
    {
      icon: FiTrendingUp,
      title: 'Marketing Digital y Redes Sociales',
      description: 'Enfoque 360° que incluye definición de estrategia de contenido y canales, acompañamiento en redes sociales e integración de funnels y medición.',
      items: [
        'Definición de estrategia de contenido y canales',
        'Acompañamiento en redes sociales',
        'Integración de funnels y medición',
      ],
    },
    {
      icon: FiLink,
      title: 'Acompañamiento Continuo',
      description: 'Soporte evolutivo, optimización basada en métricas y ajustes estratégicos continuos para asegurar el crecimiento sostenible.',
      items: [
        'Soporte evolutivo',
        'Optimización basada en métricas',
        'Ajustes estratégicos continuos',
      ],
    },
  ]

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Servicios Estratégicos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pensamos y planificamos antes de ejecutar. Estos servicios te ayudan a 
            definir la dirección correcta para tu negocio digital.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary-100 text-primary-600 mb-6">
                <servicio.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {servicio.title}
              </h3>
              <p className="text-gray-600 mb-6">{servicio.description}</p>
              <ul className="space-y-2">
                {servicio.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                    <span className="text-primary-600 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

