import bioImg from "@/assets/pamela-bio.jpg";

export function SobrePamela() {
  return (
    <section className="bg-ink py-24 md:py-32 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/60" />
          <img
            src={bioImg}
            alt="Pamela Mielas"
            width={896}
            height={1152}
            loading="lazy"
            className="relative w-full aspect-[3/4] object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-12 h-px bg-gold" />
            <span className="eyebrow">Tu instructora</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight">
            Pamela <em className="text-gold italic font-light">Mielas</em>
          </h2>
          <p className="mt-3 text-tan tracking-[0.2em] uppercase text-xs">Colorista & Fundadora de Mielas Hair Design</p>
          <p className="mt-8 text-cream/70 font-light leading-relaxed">
            Colorista profesional especializada en técnicas avanzadas de colorimetría capilar. Fundadora de Mielas Hair Design, espacio donde la ciencia del color y el arte se integran en cada trabajo.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-white/10 py-6">
            <div>
              <div className="font-display text-3xl text-gold">7+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-tan mt-1">Años exp.</div>
            </div>
            <div>
              <div className="font-display text-3xl text-gold">13</div>
              <div className="text-xs uppercase tracking-[0.2em] text-tan mt-1">Países</div>
            </div>
            <div>
              <div className="font-display text-3xl text-gold">100%</div>
              <div className="text-xs uppercase tracking-[0.2em] text-tan mt-1">Online</div>
            </div>
          </div>
          <a
            href="https://instagram.com/mielas_pamela"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block text-cream hover:text-gold transition-colors text-sm tracking-[0.2em]"
          >
            @mielas_pamela ↗
          </a>
        </div>
      </div>
    </section>
  );
}