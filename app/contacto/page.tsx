import CTAFormulario from '@/components/sections/CTAFormulario'
import InfoContactoSection from './InfoContactoSection'

export const metadata = {
  title: 'Contacto - Audelabs | Solicita tu Diagnóstico Gratuito',
  description: 'Solicita un diagnóstico gratuito y descubre cómo podemos ayudarte a transformar tu presencia digital. Contacta con Audelabs hoy.',
}

export default function ContactoPage() {

  const preguntasFrecuentes = [
    {
      pregunta: '¿Cuánto tiempo toma un proyecto típico?',
      respuesta: 'El tiempo varía según el alcance. Un proyecto web básico puede tomar 4-8 semanas, mientras que proyectos más complejos pueden extenderse a 3-6 meses. Siempre proporcionamos un timeline detallado en la propuesta inicial.',
    },
    {
      pregunta: '¿Trabajan con empresas de todos los tamaños?',
      respuesta: 'Sí, trabajamos con PYMES, profesionistas independientes y empresas más grandes. Adaptamos nuestros servicios según las necesidades y presupuesto de cada cliente.',
    },
    {
      pregunta: '¿Ofrecen soporte después del lanzamiento?',
      respuesta: 'Absolutamente. El acompañamiento continuo es parte fundamental de nuestro enfoque. Ofrecemos planes de soporte y optimización para asegurar el éxito a largo plazo.',
    },
    {
      pregunta: '¿Cómo funciona el diagnóstico gratuito?',
      respuesta: 'En una sesión de 30-45 minutos, analizamos tu situación actual, identificamos oportunidades y te presentamos recomendaciones estratégicas. Sin compromiso, solo valor.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
              Hablemos de tu <span className="gradient-text">proyecto</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Solicita un diagnóstico gratuito y descubre cómo podemos ayudarte 
              a alcanzar tus objetivos digitales.
            </p>
          </div>
        </div>
      </section>

      <InfoContactoSection />
      <CTAFormulario />

      {/* Preguntas Frecuentes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-lg text-gray-600">
                Resolvemos tus dudas más comunes
              </p>
            </div>

            <div className="space-y-6">
              {preguntasFrecuentes.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.pregunta}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

