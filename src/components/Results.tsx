import { results } from "../data/results";
import { useReveal } from "../hooks/useReveal";

export default function Results() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""}`}
        >
          <h2 className="text-lg font-mono font-medium tracking-tight text-neutral-400">
            Shipped to real projects
          </h2>
          <p className="mt-2 text-sm font-sans text-neutral-600">
            Real issues. Real codebases. Real pull requests.
          </p>
        </div>

        <div className={`reveal-stagger ${visible ? "is-visible" : ""} mt-10 grid gap-3 sm:grid-cols-2`}>
          {results.map((pr) => (
            <a
              key={pr.prNumber}
              href={pr.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group block border border-neutral-800/60 bg-neutral-950 p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] font-mono text-neutral-300">
                  {pr.repo}
                </span>
                <span className="text-[11px] font-mono text-neutral-700">
                  ★ {pr.stars}
                </span>
              </div>
              <p className="text-[13px] font-sans leading-relaxed text-neutral-500 group-hover:text-neutral-400 transition-colors">
                {pr.issueTitle}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-700">
                  #{pr.prNumber}
                </span>
                <span className="text-[11px] font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                  View PR →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
