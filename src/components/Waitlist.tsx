import { useState, type FormEvent } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { ref, visible } = useReveal();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="waitlist"
      className="section-tinted py-32 px-6"
    >
      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} mx-auto max-w-xl text-center`}
      >
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">
          · Early Access
        </p>
        <h2 className="mt-4 text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white">
          Get early access
        </h2>
        <span className="heading-accent mx-auto" aria-hidden="true" />
        <p className="mt-6 text-[13px] font-sans leading-relaxed text-neutral-500">
          Join the waitlist. We'll let you in as capacity opens.
        </p>

        {submitted ? (
          <p className="mt-12 text-sm text-neutral-400 font-mono">
            You're on the list.
          </p>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 bg-transparent border border-neutral-800 px-4 py-3.5 text-sm font-mono text-neutral-300
                           placeholder:text-neutral-700 focus:border-neutral-600 focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto px-8 py-3.5 text-[11px] font-mono font-medium tracking-[0.25em] shrink-0 disabled:opacity-40"
                disabled={loading}
              >
                {loading ? "..." : "JOIN WAITLIST"}
              </button>
            </form>
            {error && (
              <p className="text-red-500 text-xs font-mono mt-3">{error}</p>
            )}
          </>
        )}

        <p className="mt-8 text-neutral-700 text-[10px] font-mono tracking-wide">
          Currently in private beta.
        </p>
      </div>
    </section>
  );
}
