"use client";

import { cn } from "@/lib/utils";
import { SkillIcon } from "./SkillIcon";

export function StackList({
  items,
  className,
  label = "Technology stack",
}: {
  items: string[];
  className?: string;
  label?: string;
}) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map((s) => (
        <li
          key={s}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/70 px-2.5 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
        >
          <SkillIcon name={s} className="h-3 w-3 shrink-0" />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}
