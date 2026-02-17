import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client, postsQuery, urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const metadata: Metadata = {
  title: "Blog | Cuántica Studio – Yoga, Bienestar y Flexibilidad",
  description:
    "Artículos sobre yoga, meditación, bienestar y vida consciente en Toluca y Metepec.",
  openGraph: {
    title: "Blog | Cuántica Studio",
    description: "Artículos sobre yoga, meditación y bienestar.",
    url: "https://cuantica-studio.mx/blog",
  },
};

export const revalidate = 60;

async function getPosts() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
  return client.fetch<PostPreview[]>(postsQuery);
}

type PostPreview = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: string | null;
  mainImage: { asset?: { _ref: string } } | null;
  author: { name: string; image: unknown } | null;
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-white-pure)] pt-36 lg:pt-44 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h1 className="font-league text-4xl md:text-5xl text-[var(--color-black-soft)] mb-3">
              Blog
            </h1>
            <p className="text-[var(--color-black-soft)]/70 text-lg max-w-lg mx-auto">
              Reflexiones sobre yoga, meditación y bienestar.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-2xl bg-[var(--color-beige-rose)]/30 border border-[var(--color-beige-rose)] p-8 text-center max-w-xl mx-auto">
              <p className="text-[var(--color-black-soft)]/80">
                Aún no hay entradas publicadas. Cuando añadas contenido en
                Sanity Studio, aparecerán aquí.
              </p>
              <p className="mt-2 text-sm text-[var(--color-black-soft)]/60">
                Configura <code className="bg-white/50 px-1 rounded">NEXT_PUBLIC_SANITY_PROJECT_ID</code> y publica desde{" "}
                <Link
                  href="/studio"
                  className="text-[var(--color-pink-vibrant)] underline"
                >
                  /studio
                </Link>
                .
              </p>
            </div>
          ) : (
            <>
              {/* Post destacado (el más reciente) */}
              {posts.length > 0 && (() => {
                const featured = posts[0];
                const featuredImg = featured.mainImage
                  ? urlFor(featured.mainImage).width(800).height(450).fit("max").url()
                  : null;
                return (
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-[var(--color-beige-rose)]
                      bg-[var(--color-white-pure)] hover:shadow-xl transition-all duration-300 mb-12
                      md:grid md:grid-cols-2 md:gap-0"
                  >
                    {featuredImg && (
                      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] w-full overflow-hidden">
                        <Image
                          src={featuredImg}
                          alt=""
                          fill
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-center p-6 md:p-8">
                      <span className="inline-block text-xs font-medium uppercase tracking-wider text-[var(--color-pink-vibrant)] mb-3">
                        Más reciente
                      </span>
                      <h2 className="font-league text-2xl md:text-3xl text-[var(--color-black-soft)] group-hover:text-[var(--color-pink-vibrant)] transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      {featured.excerpt && (
                        <p className="mt-3 text-[var(--color-black-soft)]/70 line-clamp-3 text-base">
                          {featured.excerpt}
                        </p>
                      )}
                      <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-black-soft)]/50">
                        <time dateTime={featured.publishedAt ?? undefined}>
                          {featured.publishedAt
                            ? format(new Date(featured.publishedAt), "d 'de' MMMM, yyyy", { locale: es })
                            : "Sin fecha"}
                        </time>
                        {featured.author?.name && (
                          <span className="before:content-['·'] before:mr-1.5 before:ml-1.5">
                            {featured.author.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })()}

              {/* Grid de tarjetas */}
              {posts.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.slice(1).map((post) => {
                    const imageUrl = post.mainImage
                      ? urlFor(post.mainImage).width(400).height(300).fit("max").url()
                      : null;
                    return (
                      <Link
                        key={post._id}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col rounded-2xl overflow-hidden border border-[var(--color-beige-rose)]
                          bg-[var(--color-white-pure)] hover:shadow-lg hover:-translate-y-1
                          transition-all duration-300"
                      >
                        {imageUrl ? (
                          <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={imageUrl}
                              alt=""
                              fill
                              className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        ) : (
                          <div className="aspect-[4/3] w-full bg-gradient-to-br from-[var(--color-beige-rose)]/40 to-[var(--color-pink-vibrant)]/10 flex items-center justify-center">
                            <span className="text-4xl opacity-30">
                              &#9753;
                            </span>
                          </div>
                        )}
                        <div className="flex flex-col flex-1 p-5">
                          <div className="flex items-center gap-1.5 text-xs text-[var(--color-black-soft)]/50 mb-2">
                            <time dateTime={post.publishedAt ?? undefined}>
                              {post.publishedAt
                                ? format(new Date(post.publishedAt), "d MMM yyyy", { locale: es })
                                : "Sin fecha"}
                            </time>
                            {post.author?.name && (
                              <span className="before:content-['·'] before:mr-1 before:ml-1">
                                {post.author.name}
                              </span>
                            )}
                          </div>
                          <h2 className="font-league text-xl text-[var(--color-black-soft)] group-hover:text-[var(--color-pink-vibrant)] transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h2>
                          {post.excerpt && (
                            <p className="mt-2 text-sm text-[var(--color-black-soft)]/65 line-clamp-2 flex-1">
                              {post.excerpt}
                            </p>
                          )}
                          <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-pink-vibrant)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Leer más
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
