'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  Github,
  Layers,
  Terminal,
  Cpu,
  Database,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

const categories = ['All Works', 'Machine Learning', 'Data Engineering', 'Robotics & CV', 'Full Stack'] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Works');
  const { projects } = PORTFOLIO_DATA;

  const filteredProjects =
    selectedCategory === 'All Works'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              02 / Engineering Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Selected Projects & Systems
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Architectural overviews of production software, deep learning models, and robotics telemetry systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-tight transition-all ${
                  selectedCategory === cat
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 shadow-xs"
            >
              <div className="space-y-5">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="px-2.5 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                {/* Project Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Narrative */}
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technical highlight callout */}
                <div className="p-3.5 rounded-md border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/70 dark:bg-zinc-950/40 font-mono text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5 font-semibold">
                    <Terminal className="w-3 h-3 text-emerald-500" />
                    Key Architecture Outcome:
                  </div>
                  <p className="text-zinc-800 dark:text-zinc-200">{project.metrics}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800/70 text-[11px] font-mono text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
