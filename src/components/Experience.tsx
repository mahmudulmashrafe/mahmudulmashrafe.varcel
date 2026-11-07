import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            03 / Professional & Academic Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Experience & Responsibilities
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Instructional mentorship in machine learning algorithms alongside client consulting and software delivery.
          </p>
        </div>

        {/* Timeline Ledger */}
        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      {item.type}
                    </span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {item.role}
                  </h3>
                  <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-0.5">
                    {item.company} &bull; <span className="text-zinc-500">{item.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-500 dark:text-zinc-400 self-start px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
                  Key Achievements & Deliverables
                </div>
                <ul className="space-y-2">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800/60 flex flex-wrap gap-1.5">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-sm bg-white dark:bg-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
