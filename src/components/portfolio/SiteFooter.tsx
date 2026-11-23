"use client";

import { ArrowUp } from "lucide-react";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-page pb-12 pt-8">
      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          <p className="font-semibold text-foreground">{site.name}</p>
          <p className="font-mono text-[11px] text-muted-foreground mt-0.5">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-5 text-xs font-mono">
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href={site.socials.x} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            X
          </a>
          <a href={`mailto:${site.email.address}`} className="hover:text-foreground transition-colors">
            Email
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px]">© {year}</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer"
          >
            Top <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
