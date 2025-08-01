export default function strapiImageLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  // Si la URL ya es absoluta, la devolvemos tal cual
  if (src.startsWith('http')) {
    return src;
  }
  
  // Construimos la URL completa para Strapi
  const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
  const imageUrl = `${baseURL}${src}`;
  
  return imageUrl;
} 