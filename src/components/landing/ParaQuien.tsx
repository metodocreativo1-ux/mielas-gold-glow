import { SectionHeader } from "./SectionHeader";

const items = [
  "Coloristas que buscan subir de nivel técnico",
  "Estilistas que quieren comprender la fibra desde una mirada científica y estética",
  "Profesionales que desean evitar daños y diagnosticar con mayor precisión",
  "Quienes buscan dominar la luminosidad, el brillo y la corrección de color",
  "Todo aquél que desee introducirse en colorimetría a partir de métodos y protocolos probados",
];

export function ParaQuien() {
  return (
    <section className="bg-ink-alt py-24 md:py-32 px-6 md:px-16">
      <SectionHeader eyebrow="Para quién" title={<>¿A quién está dirigido?</>} />
      <div className="mt-16 grid md:grid-cols-5 gap-px bg-gold/20">
        {items.map((text, i) => (
          <div key={i} className="bg-ink-alt p-8 flex flex-col">
            <span className="block w-8 h-px bg-gold mb-6" />
            <span className="font-display italic text-gold text-2xl mb-4">0{i + 1}</span>
            <p className="text-cream/75 text-sm leading-relaxed font-light">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}