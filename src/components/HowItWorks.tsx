const steps = [
  {
    number: "01",
    title: "Paste an issue URL",
    desc: "Point Berserk at any GitHub issue.",
  },
  {
    number: "02",
    title: "Agent reads, fixes, verifies",
    desc: "Isolated container. Explores the codebase, locates the root cause, patches the code, runs tests.",
  },
  {
    number: "03",
    title: "Get a pull request",
    desc: "A reviewable PR, styled to match the project\u2019s conventions.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto space-y-10">
        <h2 className="text-lg font-mono font-medium tracking-tight text-neutral-400">
          How it works
        </h2>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <span className="text-neutral-700 font-mono text-sm pt-0.5 shrink-0">
                {step.number}
              </span>
              <div>
                <p className="font-mono text-sm text-neutral-200">{step.title}</p>
                <p className="mt-1 text-sm text-neutral-600 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
