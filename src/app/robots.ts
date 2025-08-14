import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: 'https://cuantica-studio.mx/sitemap.xml',
    host: 'https://cuantica-studio.mx',
  }
}
