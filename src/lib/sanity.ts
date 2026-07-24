import { createClient, type SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const hasSanityConfig = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}

export function isSanityConfigured() {
  return hasSanityConfig;
}

// GROQ: listado de entradas publicadas
export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "mainImage": mainImage,
  "author": author->{ name, "image": image }
}`;

// GROQ: una entrada por slug
export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "mainImage": mainImage,
  "author": author->{ name, "image": image, bio },
  body,
  metaTitle,
  metaDescription
}`;

// GROQ: todos los slugs (para generateStaticParams / sitemap)
export const postSlugsQuery = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;
