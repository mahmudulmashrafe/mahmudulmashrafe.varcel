"use client";

import { techStrip } from "@/content/highlights";

/**
 * Aurem Giant Kinetic Marquee Ticker.
 * Bold Bricolage Grotesque typography with glowing gold asterisks.
 */
export function TechMarquee() {
  const items = [...techStrip, ...techStrip, ...techStrip];

  return (
    <section
      aria-label="Core competencies"
      className="relative z-10 overflow-hidden border-y border-white/10 bg-[#07060a]/90 py-6 md:py-8 backdrop-blur-md"
    >
      <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <div key={`${t}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white/90 hover:text-[#ffc58f] transition-colors">
              {t}
            </span>
            <span className="text-[#ff5a2a] text-lg sm:text-xl font-bold">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
