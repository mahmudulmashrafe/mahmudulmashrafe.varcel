import Image from 'next/image';
import { Cpu, Database, Layout, Terminal } from 'lucide-react';
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
  'CSS3 & CSS Grid': '/images/css.png',
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
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            05 / Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Technology Stack & Tooling
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            An overview of verified frameworks, languages, and infrastructure tools utilized in production and research environments.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 space-y-6"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-200/70 dark:border-zinc-800/60">
                  <div className="w-8 h-8 rounded-md bg-zinc-200/60 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
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

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {cat.items.map((skill, sIdx) => {
                    const logoSrc = skillLogos[skill.name];
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-3 p-2.5 rounded-lg border border-zinc-200/70 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                      >
                        {logoSrc ? (
                          <div className="relative w-5 h-5 shrink-0">
                            <Image
                              src={logoSrc}
                              alt={skill.name}
                              fill
                              sizes="20px"
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-xs bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-mono text-[9px] font-bold text-zinc-500">
                            {skill.name.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div className="truncate">
                          <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                            {skill.name}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                            {skill.level}
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
