"use client";

import { interests } from "@/content/profile";
import { Reveal } from "./Reveal";

export function Interests() {
  return (
    <section id="interests" aria-labelledby="interests-title" className="section-pad relative z-10">
      <div className="container-page">
        <div className="grid-12 glass gap-y-10 rounded-[2.5rem] p-8 md:p-14 border border-white/10">
          <div className="col-span-4 md:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#ff5a2a]">
              08 <span className="ml-1 text-white/50">Research Focus</span>
            </span>
            <h2 id="interests-title" className="font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-tight text-white mt-6 leading-tight max-w-[14ch]">
              Frontiers I'm exploring <span className="font-editorial text-[#ffb89a]">deeply.</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed max-w-[36ch]">
              Core academic investigations centering on closed-loop neural feedback, trustworthy machine learning, and explainable models.
            </p>
          </div>
          <ol className="col-span-4 md:col-span-7 md:col-start-6">
            {interests.map((it, i) => (
              <li key={it} className="border-b border-white/10 last:border-b-0">
                <Reveal delay={i * 0.03} y={10} className="group flex items-baseline gap-6 py-5 md:py-6 cursor-default">
                  <span className="w-8 font-mono text-xs font-bold text-[#ff5a2a] transition-colors group-hover:text-[#ffc58f]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white/90 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                    {it}
                  </span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
