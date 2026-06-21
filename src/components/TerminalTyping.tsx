import { useEffect, useState } from "react";

export type TerminalTypingLine = {
  text: string;
  delay?: number;
  typing?: boolean;
  color?: string;
  prefix?: string;
};

type RenderedLine = TerminalTypingLine & {
  visibleText: string;
};

type TerminalTypingProps = {
  lines: TerminalTypingLine[];
  speed?: number;
  idlePrefix?: string;
  className?: string;
};

export default function TerminalTyping({
  lines,
  speed = 18,
  idlePrefix = "$ ",
  className = "",
}: TerminalTypingProps) {
  const [renderedLines, setRenderedLines] = useState<RenderedLine[]>([]);
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const timers: number[] = [];

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        const timer = window.setTimeout(resolve, duration);
        timers.push(timer);
      });

    const runTypingSequence = async () => {
      setRenderedLines([]);
      setActiveLineIndex(null);
      setIsComplete(false);

      for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
        const line = lines[lineIndex];
        await wait(line.delay ?? 0);

        if (isCancelled) return;

        setRenderedLines((currentLines) => [
          ...currentLines,
          { ...line, visibleText: line.typing === false ? line.text : "" },
        ]);
        setActiveLineIndex(lineIndex);

        if (line.typing === false) {
          setActiveLineIndex(null);
          continue;
        }

        for (let characterIndex = 1; characterIndex <= line.text.length; characterIndex += 1) {
          await wait(speed);

          if (isCancelled) return;

          setRenderedLines((currentLines) =>
            currentLines.map((currentLine, currentIndex) =>
              currentIndex === lineIndex
                ? { ...currentLine, visibleText: line.text.slice(0, characterIndex) }
                : currentLine,
            ),
          );
        }

        setActiveLineIndex(null);
      }

      setIsComplete(true);
    };

    void runTypingSequence();

    return () => {
      isCancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [lines, speed]);

  return (
    <div className={`font-mono ${className}`} aria-live="polite">
      {renderedLines.map((line, index) => (
        <div key={`${index}-${line.text}`} className={line.color ?? "text-white"}>
          {line.prefix ? <span className="text-terminal-secondary">{line.prefix}</span> : null}
          <span>{line.visibleText}</span>
          {activeLineIndex === index ? <span className="cursor-blink text-white">█</span> : null}
        </div>
      ))}
      {isComplete ? (
        <div className="text-white">
          <span className="text-terminal-secondary">{idlePrefix}</span>
          <span className="cursor-blink">█</span>
        </div>
      ) : null}
    </div>
  );
}
