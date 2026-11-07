'use client';

import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 text-zinc-600 dark:text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
              Mahmudul Mashrafe
            </div>
            <p className="text-zinc-500">
              Data Scientist & Machine Learning Engineer &bull; United International University
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socialLinks.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kaggle profile"
              className="font-mono font-bold text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              K
            </a>
            <a
              href={profile.socialLinks.researchgate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ResearchGate profile"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
            </a>
            <a
              href={profile.socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter X profile"
              className="font-mono text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              𝕏
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Mahmudul Mashrafe. All rights reserved.
          </div>
          <div>
            Engineered with Next.js & Turbopack. Optimized for Core Web Vitals & Search Indexing.
          </div>
        </div>
      </div>
    </footer>
  );
}
