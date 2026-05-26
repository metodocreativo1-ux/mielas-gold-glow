export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 py-16 px-6 text-center">
      <div className="flex flex-col items-center leading-none">
        <span className="font-display text-3xl tracking-[0.18em]">
          <span className="text-gold">M</span><span className="text-cream">IELAS</span>
        </span>
        <span className="text-[0.6rem] tracking-[0.35em] uppercase text-tan mt-1">Hair Design</span>
      </div>
      <a
        href="https://instagram.com/mielas_pamela"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block text-cream/70 hover:text-gold transition-colors text-sm tracking-[0.2em]"
      >
        @mielas_pamela ↗
      </a>
      <p className="mt-6 text-cream/40 text-xs tracking-[0.2em] uppercase">
        © {new Date().getFullYear()} Mielas Hair Design
      </p>
    </footer>
  );
}