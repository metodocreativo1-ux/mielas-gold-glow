const includes = [
  "7 módulos completos en video (acceso de por vida)",
  "Bonus: Alisado Químico — módulo exclusivo",
  "Módulo de clases prácticas con modelos reales",
  "Teoría avanzada + diagnóstico + técnica",
  "Acceso inmediato desde cualquier dispositivo",
  "Actualizaciones incluidas sin costo adicional",
];

export function Precio() {
  return (
    <section id="precio" className="bg-ink-alt py-24 md:py-32 px-6">
      <div className="max-w-[680px] mx-auto bg-ink border-t-2 border-gold p-10 md:p-14 text-center">
        <span className="eyebrow">Inversión</span>
        <div className="mt-8 text-cream/40 line-through text-lg">$900.000 ARS</div>
        <p className="text-tan tracking-[0.3em] uppercase text-[0.65rem] mt-2">Precio de lanzamiento</p>
        <div className="font-display text-7xl md:text-8xl text-gold mt-4 leading-none">$600.000</div>
        <p className="mt-3 text-cream/60 text-sm">Pesos argentinos · Pago único</p>

        <div className="mt-10 border-y border-white/10 py-8 text-left space-y-3">
          {includes.map((i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-gold mt-0.5">✦</span>
              <span className="text-cream/80 font-light text-sm">{i}</span>
            </div>
          ))}
        </div>

        <a
          href="SHOPIFY_PAYMENT_LINK"
          className="mt-10 inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-gold text-ink hover:bg-cream transition-colors px-12 py-5 text-xs tracking-[0.3em] uppercase font-medium"
        >
          Quiero inscribirme ahora →
        </a>
        <p className="mt-6 text-tan/70 text-xs tracking-[0.15em]">
          Acceso online · Aprendé a tu ritmo · Sin fecha de vencimiento
        </p>
      </div>
    </section>
  );
}