'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Audelabs
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className={`text-sm font-medium transition-colors ${
                isActive('/servicios')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/audelabs-terra"
              className={`text-sm font-medium transition-colors ${
                isActive('/audelabs-terra')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Audelabs Terra
            </Link>
            <Link
              href="/sobre-nosotros"
              className={`text-sm font-medium transition-colors ${
                isActive('/sobre-nosotros')
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contacto"
              className="btn-primary text-sm"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors ${
                  isActive('/')
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/servicios"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors ${
                  isActive('/servicios')
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Servicios
              </Link>
              <Link
                href="/audelabs-terra"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors ${
                  isActive('/audelabs-terra')
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Audelabs Terra
              </Link>
              <Link
                href="/sobre-nosotros"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors ${
                  isActive('/sobre-nosotros')
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-sm w-full text-center"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

