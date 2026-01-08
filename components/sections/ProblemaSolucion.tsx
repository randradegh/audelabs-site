export default function ProblemaSolucion() {
  const problemas = [
    {
      title: 'Falta de estrategia digital clara',
      description: 'No sabes por dónde empezar o cómo priorizar tus esfuerzos digitales.',
    },
    {
      title: 'Sitios lentos o desconectados del negocio',
      description: 'Tu presencia digital no refleja tus objetivos comerciales ni genera resultados.',
    },
    {
      title: 'Dependencia de plataformas cerradas',
      description: 'Estás atado a soluciones que limitan tu crecimiento y control.',
    },
    {
      title: 'Escasa medición de resultados',
      description: 'No sabes qué funciona, qué no, ni cómo mejorar continuamente.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            ¿Te sientes identificado?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estos son los problemas más comunes que enfrentan empresas y profesionistas 
            cuando intentan crecer digitalmente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {problemas.map((problema, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-50 p-6 border border-gray-200 hover:border-primary-300 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 text-red-600 mb-4">
                <span className="text-xl font-bold">!</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {problema.title}
              </h3>
              <p className="text-gray-600 text-sm">{problema.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 md:p-12 text-white">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              La solución: un enfoque integral
            </h3>
            <p className="text-lg md:text-xl text-primary-50 leading-relaxed">
              Audelabs combina consultoría estratégica, marketing digital y desarrollo 
              tecnológico para crear soluciones que realmente funcionan. No vendemos 
              servicios aislados; construimos ecosistemas digitales que generan resultados 
              medibles y sostenibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

