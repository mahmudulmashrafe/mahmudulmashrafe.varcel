import Link from 'next/link';
import { Github, Linkedin, Mail, FileText, MapPin, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          {/* Bio text */}
          <div className="space-y-5 max-w-2xl">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300">
                {profile.headline}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{profile.location}</span>
                <span>&bull;</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Available for opportunities</span>
              </div>
            </div>

            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {profile.bio}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-semibold transition-colors shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>View CV (PDF)</span>
              </a>

              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Prominent Circular Profile Photo */}
          <div className="shrink-0 self-center md:self-auto">
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full p-1.5 border-2 border-zinc-200 dark:border-zinc-700 shadow-xl bg-white dark:bg-zinc-900">
              <img
                src="/images/profile.jpg"
                alt="Mahmudul Mashrafe"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
