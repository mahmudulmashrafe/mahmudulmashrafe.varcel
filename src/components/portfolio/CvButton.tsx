"use client";

import { Download } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Downloads the CV when one is configured.
 */
export function CvButton({ variant = "solid", className }: { variant?: "solid" | "outline" | "compact"; className?: string }) {
  const [open, setOpen] = useState(false);
  const noteId = useId();

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => setOpen(false), 4000);
    return () => window.clearTimeout(t);
  }, [open]);

  const styles = {
    solid: "h-12 px-6 btn-gradient",
    outline: "h-12 px-6 glass text-foreground hover:bg-surface",
    compact: "h-9 px-4 text-foreground text-sm hover:bg-muted",
  }[variant];

  const base = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors",
    styles,
    className,
  );

  if (site.cv.available) {
    return (
      <a href={site.cv.path} download="MahmudulMashrafe_CV.pdf" target="_blank" rel="noopener noreferrer" className={base}>
        Download CV
        <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
      </a>
    );
  }

  return (
    <span className="relative inline-flex">
      <button type="button" className={base} aria-describedby={open ? noteId : undefined} onClick={() => setOpen((v) => !v)}>
        Download CV
        <Download className="h-4 w-4" aria-hidden />
      </button>
      {open && (
        <span
          id={noteId}
          role="status"
          className="glass-strong absolute left-1/2 top-full z-50 mt-2 w-60 -translate-x-1/2 rounded-xl p-3 text-left text-xs leading-relaxed text-popover-foreground"
        >
          The CV hasn't been uploaded yet. Please reach out via LinkedIn in the meantime.
        </span>
      )}
    </span>
  );
}

