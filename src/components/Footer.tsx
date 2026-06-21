export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-10 px-6">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-700 text-[11px] font-mono tracking-wide">
          &copy; 2026 Berserk
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/linze0721/berserk-landing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 text-[11px] font-mono tracking-wide hover:text-neutral-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-neutral-700 text-[11px] font-mono tracking-wide hover:text-neutral-400 transition-colors"
          >
            Writeup
          </a>
        </div>
      </div>
    </footer>
  );
}
