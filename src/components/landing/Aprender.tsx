import { SectionHeader } from "./SectionHeader";

const items = [
  "Comprender la lógica real de la coloración",
  "Diagnosticar correctamente antes de cualquier proceso químico",
  "Entender fondos de aclaración y pigmentos residuales",
  "Crear rubios más limpios y duraderos",
  "Trabajar con más seguridad y criterio técnico",
  "Aprender protocolos reales de decoloración segura",
  "Mejorar la calidad de tus resultados",
  "Generar más confianza en tus clientas",
];

export function Aprender() {
  return (
    <section className="bg-ink py-24 md:py-32 px-6 md:px-16">
      <SectionHeader eyebrow="Resultados" title={<>Qué vas a lograr con esta formación</>} />
      <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-8">
        {items.map((text, i) => (
          <div key={i} className="flex gap-5 border-b border-white/5 pb-6">
            <span className="text-gold text-xl leading-none mt-0.5">·</span>
            <p className="text-cream/85 font-display text-xl md:text-2xl leading-snug">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}