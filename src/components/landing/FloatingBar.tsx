export function FloatingBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-ink-alt/95 backdrop-blur border-t border-gold/30">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between gap-3">
        <span className="font-display italic text-cream text-sm md:text-base hidden sm:block">La Alquimia del Color</span>
        <span className="font-display text-gold text-lg md:text-xl">$600.000 <span className="text-tan text-xs tracking-[0.2em] uppercase">ARS</span></span>
        <a
          href="#precio"
          className="bg-gold text-ink hover:bg-cream transition-colors px-5 py-2.5 text-[0.65rem] md:text-xs tracking-[0.25em] uppercase font-medium"
        >
          Inscribirme
        </a>
      </div>
    </div>
  );
}