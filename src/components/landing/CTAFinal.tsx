export function CTAFinal() {
  return (
    <section
      className="relative py-28 md:py-40 px-6 text-center overflow-hidden"
      style={{ backgroundColor: "#080808" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--gold) 18%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        <h2 className="font-display font-light text-5xl md:text-7xl text-cream leading-[1.05]">
          El color no se memoriza.
        </h2>
        <h2 className="font-display italic text-gold text-5xl md:text-7xl leading-[1.05] mt-2">
          Se comprende.
        </h2>
        <p className="mt-8 text-cream/75 text-lg font-light leading-relaxed">
          Este puede ser el momento que transforme tu manera de trabajar para siempre.
        </p>
        <a
          href="#precio"
          className="mt-10 inline-flex items-center justify-center gap-3 bg-gold text-ink hover:bg-cream transition-colors gold-glow px-12 py-5 text-xs tracking-[0.3em] uppercase font-medium"
        >
          QUIERO INSCRIBIRME
        </a>
      </div>
    </section>
  );
}