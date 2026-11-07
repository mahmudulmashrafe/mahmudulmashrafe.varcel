'use client';

import { useState } from 'react';
import {
  ExternalLink,
  Github,
  Terminal,
  Cpu,
  Database,
  ArrowUpRight,
  CheckCircle2,
  Layers,
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
              02 / Production Systems & Research
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Featured Case Studies & Architectures
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Detailed structural breakdowns of machine learning systems, robotics telemetry, and high-throughput pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 self-start md:self-auto shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 sm:p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="space-y-5">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 font-medium">
                    {project.category}
                  </span>
                  <span className="font-semibold">{project.year}</span>
                </div>

                {/* Project Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Narrative */}
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Architectural Outcome Banner */}
                <div className="p-3.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 font-mono text-xs text-zinc-700 dark:text-zinc-300 space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5" />
                    Key Architecture Metric:
                  </div>
                  <p className="text-zinc-900 dark:text-zinc-100 font-semibold">{project.metrics}</p>
                </div>

                {/* Architectural Highlights */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
                    Engineering Highlights:
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                    {project.architectureHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono text-zinc-700 dark:text-zinc-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={project.liveUrl || '#'}
                  className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>System Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
