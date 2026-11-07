import { Code2, Brain, Database, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const principles = [
  {
    icon: Brain,
    title: 'Empirical Rigor',
    description:
      'Approaching machine learning from formal statistical principles rather than trial-and-error heuristics.',
  },
  {
    icon: Database,
    title: 'Data-Centric Engineering',
    description:
      'Prioritizing high-integrity data pipelines, validation checks, and feature reproducibility over raw model complexity.',
  },
  {
    icon: Cpu,
    title: 'Production Efficiency',
    description:
      'Designing lightweight architectures optimized for inference latency, memory footprints, and edge deployments.',
  },
  {
    icon: Code2,
    title: 'Clean Code Standards',
    description:
      'Writing modular, typed, and well-tested code bases that transition seamlessly from research to production.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            01 / Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Translating mathematical theory into dependable software systems.
          </h2>
        </div>

        {/* Narrative & Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal text-base sm:text-lg">
            <p>
              I am <span className="font-semibold text-zinc-900 dark:text-zinc-100">Mahmudul Mashrafe</span>,
              a Data Scientist and Machine Learning Engineer based in Dhaka, Bangladesh. Currently an
              Undergraduate Assistant at United International University (UIU), I work across the intersection
              of modern deep learning architectures and robust software engineering.
            </p>
            <p>
              My academic trajectory is anchored in a Bachelor of Science in Computer Science & Engineering
              with a major in Data Science, where I maintain a cumulative GPA of{' '}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">3.92 / 4.00</span> across 84+ completed
              credits. My research and lab responsibilities involve mentoring over 100 students in machine learning
              algorithms, evaluating neural network implementations, and developing automated assessment frameworks.
            </p>
            <p>
              Beyond the classroom, I have engineered autonomous computer vision systems for planetary rover
              prototypes, built end-to-end data pipelines orchestrating 50,000+ daily records with Apache Airflow,
              and developed full-stack web platforms connecting academic researchers.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Major in Data Science (UIU)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Teaching Assistant for ML</span>
              </div>
            </div>
          </div>

          {/* Principles Ledger (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-zinc-200/60 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal pl-11">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
