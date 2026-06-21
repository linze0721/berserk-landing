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
        <p className="mb-10 text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">
          Pull requests opened against
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {projects.map((p) => (
            <span
              key={p.name}
              className="text-[13px] font-mono tracking-wider text-neutral-500"
            >
              {p.name}
              <span className="ml-2.5 text-[10px] text-neutral-700">
                {p.stars}★
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
