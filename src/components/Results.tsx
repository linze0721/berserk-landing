import { results } from "../data/results";
import { useReveal } from "../hooks/useReveal";

export default function Results() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""}`}
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">
            · Results
          </p>
          <h2 className="mt-4 text-xl font-mono font-medium tracking-tight text-neutral-300">
            Shipped to real projects
          </h2>
          <span className="heading-accent" aria-hidden="true" />
          <p className="mt-5 text-[13px] font-sans leading-relaxed text-neutral-600">
            Real issues. Real codebases. Real pull requests.
          </p>
        </div>

        <div className={`reveal-stagger ${visible ? "is-visible" : ""} mt-12 grid gap-4 sm:grid-cols-2`}>
          {results.map((pr) => (
            <a
              key={pr.prNumber}
              href={pr.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group block border border-neutral-800/40 bg-neutral-950 p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] font-mono text-neutral-300 tracking-wide">
                  {pr.repo}
                </span>
                <span className="text-[10px] font-mono text-neutral-700">
                  ★ {pr.stars}
                </span>
              </div>
              <p className="text-[13px] font-sans leading-[1.7] text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                {pr.issueTitle}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-700 tracking-wide">
                  #{pr.prNumber}
                </span>
                <span className="text-[10px] font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">
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
