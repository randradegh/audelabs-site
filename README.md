# Audelabs - Sitio Web

Sitio web multi-página para Audelabs, consultoría digital integral especializada en estrategia, marketing digital y desarrollo web y móvil.

## 📋 Descripción

Sitio web profesional construido con Next.js que presenta los servicios de Audelabs y Audelabs Terra (sistema digital inmobiliario). El sitio está optimizado para conversión y organizado según las etapas del funnel de marketing.

## 🚀 Características

- **Single Scroll Design**: Experiencia de navegación fluida y moderna
- **Responsive**: Optimizado para todos los dispositivos
- **Optimizado para Conversión**: Diseñado para generar leads calificados
- **Moderno y Rápido**: Construido con Next.js 14 y Tailwind CSS
- **TypeScript**: Código type-safe y mantenible

## 📋 Estructura del Sitio (Multi-página)

El sitio está organizado según las etapas del funnel de marketing:

### 1. **Inicio** (`/`) - Awareness (Atracción)
- Hero con propuesta de valor principal
- Problema y Solución
- Diferenciadores
- CTAs hacia otras páginas

### 2. **Servicios** (`/servicios`) - Consideration (Educación y Evaluación)
- Servicios Estratégicos (Consultoría, Marketing, Acompañamiento)
- Servicios de Ejecución (Análisis, Diseño, Construcción, Despliegue)
- Proceso de trabajo (4 etapas)
- Beneficios y valores
- CTA hacia contacto

### 3. **Contacto** (`/contacto`) - Conversion (Acción)
- Información de contacto
- Formulario optimizado para conversión
- Preguntas frecuentes
- Reducción de fricción y objeciones

### 4. **Audelabs Terra** (`/audelabs-terra`) - Solución Especializada
- Sistema digital inmobiliario completo
- Gestión centralizada de propiedades
- Presentación profesional de desarrollos
- Captura y calificación de prospectos
- Estándares RESO y tecnología escalable

### 5. **Sobre Nosotros** (`/sobre-nosotros`) - Trust & Retention (Confianza)
- Biografía del fundador
- Diferenciadores
- Misión y Visión
- Valores corporativos
- Construcción de credibilidad

## 🛠️ Tecnologías

- **Next.js 14**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utility-first
- **React Icons**: Iconografía moderna

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## 🎯 Objetivos de Negocio

- Generar oportunidades comerciales calificadas
- Comunicar el enfoque integral de Audelabs
- Reducir fricción en el proceso de conversión
- Construir credibilidad y confianza

## 📊 KPIs Objetivo

- Tasa de conversión visitante → lead: ≥ 5%
- Leads calificados (MQL): ≥ 60%
- Tiempo promedio en página: ≥ 2 minutos
- Tasa de rebote: ≤ 40%

## 📁 Estructura del Proyecto

```
audelabas_site/
├── app/                      # Páginas y rutas (Next.js App Router)
│   ├── audelabs-terra/      # Página de Audelabs Terra
│   ├── contacto/            # Página de contacto
│   ├── servicios/           # Página de servicios
│   ├── sobre-nosotros/      # Página sobre nosotros
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   └── globals.css          # Estilos globales
├── components/              # Componentes React reutilizables
│   ├── sections/           # Componentes de secciones
│   ├── Layout.tsx          # Layout wrapper
│   ├── Navigation.tsx      # Navegación principal
│   └── OptimizedImage.tsx  # Componente de imagen optimizada
├── public/                 # Archivos estáticos
│   └── images/            # Imágenes del sitio
│       └── audelabs-terra/ # Imágenes de Audelabs Terra
├── audelabs.prd.1.2.md    # Documento de requisitos del producto
└── README.md              # Este archivo
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en http://localhost:3000

# Producción
npm run build        # Construye la aplicación para producción
npm start           # Inicia el servidor de producción

# Calidad de código
npm run lint        # Ejecuta ESLint
```

## ⚙️ Variables de Entorno

Si necesitas agregar variables de entorno, crea un archivo `.env.local`:

```env
# Ejemplo de variables de entorno
NEXT_PUBLIC_SITE_URL=https://audelabs.com.mx
NEXT_PUBLIC_API_URL=https://api.audelabs.com
```

## 📝 Notas de Desarrollo

- El formulario de contacto actualmente simula el envío. Debe integrarse con un backend/API real.
- Los datos de contacto en el footer deben actualizarse con información real.
- Considerar agregar analytics (Google Analytics, etc.) para medir KPIs.
- Las imágenes en `/public/images/audelabs-terra/` deben optimizarse antes de producción.

## 🔧 Configuración para Producción

1. Configurar variables de entorno necesarias
2. Optimizar imágenes (usar WebP cuando sea posible)
3. Configurar dominio personalizado
4. Habilitar HTTPS
5. Configurar analytics y tracking
6. Integrar formulario de contacto con backend

## 📄 Licencia

© 2026 Audelabs. Todos los derechos reservados.

## 👥 Contribuir

Este es un proyecto privado de Audelabs. Para contribuciones o sugerencias, contactar al equipo de desarrollo.

