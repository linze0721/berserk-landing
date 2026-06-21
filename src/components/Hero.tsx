import PromoVideo from "./PromoVideo";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24 hero-glow">
      <span className="hero-side-text" aria-hidden="true">
        Autonomous Issue Resolution
      </span>

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.5em] text-neutral-600">
          Berserk
        </p>
        <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-[3.5rem] text-white">
          One issue in.
          <br />
          One pull request out.
        </h1>
        <p className="mt-7 max-w-md text-[15px] leading-[1.8] text-neutral-500 font-sans">
          Give Berserk a GitHub issue. It reads the code, writes a fix, runs the
          tests, and opens a pull request.
        </p>

        <PromoVideo />

        <a
          href="#waitlist"
          className="btn-primary mt-12 inline-block px-9 py-3.5 text-[11px] font-mono font-medium tracking-[0.25em]"
        >
          JOIN WAITLIST
        </a>
      </div>
    </section>
  );
}
