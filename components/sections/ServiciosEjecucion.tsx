'use client'

import { FiSearch, FiPenTool, FiCode, FiUploadCloud } from 'react-icons/fi'

export default function ServiciosEjecucion() {
  const servicios = [
    {
      icon: FiSearch,
      title: 'Análisis y Diagnóstico Digital',
      description: 'Evaluamos tu situación actual, identificamos oportunidades y definimos el camino más efectivo hacia tus objetivos.',
    },
    {
      icon: FiPenTool,
      title: 'Diseño UX/UI',
      description: 'Creamos experiencias digitales intuitivas y atractivas que convierten visitantes en clientes y usuarios en embajadores.',
    },
    {
      icon: FiCode,
      title: 'Construcción Web y Móvil',
      description: 'Desarrollamos soluciones tecnológicas robustas, escalables y de alto desempeño para web y dispositivos móviles.',
    },
    {
      icon: FiUploadCloud,
      title: 'Despliegue y Optimización',
      description: 'Lanzamos tu proyecto con las mejores prácticas y lo optimizamos continuamente basándonos en datos reales de uso.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Servicios de Ejecución
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Transformamos estrategia en realidad. Diseño y construcción digital 
            que genera resultados tangibles.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="flex gap-6 rounded-xl bg-gray-50 p-8 border border-gray-200 hover:border-primary-300 transition-all hover:shadow-lg"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-600 text-white">
                  <servicio.icon className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {servicio.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

