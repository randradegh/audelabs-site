import Hero from '@/components/sections/Hero'
import ProblemaSolucion from '@/components/sections/ProblemaSolucion'
import Diferenciadores from '@/components/sections/Diferenciadores'
import Link from 'next/link'

export const metadata = {
  title: 'Inicio - Audelabs | Consultoría Digital Integral',
  description: 'Pensamos, construimos y hacemos crecer tu presencia digital. Consultoría estratégica, marketing digital y desarrollo web y móvil de alto desempeño.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemaSolucion />
      <Diferenciadores />
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              ¿Listo para transformar tu presencia digital?
            </h2>
            <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
              Descubre cómo nuestros servicios pueden ayudarte a alcanzar tus objetivos comerciales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl"
              >
                Ver nuestros servicios
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
              >
                Solicitar diagnóstico gratuito
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
