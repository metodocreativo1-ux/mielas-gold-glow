export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <span className="block w-12 h-px bg-gold" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl text-cream leading-[1.1]">{title}</h2>
      {subtitle && <p className="mt-5 text-cream/60 text-lg font-light">{subtitle}</p>}
    </div>
  );
}