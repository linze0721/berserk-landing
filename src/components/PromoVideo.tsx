// Autoplaying, looping, muted promo video framed like a terminal window.
export default function PromoVideo() {
  return (
    <div className="mt-14 w-full max-w-3xl overflow-hidden border border-neutral-800/50 bg-neutral-950 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
      {/* Terminal title bar to match the landing's window chrome */}
      <div className="flex items-center gap-2.5 border-b border-neutral-800/50 px-5 py-3">
        <span className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full border border-neutral-700" />
          <span className="h-2.5 w-2.5 rounded-full border border-neutral-700" />
          <span className="h-2.5 w-2.5 rounded-full border border-neutral-700" />
        </span>
        <span className="ml-3 font-mono text-[10px] tracking-wider text-neutral-600">
          berserk — demo
        </span>
      </div>

      <video
        className="block w-full"
        src="/promo.mp4"
        poster="/promo-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Berserk turns a GitHub issue into a pull request, automatically."
      />
    </div>
  );
}
