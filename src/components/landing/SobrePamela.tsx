import bioImg from "@/assets/pamela-bio.jpg";

export function SobrePamela() {
  return (
    <section className="bg-ink py-24 md:py-32 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border border-gold/60" />
          <img
            src={bioImg}
            alt="Pamela Mielas"
            width={896}
            height={1152}
            loading="lazy"
            className="relative w-full aspect-[3/4] object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-12 h-px bg-gold" />
            <span className="eyebrow">Tu instructora</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight">
            Pamela <em className="text-gold italic font-light">Wolosowicz</em>
          </h2>
          <p className="mt-3 text-tan tracking-[0.2em] uppercase text-xs">Colorista & Fundadora de Mielas Hair Design</p>
          <div className="mt-8 space-y-5 text-cream/70 font-light leading-relaxed text-sm md:text-base">
            <p>
              Pamela Wolosowicz es estilista profesional, especialista en rubios técnicos, colorimetría avanzada y procesos de transformación capilar con enfoque en integridad estructural del cabello.
            </p>
            <p>
              Con una trayectoria de <span className="text-gold">20 años de experiencia</span> dedicada al universo de la peluquería profesional, ha desarrollado una metodología basada en el diagnóstico técnico, la comprensión química del cabello y la creación de rubios personalizados de alta precisión, priorizando siempre la salud de la fibra capilar y la sostenibilidad del resultado.
            </p>
            <p>
              Comenzó su proceso de especialización en colorimetría y técnicas de rubios junto a la reconocida marca <span className="text-cream">RP</span> y el referente internacional <span className="text-cream">Robson Peluquero</span> en el año 2018, profundizando su formación en procesos de decoloración segura, neutralización, fondos de aclaración y diseño estratégico del color.
            </p>
            <p>
              Gracias a su evolución técnica, compromiso profesional y resultados en salón, fue seleccionada como <span className="text-gold italic">Embajadora RP en el año 2020</span>, representando la filosofía de trabajo de la marca y participando activamente en capacitaciones, actualizaciones técnicas y formación profesional.
            </p>
            <p>
              A lo largo de su carrera se ha especializado en técnicas de iluminación, decoloración segura, corrección de color, cobertura de canas y tratamientos de reconstrucción capilar, integrando conocimientos de química cosmética y comportamiento estructural del cabello para abordar cada proceso desde una mirada técnica, estratégica y consciente.
            </p>
            <div className="border-l border-gold/40 pl-5 py-1">
              <p className="mb-3 text-cream/80">Su trabajo se caracteriza por combinar:</p>
              <ul className="space-y-1.5 text-cream/70">
                <li>· Diagnóstico capilar</li>
                <li>· Diseño de luz y sombra</li>
                <li>· Control de fondos de aclaración</li>
                <li>· Neutralización de pigmentos residuales</li>
                <li>· Protocolos seguros de decoloración</li>
              </ul>
            </div>
            <p>
              Además de su experiencia en salón, Pamela se ha enfocado en la formación de profesionales, compartiendo conocimientos técnicos y prácticos con estilistas que buscan elevar su nivel profesional y convertirse en referentes dentro de la industria del color.
            </p>
            <p>
              Es creadora de <em className="text-gold italic">"La Alquimia del Color"</em>, una formación especializada diseñada para enseñar colorimetría, decoloración y transformación capilar desde una perspectiva profunda, profesional y estructural, ayudando a otros estilistas a dejar de trabajar por repetición y comenzar a trabajar con criterio técnico.
            </p>
            <blockquote className="border-t border-b border-gold/30 py-6 my-2">
              <p className="font-display italic text-cream text-lg md:text-xl leading-relaxed">
                "El verdadero lujo en colorimetría no es aclarar el cabello a cualquier costo, sino lograr resultados hermosos respetando la estructura, los tiempos y la identidad de cada clienta."
              </p>
            </blockquote>
            <p>
              Hoy, Pamela continúa desarrollando experiencias educativas, workshops y programas de especialización enfocados en rubios, diagnóstico y salud capilar, posicionándose como una profesional comprometida con elevar el estándar técnico de la peluquería profesional.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-white/10 py-6">
            <div>
              <div className="font-display text-3xl text-gold">20</div>
              <div className="text-xs uppercase tracking-[0.2em] text-tan mt-1">Años exp.</div>
            </div>
            <div>
              <div className="font-display text-3xl text-gold">RP</div>
              <div className="text-xs uppercase tracking-[0.2em] text-tan mt-1">Embajadora</div>
            </div>
            <div>
              <div className="font-display text-3xl text-gold">100%</div>
              <div className="text-xs uppercase tracking-[0.2em] text-tan mt-1">Online</div>
            </div>
          </div>
          <a
            href="https://instagram.com/mielas_pamela"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block text-cream hover:text-gold transition-colors text-sm tracking-[0.2em]"
          >
            @mielas_pamela ↗
          </a>
        </div>
      </div>
    </section>
  );
}