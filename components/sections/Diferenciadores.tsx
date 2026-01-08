'use client'

import { FiZap, FiUsers, FiBarChart2, FiShield } from 'react-icons/fi'

export default function Diferenciadores() {
  const diferenciadores = [
    {
      icon: FiZap,
      title: 'Enfoque Integral',
      description: 'No vendemos servicios aislados. Integramos estrategia, marketing y tecnología para crear soluciones completas que funcionan.',
    },
    {
      icon: FiUsers,
      title: 'Orientado a Resultados',
      description: 'Cada proyecto está diseñado para generar impacto medible en tu negocio. Medimos, optimizamos y mejoramos continuamente.',
    },
    {
      icon: FiBarChart2,
      title: 'Basado en Datos',
      description: 'Todas nuestras decisiones se fundamentan en datos reales. No adivinamos; analizamos, probamos y optimizamos.',
    },
    {
      icon: FiShield,
      title: 'Acompañamiento Continuo',
      description: 'No te dejamos solo después del lanzamiento. Te acompañamos en el crecimiento y evolución de tu presencia digital.',
    },
  ]

  return (
    <section id="diferenciadores" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            ¿Por qué Audelabs?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No somos solo otra agencia. Somos tu partner estratégico digital, 
            comprometido con tu éxito a largo plazo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {diferenciadores.map((diferenciador, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600">
                  <diferenciador.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {diferenciador.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {diferenciador.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

