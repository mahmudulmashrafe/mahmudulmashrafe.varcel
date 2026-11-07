import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Selected Projects
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Full-stack platforms, automated ETL pipelines, and web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-500">
                    {project.subtitle}
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-xs bg-white dark:bg-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
