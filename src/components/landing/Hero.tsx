import heroImg from "@/assets/pamela-hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 md:pt-0 grid md:grid-cols-2">
      <div className="flex items-center px-6 md:px-16 py-16">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-12 h-px bg-gold" />
            <span className="eyebrow">Mielas Hair Design presenta</span>
          </div>
          <h1 className="font-display font-light text-6xl md:text-[80px] leading-[1.02] tracking-[-0.015em] text-cream">
            La <em className="text-gold font-light italic">Alquimia</em>
            <br /> del Color
          </h1>
          <p className="mt-8 text-cream/70 text-lg leading-[1.8] font-light">
            Mega formación profesional que une ciencia, diagnóstico y técnica para transformar el color desde su esencia.
          </p>

          <div className="mt-10 border-y border-white/10 py-6 flex items-baseline gap-4">
            <span className="text-cream/40 line-through text-sm">$900.000 ARS</span>
            <span className="font-display text-5xl text-gold">$600.000</span>
            <span className="text-tan text-xs tracking-[0.3em] uppercase">ARS</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-[0.2em] uppercase text-tan">
            <span>7 Módulos</span><span className="text-gold/40">·</span>
            <span>Bonus alisado</span><span className="text-gold/40">·</span>
            <span>Clases prácticas</span><span className="text-gold/40">·</span>
            <span>Acceso online</span>
          </div>

          <a
            href="#precio"
            className="mt-10 inline-flex items-center gap-3 bg-gold text-ink hover:bg-cream transition-colors px-8 py-4 text-xs tracking-[0.3em] uppercase font-medium"
          >
            Reservar mi lugar
            <span className="text-base">→</span>
          </a>
        </div>
      </div>

      <div className="relative min-h-[60vh] md:min-h-screen overflow-hidden border-l border-white/5">
        <img
          src={heroImg}
          alt="La Alquimia del Color"
          width={1024}
          height={1408}
          className="absolute inset-0 w-full h-full object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent" />
      </div>
    </section>
  );
}