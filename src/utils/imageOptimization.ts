// Configuración de optimización de imágenes para SEO
export const imageOptimizationConfig = {
  // Tamaños recomendados para diferentes tipos de imágenes
  eventImages: {
    width: 800,
    height: 600,
    quality: 85,
    format: 'webp' as const,
  },
  disciplineImages: {
    width: 600,
    height: 400,
    quality: 90,
    format: 'webp' as const,
  },
  heroImages: {
    width: 1200,
    height: 800,
    quality: 95,
    format: 'webp' as const,
  }
};

// Generar nombres de archivos optimizados para SEO
export function generateSEOImageName(title: string, type: 'event' | 'discipline' | 'hero' = 'event'): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Remover guiones múltiples
    .replace(/^-|-$/g, '') // Remover guiones al inicio y final
    + `.${imageOptimizationConfig[`${type}Images`].format}`;
}

// Generar alt text optimizado para SEO
export function generateSEOAltText(title: string, location: string = 'Toluca', type: string = 'evento'): string {
  return `${title} en Cuántica Studio ${location} - ${type} especializado con instructores certificados`;
}

// Metadatos de imagen para SEO
export function generateImageMetadata(imagePath: string, title: string, description: string) {
  return {
    url: imagePath,
    width: 800,
    height: 600,
    alt: generateSEOAltText(title),
    title: `${title} | Cuántica Studio`,
    description: description,
    type: 'image/webp',
    locale: 'es_MX'
  };
}
