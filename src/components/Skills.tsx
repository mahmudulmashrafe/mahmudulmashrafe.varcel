'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Cpu, Database, Layout, Terminal, Search } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const skillLogos: Record<string, string> = {
  PyTorch: '/images/pytorch.png',
  TensorFlow: '/images/tensorflow.png',
  OpenCV: '/images/opencv.png',
  Pandas: '/images/pandas.png',
  NumPy: '/images/numpy.png',
  Python: '/images/django.png',
  'Apache Airflow': '/images/airflow.png',
  MySQL: '/images/mysql.png',
  MongoDB: '/images/mongodb.png',
  'Node.js': '/images/nodejs.png',
  Express: '/images/express.png',
  Django: '/images/django.png',
  PHP: '/images/php.png',
  React: '/images/react.png',
  'Next.js': '/images/react.png',
  JavaScript: '/images/javascript.png',
  HTML5: '/images/html.png',
  'HTML5 & Semantic Web': '/images/html.png',
  CSS3: '/images/css.png',
  'CSS3 & Grid': '/images/css.png',
  Figma: '/images/figma.png',
  Docker: '/images/docker.png',
  'Git & GitHub': '/images/git.png',
  'Linux (Ubuntu/Debian)': '/images/linux.png',
  'macOS & Shell Scripting': '/images/macos.png',
  'Postman & API Testing': '/images/postman-logo-icon-orange.png',
  Android: '/images/android.png',
  Windows: '/images/windows.png',
};

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      title: 'Machine Learning & AI',
      subtitle: 'Neural Architectures & Statistical Learning',
      icon: Cpu,
      items: skills.machineLearning,
    },
    {
      title: 'Data Engineering & Backend',
      subtitle: 'Distributed Pipelines & Relational Storage',
      icon: Database,
      items: skills.backendData,
    },
    {
      title: 'Frontend & Web Platforms',
      subtitle: 'Production Interfaces & Modern Web Standards',
      icon: Layout,
      items: skills.frontendWeb,
    },
    {
      title: 'DevOps & Systems',
      subtitle: 'Containerization, Linux & Tooling',
      icon: Terminal,
      items: skills.devopsEnvironment,
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header with Live Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold">
              05 / Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Technology Stack & Tooling
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Verified frameworks, languages, and infrastructure tools utilized in production and academic research.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search stack (e.g. PyTorch)..."
              className="w-full pl-9 pr-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-emerald-500 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const filteredItems = cat.items.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredItems.length === 0) return null;

            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 space-y-6 shadow-xs"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-200/70 dark:border-zinc-800/60">
                  <div className="w-8 h-8 rounded-lg bg-zinc-200/80 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {filteredItems.map((skill, sIdx) => {
                    const logoSrc = skillLogos[skill.name];
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200/70 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:scale-[1.01]"
                      >
                        {logoSrc ? (
                          <div className="relative w-6 h-6 shrink-0">
                            <img
                              src={logoSrc}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-mono text-[10px] font-bold text-zinc-500">
                            {skill.name.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div className="truncate grow">
                          <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                            {skill.name}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
                            <span>{skill.level}</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{skill.exp}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
