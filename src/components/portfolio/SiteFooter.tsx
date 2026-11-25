"use client";

import { ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa6";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-page pb-12 pt-8">
      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-muted-foreground">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-foreground">{site.name}</p>
          <p className="font-mono text-[11px] text-muted-foreground mt-0.5">{site.tagline}</p>
        </div>

        {/* Social Icons Navigation */}
        <nav aria-label="Social Profiles" className="flex items-center gap-2.5">
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="grid place-items-center h-8 w-8 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-accent hover:bg-surface-sunken transition-all shadow-2xs"
          >
            <FaLinkedinIn className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="grid place-items-center h-8 w-8 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-accent hover:bg-surface-sunken transition-all shadow-2xs"
          >
            <FaGithub className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <a
            href={site.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Profile"
            className="grid place-items-center h-8 w-8 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-accent hover:bg-surface-sunken transition-all shadow-2xs"
          >
            <FaXTwitter className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="grid place-items-center h-8 w-8 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-accent hover:bg-surface-sunken transition-all shadow-2xs"
          >
            <FaInstagram className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <a
            href={site.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="grid place-items-center h-8 w-8 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-accent hover:bg-surface-sunken transition-all shadow-2xs"
          >
            <FaFacebookF className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <a
            href={site.email.portal}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email (mail.mahmudulmashrafe.com)"
            className="grid place-items-center h-8 w-8 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-accent hover:bg-surface-sunken transition-all shadow-2xs"
          >
            <FaEnvelope className="h-3.5 w-3.5" aria-hidden="true" />
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
