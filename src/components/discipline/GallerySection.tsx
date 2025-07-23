"use client";

import { useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
}

interface GallerySectionProps {
  title: string;
  images: GalleryImage[];
}

export default function GallerySection({ title, images }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="slideUp">
            <h2 className="text-4xl font-bold text-[var(--color-black-soft)] text-center mb-16">
              {title}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <ScrollReveal
                key={image.url}
                animation="scale"
                delay={index * 0.2}
              >
                <div
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-[var(--color-pink-vibrant)] transition-colors"
              >
                ×
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
