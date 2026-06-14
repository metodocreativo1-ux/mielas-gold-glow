import { SectionHeader } from "./SectionHeader";

const photos = [1, 2, 5];

export function Rubios() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: "#0d0d0d" }}>
      <SectionHeader
        eyebrow="Resultados reales"
        title={<>Así pueden ser tus resultados después de la formación</>}
      />
      <div className="mt-12 h-px w-12 bg-gold" />

      <div className="mt-12 -mx-6 md:-mx-16 px-6 md:px-16 overflow-x-auto">
        <div className="flex gap-6 pb-4">
          {photos.map((n) => (
            <div
              key={n}
              className="shrink-0 border border-gold/40 overflow-hidden bg-ink"
              style={{ width: 320, height: 400 }}
            >
              <img
                src={`/rubio-${n}.png`}
                alt={`Resultado rubio ${n}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <p
        className="mt-12 text-center font-display italic text-xl md:text-2xl max-w-2xl mx-auto"
        style={{ color: "#B4997B" }}
      >
        No es solo un cambio visual. Es aprender a trabajar con criterio.
      </p>
    </section>
  );
}