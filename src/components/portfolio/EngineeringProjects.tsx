"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { useState } from "react";
import {
  categories,
  countByCategory,
  engineeringProjects,
  filterProjects,
  type CategoryId,
  type Project,
} from "@/content/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { StackList } from "./StackList";
import { ExpandableDescription } from "./ExpandableDescription";
import { ExpandableTitle } from "./ExpandableTitle";

const tabs = categories.filter((c) => countByCategory(engineeringProjects, c.id) > 0);
const INITIAL_COUNT = 6;

export function EngineeringProjects() {
  const [active, setActive] = useState<CategoryId>("all");
  const [showAll, setShowAll] = useState(false);
  const reduce = useReducedMotion();
  const list = filterProjects(engineeringProjects, active);

  const visibleList = showAll ? list : list.slice(0, INITIAL_COUNT);
  const hasMore = list.length > INITIAL_COUNT;

  const handleCategoryChange = (catId: CategoryId) => {
    setActive(catId);
    setShowAll(false);
  };

  return (
    <section id="projects" aria-labelledby="engineering-title" className="section-pad relative">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            id="engineering-title"
            index="04"
            eyebrow="Software & Systems"
            title={<>Engineering <span className="font-editorial">Projects</span></>}
          />

          <a
            href="https://github.com/mahmudulmashrafe?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-border bg-surface hover:border-accent text-foreground transition-all shadow-xs w-fit"
          >
            <Github className="h-4 w-4 text-accent" />
            <span>Browse All Repos on GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
        </div>

        {/* Filter Pills */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap gap-1.5 p-1 rounded-2xl bg-surface-sunken border border-border w-fit"
        >
          {tabs.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleCategoryChange(c.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all",
                  isActive
                    ? "bg-surface text-foreground font-semibold shadow-xs border border-border"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {c.label}
                <span className={cn("ml-1 font-mono text-[10px]", isActive ? "text-accent font-semibold" : "opacity-60")}>
                  ({countByCategory(engineeringProjects, c.id)})
                </span>
              </button>
            );
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          Showing {visibleList.length} of {list.length} projects
        </p>

        {/* Project Cards Grid */}
        <motion.ul layout={!reduce} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleList.map((p) => (
              <motion.li
                key={p.slug}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/* View More / Show Less Toggle Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => {
                if (showAll) {
                  setShowAll(false);
                  // Smoothly scroll back to the engineering projects section header so the user doesn't get left below
                  const el = document.getElementById("projects");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                } else {
                  setShowAll(true);
                }
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold border border-border bg-surface hover:border-accent hover:bg-surface-sunken text-foreground transition-all shadow-soft group cursor-pointer"
            >
              <span>{showAll ? "Show Less" : `View More Projects (${list.length - INITIAL_COUNT} more)`}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-accent transition-transform duration-300",
                  showAll ? "rotate-180" : "group-hover:translate-y-0.5"
                )}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft hover:border-border-strong transition-all flex flex-col justify-between h-full group">
      <div>
        {/* Header with domain tag and prominent GitHub pill — NO NUMBER */}
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

        {/* 2-line Title (with See More / Less if exceeding 2 lines) */}
        <ExpandableTitle title={p.title} href={`/projects/${p.slug}`} lines={2} />

        {/* 3-line Description with See More / Less if exceeding 3 lines */}
        <ExpandableDescription text={p.summary} lines={3} />

        {/* 3-line Language / Skills container */}
        <div className="mt-4 min-h-[5.75rem] max-h-[6.25rem] overflow-hidden">
          <StackList items={p.stack.slice(0, 9)} className="gap-1.5" />
        </div>
      </div>
    </article>
  );
}
