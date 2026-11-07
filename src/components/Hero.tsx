import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-zinc-200 dark:border-zinc-800/80 overflow-hidden"
    >
      {/* Subtle editorial dot grid */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status indicator pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-900/60 backdrop-blur-xs text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Machine Learning & Data Engineering Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tightest text-zinc-950 dark:text-zinc-50 leading-[1.08]">
                Mahmudul Mashrafe
              </h1>
              <p className="text-lg sm:text-xl font-normal text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                Data Scientist & Machine Learning Engineer based in Dhaka, Bangladesh.
                Undergraduate Assistant at United International University specializing in
                deep learning, computer vision, and high-throughput data engineering.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-zinc-200 dark:border-zinc-800/80">
              {profile.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-mono text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-medium tracking-tight shadow-xs transition-colors"
              >
                <span>View Selected Projects</span>
                <ArrowDown className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 text-sm font-medium tracking-tight transition-colors"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social & Academic Verified Links */}
            <div className="pt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mr-2 uppercase tracking-wider">
                Profiles:
              </span>
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.socialLinks.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <span className="font-mono font-bold text-[11px]">K</span>
                <span>Kaggle</span>
              </a>
              <a
                href={profile.socialLinks.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>ResearchGate</span>
              </a>
              <a
                href={profile.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <span className="font-mono text-xs">𝕏</span>
                <span>iammashrafe</span>
              </a>
              <a
                href={profile.socialLinks.email}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Portrait & System Identity Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-4 shadow-sm space-y-4">
              {/* Photo container with editorial framing */}
              <div className="relative aspect-4/5 w-full rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="/images/profile-display.jpg"
                  alt="Mahmudul Mashrafe"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-4 text-white">
                  <div className="font-mono text-[11px] tracking-wider uppercase text-zinc-300">
                    Dhaka, Bangladesh
                  </div>
                  <div className="font-semibold text-sm">United International University</div>
                </div>
              </div>

              {/* Technical summary ledger */}
              <div className="space-y-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 pt-1">
                <div className="flex justify-between items-center py-1 border-b border-zinc-100 dark:border-zinc-800/60">
                  <span className="text-zinc-400 dark:text-zinc-500">Degree</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-200">
                    B.Sc. in CSE (Data Science)
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-100 dark:border-zinc-800/60">
                  <span className="text-zinc-400 dark:text-zinc-500">CGPA</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    3.92 / 4.00
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-100 dark:border-zinc-800/60">
                  <span className="text-zinc-400 dark:text-zinc-500">Core Focus</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-200">
                    Machine Learning & CV
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-400 dark:text-zinc-500">Local Time</span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-200">
                    Asia/Dhaka (GMT+6)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
