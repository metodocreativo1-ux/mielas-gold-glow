import { SectionHeader } from "./SectionHeader";

const items = [
  ["Estructura del cabello", "Fibras, enlaces y composición capilar"],
  ["pH y química", "Su impacto en todos los procesos de coloración"],
  ["Colorimetría completa", "Clasificación, neutralización y manejo de pigmentos"],
  ["Fondos de aclaración", "Lectura del pigmento residual y su gestión"],
  ["Diagnóstico profesional", "Test de mecha real y selección de técnica"],
  ["Técnica gorra microstrong", "Procedimiento paso a paso"],
  ["Empapelado con peine funil y peinqueta", "Técnica precisa de alto nivel"],
  ["Alisados", "Química, riesgos y decisiones técnicas informadas"],
  ["Mantenimiento y fidelización", "Protocolos post-proceso"],
  ["Rentabilidad", "Cómo monetizar y gestionar tu servicio"],
  ["Prácticas reales con modelos", "Aplicación en situaciones reales"],
];

export function Aprender() {
  return (
    <section className="bg-ink py-24 md:py-32 px-6 md:px-16">
      <SectionHeader eyebrow="Contenido" title={<>Qué vas a aprender</>} />
      <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-10">
        {items.map(([title, desc], i) => (
          <div key={i} className="flex gap-5 border-b border-white/5 pb-8">
            <span className="text-gold text-xl leading-none mt-1">✦</span>
            <div>
              <h3 className="font-display text-2xl text-cream mb-1">{title}</h3>
              <p className="text-cream/55 text-sm font-light leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}