import { GraduationCap, Award, BookOpen, CheckCircle, Calendar, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Education() {
  const { education, certifications, profile } = PORTFOLIO_DATA;

  return (
    <section
      id="education"
      className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
            04 / Academic Distinction & Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Education & Merit Honors
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Continuous first-tier academic ranking, recipient of 100% merit scholarship, and specialized data engineering certifications.
          </p>
        </div>

        {/* Featured Scholarship Callout Banner */}
        <div className="p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Highest University Honor</span>
            </div>
            <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
              100% Tuition Fee Waiver / Merit Scholarship
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              Awarded by United International University for achieving top academic standing in the Department of Computer Science & Engineering. Student ID: <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">{profile.studentId}</span>.
            </p>
          </div>

          <div className="text-center md:text-right shrink-0">
            <div className="font-mono text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400">
              3.92
            </div>
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider font-semibold">
              Out of 4.00 (84+ Credits)
            </div>
          </div>
        </div>

        {/* Degrees Grid */}
        <div className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-emerald-500" />
            <span>Academic Institutions & Degrees</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">{item.period}</span>
                    <span className="px-2.5 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                      {item.gradeLabel}: {item.grade}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                      {item.institution}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      {item.degree}
                    </p>
                    {item.major && (
                      <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        {item.major}
                      </div>
                    )}
                  </div>

                  {item.details && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-mono">
                      {item.details}
                    </p>
                  )}
                </div>

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
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Verified Professional Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                      {cert.issuer}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                    {cert.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
                    Curriculum & Domains:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60"
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
