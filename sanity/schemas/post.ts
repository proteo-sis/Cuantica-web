import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Entrada del blog",
  type: "document",
  groups: [
    { name: "content", title: "Contenido", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: [{ type: "author" }],
      group: "content",
    }),
    defineField({
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Resumen",
      type: "text",
      group: "content",
      description: "Breve descripción para listados y SEO",
      rows: 3,
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
      group: "content",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "body",
      title: "Cuerpo",
      type: "array",
      group: "content",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Texto alternativo",
              description: "Importante para accesibilidad y SEO",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "metaTitle",
      title: "Título SEO",
      type: "string",
      group: "seo",
      description: "Si está vacío se usa el título de la entrada",
    }),
    defineField({
      name: "metaDescription",
      title: "Descripción SEO",
      type: "text",
      group: "seo",
      rows: 2,
    }),
  ],
  orderings: [
    {
      title: "Fecha de publicación, nueva primero",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      publishedAt: "publishedAt",
    },
    prepare({ title, author, media, publishedAt }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString("es-MX", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "Sin fecha";
      return {
        title: title || "Sin título",
        subtitle: `${author || "Sin autor"} · ${date}`,
        media,
      };
    },
  },
});
