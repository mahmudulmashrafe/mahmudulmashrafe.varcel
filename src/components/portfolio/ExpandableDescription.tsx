"use client";

import { useEffect, useRef, useState } from "react";

export function ExpandableDescription({
  text,
  lines = 3,
}: {
  text: string;
  lines?: 3 | 4;
}) {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const checkOverflow = () => {
      if (!expanded) {
        setCanExpand(el.scrollHeight > el.clientHeight + 1);
      }
    };

    checkOverflow();
    const rafId = requestAnimationFrame(checkOverflow);
    window.addEventListener("resize", checkOverflow);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [text, expanded, lines]);

  const clampClass =
    lines === 4
      ? "line-clamp-4 min-h-[5rem]"
      : "line-clamp-3 min-h-[3.75rem]";

  return (
    <div className="mt-2.5 text-xs text-muted-foreground leading-relaxed text-justify">
      <p
        ref={textRef}
        className={expanded ? "text-justify" : `${clampClass} text-justify`}
      >
        {text}
      </p>
      {canExpand && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 text-[11px] font-semibold text-accent hover:underline inline-flex items-center gap-0.5 cursor-pointer"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}
