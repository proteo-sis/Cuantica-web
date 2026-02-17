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
      <main className="min-h-screen bg-[var(--color-white-pure)] pt-24 lg:pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="font-league text-4xl md:text-5xl text-[var(--color-black-soft)] mb-4">
            Blog
          </h1>
          <p className="text-[var(--color-black-soft)]/80 text-lg mb-12">
            Reflexiones sobre yoga, meditación y bienestar.
          </p>

          {posts.length === 0 ? (
            <div className="rounded-2xl bg-[var(--color-beige-rose)]/30 border border-[var(--color-beige-rose)] p-8 text-center">
              <p className="text-[var(--color-black-soft)]/80">
                Aún no hay entradas publicadas. Cuando añadas contenido en
                Sanity Studio, aparecerán aquí.
              </p>
              <p className="mt-2 text-sm text-[var(--color-black-soft)]/60">
                Configura <code className="bg-white/50 px-1 rounded">NEXT_PUBLIC_SANITY_PROJECT_ID</code> y publica desde{" "}
                <a
                  href="/studio"
                  className="text-[var(--color-pink-vibrant)] underline"
                >
                  /studio
                </a>
                .
              </p>
            </div>
          ) : (
            <ul className="space-y-10">
              {posts.map((post) => {
                const imageUrl = post.mainImage
                  ? urlFor(post.mainImage).width(720).height(400).fit("max").url()
                  : null;
                return (
                  <li key={post._id}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block rounded-2xl overflow-hidden border border-[var(--color-beige-rose)] bg-[var(--color-white-pure)] hover:shadow-lg transition-shadow"
                    >
                      {imageUrl && (
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={imageUrl}
                            alt=""
                            fill
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 720px"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <time
                          dateTime={post.publishedAt ?? undefined}
                          className="text-sm text-[var(--color-black-soft)]/60"
                        >
                          {post.publishedAt
                            ? format(
                                new Date(post.publishedAt),
                                "d 'de' MMMM, yyyy",
                                { locale: es }
                              )
                            : "Sin fecha"}
                        </time>
                        {post.author?.name && (
                          <span className="text-sm text-[var(--color-black-soft)]/60 before:content-['·'] before:mr-1 before:ml-1">
                            {post.author.name}
                          </span>
                        )}
                        <h2 className="font-league text-2xl mt-2 text-[var(--color-black-soft)] group-hover:text-[var(--color-pink-vibrant)] transition-colors">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="mt-2 text-[var(--color-black-soft)]/80 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
