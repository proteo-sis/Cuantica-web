export interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  mainImage,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  return (
    <section className="relative h-[calc(100vh-96px)] mt-24 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mainImage})`,
          filter: "brightness(0.7)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center text-center -mt-20">
        <div className="max-w-4xl px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {title}
            </h1>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
              {subtitle}
            </h2>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
              {description}
            </p>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href={ctaLink}
              className="inline-block px-8 py-4 bg-[var(--color-pink-vibrant)] text-white rounded-full text-lg font-semibold hover:bg-[var(--color-pink-vibrant)]/90 transition-all duration-300 transform hover:scale-105"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
