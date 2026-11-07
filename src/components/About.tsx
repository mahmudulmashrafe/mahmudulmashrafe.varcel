import { Code2, Brain, Database, Cpu, Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const principles = [
  {
    icon: Brain,
    title: 'Theoretical & Empirical Rigor',
    description:
      'Approaching machine learning from formal mathematical and statistical foundations rather than trial-and-error heuristics.',
  },
  {
    icon: Database,
    title: 'Production Data Engineering',
    description:
      'Designing strict schema contracts, automated cleaning pipelines, and reproducible feature stores using Apache Airflow & Docker.',
  },
  {
    icon: Cpu,
    title: 'Optimized Real-Time Inference',
    description:
      'Fine-tuning neural architectures with INT8 quantization, graph compilation, and edge optimization (OpenCV & ONNX).',
  },
  {
    icon: Code2,
    title: 'Clean Architectural Standards',
    description:
      'Writing modular, typed, and well-documented codebases that transition cleanly from exploratory notebooks to production.',
  },
];

export default function About() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
            01 / Professional Identity & Academic Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            Bridging rigorous mathematical learning with high-throughput production systems.
          </h2>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal text-base sm:text-lg">
            <p>
              I am <span className="font-bold text-zinc-900 dark:text-zinc-100">Mahmudul Mashrafe</span>,
              a Data Scientist and Machine Learning Engineer based in Dhaka, Bangladesh. I currently serve as an{' '}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Undergraduate Assistant and Teaching Assistant
              </span>{' '}
              at <span className="font-semibold text-zinc-900 dark:text-zinc-100">United International University (UIU)</span>{' '}
              in the Department of Computer Science & Engineering.
            </p>

            <p>
              My academic trajectory is defined by continuous distinction: in my B.Sc. in Computer Science & Engineering
              (Major in Data Science), I have achieved a cumulative GPA of{' '}
              <span className="font-bold text-emerald-600 dark:text-emerald-400">3.92 / 4.00</span> across 84+ completed
              credits. In recognition of this sustained academic excellence, United International University awarded me a prestigious{' '}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                100% Academic Merit Tuition Fee Waiver Scholarship
              </span>.
            </p>

            <p>
              As a Teaching Assistant for Machine Learning and Data Science, I guide over 100 engineering students through
              hands-on lab sessions, statistical model evaluation, and Python programming exercises. In parallel, as an
              independent developer, I architect end-to-end computer vision systems, robotic telemetry pipelines, and
              scalable distributed ETL workflows using Docker and Apache Airflow.
            </p>

            {/* Academic Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-3.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold font-mono text-zinc-900 dark:text-zinc-100">
                    100% Merit Tuition Scholarship
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    United International University Awardee
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold font-mono text-zinc-900 dark:text-zinc-100">
                    CGPA 3.92 / 4.00 (Data Science)
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Dean’s & VC’s Honor List
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Principles (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold pl-1">
              Engineering Principles
            </div>
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-1.5 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-zinc-200/70 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal pl-9">
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
