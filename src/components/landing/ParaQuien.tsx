import { SectionHeader } from "./SectionHeader";

const items = [
  "Sos colorista y querés elevar tu nivel técnico trabajando con más seguridad, criterio y precisión.",
  "Sos estilista y querés comprender la fibra capilar desde una mirada científica, química y estética.",
  "Buscás evitar daños innecesarios y aprender a diagnosticar correctamente antes de cualquier proceso químico.",
  "Querés dominar la luminosidad, el brillo, los fondos de aclaración y la corrección de color profesional.",
  "Deseás introducirte en la colorimetría a través de métodos, protocolos y procesos reales comprobados en salón.",
];

export function ParaQuien() {
  return (
    <section className="bg-ink-alt py-24 md:py-32 px-6 md:px-16">
      <SectionHeader eyebrow="Para quién" title={<>Este curso es para vos si…</>} />
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