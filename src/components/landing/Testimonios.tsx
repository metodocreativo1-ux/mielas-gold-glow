import { SectionHeader } from "./SectionHeader";

const testimonios = [
  { img: "/testimonio-1.png", name: "Testimonios de alumnas" },
  { img: "/testimonio-2.png", name: "Testimonios de alumnas" },
  { img: "/testimonio-3.png", name: "Testimonios de alumnas" },
  { img: "/testimonio-4.png", name: "Testimonios de alumnas" },
  { img: "/testimonio-5.png", name: "Testimonios de alumnas" },
];

export function Testimonios() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: "#111111" }}>
      <SectionHeader
        eyebrow="Lo que dicen"
        title={<>Lo que dicen quienes se han formado en Mielas Hair Design</>}
      />
      <div className="mt-12 h-px w-12 bg-gold" />

      <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {testimonios.map((t, i) => (
          <div
            key={i}
            className="border border-gold/30 border-t-2 border-t-gold overflow-hidden"
            style={{ backgroundColor: "#0d0d0d" }}
          >
            <img src={t.img} alt={t.name} className="w-full h-auto object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}