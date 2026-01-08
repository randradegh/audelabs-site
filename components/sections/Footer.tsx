'use client'

import { FiMail, FiPhone, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="/" className="text-2xl font-bold text-white mb-4 block hover:text-primary-400 transition-colors">
              Audelabs
            </a>
            <p className="text-gray-400 leading-relaxed">
              Consultoría digital integral que combina estrategia, marketing y 
              tecnología para generar resultados reales.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="/servicios" className="hover:text-primary-400 transition-colors">
                  Consultoría Estratégica
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-primary-400 transition-colors">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-primary-400 transition-colors">
                  Desarrollo Web y Móvil
                </a>
              </li>
              <li>
                <a href="/servicios" className="hover:text-primary-400 transition-colors">
                  Acompañamiento Continuo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FiMail className="h-5 w-5 text-primary-400" />
                <a href="mailto:contacto@audelabs.com" className="hover:text-primary-400 transition-colors">
                  contacto@audelabs.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="h-5 w-5 text-primary-400" />
                <a href="tel:+525512345678" className="hover:text-primary-400 transition-colors">
                  +52 55 1234 5678
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Audelabs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

