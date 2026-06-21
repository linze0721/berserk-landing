import { useReveal } from "../hooks/useReveal";

const differentiators = [
  {
    title: "Isolated by design",
    desc: "Every ticket runs in its own container. No shared state, no cross-contamination.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Runs until it\u2019s done",
    desc: "No turn limits. The agent works the problem until the fix is real.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
];

export default function WhyBerserk() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""}`}
        >
          <h2 className="text-lg font-mono font-medium tracking-tight text-neutral-400">
            Why Berserk
          </h2>
        </div>

        <div className={`reveal-stagger ${visible ? "is-visible" : ""} mt-10 grid gap-4 md:grid-cols-3`}>
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="border border-neutral-800/60 bg-neutral-950/50 p-6"
            >
              <span className="text-neutral-600 mb-4 block">{d.icon}</span>
              <p className="font-mono text-sm text-neutral-200">{d.title}</p>
              <p className="mt-2 text-[13px] text-neutral-600 font-sans leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
