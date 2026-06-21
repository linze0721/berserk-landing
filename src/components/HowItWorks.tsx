import { useReveal } from "../hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "Paste an issue URL",
    desc: "Point Berserk at any GitHub issue.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Agent reads, fixes, verifies",
    desc: "Isolated container. Explores the codebase, locates the root cause, patches the code, runs tests.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get a pull request",
    desc: "A reviewable PR, styled to match the project\u2019s conventions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section className="border-t border-neutral-900 bg-[#0a0a0a] py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""}`}
        >
          <h2 className="text-lg font-mono font-medium tracking-tight text-neutral-400">
            How it works
          </h2>
        </div>

        <div className={`reveal-stagger ${visible ? "is-visible" : ""} mt-10 grid gap-4 md:grid-cols-3`}>
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-neutral-800/60 bg-neutral-950 p-6 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-neutral-600">{step.icon}</span>
                <span className="text-neutral-700 font-mono text-[11px] tracking-wider">
                  {step.number}
                </span>
              </div>
              <p className="font-mono text-sm text-neutral-200">
                {step.title}
              </p>
              <p className="mt-2 text-[13px] text-neutral-600 font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
