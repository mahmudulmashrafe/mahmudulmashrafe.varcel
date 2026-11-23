"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  BarChart3,
  Brain,
  Code2,
  Database,
  Layers,
  Search,
  Terminal,
  X,
} from "lucide-react";
import { skills } from "@/content/profile";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SkillIcon } from "./SkillIcon";

const clusterIcons: Record<string, typeof Code2> = {
  "Programming & Data": Terminal,
  "Machine Learning & AI": Brain,
  "Data Science & Analytics": BarChart3,
  "Research & Healthcare AI": Activity,
  "Data Engineering": Database,
  "Development & Product": Layers,
};

export function Skills() {
  const [selectedCluster, setSelectedCluster] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const totalSkillsCount = useMemo(() => {
    return skills.reduce((acc, curr) => acc + curr.items.length, 0);
  }, []);

  const filteredClusters = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return skills
      .filter((cluster) => {
        if (selectedCluster === "All") return true;
        return cluster.group === selectedCluster;
      })
      .map((cluster) => {
        const matchingItems = cluster.items.filter((item) => {
          if (!query) return true;
          return (
            item.toLowerCase().includes(query) ||
            cluster.group.toLowerCase().includes(query)
          );
        });

        return {
          ...cluster,
          items: matchingItems,
        };
      })
      .filter((cluster) => cluster.items.length > 0);
  }, [selectedCluster, searchQuery]);

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-pad relative">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            id="skills-title"
            index="02"
            eyebrow="Technical Stack"
            title={<>Skills &amp; <span className="font-editorial">Technologies</span></>}
          />

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills e.g. Python..."
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-surface border border-border placeholder:text-muted-foreground focus:outline-none focus:border-accent text-foreground transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-surface-sunken border border-border w-fit">
          <button
            type="button"
            onClick={() => setSelectedCluster("All")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              selectedCluster === "All"
                ? "bg-surface text-foreground font-semibold shadow-xs border border-border"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All Clusters ({skills.length})
          </button>

          {skills.map((c) => {
            const isActive = selectedCluster === c.group;
            return (
              <button
                key={c.group}
                type="button"
                onClick={() => setSelectedCluster(c.group)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-surface text-foreground font-semibold shadow-xs border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{c.group.replace(" & ", "/")}</span>
                <span className="ml-1 opacity-70 font-mono text-[10px]">({c.items.length})</span>
              </button>
            );
          })}
        </div>

        {/* Cluster-Wise Grid */}
        {filteredClusters.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-border bg-surface p-12 text-center text-sm text-muted-foreground">
            No matching technologies found for &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredClusters.map((cluster, cIdx) => {
              const IconComponent = clusterIcons[cluster.group] ?? Code2;

              return (
                <Reveal key={cluster.group} delay={cIdx * 0.04} className="h-full">
                  <article className="rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft hover:border-border-strong transition-all flex flex-col justify-between h-full">
                    <div>
                      {/* Cluster Header */}
                      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border">
                        <div className="flex items-center gap-2.5">
                          <span className="grid place-items-center h-8 w-8 rounded-lg bg-surface-sunken text-accent border border-border">
                            <IconComponent className="h-4 w-4" />
                          </span>
                          <div>
                            <h3 className="font-display text-sm font-semibold tracking-tight text-foreground">
                              {cluster.group}
                            </h3>
                            <p className="text-[11px] font-mono text-muted-foreground">
                              {cluster.items.length} {cluster.items.length === 1 ? "skill" : "skills"}
                            </p>
                          </div>
                        </div>

                        <span className="font-mono text-[10px] text-muted-foreground px-2 py-0.5 rounded-md bg-surface-sunken border border-border">
                          0{cIdx + 1}
                        </span>
                      </div>

                      {/* Badges inside Cluster */}
                      <div className="flex flex-wrap gap-2">
                        {cluster.items.map((skill) => (
                          <div
                            key={skill}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-sunken/60 hover:bg-surface px-2.5 py-1.5 text-xs font-medium text-foreground transition-all duration-150 hover:border-accent shadow-2xs"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-surface p-0.5 border border-border/80">
                              <SkillIcon name={skill} className="h-3.5 w-3.5 object-contain" />
                            </span>
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
