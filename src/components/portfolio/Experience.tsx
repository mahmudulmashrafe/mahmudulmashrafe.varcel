"use client";

import { experience } from "@/content/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          id="experience-title"
          index="06"
          eyebrow="Work Experience"
          title={<>Professional <span className="font-editorial">Experience</span></>}
        />

        {/* Centered Timeline Layout */}
        <div className="mt-12 relative mx-auto max-w-3xl">
          {/* Subtle Vertical Timeline Spine */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-6 w-px bg-gradient-to-b from-accent/60 via-border to-border/40 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {experience.map((e, i) => {
              const isCurrent = Boolean(e.current);
              return (
                <Reveal key={e.role} delay={i * 0.1}>
                  <div className="relative pl-11 sm:pl-20">
                    {/* Timeline Node */}
                    <div
                      className={`absolute left-2 sm:left-6 top-5 -translate-x-1/2 flex items-center justify-center rounded-full transition-all duration-300 ${
                        isCurrent
                          ? "h-5 w-5 bg-surface border-2 border-accent shadow-sm shadow-accent/40 ring-4 ring-accent/15"
                          : "h-4 w-4 bg-surface border-2 border-muted-foreground/60 group-hover:border-accent"
                      }`}
                      aria-hidden="true"
                    >
                      {isCurrent && (
                        <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      )}
                    </div>

                    {/* Elevated Card */}
                    <article className="group relative rounded-2xl border border-border/80 bg-surface/90 hover:bg-surface hover:border-accent/50 p-6 sm:p-8 shadow-soft hover:shadow-lg transition-all duration-300 backdrop-blur-xs">
                      {/* Top Header Row with Company Logo */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-4 border-b border-border/60">
                        <div className="flex items-start gap-3.5">
                          {/* Company / Institute Logo */}
                          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-2 shadow-2xs">
                            <img
                              src={e.image}
                              alt={e.org}
                              className="h-full w-full object-contain"
                              loading="lazy"
                              width={48}
                              height={48}
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold text-xs sm:text-sm text-accent">
                                {e.org}
                              </span>
                              {isCurrent && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  Current Role
                                </span>
                              )}
                            </div>
                            <h3 className="font-display text-lg sm:text-xl font-bold text-foreground tracking-tight">
                              {e.role}
                            </h3>
                          </div>
                        </div>

                        {/* Meta Pills (Period & Location) */}
                        <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs text-muted-foreground font-mono shrink-0">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-sunken border border-border/70 text-foreground/80">
                            <Calendar className="h-3 w-3 text-accent" />
                            {e.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] text-muted-foreground">
                            <MapPin className="h-3 w-3 text-muted-foreground/70" />
                            {e.location}
                          </span>
                        </div>
                      </div>

                      {/* Summary Description */}
                      <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify">
                        {e.description}
                      </p>

                      {/* Focus / Responsibilities List */}
                      <div className="mt-6 pt-5 border-t border-border/60">
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase className="h-3.5 w-3.5 text-accent" />
                          <p className="text-xs font-mono uppercase tracking-wider text-foreground/90 font-semibold">
                            {e.listLabel}
                          </p>
                        </div>
                        <ul className="grid gap-2 sm:grid-cols-2 text-xs text-foreground/85">
                          {e.items.map((it) => (
                            <li
                              key={it}
                              className="flex items-start gap-2 p-2 rounded-lg bg-surface-sunken/60 border border-border/40 hover:border-accent/30 transition-colors"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                              <span className="leading-tight">{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
