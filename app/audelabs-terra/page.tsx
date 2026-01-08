'use client'

import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'
import { FiArrowRight, FiCheckCircle, FiDatabase, FiGlobe, FiUsers, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi'


export default function AudelabsTerraPage() {
  const caracteristicas = [
    {
      icon: FiDatabase,
      title: 'Gestión centralizada de propiedades',
      description: 'Administra listados, desarrollos y unidades desde un solo panel, con información siempre actualizada y consistente.',
    },
    {
      icon: FiGlobe,
      title: 'Presentación profesional de tus desarrollos',
      description: 'Sitios rápidos, claros y optimizados para mostrar tus propiedades en desktop y móvil.',
    },
    {
      icon: FiUsers,
      title: 'Captura y calificación de prospectos',
      description: 'Formularios inteligentes que convierten visitas en leads útiles, listos para seguimiento.',
    },
    {
      icon: FiTrendingUp,
      title: 'Base sólida para escalar',
      description: 'Diseñada para crecer contigo: más propiedades, más asesores, más tráfico... sin perder control.',
    },
  ]

  const problemas = [
    {
      title: 'Información dispersa',
      description: 'Herramientas que no se hablan entre sí: portales, CRMs, formularios y campañas que viven aislados.',
    },
    {
      title: 'Muchas visitas, pocos prospectos reales',
      description: 'Pérdida de tiempo operativo: el equipo invierte horas administrando información en lugar de cerrar ventas.',
    },
    {
      title: 'Mala experiencia para el cliente final',
      description: 'Información incompleta, lenta o poco clara genera desconfianza inmediata.',
    },
  ]

  const beneficios = [
    'Datos estructurados y normalizados',
    'Menos errores, menos reprocesos, más claridad',
    'Facilidad de integración con terceros',
    'Base tecnológica preparada para crecer',
    'Tecnología que no te amarra',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                  Audelabs Terra
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
                  Sistema Digital <span className="gradient-text">Inmobiliario</span>
                </h1>
                <p className="text-lg leading-8 text-gray-600 sm:text-xl mb-8">
                  Transforma la forma en que las inmobiliarias presentan y comercializan sus propiedades. 
                  Experiencias digitales claras, rápidas y enfocadas en conversión.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacto"
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Solicitar demostración
                  </Link>
                  <Link
                    href="#caracteristicas"
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    Conocer más
                  </Link>
                </div>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/images/audelabs-terra/835da32b-baf6-473b-80a9-38588634e054.jpeg"
                  fallback="https://placehold.co/800x600/0ea5e9/white?text=Audelabs+Terra+Platform"
                  alt="Audelabs Terra - Plataforma Digital Inmobiliaria"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6">
              El problema no es vender propiedades
            </h2>
            <p className="text-2xl font-semibold text-gray-700 mb-12">
              El problema es cómo las estás vendiendo hoy.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              En la mayoría de las inmobiliarias, la operación digital creció desordenada: 
              portales por un lado, hojas de Excel por otro, WhatsApp explotando y sitios web 
              que no convierten. El resultado es el mismo: esfuerzo duplicado, prospectos mal 
              calificados y oportunidades que se enfrían antes de cerrar.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {problemas.map((problema, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-red-50 border-2 border-red-200"
                >
                  <h3 className="text-xl font-bold text-red-900 mb-3">
                    {problema.title}
                  </h3>
                  <p className="text-gray-700">
                    {problema.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Audelabs Terra resuelve esto
            </h2>
            <p className="text-xl text-primary-50 leading-relaxed">
              Terra convierte el caos en una operación digital clara, escalable y enfocada en resultados.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {caracteristicas.map((caracteristica, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 mb-4">
                  <caracteristica.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {caracteristica.title}
                </h3>
                <p className="text-primary-50 leading-relaxed">
                  {caracteristica.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características Detalladas */}
      <section id="caracteristicas" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
              Todo en un solo sistema
            </h2>
            <p className="text-lg text-gray-600">
              Audelabs Terra: orden, velocidad y resultados medibles. Menos improvisación, más proceso. Menos fricción, más cierres.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Gestión centralizada de propiedades
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Administra listados, desarrollos y unidades desde un solo panel, con información 
                siempre actualizada y consistente. Olvídate de duplicar información en múltiples 
                sistemas o perder datos importantes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Actualización en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Información consistente en todos los canales</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reducción de errores y reprocesos</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/images/audelabs-terra/d0f2da31-a51a-4873-8d53-492694e208d0.jpeg"
                fallback="https://placehold.co/800x600/10b981/white?text=Gestión+Centralizada+de+Propiedades"
                alt="Gestión centralizada de propiedades inmobiliarias"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Presentación profesional de tus desarrollos
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sitios rápidos, claros y optimizados para mostrar tus propiedades en desktop y móvil. 
                Capacidades ilimitadas de personalización, soporte para mapas, varios idiomas y 
                despliegue de cualquier contenido que necesites.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Diseño responsive y optimizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integración de mapas y ubicaciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multiidioma y personalización completa</span>
                </li>
              </ul>
            </div>
            <div className="relative lg:order-1">
              <OptimizedImage
                src="/images/audelabs-terra/ee1a6ff0-5565-4343-b53a-39afe3521cb2.jpeg"
                fallback="https://placehold.co/800x600/3b82f6/white?text=Presentación+Profesional+de+Desarrollos"
                alt="Presentación profesional de desarrollos inmobiliarios"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Captura y calificación de prospectos
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Formularios inteligentes que convierten visitas en leads útiles, listos para seguimiento. 
                Califica automáticamente a tus prospectos y enfoca el esfuerzo de tu equipo en las 
                oportunidades más prometedoras.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Formularios inteligentes y optimizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Calificación automática de leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integración con CRMs y herramientas de seguimiento</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/images/audelabs-terra/835da32b-baf6-473b-80a9-38588634e054.jpeg"
                fallback="https://placehold.co/800x600/8b5cf6/white?text=Captura+y+Calificación+de+Prospectos"
                alt="Captura y calificación de prospectos inmobiliarios"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estándares y Tecnología */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-4">
                Construido sobre estándares
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Listo para escalar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Audelabs Terra está diseñada pensando en el crecimiento a largo plazo de las inmobiliarias. 
                No solo resuelve los problemas de hoy, sino que prepara tu operación digital para integrarse 
                con el ecosistema inmobiliario moderno.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="p-8 rounded-xl bg-primary-50 border border-primary-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-600 text-white">
                    <FiShield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Estándares que dan confianza
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Terra está alineada con los estándares <strong>RESO</strong> (Real Estate Standards Organization), 
                  lo que permite que la información de tus propiedades sea interoperable, consistente y compatible 
                  con otras plataformas, portales y sistemas del sector.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-secondary-50 border border-secondary-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary-600 text-white">
                    <FiZap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Tecnología que no te amarra
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Audelabs Terra evita soluciones cerradas y dependencias innecesarias. La plataforma está 
                  pensada para evolucionar contigo, adaptarse a nuevos mercados y responder a cambios del 
                  negocio sin rehacer todo desde cero.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Esto significa:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Servicio */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6">
              Un modelo que se adapta a tu operación
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Cada inmobiliaria es distinta. Por eso Audelabs Terra se ofrece en niveles de servicio, 
              pensados para acompañarte según el tamaño y madurez de tu operación.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Desde startups inmobiliarias hasta empresas consolidadas, Terra se adapta a tus necesidades 
                actuales y crece contigo hacia el futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto leading-relaxed">
              Si estás buscando ordenar tu operación digital, mejorar la presentación de tus desarrollos 
              y convertir más interés en oportunidades reales, Audelabs Terra puede ser la base que necesitas.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <p className="text-xl font-semibold mb-6">
                Si quieres saber más, agendar una demostración, escríbenos:
              </p>
              <div className="space-y-3 text-lg">
                <p>
                  <a href="mailto:alex.escalante@audelabs.com" className="hover:underline">
                    alex.escalante@audelabs.com
                  </a>
                </p>
                <p>
                  <a href="https://audelabs.com.mx" className="hover:underline">
                    audelabs.com.mx
                  </a>
                </p>
                <p>
                  <a href="https://wa.me/5624381705" className="hover:underline">
                    WhatsApp: +56 24 381 705
                  </a>
                </p>
              </div>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl gap-2"
            >
              Solicitar demostración
              <FiArrowRight className="h-5 w-5" />
            </Link>
            <p className="mt-8 text-primary-100 italic text-lg">
              La tecnología correcta no sólo muestra propiedades: impulsa negocios
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

