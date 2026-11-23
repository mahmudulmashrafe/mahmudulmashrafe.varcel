"use client";

import { Activity, BarChart3, Brain } from "lucide-react";
import { about } from "@/content/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const focusIcons = [Activity, Brain, BarChart3];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          id="about-title"
          index="01"
          eyebrow="About Me"
          title={<>Background &amp; <span className="font-editorial">Focus</span></>}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Narrative Glass Panel */}
          <Reveal className="rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-soft">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground text-justify">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "font-medium text-foreground text-base sm:text-lg leading-relaxed text-justify" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Core Tracks */}
          <div className="flex flex-col justify-between gap-4">
            {about.focus.map((f, i) => {
              const Icon = focusIcons[i] ?? Brain;
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft hover:border-accent transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center h-9 w-9 rounded-xl bg-surface-sunken text-accent border border-border">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="font-display text-sm font-bold text-foreground">
                        {f.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed text-justify">
                      {f.body}
                    </p>
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
