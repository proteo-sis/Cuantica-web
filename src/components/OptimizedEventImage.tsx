import Image from 'next/image';
import { motion } from 'framer-motion';
import { BLUR_DATA_URL } from '@/utils/imageOptimization';

interface OptimizedEventImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  priority?: boolean;
}

export default function OptimizedEventImage({ 
  src, 
  alt, 
  title, 
  className = "",
  priority = false 
}: OptimizedEventImageProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src={src}
        alt={alt}
        title={title}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    </motion.div>
  );
}
