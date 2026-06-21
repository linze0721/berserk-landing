import { useState, type FormEvent } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    <section id="waitlist" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-lg font-mono font-medium tracking-tight text-neutral-400">
          Get early access
        </h2>

        {submitted ? (
          <p className="text-sm text-neutral-500 font-mono">You're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-neutral-800 px-4 py-2.5 text-sm font-mono text-neutral-300
                         placeholder:text-neutral-700 focus:border-neutral-600 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="border border-neutral-700 px-5 py-2.5 text-xs font-mono tracking-widest text-neutral-400
                         hover:border-white hover:text-white transition-all duration-300 shrink-0 disabled:opacity-40"
              disabled={loading}
            >
              {loading ? "..." : "JOIN"}
            </button>
            {error && <p className="text-red-500 text-xs font-mono mt-1">{error}</p>}
          </form>
        )}

        <p className="text-neutral-700 text-[11px] font-mono">Currently in private beta.</p>
      </div>
    </section>
  );
}
