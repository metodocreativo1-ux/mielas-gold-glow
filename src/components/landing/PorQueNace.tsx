export function PorQueNace() {
  return (
    <section className="bg-ink py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="block w-12 h-px bg-gold" />
          <span className="eyebrow">El origen</span>
          <span className="block w-12 h-px bg-gold" />
        </div>
        <h2 className="font-display font-light text-4xl md:text-5xl text-cream leading-snug mb-10">
          Por qué nace{" "}
          <em className="text-gold italic font-light">La Alquimia del Color</em>
        </h2>
        <div className="border-l-2 border-gold pl-8 text-left space-y-5 text-cream/75 font-light leading-relaxed text-base md:text-lg">
          <p>
            Creé esta formación porque vi demasiados profesionales trabajando por repetición,
            dañando cabello y sintiéndose inseguros al formular.
          </p>
          <p className="font-display italic text-cream text-xl md:text-2xl">
            La Alquimia del Color nace para transformar la intuición en criterio técnico.
          </p>
        </div>
      </div>
    </section>
  );
}
