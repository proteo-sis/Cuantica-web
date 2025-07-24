// Mapeo directo para asegurar que los slugs coincidan con los archivos JSON
export function getDisciplineSlug(name: string): string {
  const slugMap: { [key: string]: string } = {
    "Yoga": "yoga",
    "Box": "box",
    "Heels Dance": "heels-dance",
    "Danzas Polinesias": "danzas-polinesias",
    "Meditación y Atención Plena": "meditacion-atencion-plena",
    "Flexibilidad": "flexibilidad"
  };
  
  return slugMap[name] || name.toLowerCase().replace(/\s+/g, "-");
} 