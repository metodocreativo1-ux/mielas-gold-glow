export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.18em]">
            <span className="text-gold">M</span>
            <span className="text-cream">IELAS</span>
          </span>
          <span className="text-[0.6rem] tracking-[0.35em] uppercase text-tan mt-0.5">Hair Design</span>
        </a>
        <a
          href="#precio"
          className="hidden sm:inline-flex items-center border border-gold/60 text-cream hover:bg-gold hover:text-ink transition-colors px-5 py-2.5 text-xs tracking-[0.25em] uppercase"
        >
          Quiero inscribirme
        </a>
      </nav>
    </header>
  );
}