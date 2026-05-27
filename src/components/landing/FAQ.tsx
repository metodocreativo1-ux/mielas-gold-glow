import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "¿Necesito experiencia previa para realizar el curso?",
    a: "No. La Alquimia del Color está diseñada tanto para profesionales que desean perfeccionarse como para personas que quieren introducirse en el mundo de la colorimetría desde cero.",
  },
  {
    q: "¿Cómo funciona el curso?",
    a: "Una vez realizada la compra, recibirás acceso a la plataforma online donde encontrarás todos los módulos organizados paso a paso, junto con videos, prácticas y material descargable.",
  },
  {
    q: "¿Las clases son en vivo?",
    a: "No. El curso es 100% grabado para que puedas avanzar a tu ritmo y repetir las clases las veces que necesites.",
  },
  {
    q: "¿Qué incluye el curso?",
    a: "7 módulos completos, clases teóricas y prácticas, demostraciones con modelos reales, guías descargables por módulo, material complementario, acceso desde cualquier dispositivo y certificado digital de participación.",
  },
  {
    q: "¿Cuánto tiempo tendré acceso al curso?",
    a: "Acceso ilimitado por 12 meses.",
  },
  {
    q: "¿Voy a recibir certificado?",
    a: "Sí. Al finalizar el curso recibirás un certificado digital de participación.",
  },
  {
    q: "¿Qué diferencia a este curso de otros cursos de colorimetría?",
    a: "La Alquimia del Color no solo enseña técnicas. Esta formación está diseñada para ayudarte a comprender la ciencia detrás del cabello y del color, permitiéndote trabajar con mayor seguridad, precisión y criterio profesional. Integra ciencia, diagnóstico, técnica, práctica real y visión profesional aplicada.",
  },
  {
    q: "¿Este curso sirve si ya trabajo en peluquería?",
    a: "Sí. Gran parte del contenido está orientado a estilistas y coloristas que desean perfeccionar técnica, formulación y diagnóstico profesional.",
  },
  {
    q: "¿Cómo recibiré el acceso luego de comprar?",
    a: "Una vez confirmado el pago, recibirás automáticamente un correo electrónico con las instrucciones de acceso a la plataforma.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16" style={{ backgroundColor: "#0d0d0d" }}>
      <SectionHeader eyebrow="Preguntas frecuentes" title={<>FAQ</>} />
      <div className="mt-12 h-px w-12 bg-gold" />

      <div className="mt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-gold/20"
            >
              <AccordionTrigger className="font-display italic text-gold text-lg md:text-xl py-5 text-left hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-cream/75 font-light text-base leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}