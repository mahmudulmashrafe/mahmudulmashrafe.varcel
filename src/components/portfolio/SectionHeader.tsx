"use client";

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Clean, readable section header.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
  id,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
        <span className="text-accent font-semibold">{index}</span>
        <span>/</span>
        <span>{eyebrow}</span>
      </div>

      <h2 id={id} className="text-h2 mt-3 text-foreground tracking-tight">
        {title}
      </h2>

      {intro && (
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
