// Configuración SEO para imágenes de eventos
export const eventImageSEO = {
  'taller-velas-aromaticas': {
    filename: 'taller-velas-aromaticas-fuego-creador.webp',
    alt: 'Taller de velas aromáticas en Cuántica Studio Toluca - Creación de velas naturales con aromas de otoño para Día de Muertos',
    title: 'Taller de Velas Aromáticas: Fuego Creador | Cuántica Studio',
    keywords: ['velas aromáticas', 'taller creativo', 'Día de Muertos', 'meditación', 'Toluca', 'Cuántica Studio'],
    description: 'Aprende a crear velas aromáticas naturales paso a paso con aromas de otoño en nuestro taller especial de Día de Muertos.'
  },
  'curso-pole-flex': {
    filename: 'curso-intensivo-pole-dance-flexibilidad-principiantes.webp',
    alt: 'Curso intensivo de Pole Dance y Flexibilidad en Cuántica Studio - Clases para principiantes sin experiencia previa',
    title: 'Curso Intensivo de Pole & Flex | Cuántica Studio',
    keywords: ['pole dance', 'flexibilidad', 'curso intensivo', 'principiantes', 'fitness', 'Toluca'],
    description: 'Primer curso intensivo de Pole Dance y Flexibilidad dirigido a principiantes. Colaboración con Angel\'s Pole Fitness.'
  },
  'hiking-yoga-cacao': {
    filename: 'hiking-yoga-cacao-acroyoga-naturaleza-toluca.webp',
    alt: 'Evento de Hiking, Yoga, Cacao y Acroyoga en la naturaleza - Cuántica Studio Toluca con fotografía con dron',
    title: 'Hiking, Yoga, Cacao y Acroyoga | Cuántica Studio',
    keywords: ['hiking', 'yoga', 'cacao', 'acroyoga', 'naturaleza', 'fotografía dron', 'Toluca'],
    description: 'Experiencia única en la naturaleza con hiking, yoga, ceremonia de cacao y acroyoga con fotografía profesional con dron.'
  }
};

// Configuración de metadatos para Open Graph
export const generateOpenGraphImage = (eventKey: string) => {
  const config = eventImageSEO[eventKey as keyof typeof eventImageSEO];
  if (!config) return null;

  return {
    url: `/events/${config.filename}`,
    width: 1200,
    height: 630,
    alt: config.alt,
    type: 'image/webp'
  };
};

// Configuración para Twitter Cards
export const generateTwitterImage = (eventKey: string) => {
  const config = eventImageSEO[eventKey as keyof typeof eventImageSEO];
  if (!config) return null;

  return {
    card: 'summary_large_image' as const,
    image: `/events/${config.filename}`,
    alt: config.alt
  };
};
