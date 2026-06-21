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
      className={`overflow-hidden border border-neutral-800 bg-neutral-950 font-mono ${className}`}
    >
      <div className="flex items-center border-b border-neutral-800 px-4 py-2.5">
        <p className="truncate text-[11px] text-neutral-500 tracking-wide">{title}</p>
      </div>
      <div className={`p-5 text-sm leading-7 text-neutral-300 sm:p-6 ${bodyClassName}`}>
        {children}
      </div>
    </section>
  );
}
