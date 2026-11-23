"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, FileText, Github } from "lucide-react";
import { useId, useState } from "react";
import { researchProjects, type Project } from "@/content/projects";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { StackList } from "./StackList";
import { ExpandableDescription } from "./ExpandableDescription";
import { ExpandableTitle } from "./ExpandableTitle";

export function ResearchProjects() {
  return (
    <section id="research" aria-labelledby="research-title" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          id="research-title"
          index="03"
          eyebrow="Academic Research"
          title={<>Research <span className="font-editorial">Work</span></>}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchProjects.map((p, i) => (
            <ResearchCard key={p.slug} project={p} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchCard({ project: p, delay }: { project: Project; delay: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();

  return (
    <Reveal delay={delay} className="h-full">
      <article className="rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft hover:border-border-strong transition-all flex flex-col justify-between h-full group">
        <div>
          {/* Academic Meta Header — NO NUMBER */}
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span className="rounded-md border border-border bg-surface-sunken px-2.5 py-1 text-[11px] font-mono text-muted-foreground group-hover:border-accent/40 group-hover:text-foreground transition-colors">
              {p.domain.split(" / ")[0]}
            </span>

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.title} repository on GitHub`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-foreground bg-surface-sunken hover:bg-accent/15 border border-border hover:border-accent transition-all"
              >
                <Github className="h-3 w-3 text-accent" />
                <span>GitHub</span>
                <ArrowUpRight className="h-2.5 w-2.5 text-muted-foreground" />
              </a>
            )}
          </div>

          {/* Title: 3 lines + see more if exceeding */}
          <ExpandableTitle title={p.title} href={`/projects/${p.slug}`} lines={3} />

          {/* Overview: 4 lines + see more if exceeding */}
          <ExpandableDescription text={p.overview} lines={4} />

          {/* Stack Preview: 4 lines */}
          <div className="mt-4 min-h-[7.75rem] max-h-[8.25rem] overflow-hidden">
            <StackList items={p.stack.slice(0, 12)} className="gap-1.5" />
          </div>
        </div>

        {/* Card Footer Actions: Only Methodology & Read Paper */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1 rounded-lg hover:bg-surface-sunken border border-transparent hover:border-border"
          >
            <FileText className="h-3.5 w-3.5 text-accent" />
            <span>Methodology</span>
            {open ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>

          <a
            href={p.paperUrl || `/papers/${p.slug}.pdf`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-accent hover:underline ml-auto"
          >
            Read Paper <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Expandable Methodology Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              id={panelId}
              initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground space-y-1.5">
                <span className="font-semibold text-foreground block">Key Methodology:</span>
                <ul className="space-y-1">
                  {p.methodology.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-accent">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}
