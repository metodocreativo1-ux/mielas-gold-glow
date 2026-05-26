import logo from "@/assets/mielas-logo.png";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center leading-none" aria-label="Mielas Hair Design">
          <img
            src={logo}
            alt="Mielas Hair Design"
            className="h-20 md:h-24 w-auto invert"
            loading="eager"
          />
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