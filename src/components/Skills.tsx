import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const categories = [
    { title: 'Programming Languages', items: skills.languages },
    { title: 'Databases', items: skills.databases },
    { title: 'Frameworks & Libraries', items: skills.frameworks },
    { title: 'Tools & DevOps', items: skills.tools },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Skills & Technologies
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Technical proficiencies across languages, frameworks, databases, and tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-100">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                  >
                    {item}
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
