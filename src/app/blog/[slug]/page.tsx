import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  client,
  postBySlugQuery,
  postSlugsQuery,
  urlFor,
} from "@/lib/sanity";
import PortableTextContent from "@/components/blog/PortableTextContent";
import { format } from "date-fns";
import { es } from "date-fns/locale";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: string | null;
  mainImage: { asset?: { _ref: string } } | null;
  author: { name: string; image: unknown; bio?: string } | null;
  body: unknown;
  metaTitle: string | null;
  metaDescription: string | null;
};

export const revalidate = 60;

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
  const slugs = await client.fetch<{ slug: string }[]>(postSlugsQuery);
  return slugs.map(({ slug }) => ({ slug }));
}

async function getPost(slug: string): Promise<Post | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  return client.fetch<Post | null>(postBySlugQuery, { slug });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Entrada no encontrada" };
  const title = post.metaTitle || post.title;
  const description =
    post.metaDescription || post.excerpt || "Entrada del blog de Cuántica Studio.";
  const image = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit("max").url()
    : undefined;
  return {
    title: `${title} | Blog Cuántica Studio`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).fit("max").url()
    : null;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-white-pure)] pt-36 lg:pt-44 pb-16">
        <article className="max-w-3xl mx-auto px-4 md:px-8">
          <header className="mb-8">
            <time
              dateTime={post.publishedAt ?? undefined}
              className="text-sm text-[var(--color-black-soft)]/60"
            >
              {post.publishedAt
                ? format(new Date(post.publishedAt), "d 'de' MMMM, yyyy", {
                    locale: es,
                  })
                : "Sin fecha"}
            </time>
            {post.author?.name && (
              <span className="text-sm text-[var(--color-black-soft)]/60 before:content-['·'] before:mr-1 before:ml-1">
                {post.author.name}
              </span>
            )}
            <h1 className="font-league text-4xl md:text-5xl text-[var(--color-black-soft)] mt-2">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-4 text-lg text-[var(--color-black-soft)]/80">
                {post.excerpt}
              </p>
            )}
          </header>

          {imageUrl && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8">
              <Image
                src={imageUrl}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
          )}

          <div className="prose-cuantica">
            <PortableTextContent value={post.body} />
          </div>

          {post.author && (
            <footer className="mt-12 pt-8 border-t border-[var(--color-beige-rose)]">
              <div className="flex items-start gap-4">
                {!!post.author.image && (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={urlFor(post.author.image).width(56).height(56).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-[var(--color-black-soft)]">
                    {post.author.name}
                  </p>
                  {post.author.bio && (
                    <p className="text-sm text-[var(--color-black-soft)]/70 mt-1">
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            </footer>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
