import { SectionHeader } from "./SectionHeader";

const testimonios = [
  { img: "/testimonio-1.jpg", name: "Nombre, profesión" },
  { img: "/testimonio-2.jpg", name: "Nombre, profesión" },
  { img: "/testimonio-3.jpg", name: "Nombre, profesión" },
];

export function Testimonios() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: "#111111" }}>
      <SectionHeader
        eyebrow="Lo que dicen"
        title={<>Lo que dicen quienes se han formado en Mielas Hair Design</>}
      />
      <div className="mt-12 h-px w-12 bg-gold" />

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {testimonios.map((t, i) => (
          <div
            key={i}
            className="p-8 border border-gold/30 border-t-2 border-t-gold flex flex-col items-center text-center"
            style={{ backgroundColor: "#0d0d0d" }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden border border-gold/40">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="mt-4 text-gold tracking-[0.2em]">★★★★★</div>
            <p className="mt-5 text-cream/80 font-light text-sm leading-relaxed italic">
              "Testimonio de alumna — completar con texto real"
            </p>
            <p className="mt-5 font-display text-cream text-base">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}