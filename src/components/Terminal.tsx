import type { ReactNode } from "react";

type TerminalProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

export default function Terminal({
  title = "~",
  children,
  className = "",
  bodyClassName = "",
}: TerminalProps) {
  return (
    <section
      className={`overflow-hidden border border-neutral-800/50 bg-neutral-950 font-mono ${className}`}
    >
      <div className="flex items-center border-b border-neutral-800/50 px-5 py-3">
        <p className="truncate text-[10px] text-neutral-600 tracking-wider">{title}</p>
      </div>
      <div className={`p-6 text-sm leading-7 text-neutral-300 sm:p-7 ${bodyClassName}`}>
        {children}
      </div>
    </section>
  );
}
