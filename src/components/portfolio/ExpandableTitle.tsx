"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ExpandableTitle({
  title,
  href,
  lines = 3,
  className = "font-display text-base sm:text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors leading-snug",
}: {
  title: string;
  href: string;
  lines?: 2 | 3;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
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
  }, [title, expanded, lines]);

  const clampClass =
    lines === 2
      ? "line-clamp-2 min-h-[2.75rem] sm:min-h-[3.1rem]"
      : "line-clamp-3 min-h-[4.125rem] sm:min-h-[4.65rem]";

  return (
    <div className="mt-3.5">
      <h3
        ref={titleRef}
        className={`${className} ${expanded ? "" : clampClass}`}
      >
        <Link href={href}>{title}</Link>
      </h3>
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
