import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Education() {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Education & Certifications
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Academic degrees, thesis research, and technical credentials.
          </p>
        </div>

        {/* Education list */}
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-100">
                    {item.institution}
                  </h3>
                  <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {item.degree}
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-500 self-start sm:self-auto">
                  {item.period}
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {item.grade}
                </span>
                <span className="text-zinc-400">&bull;</span>
                <span className="text-zinc-500">{item.location}</span>
              </div>

              {item.thesis && (
                <div className="p-3 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 text-xs text-zinc-700 dark:text-zinc-300">
                  <span className="font-mono text-zinc-500 font-semibold uppercase text-[10px] block mb-0.5">
                    Undergraduate Thesis:
                  </span>
                  <span className="font-medium italic">"{item.thesis}"</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications list */}
        <div className="space-y-4 pt-2">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Professional Certification
          </div>

          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-100">
                  {cert.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {cert.issuer} &bull; {cert.location}
                </p>
              </div>

              <div className="text-left sm:text-right text-xs font-mono text-zinc-500 space-y-0.5">
                <div>Issued: {cert.issued}</div>
                <div>ID: {cert.credentialId}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
