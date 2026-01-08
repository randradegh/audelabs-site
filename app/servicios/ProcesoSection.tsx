export default function ProcesoSection() {
  const proceso = [
    {
      step: '01',
      title: 'Diagnóstico y Estrategia',
      description: 'Analizamos tu situación actual, objetivos y oportunidades para definir la mejor estrategia digital.',
    },
    {
      step: '02',
      title: 'Diseño y Planificación',
      description: 'Creamos un plan detallado con roadmap, recursos necesarios y métricas de éxito.',
    },
    {
      step: '03',
      title: 'Ejecución y Construcción',
      description: 'Desarrollamos e implementamos las soluciones con metodologías ágiles y mejores prácticas.',
    },
    {
      step: '04',
      title: 'Optimización Continua',
      description: 'Medimos resultados, optimizamos y ajustamos estrategias basándonos en datos reales.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-lg text-gray-600">
            Metodología estructurada que garantiza resultados desde el primer día
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {proceso.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-white p-6 shadow-md border border-gray-200"
            >
              <div className="text-4xl font-bold text-primary-600 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

