# Guía de Migración: Next.js → Astro.js

## Cambios Realizados

### Tecnologías

**Antes:**
- Next.js 14 (React)
- Tailwind CSS
- React Icons
- TypeScript

**Ahora:**
- Astro.js 4
- Alpine.js (para interactividad)
- Preline UI (sistema de diseño)
- Node.js (SSR)
- TypeScript

### Estructura de Archivos

**Antes (Next.js):**
```
app/
  ├── page.tsx
  ├── layout.tsx
  └── [ruta]/
      └── page.tsx
components/
  └── Component.tsx
```

**Ahora (Astro):**
```
src/
  ├── pages/
  │   ├── index.astro
  │   └── [ruta].astro
  ├── layouts/
  │   └── Layout.astro
  └── components/
      └── Component.astro
```

### Componentes

- **React Components** → **Astro Components**
- **React Hooks** → **Alpine.js** (x-data, x-show, etc.)
- **useState/useEffect** → **Alpine.js directives**

### Estilos

- **Tailwind CSS** → **Preline UI** (incluye Tailwind pero con componentes pre-construidos)
- Clases de utilidad similares pero usando Preline UI

### Navegación

- **Next.js Link** → **HTML `<a>` tags** (Astro maneja el routing automáticamente)
- **usePathname** → **Alpine.js** para detectar ruta activa

### Formularios

- **React State** → **Alpine.js x-data**
- **onSubmit handlers** → **@submit.prevent** de Alpine.js

## Instalación

```bash
# Eliminar node_modules y package-lock.json
rm -rf node_modules package-lock.json

# Instalar nuevas dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## Diferencias Clave

1. **Sin JavaScript por defecto**: Astro envía HTML estático, JavaScript solo donde se necesita
2. **Alpine.js para interactividad**: Reemplaza React para componentes interactivos
3. **Preline UI**: Sistema de diseño completo con componentes listos para usar
4. **File-based routing**: Similar a Next.js pero con archivos `.astro`

## Ventajas de Astro

- **Mejor rendimiento**: Menos JavaScript enviado al cliente
- **SEO mejorado**: HTML estático por defecto
- **Más rápido**: Build times más rápidos
- **Flexible**: Puede usar múltiples frameworks si es necesario
