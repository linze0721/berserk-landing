export default function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-700 text-[10px] font-mono tracking-wider">
          &copy; 2026 Berserk
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/linze0721/berserk-landing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 text-[10px] font-mono tracking-wider hover:text-neutral-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-neutral-700 text-[10px] font-mono tracking-wider hover:text-neutral-400 transition-colors duration-300"
          >
            Writeup
          </a>
        </div>
      </div>
    </footer>
  );
}
