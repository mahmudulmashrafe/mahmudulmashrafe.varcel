"use client";

import { ArrowDownRight, ArrowUpRight, FileText, Github, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { education } from "@/content/profile";
import { CvButton } from "./CvButton";

export function Hero() {
  const cgpa = education[0]?.score ?? "3.95";

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left Column: Authentic Human Intro */}
        <div>
          {/* Availability & Location Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-sunken px-3.5 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-foreground">{site.availability.label}</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-accent" /> {site.location.short}
            </span>
          </div>

          {/* Heading */}
          <h1 id="hero-title" className="mt-6 text-display tracking-tight text-foreground">
            Hi, I&apos;m <span className="font-editorial">{site.name}</span>.
          </h1>

          <p className="mt-4 font-display text-xl sm:text-2xl font-medium text-foreground/80 tracking-tight">
            Data Science Graduate &amp; Junior Product Analyst
          </p>

          {/* Grounded Summary Paragraph */}
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-[54ch] text-justify">
            I specialize in machine learning research, biomedical signal processing (EEG), and product telemetry.
            Graduated from United International University with a 3.95 CGPA, and currently working at{" "}
            <span className="text-foreground font-medium">bdjobs.com limited</span> on user experience and product intelligence.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CvButton variant="solid" />
            <a href="#projects" className="btn-secondary">
              View Research &amp; Work
              <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-border bg-surface hover:border-accent text-foreground transition-all shadow-xs"
            >
              <Github className="h-4 w-4 text-accent" />
              <span>GitHub (25 Repos)</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </div>

          {/* Grounded Key Milestones */}
          <div className="mt-10 pt-8 border-t border-border grid grid-cols-3 gap-4">
            <div>
              <p className="font-display text-2xl font-bold text-foreground tabular-nums">
                {cgpa} <span className="text-xs font-normal text-muted-foreground">/ 4.00</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground font-mono">UIU Data Science</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-foreground">Bdjobs</p>
              <p className="mt-1 text-xs text-muted-foreground font-mono">Product Analyst</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-foreground">EEG AI</p>
              <p className="mt-1 text-xs text-muted-foreground font-mono">Undergrad Thesis</p>
            </div>
          </div>
        </div>

        {/* Right Column: Clean, Professional Editorial Portrait */}
        <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px]">
          {/* Clean Frame */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-surface shadow-soft">
            <img
              src={site.photo.src}
              alt={site.photo.alt}
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          </div>

          {/* Subtle Verified Card Below Portrait */}
          <div className="mt-4 rounded-2xl border border-border bg-surface p-4 shadow-soft flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-foreground">United International University</p>
              <p className="text-[11px] text-muted-foreground font-mono mt-0.5">B.Sc. in Computer Science &amp; Engineering</p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-accent-soft text-accent">
              Honors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
