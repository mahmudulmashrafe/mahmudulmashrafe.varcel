import { GraduationCap, Award, BookOpen, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Education() {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section
      id="education"
      className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            04 / Academic Foundation & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Education & Continuous Learning
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            A track record of continuous top-tier academic distinction and specialized industry training in Data Science.
          </p>
        </div>

        {/* Degrees Grid */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-500" />
            <span>Formal Academic Degrees</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-4">
                  {/* Period & Grade badge */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">{item.period}</span>
                    <span className="px-2 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                      {item.gradeLabel}: {item.grade}
                    </span>
                  </div>

                  {/* Institution & Degree */}
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                      {item.institution}
                    </h4>
                    <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      {item.degree}
                    </p>
                    {item.major && (
                      <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        {item.major}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  {item.details && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>

                {/* Badges */}
                {item.badges && (
                  <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-1">
                    {item.badges.map((b, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-xs bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Specialized Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {cert.issuer}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 px-2 py-0.5 rounded-sm border border-zinc-200 dark:border-zinc-800">
                    {cert.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Curriculum & Applied Domains
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-xs bg-zinc-50 dark:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
