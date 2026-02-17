"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-league text-2xl md:text-3xl text-[var(--color-black-soft)] mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-league text-xl md:text-2xl text-[var(--color-black-soft)] mt-6 mb-2">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-[var(--color-black-soft)]/90 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--color-pink-vibrant)] pl-4 my-4 italic text-[var(--color-black-soft)]/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-[var(--color-black-soft)]/90">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-[var(--color-black-soft)]/90">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlFor(value).width(800).height(500).fit("max").url();
      return (
        <figure className="my-6 rounded-xl overflow-hidden">
          <div className="relative aspect-video w-full">
            <Image
              src={src}
              alt={value.alt ?? "Imagen del artículo"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.alt && (
            <figcaption className="text-sm text-[var(--color-black-soft)]/70 mt-2 text-center">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface Props {
  value: unknown;
}

export default function PortableTextContent({ value }: Props) {
  if (!value) return null;
  return (
    <div className="blog-content">
      <PortableText value={value} components={components} />
    </div>
  );
}
