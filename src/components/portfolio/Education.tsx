"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/content/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          id="education-title"
          index="05"
          eyebrow="Academic Milestones"
          title={<>Formal <span className="font-editorial">Education</span></>}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.06} className="h-full">
              <article className="rounded-2xl border border-border bg-surface p-6 shadow-soft hover:border-border-strong transition-all flex flex-col justify-between h-full">
                <div>
                  {/* Institute Crest & Date Badge */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-2">
                      <img
                        src={e.image}
                        alt={e.institution}
                        className="h-full w-full object-contain"
                        loading="lazy"
                        width={56}
                        height={56}
                      />
                    </div>

                    <span className="font-mono text-[11px] rounded-full border border-border bg-surface-sunken px-3 py-1 text-muted-foreground">
                      {e.period}
                    </span>
                  </div>

                  {/* Program / Degree Name: Exactly 2 lines (min-h keeps blank 2nd line if 1 line) */}
                  <h3 className="mt-5 font-display text-base font-bold text-foreground line-clamp-2 min-h-[3rem] leading-snug">
                    {e.degree}
                  </h3>

                  {/* Institution Name: Exactly 2 lines (min-h keeps blank 2nd line if 1 line) */}
                  <p className="mt-1.5 text-xs font-semibold text-accent line-clamp-2 min-h-[2.25rem] leading-relaxed">
                    {e.institution}
                  </p>

                  {e.location && (
                    <p className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
                      <MapPin className="h-3 w-3 shrink-0 text-accent" />
                      <span>{e.location}</span>
                    </p>
                  )}

                  <div className="mt-3.5">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-sunken px-2.5 py-1 text-xs text-foreground/80 font-medium">
                      <GraduationCap className="h-3 w-3 text-accent" />
                      {e.detailLabel}: {e.detail}
                    </span>
                  </div>

                  {e.thesis && (
                    <div className="mt-4 rounded-xl border border-border bg-surface-sunken p-3 text-xs leading-relaxed text-muted-foreground text-justify">
                      <span className="font-semibold text-foreground block mb-0.5">B.Sc. Thesis:</span>
                      {e.thesis}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">{e.scoreLabel}</span>
                  <span className="font-display text-lg font-bold text-foreground">
                    {e.score}
                    <span className="text-xs text-muted-foreground font-normal"> / {e.scoreMax}</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
