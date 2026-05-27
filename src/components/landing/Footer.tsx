import logo from "@/assets/mielas-logo.png";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 py-16 px-6 text-center">
      <img
        src={logo}
        alt="Mielas Hair Design"
        className="h-[72px] md:h-[80px] w-auto invert mx-auto"
        loading="lazy"
      />
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