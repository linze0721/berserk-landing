import { useReveal } from "../hooks/useReveal";

const differentiators = [
  {
    title: "Isolated by design",
    desc: "Every ticket runs in its own container. No shared state, no cross-contamination.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Matches your conventions",
    desc: "PRs adapt to each project\u2019s title format, commit style, and structure.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Runs until it\u2019s done",
    desc: "No turn limits. The agent works the problem until the fix is real.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

export default function WhyBerserk() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""}`}
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">
            · Why Berserk
          </p>
          <h2 className="mt-4 text-xl font-mono font-medium tracking-tight text-neutral-300">
            Why Berserk
          </h2>
          <span className="heading-accent" aria-hidden="true" />
        </div>

        <div className={`reveal-stagger ${visible ? "is-visible" : ""} mt-14 grid gap-5 md:grid-cols-3`}>
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="border border-neutral-800/40 bg-neutral-950/50 p-7"
            >
              <span className="text-neutral-600 mb-5 block">{d.icon}</span>
              <p className="font-mono text-sm text-neutral-200 tracking-wide">
                {d.title}
              </p>
              <p className="mt-3 text-[13px] text-neutral-600 font-sans leading-[1.7]">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
