export default function Writeup() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-mono font-bold">Read the writeup.</h2>

        <blockquote className="border-l-2 border-terminal-border pl-5 text-terminal-secondary font-sans text-sm leading-relaxed space-y-3">
          <p>
            Benchmark 评估的是"能不能生成正确的 patch"，而不是"能不能把 patch 交到一个真实项目的 maintainer 手里"。
          </p>
          <p>
            这两件事之间的距离比直觉中大得多。
          </p>
        </blockquote>

        <a
          href="#waitlist"
          className="inline-block text-sm font-mono text-terminal-secondary hover:text-white transition-colors"
        >
          Read more →
        </a>
      </div>
    </section>
  );
}
