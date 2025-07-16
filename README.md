# Cuántica Studio - Landing Page

Una landing page moderna y elegante para Cuántica Studio, un centro de bienestar holístico dedicado a promover el equilibrio físico, mental y emocional a través de prácticas integrativas.

## 🎨 Características

- **Diseño Moderno**: Interfaz limpia y elegante con gradientes y animaciones suaves
- **Responsive**: Optimizado para todos los dispositivos
- **UX/UI Enfocado**: Experiencia de usuario intuitiva y atractiva
- **Componentes Modulares**: Arquitectura escalable y mantenible
- **Animaciones CSS**: Efectos visuales suaves sin dependencias externas
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🏗️ Arquitectura JAMstack

Este proyecto está diseñado para funcionar como parte de una arquitectura JAMstack con Strapi CMS:

```
my-app/
│
├── apps/                        # Múltiples aplicaciones desplegables
│   ├── web/                     # Aplicación frontend Next.js (este proyecto)
│   │   ├── pages/               # Rutas de páginas (blog, eventos)
│   │   ├── components/          # Componentes UI reutilizables
│   │   ├── lib/                 # Clientes API, helpers
│   │   └── public/              # Assets estáticos
│   │
│   └── cms/                     # Aplicación Strapi CMS (Dockerizada)
│       ├── api/                 # Tipos de contenido (blog, eventos, etc.)
│       ├── config/              # Configuración del CMS
│       └── extensions/          # Lógica personalizada de Strapi
│
├── packages/                    # Código/bibliotecas compartidas
│   ├── ui/                      # Componentes UI compartidos (opcional)
│   ├── hooks/                   # React hooks
│   └── utils/                   # Funciones/helpers comunes
│
├── scripts/                     # Scripts de despliegue (CI/CD, backups)
│
├── docker/                      # Dockerfiles y configuraciones NGINX
│   ├── docker-compose.yml
│   └── nginx/
│       └── default.conf
│
├── prisma/                      # (opcional) Si agregas Prisma ORM
│   ├── schema.prisma
│   └── migrations/
│
├── .env                         # Variables de entorno raíz
├── README.md
└── package.json                 # Para herramientas de monorepo (si es necesario)
```

## 🚀 Tecnologías Utilizadas

- **Next.js 15**: Framework de React para el frontend
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Framework de CSS utility-first
- **CSS Animations**: Animaciones personalizadas sin dependencias
- **Responsive Design**: Diseño adaptativo para todos los dispositivos

## 📦 Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone <repository-url>
   cd web
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## 🏃‍♂️ Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css              # Estilos globales y animaciones
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página principal
├── components/                  # Componentes reutilizables
│   ├── Hero.tsx                 # Sección hero principal
│   ├── About.tsx                # Sección "Qué es Cuántica Studio"
│   ├── Services.tsx             # Sección de servicios/prácticas
│   ├── Testimonials.tsx         # Testimonios de clientes
│   ├── Contact.tsx              # Formulario de contacto
│   └── Footer.tsx               # Pie de página
└── lib/                         # Utilidades y helpers
```

## 🎨 Componentes

### Hero

- Banner principal con animaciones de fondo
- Llamadas a la acción prominentes
- Diseño responsive y atractivo

### About

- Explicación detallada de Cuántica Studio
- Características principales con iconos
- Diseño de tarjetas con efectos visuales

### Services

- Grid de servicios ofrecidos
- Iconos y gradientes personalizados
- Efectos hover interactivos

### Testimonials

- Testimonios de clientes con avatares
- Sistema de calificación con estrellas
- CTA integrado para conversión

### Contact

- Formulario de contacto funcional
- Información de contacto y horarios
- Diseño con glassmorphism

### Footer

- Enlaces de navegación
- Redes sociales
- Información legal

## 🎯 Características UX/UI

### Diseño Visual

- **Paleta de Colores**: Gradientes púrpura-rosa para transmitir calma y bienestar
- **Tipografía**: Inter font para mejor legibilidad
- **Espaciado**: Sistema de espaciado consistente
- **Iconografía**: Iconos SVG personalizados

### Interactividad

- **Hover Effects**: Efectos suaves en botones y tarjetas
- **Animaciones**: Transiciones CSS para elementos
- **Responsive**: Adaptación perfecta a todos los dispositivos
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

### Performance

- **Optimización de Imágenes**: Next.js Image component
- **CSS Optimizado**: Tailwind CSS purged
- **Lazy Loading**: Carga diferida de componentes
- **SEO Friendly**: Meta tags y estructura semántica

## 🔧 Configuración para Strapi

Para integrar con Strapi CMS, necesitarás:

1. **Configurar Strapi**:

   ```bash
   # En el directorio cms/
   npx create-strapi-app@latest cms --quickstart
   ```

2. **Crear tipos de contenido**:

   - Blog posts
   - Eventos/Clases
   - Testimonios
   - Servicios
   - Instructores

3. **Configurar API endpoints**:

   ```javascript
   // lib/api.js
   const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

   export async function fetchAPI(endpoint) {
     const res = await fetch(`${STRAPI_URL}/api${endpoint}`);
     const data = await res.json();
     return data;
   }
   ```

4. **Variables de entorno**:
   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   STRAPI_API_TOKEN=your-api-token
   ```

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
# Subir la carpeta .next a Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Responsive Design

El sitio está optimizado para:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Personalización

### Colores

Los colores principales están definidos en `globals.css`:

```css
:root {
  --purple-600: #8b5cf6;
  --pink-600: #ec4899;
  --gradient-primary: linear-gradient(to right, #8b5cf6, #ec4899);
}
```

### Animaciones

Las animaciones personalizadas están en `globals.css`:

- `fadeIn`: Animación de aparición suave
- `slideInLeft/Right`: Deslizamiento desde los lados
- `blob`: Animación de fondo orgánica

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Cuántica Studio - [hola@cuanticastudio.com](mailto:hola@cuanticastudio.com)

---

Desarrollado con ❤️ para Cuántica Studio
