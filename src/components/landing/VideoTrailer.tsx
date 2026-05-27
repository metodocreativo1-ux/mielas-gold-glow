export function VideoTrailer() {
  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: "#080808" }}>
      <div className="max-w-[720px] mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-12 h-px bg-gold" />
          <span className="eyebrow">Mirá el trailer</span>
          <span className="block w-12 h-px bg-gold" />
        </div>
        <div
          className="relative w-full border border-gold/50 bg-ink-alt flex items-center justify-center"
          style={{ aspectRatio: "16 / 9" }}
        >
          <div className="flex flex-col items-center gap-4 text-center px-6">
            <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold text-3xl">
              ▶
            </div>
            <p className="text-tan text-xs tracking-[0.25em] uppercase">
              Video trailer — reemplazar con embed de YouTube/Vimeo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}