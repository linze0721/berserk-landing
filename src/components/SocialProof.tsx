import { useReveal } from "../hooks/useReveal";

const projects = [
  { name: "Supabase", stars: "72K" },
  { name: "Hoppscotch", stars: "80K" },
  { name: "LangChain.js", stars: "18K" },
  { name: "Misskey", stars: "11K" },
];

export default function SocialProof() {
  const { ref, visible } = useReveal();

  return (
    <section className="section-tinted py-20 px-6">
      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} mx-auto max-w-3xl text-center`}
      >
        <p className="mb-8 text-[11px] font-mono uppercase tracking-[0.35em] text-neutral-600">
          Pull requests opened against
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {projects.map((p) => (
            <span
              key={p.name}
              className="text-sm font-mono tracking-wide text-neutral-500"
            >
              {p.name}
              <span className="ml-2 text-[11px] text-neutral-700">
                {p.stars}★
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
