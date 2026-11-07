import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Work Experience
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Professional analytics and academic teaching roles.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-100">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {exp.company} &bull; <span className="text-zinc-500 font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-500 self-start sm:self-auto">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-sm bg-white dark:bg-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
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
