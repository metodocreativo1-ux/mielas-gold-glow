import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ParaQuien } from "@/components/landing/ParaQuien";
import { Aprender } from "@/components/landing/Aprender";
import { Programa } from "@/components/landing/Programa";
import { SobrePamela } from "@/components/landing/SobrePamela";
import { Precio } from "@/components/landing/Precio";
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
        <Reveal><Programa /></Reveal>
        <Reveal><SobrePamela /></Reveal>
        <Reveal><Precio /></Reveal>
      </main>
      <Footer />
      <FloatingBar />
    </div>
  );
}
