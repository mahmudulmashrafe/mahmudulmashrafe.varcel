'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href="#home"
          className="flex items-center gap-2.5 font-bold text-sm tracking-tight text-zinc-950 dark:text-zinc-50"
        >
          <img
            src="/images/profile.jpg"
            alt="Mahmudul Mashrafe"
            className="w-7 h-7 rounded-full object-cover"
          />
          <span>Mahmudul Mashrafe</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-950 dark:text-zinc-100 font-semibold hover:underline"
          >
            <span>CV</span>
          </a>
          <div className="pl-2 border-l border-zinc-200 dark:border-zinc-800">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile button */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-1.5 rounded-md text-zinc-700 dark:text-zinc-300"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="sm:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 space-y-3 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-1 text-zinc-700 dark:text-zinc-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-1 text-zinc-950 dark:text-zinc-100 font-semibold"
          >
            Download CV (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
