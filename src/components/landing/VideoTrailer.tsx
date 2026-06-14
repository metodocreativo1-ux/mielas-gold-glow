export function VideoTrailer() {
  return (
    <section className="py-24 md:py-32 px-6" style={{ backgroundColor: "#080808" }}>
      <div className="max-w-[720px] mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-12 h-px bg-gold" />
          <span className="eyebrow">Te doy la bienvenida</span>
          <span className="block w-12 h-px bg-gold" />
        </div>
        <div
          className="relative w-full border border-gold/50 bg-ink-alt overflow-hidden"
          style={{ aspectRatio: "16 / 9" }}
        >
          <video
            src="/bienvenida.mp4"
            controls
            className="w-full h-full object-cover"
            poster=""
          />
        </div>
      </div>
    </section>
  );
}
