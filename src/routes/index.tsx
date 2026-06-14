import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ParaQuien } from "@/components/landing/ParaQuien";
import { Aprender } from "@/components/landing/Aprender";
import { SobrePamela } from "@/components/landing/SobrePamela";
import { PorQueNace } from "@/components/landing/PorQueNace";
import { Rubios } from "@/components/landing/Rubios";
import { Testimonios } from "@/components/landing/Testimonios";
import { Programa } from "@/components/landing/Programa";
import { Precio } from "@/components/landing/Precio";
import { FAQ } from "@/components/landing/FAQ";
import { VideoTrailer } from "@/components/landing/VideoTrailer";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { Footer } from "@/components/landing/Footer";
import { FloatingBar } from "@/components/landing/FloatingBar";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-ink text-cream min-h-screen pb-20">
      <Nav />
      <main>
        <Hero />
        <Reveal><ParaQuien /></Reveal>
        <Reveal><Aprender /></Reveal>
        <Reveal><SobrePamela /></Reveal>
        <Reveal><PorQueNace /></Reveal>
        <Reveal><Rubios /></Reveal>
        <Reveal><Testimonios /></Reveal>
        <Reveal><Programa /></Reveal>
        <Reveal><Precio /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><VideoTrailer /></Reveal>
        <Reveal><CTAFinal /></Reveal>
      </main>
      <Footer />
      <FloatingBar />
    </div>
  );
}
