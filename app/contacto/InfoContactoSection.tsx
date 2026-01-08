'use client'

import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

export default function InfoContactoSection() {
  const informacionContacto = [
    {
      icon: FiMail,
      title: 'Email',
      content: 'contacto@audelabs.com',
      link: 'mailto:contacto@audelabs.com',
    },
    {
      icon: FiPhone,
      title: 'Teléfono',
      content: '+52 55 1234 5678',
      link: 'tel:+525512345678',
    },
    {
      icon: FiMapPin,
      title: 'Ubicación',
      content: 'Ciudad de México, México',
      link: '#',
    },
    {
      icon: FiClock,
      title: 'Horario',
      content: 'Lun - Vie: 9:00 AM - 6:00 PM',
      link: '#',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {informacionContacto.map((info, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200"
            >
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600">
                  <info.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.link !== '#' ? (
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-600">{info.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

