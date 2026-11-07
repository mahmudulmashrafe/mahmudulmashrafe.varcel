'use client';

import { useState } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
}

export default function TerminalConsole() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      response:
        '👋 Welcome to Mahmudul Mashrafe’s interactive engineering console. Type "help" or click quick commands below to explore academic credentials, research, and skills.',
    },
  ]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let res: string | React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        res = (
          <div className="space-y-1">
            <div>Available commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-emerald-400">
              <span>• bio</span>
              <span>• education</span>
              <span>• scholarship</span>
              <span>• skills</span>
              <span>• projects</span>
              <span>• experience</span>
              <span>• contact</span>
              <span>• clear</span>
            </div>
          </div>
        );
        break;
      case 'bio':
        res = `${PORTFOLIO_DATA.profile.name} — ${PORTFOLIO_DATA.profile.tagline}. Based in Dhaka, Bangladesh. ${PORTFOLIO_DATA.profile.shortBio}`;
        break;
      case 'scholarship':
        res = (
          <div className="space-y-1 text-amber-300">
            <div>🏆 100% Tuition Fee Waiver Scholarship</div>
            <div className="text-zinc-300 text-xs">
              Awarded by United International University (UIU) for sustained top-tier academic merit in B.Sc. CSE (Major Data Science). Student ID: {PORTFOLIO_DATA.profile.studentId}.
            </div>
          </div>
        );
        break;
      case 'education':
        res = (
          <div className="space-y-1.5">
            <div>🎓 United International University (UIU) — B.Sc. in CSE (Major: Data Science)</div>
            <div className="text-emerald-400 text-xs font-bold">• CGPA: 3.92 / 4.00 (84+ Credits Completed)</div>
            <div>🏫 Jatir Janak Govt. College — HSC Science (GPA 5.00 / 5.00 Golden)</div>
            <div>🏫 Nawab Habibullah Model School — SSC Science (GPA 5.00 / 5.00)</div>
          </div>
        );
        break;
      case 'experience':
        res = (
          <div className="space-y-1.5">
            <div>⚡ Teaching Assistant (Undergraduate Assistant) @ UIU Department of CSE (Nov 2024 - Present)</div>
            <div className="text-zinc-400 text-xs">• Guiding 100+ students in Machine Learning and Data Science labs.</div>
            <div>⚡ Freelance Full Stack & ML Developer (Jan 2023 - Present)</div>
            <div className="text-zinc-400 text-xs">• Developing custom predictive models, computer vision systems, and web apps.</div>
          </div>
        );
        break;
      case 'skills':
        res = 'Python, PyTorch, TensorFlow, OpenCV, Scikit-learn, Apache Airflow, Docker, PostgreSQL, MySQL, MongoDB, React, Next.js, TypeScript, Django, Linux.';
        break;
      case 'projects':
        res = (
          <div className="space-y-1">
            <div>1. UIU ReseachCollab (Academic collaboration platform & index)</div>
            <div>2. Autonomous Mars Rover Prototype (Robotics & OpenCV vision)</div>
            <div>3. High-Throughput ETL Pipeline (Apache Airflow & Docker)</div>
            <div>4. Neural Surface Defect Detection Engine (PyTorch & ONNX, 97.4% mAP)</div>
          </div>
        );
        break;
      case 'contact':
        res = `Email: ${PORTFOLIO_DATA.profile.email} | Phone: ${PORTFOLIO_DATA.profile.phone} | LinkedIn: linkedin.com/in/mahmudulmashrafe/`;
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        res = `Command not recognized: "${cmd}". Type "help" to see valid commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, response: res }]);
    setInputVal('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
  };

  return (
    <section className="py-12 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-900 text-zinc-100 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950 border-b border-zinc-800 text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-zinc-400">mashrafe@uiu-workstation: ~</span>
            </div>
            <div className="text-[11px] text-zinc-500 hidden sm:block">
              Interactive Shell v2.5
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-4 sm:p-6 space-y-4 max-h-72 overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <span className="text-zinc-500">guest@mashrafe:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-zinc-300 pl-4 border-l border-zinc-800/80 py-0.5 leading-relaxed">
                  {item.response}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Click Badges */}
          <div className="px-4 py-2 bg-zinc-950/60 border-t border-zinc-800/80 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-zinc-500 text-[11px] mr-1">Quick Run:</span>
            {['bio', 'scholarship', 'education', 'skills', 'projects', 'contact', 'clear'].map(
              (btn) => (
                <button
                  key={btn}
                  onClick={() => handleCommand(btn)}
                  className="px-2 py-0.5 rounded-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer text-[11px]"
                >
                  {btn}
                </button>
              )
            )}
          </div>

          {/* Input Form */}
          <form
            onSubmit={onSubmit}
            className="flex items-center px-4 py-3 bg-zinc-950 border-t border-zinc-800 gap-2"
          >
            <span className="text-emerald-400 font-bold">mashrafe:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type a command (e.g. scholarship, skills, help)..."
              className="grow bg-transparent text-white focus:outline-hidden text-xs sm:text-sm font-mono placeholder:text-zinc-600"
            />
            <button
              type="submit"
              aria-label="Execute command"
              className="p-1 rounded-sm text-zinc-400 hover:text-white"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
