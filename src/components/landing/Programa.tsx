import { SectionHeader } from "./SectionHeader";

const modules: Array<[string, string, string?]> = [
  ["01", "Estructura del Cabello y Diagnóstico"],
  ["02", "pH del Cabello"],
  ["03", "Colorimetría"],
  ["04", "Diagnóstico, Test de Mecha y Selección de Técnica"],
  ["05", "El Universo de la Decoloración", "Volúmenes y tiempos de exposición."],
  ["06", "Mantenimiento del Rubio y Fidelización", "Mantener un rubio perfecto en el tiempo y lograr que esa clienta vuelva una y otra vez."],
  ["07", "Rentabilidad, Gestión y Monetización del Talento", "Cómo vivir de tu talento con dignidad, claridad y proyección."],
];

const practicas = [
  "Técnica de Empapelado con Peine Funil y Peinqueta",
  "Técnica de Gorra Microstrong",
  "Práctica de Coloración con Modelo Real",
  "Práctica Test de Mecha",
];

export function Programa() {
  return (
    <section className="bg-ink-alt py-24 md:py-32 px-6 md:px-16">
      <SectionHeader
        eyebrow="Programa"
        title={<>El recorrido <em className="text-gold italic font-light">formativo</em></>}
        subtitle="7 módulos completos + bonus + clases prácticas con modelos reales"
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {modules.map(([num, title, desc]) => (
          <div key={num} className="bg-ink p-8 group hover:bg-ink-alt transition-colors min-h-[200px] flex flex-col justify-between">
            <span className="eyebrow text-tan">Módulo {num}</span>
            <div className="mt-4">
              <h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors">{title}</h3>
              {desc && <p className="mt-3 text-cream/60 text-sm font-light leading-relaxed">{desc}</p>}
            </div>
          </div>
        ))}
        <div className="bg-ink p-8 border border-gold relative min-h-[200px] flex flex-col justify-between">
          <span className="eyebrow">★ Bonus</span>
          <h3 className="font-display text-2xl text-gold mt-4">Alisado Químico: Comprender para Decidir con Criterio</h3>
        </div>
      </div>

      <div className="mt-16 border border-white/10 bg-ink p-10 md:p-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="block w-12 h-px bg-gold" />
          <span className="eyebrow">Clases prácticas</span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl text-cream mb-10">Manos a la obra con modelos reales</h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {practicas.map((p, i) => (
            <div key={i} className="flex items-start gap-4 border-t border-white/10 pt-5">
              <span className="text-gold font-display italic text-xl">0{i + 1}</span>
              <p className="text-cream/80 font-light">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}