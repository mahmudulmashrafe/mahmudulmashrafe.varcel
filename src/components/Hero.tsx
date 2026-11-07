'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  GraduationCap,
  Sparkles,
  MapPin,
  Award,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  const { profile } = PORTFOLIO_DATA;
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Dynamic typing animation
  useEffect(() => {
    const roles = profile.roles;
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && roleText === current) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && roleText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setRoleText(
          isDeleting
            ? current.substring(0, roleText.length - 1)
            : current.substring(0, roleText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, roleIndex, profile.roles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-zinc-200 dark:border-zinc-800/80 overflow-hidden"
    >
      {/* Ambient Radial Glow in the background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-sky-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 editorial-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Top Pill - Merit Scholarship & Status */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{profile.status.label}</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300 text-xs font-mono">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>100% Merit Tuition Scholarship @ UIU</span>
              </span>
            </div>

            {/* Headline with Typewriter */}
            <div className="space-y-3">
              <div className="text-sm sm:text-base font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Hi, my name is
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tightest text-zinc-950 dark:text-zinc-50 leading-[1.08]">
                Mahmudul Mashrafe
              </h1>
              <div className="text-xl sm:text-2xl font-mono text-zinc-700 dark:text-zinc-300 min-h-[38px] flex items-center justify-center lg:justify-start gap-1">
                <span>I am a </span>
                <span className="text-zinc-950 dark:text-zinc-100 font-semibold underline decoration-emerald-500 decoration-2 underline-offset-4">
                  {roleText}
                </span>
                <span className="w-2 h-5 bg-emerald-500 inline-block animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profile.shortBio}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-lg px-4">
              {profile.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-0.5 text-center lg:text-left">
                  <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 leading-tight">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-semibold tracking-tight shadow-md hover:shadow-lg transition-all"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 text-sm font-medium tracking-tight shadow-xs transition-all"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-xs font-mono text-zinc-600 dark:text-zinc-400 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social / Profiles */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-blue-500 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (25 Repos)</span>
              </a>

              <a
                href={profile.socialLinks.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
              >
                <span className="font-mono font-bold text-xs text-sky-500">K</span>
                <span>Kaggle</span>
              </a>

              <a
                href={profile.socialLinks.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
              >
                <GraduationCap className="w-4 h-4 text-emerald-500" />
                <span>ResearchGate</span>
              </a>

              <a
                href={profile.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
              >
                <span className="font-mono text-xs">𝕏</span>
                <span>@iammashrafe</span>
              </a>
            </div>
          </div>

          {/* Prominent Profile Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Subtle Glowing Rings */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-emerald-500/30 via-sky-500/30 to-emerald-500/30 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Outer Circular Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 shadow-2xl overflow-hidden">
                <img
                  src="/images/profile-display.jpg"
                  alt="Mahmudul Mashrafe"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to original if display copy fails
                    e.currentTarget.src = '/images/profile.jpg';
                  }}
                />

                {/* Overlaid Bottom Tag */}
                <div className="absolute bottom-2 inset-x-0 mx-auto w-max px-3 py-1 rounded-full bg-zinc-950/90 text-white border border-white/20 backdrop-blur-md shadow-lg text-[11px] font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>UIU &bull; Data Science</span>
                </div>
              </div>

              {/* Floating Academic Badge */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl backdrop-blur-md space-y-0.5 animate-in fade-in duration-300">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-zinc-950 dark:text-zinc-100">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>CGPA 3.92 / 4.00</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  100% Scholarship Awardee
                </div>
              </div>
            </div>

            {/* Quick Caption */}
            <div className="mt-8 text-center space-y-1">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Mahmudul Mashrafe
              </div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>Dhaka, Bangladesh &bull; Student ID: 0112230115</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
