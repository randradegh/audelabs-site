export default function BiografiaFundador() {
  return (
    <section id="biografia" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
              Sobre el Fundador
            </h2>
            <p className="text-lg text-gray-600">
              Conoce la visión y experiencia detrás de Audelabs
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-white">AE</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Alex Escalante
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fundador de Audelabs, con una visión clara: ayudar a empresas y 
                  profesionistas a alcanzar sus objetivos mediante soluciones digitales 
                  integrales que realmente funcionan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Con experiencia en consultoría estratégica, marketing digital y desarrollo 
                  tecnológico, Alex ha trabajado con diversas empresas para transformar su 
                  presencia digital y generar resultados medibles. Su enfoque combina pensamiento 
                  estratégico con ejecución técnica de alto nivel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

