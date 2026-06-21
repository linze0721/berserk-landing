import { results } from "../data/results";

export default function Results() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto space-y-10">
        <h2 className="text-lg font-mono font-medium tracking-tight text-neutral-400">
          Shipped to real projects
        </h2>

        <div className="space-y-px">
          {results.map((pr) => (
            <a
              key={pr.prNumber}
              href={pr.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-between py-3 border-b border-neutral-900
                         hover:border-neutral-700 transition-colors duration-200 group"
            >
              <div className="flex items-baseline gap-3 min-w-0">
                <span className="text-sm font-mono text-neutral-300 shrink-0">{pr.repo}</span>
                <span className="text-xs text-neutral-700 shrink-0">★ {pr.stars}</span>
              </div>
              <span className="text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors ml-4 shrink-0">
                #{pr.prNumber} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
