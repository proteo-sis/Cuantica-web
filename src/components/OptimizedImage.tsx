import React from 'react';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({ 
  src, 
  alt, 
  priority = false, 
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
  loading
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      priority={priority}
      quality={85}
      sizes={sizes}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      loading={loading || (priority ? 'eager' : 'lazy')}
      onLoad={(e) => {
        // Marcar la imagen como cargada para métricas de rendimiento
        if (typeof window !== 'undefined' && window.performance) {
          const img = e.target as HTMLImageElement;
          if (img.complete) {
            // La imagen ya está en caché
            return;
          }
        }
      }}
    />
  );
}
