import Terminal from "./Terminal";
import TerminalTyping, { type TerminalTypingLine } from "./TerminalTyping";

const terminalLines: TerminalTypingLine[] = [
  {
    text: "berserk solve supabase/supabase#46950",
    delay: 300,
    typing: true,
    color: "text-white",
    prefix: "$ ",
  },
  {
    text: "analyzing issue...",
    delay: 1200,
    typing: false,
    color: "text-neutral-600",
  },
  {
    text: "4 files changed  +48 -8  tests passed",
    delay: 2000,
    typing: false,
    color: "text-neutral-500",
  },
  {
    text: "PR opened → supabase/supabase#47153",
    delay: 1500,
    typing: false,
    color: "text-neutral-300",
  },
];

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.4em] text-neutral-600">
          Berserk
        </p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl text-white">
          One issue in.
          <br />
          One pull request out.
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-neutral-500 font-sans">
          Give Berserk a GitHub issue. It reads the code, writes a fix, runs the tests, and opens a pull request.
        </p>

        <Terminal title="berserk" className="mt-12 w-full max-w-xl text-left" bodyClassName="min-h-[180px]">
          <TerminalTyping
            lines={terminalLines}
            speed={18}
            className="text-xs leading-6 sm:text-sm sm:leading-7"
          />
        </Terminal>

        <a
          href="#waitlist"
          className="mt-10 inline-block border border-neutral-700 px-7 py-2.5 text-xs font-mono tracking-widest text-neutral-400
                     hover:border-white hover:text-white transition-all duration-300"
        >
          JOIN WAITLIST
        </a>
      </div>
    </section>
  );
}
