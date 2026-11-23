import type { VisualKey } from "@/content/projects";
import { cn } from "@/lib/utils";

/**
 * CSS/SVG schematic previews. These are illustrations of each project's structure,
 * not screenshots — every frame carries a visible "Schematic" label.
 */

const W = 400;
const H = 260;

function rand(seed: number) {
  let t = (Math.round(seed * 1000) + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return (((t ^ (t >>> 14)) >>> 0) % 10000) / 10000;
}

const r1 = (n: number) => Math.round(n * 10) / 10;

function wavePath(seed: number, y: number, amp: number, width = 800, step = 4) {
  let d = `M 0 ${y}`;
  for (let x = step; x <= width; x += step) {
    const t = x / 40;
    const v =
      Math.sin(t * 1.3 + seed) * 0.55 +
      Math.sin(t * 3.1 + seed * 2) * 0.3 +
      Math.sin(t * 7.7 + seed * 3) * 0.15 * (1 + rand(x + seed));
    d += ` L ${x} ${(y + v * amp).toFixed(2)}`;
  }
  return d;
}

function BioTheraX() {
  const dots = Array.from({ length: 16 * 11 }, (_, i) => ({
    x: 24 + (i % 11) * 7,
    y: 44 + Math.floor(i / 11) * 11,
    on: rand(i) > 0.72,
  }));
  const methods = ["ANOVA", "MI", "RF", "XGB", "SHAP"];
  return (
    <>
      <text x="24" y="30" fontSize="8">704 FEATURES</text>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.6" className={d.on ? "d-fill-accent" : "d-fill-muted"} opacity={d.on ? 1 : 0.35} />
      ))}
      {methods.map((m, i) => {
        const y = 52 + i * 34;
        return (
          <g key={m}>
            <path d={`M 104 ${130} C 130 ${130}, 130 ${y + 8}, 150 ${y + 8}`} className="d-line" fill="none" />
            <rect x="150" y={y} width="52" height="16" rx="2" className="d-fill-surface d-line" strokeWidth="1" />
            <text x="176" y={y + 11} fontSize="7.5" textAnchor="middle">{m}</text>
            <path d={`M 202 ${y + 8} C 222 ${y + 8}, 222 130, 240 130`} className="d-line" fill="none" />
          </g>
        );
      })}
      <text x="150" y="30" fontSize="8">CONSENSUS</text>
      {Array.from({ length: 50 }, (_, i) => (
        <circle key={i} cx={246 + (i % 5) * 6} cy={100 + Math.floor(i / 5) * 6} r="1.7" className="d-fill-accent" />
      ))}
      <text x="244" y="30" fontSize="8">TOP 50</text>
      <path d="M 276 130 L 300 130" className="d-ink" />
      <rect x="300" y="116" width="76" height="28" rx="2" className="d-fill-ink" />
      <text x="338" y="133" fontSize="8" textAnchor="middle" className="d-fill-surface" style={{ fill: "var(--color-background)" }}>CATBOOST</text>
      <text x="300" y="30" fontSize="8">TREESHAP</text>
      {Array.from({ length: 6 }, (_, r) => (
        <g key={r}>
          <line x1="300" x2="376" y1={168 + r * 12} y2={168 + r * 12} className="d-line" strokeWidth="0.5" />
          {Array.from({ length: 9 }, (_, k) => (
            <circle key={k} cx={r1(300 + 38 + (rand(r * 20 + k) - 0.5) * (60 - r * 7))} cy={r1(168 + r * 12 + (rand(k + r) - 0.5) * 4)} r="1.5" className={rand(k * 3 + r) > 0.5 ? "d-fill-accent" : "d-fill-muted"} />
          ))}
        </g>
      ))}
      <line x1="338" x2="338" y1="160" y2="236" className="d-ink" strokeWidth="0.6" strokeDasharray="2 2" />
    </>
  );
}

function EEG({ animate }: { animate: boolean }) {
  const channels = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <defs>
        <clipPath id="eeg-clip">
          <rect x="16" y="20" width="250" height="220" />
        </clipPath>
      </defs>
      {channels.map((c) => (
        <text key={c} x="16" y={44 + c * 34} fontSize="7">{["Fp1", "F3", "C3", "P3", "O1", "T7"][c]}</text>
      ))}
      <g clipPath="url(#eeg-clip)">
        <g className={animate ? "animate-eeg" : undefined}>
          {channels.map((c) => (
            <path key={c} d={wavePath(c * 1.7, 52 + c * 34, c === 2 ? 11 : 8)} transform="translate(36 0)" fill="none" strokeWidth="1" className={c === 2 ? "d-accent" : "d-ink"} opacity={c === 2 ? 1 : 0.55} />
          ))}
        </g>
      </g>
      <rect x="120" y="26" width="46" height="214" className="d-fill-soft" />
      <text x="143" y="252" fontSize="7" textAnchor="middle">8–12 Hz</text>
      <circle cx="330" cy="130" r="52" fill="none" className="d-line" strokeDasharray="3 3" />
      {["EEG", "FEATURES", "AUDIO", "FEEDBACK"].map((l, i) => {
        const a = (i / 4) * Math.PI * 2 - Math.PI / 2;
        const x = r1(330 + Math.cos(a) * 52);
        const y = r1(130 + Math.sin(a) * 52);
        return (
          <g key={l}>
            <circle cx={x} cy={y} r="4" className={i === 2 ? "d-fill-accent" : "d-fill-ink"} />
            <text x={i === 1 ? x - 8 : i === 3 ? x + 8 : x} y={y + (i === 0 ? -8 : i === 2 ? 14 : 3)} fontSize="7" textAnchor={i === 1 ? "end" : i === 3 ? "start" : "middle"}>{l}</text>
          </g>
        );
      })}
      <text x="330" y="40" fontSize="7" textAnchor="middle">PROPOSED LOOP</text>
    </>
  );
}

function AWD() {
  const mothers = [
    { x: 150, y: 90 },
    { x: 250, y: 150 },
  ];
  const children = [
    { x: 70, y: 50, m: 0 },
    { x: 60, y: 130, m: 0 },
    { x: 130, y: 190, m: 0 },
    { x: 200, y: 40, m: 0 },
    { x: 210, y: 220, m: 1 },
    { x: 300, y: 70, m: 1 },
    { x: 320, y: 220, m: 1 },
  ];
  return (
    <>
      {children.map((c, i) => (
        <g key={i}>
          <line x1={c.x} y1={c.y} x2={mothers[c.m]!.x} y2={mothers[c.m]!.y} className="d-line" strokeDasharray="3 3" />
          <circle cx={c.x} cy={c.y} r="5" className="d-fill-surface d-ink" strokeWidth="1" />
        </g>
      ))}
      <line x1="150" y1="90" x2="250" y2="150" className="d-accent" strokeWidth="1.5" />
      <line x1="250" y1="150" x2="350" y2="130" className="d-accent" strokeWidth="1.5" />
      {mothers.map((m, i) => (
        <rect key={i} x={m.x - 8} y={m.y - 8} width="16" height="16" className="d-fill-accent" />
      ))}
      <rect x="342" y="114" width="40" height="30" rx="2" className="d-fill-ink" />
      <text x="362" y="160" fontSize="7" textAnchor="middle">BASE</text>
      <text x="70" y="40" fontSize="7" textAnchor="middle">CHILD</text>
      <text x="150" y="74" fontSize="7" textAnchor="middle">MOTHER</text>
      <g transform="translate(20 168)">
        <rect x="0" y="0" width="16" height="72" className="d-fill-sunken d-line" />
        <rect x="0" y="40" width="16" height="32" className="d-fill-soft" />
        <line x1="-4" x2="20" y1="22" y2="22" className="d-ink" />
        <line x1="-4" x2="20" y1="40" y2="40" className="d-accent" />
        <text x="24" y="25" fontSize="6.5">48 cm</text>
        <text x="24" y="43" fontSize="6.5">65 cm</text>
      </g>
      <text x="350" y="30" fontSize="7" textAnchor="middle">OPEN-METEO</text>
      <path d="M 336 50 a 8 8 0 0 1 14 -6 a 10 10 0 0 1 18 6 z" className="d-fill-sunken d-line" />
      <line x1="355" y1="56" x2="362" y2="112" className="d-line" strokeDasharray="2 3" />
    </>
  );
}

function Durjog() {
  return (
    <>
      {Array.from({ length: 7 }, (_, i) => (
        <path key={i} d={`M -10 ${40 + i * 32} C 90 ${20 + i * 30 + rand(i) * 30}, 220 ${70 + i * 28 - rand(i + 3) * 40}, 420 ${30 + i * 34}`} fill="none" className="d-line" />
      ))}
      <path d="M 40 210 C 120 160, 200 200, 260 120 S 360 60, 380 40" fill="none" className="d-ink" strokeWidth="1.2" strokeDasharray="4 3" />
      {[
        { x: 120, y: 160, a: true },
        { x: 260, y: 120, a: true },
        { x: 320, y: 190, a: false },
        { x: 80, y: 80, a: false },
      ].map((p, i) => (
        <g key={i}>
          {p.a && <circle cx={p.x} cy={p.y} r="16" className="d-fill-soft" />}
          <circle cx={p.x} cy={p.y} r={p.a ? 5 : 3.5} className={p.a ? "d-fill-accent" : "d-fill-ink"} />
        </g>
      ))}
      <rect x="18" y="18" width="92" height="40" rx="2" className="d-fill-surface d-line" />
      <text x="28" y="34" fontSize="7.5">SOS · GPS</text>
      <text x="28" y="48" fontSize="7">LIVE · SOCKET.IO</text>
      <rect x="280" y="18" width="102" height="16" rx="2" className="d-fill-ink" />
      <text x="331" y="29" fontSize="7" textAnchor="middle" style={{ fill: "var(--color-background)" }}>ALERT</text>
    </>
  );
}

function Maple() {
  const modules = ["Residents", "Vitals", "Appointments", "Diet", "Billing", "Payroll", "Inventory", "Beds", "Family"];
  return (
    <>
      <rect x="20" y="20" width="360" height="220" rx="3" className="d-fill-surface d-line" />
      <rect x="20" y="20" width="82" height="220" className="d-fill-sunken" />
      {Array.from({ length: 6 }, (_, i) => (
        <rect key={i} x="32" y={44 + i * 18} width={i === 1 ? 58 : 44} height="6" rx="1" className={i === 1 ? "d-fill-accent" : "d-fill-muted"} opacity={i === 1 ? 1 : 0.35} />
      ))}
      <text x="32" y="222" fontSize="6.5">6 ROLES</text>
      {modules.map((m, i) => {
        const x = 116 + (i % 3) * 86;
        const y = 36 + Math.floor(i / 3) * 66;
        return (
          <g key={m}>
            <rect x={x} y={y} width="76" height="54" rx="2" className={i === 0 ? "d-fill-soft d-accent" : "d-fill-surface d-line"} />
            <text x={x + 8} y={y + 14} fontSize="7">{m.toUpperCase()}</text>
            <rect x={x + 8} y={y + 26} width={30 + rand(i) * 30} height="4" className="d-fill-muted" opacity="0.3" />
            <rect x={x + 8} y={y + 36} width={20 + rand(i + 9) * 34} height="4" className="d-fill-muted" opacity="0.3" />
          </g>
        );
      })}
    </>
  );
}

function Cataract() {
  return (
    <>
      <g transform="translate(70 130)">
        <ellipse rx="44" ry="26" className="d-fill-surface d-ink" strokeWidth="1" />
        <circle r="17" className="d-fill-sunken d-ink" strokeWidth="1" />
        <circle r="8" className="d-fill-ink" />
        <circle r="12" className="d-fill-soft" />
      </g>
      <path d="M 118 130 L 158 130" className="d-ink" />
      <rect x="158" y="112" width="76" height="36" rx="2" className="d-fill-ink" />
      <text x="196" y="133" fontSize="7.5" textAnchor="middle" style={{ fill: "var(--color-background)" }}>CATARACT?</text>
      <path d="M 234 122 C 254 122, 254 64, 278 64" fill="none" className="d-line" />
      <path d="M 234 138 C 254 138, 254 196, 278 196" fill="none" className="d-accent" strokeWidth="1.3" />
      <rect x="278" y="52" width="100" height="24" rx="2" className="d-fill-surface d-line" />
      <text x="328" y="67" fontSize="7.5" textAnchor="middle">NORMAL</text>
      <rect x="278" y="178" width="100" height="36" rx="2" className="d-fill-soft d-accent" />
      <text x="328" y="199" fontSize="7.5" textAnchor="middle">MATURE?</text>
      <text x="300" y="234" fontSize="7" textAnchor="middle">MATURE</text>
      <text x="356" y="234" fontSize="7" textAnchor="middle">IMMATURE</text>
      <text x="246" y="94" fontSize="7">STAGE 1</text>
      <text x="252" y="178" fontSize="7">STAGE 2</text>
    </>
  );
}

function Shombhar() {
  return (
    <>
      <rect x="24" y="30" width="110" height="200" rx="2" className="d-fill-surface d-line" />
      <text x="34" y="48" fontSize="7.5">SELLER</text>
      {Array.from({ length: 4 }, (_, i) => (
        <g key={i}>
          <rect x="34" y={60 + i * 40} width="28" height="28" className="d-fill-sunken" />
          <rect x="70" y={66 + i * 40} width="52" height="5" className="d-fill-muted" opacity="0.35" />
          <rect x="70" y={76 + i * 40} width="30" height="5" className="d-fill-accent" opacity="0.8" />
        </g>
      ))}
      <path d="M 140 130 L 260 130" className="d-ink" strokeDasharray="3 3" />
      <path d="M 252 124 L 260 130 L 252 136" fill="none" className="d-ink" />
      <g transform="translate(176 104)">
        <path d="M 0 0 L 8 0 L 14 30 L 44 30 L 50 10 L 11 10" fill="none" className="d-accent" strokeWidth="1.6" />
        <circle cx="18" cy="38" r="3" className="d-fill-accent" />
        <circle cx="40" cy="38" r="3" className="d-fill-accent" />
      </g>
      <rect x="266" y="30" width="110" height="200" rx="2" className="d-fill-surface d-line" />
      <text x="276" y="48" fontSize="7.5">CUSTOMER</text>
      {[38, 62, 46, 80, 70, 96].map((h, i) => (
        <rect key={i} x={280 + i * 15} y={210 - h} width="9" height={h} className={i === 5 ? "d-fill-accent" : "d-fill-muted"} opacity={i === 5 ? 1 : 0.35} />
      ))}
      <line x1="276" x2="366" y1="210" y2="210" className="d-ink" />
    </>
  );
}

function Pipeline() {
  const steps = ["FINN.NO", "SCRAPE", "PARSE", "DEDUPE", "MONGODB"];
  return (
    <>
      <text x="24" y="42" fontSize="7.5">AIRFLOW · SCHEDULED DAG</text>
      {Array.from({ length: 24 }, (_, i) => (
        <line key={i} x1={24 + i * 15} x2={24 + i * 15} y1="52" y2={i % 6 === 0 ? 64 : 58} className={i % 6 === 0 ? "d-accent" : "d-line"} />
      ))}
      {steps.map((s, i) => {
        const x = 24 + i * 72;
        const y = 120 + (i % 2 === 0 ? 0 : 28);
        return (
          <g key={s}>
            {i < steps.length - 1 && (
              <path d={`M ${x + 56} ${y + 14} C ${x + 66} ${y + 14}, ${x + 62} ${120 + ((i + 1) % 2 === 0 ? 0 : 28) + 14}, ${x + 72} ${120 + ((i + 1) % 2 === 0 ? 0 : 28) + 14}`} fill="none" className="d-ink" />
            )}
            <rect x={x} y={y} width="56" height="28" rx="2" className={i === 4 ? "d-fill-ink" : i === 3 ? "d-fill-soft d-accent" : "d-fill-surface d-line"} />
            <text x={x + 28} y={y + 17} fontSize="7" textAnchor="middle" style={i === 4 ? { fill: "var(--color-background)" } : undefined}>{s}</text>
          </g>
        );
      })}
      <rect x="24" y="206" width="352" height="26" rx="2" fill="none" className="d-line" strokeDasharray="3 3" />
      <text x="34" y="222" fontSize="7">DOCKER</text>
    </>
  );
}

function Yolo() {
  return (
    <>
      <rect x="20" y="20" width="360" height="220" className="d-fill-sunken" />
      <circle cx="110" cy="150" r="46" className="d-fill-muted" opacity="0.18" />
      <rect x="200" y="70" width="70" height="120" rx="4" className="d-fill-muted" opacity="0.18" />
      <path d="M 290 210 L 330 120 L 370 210 Z" className="d-fill-muted" opacity="0.18" />
      {[
        { x: 60, y: 100, w: 100, h: 100, l: "object 0.9x", a: true },
        { x: 192, y: 62, w: 86, h: 136, l: "object", a: false },
        { x: 284, y: 112, w: 92, h: 104, l: "object", a: false },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="none" className={b.a ? "d-accent" : "d-ink"} strokeWidth="1.5" />
          <rect x={b.x} y={b.y - 12} width={44} height="12" className={b.a ? "d-fill-accent" : "d-fill-ink"} />
          <text x={b.x + 4} y={b.y - 3} fontSize="7" style={{ fill: "var(--color-background)" }}>{(b.l.split(" ")[0] ?? "").toUpperCase()}</text>
        </g>
      ))}
    </>
  );
}

function Gold() {
  let d = "M 24 180";
  const pts: [number, number][] = [];
  for (let i = 0; i <= 44; i++) {
    const x = 24 + i * 8;
    const y = r1(180 - i * 1.9 - Math.sin(i / 3) * 12 - rand(i) * 10);
    pts.push([x, y]);
    d += ` L ${x} ${y}`;
  }
  const last = pts[pts.length - 1] ?? [376, 100];
  return (
    <>
      {[60, 100, 140, 180, 220].map((y) => (
        <line key={y} x1="24" x2="376" y1={y} y2={y} className="d-line" strokeWidth="0.5" />
      ))}
      <path d={`${d} L 376 220 L 24 220 Z`} className="d-fill-soft" />
      <path d={d} fill="none" className="d-accent" strokeWidth="1.6" />
      <path d={wavePath(4, 196, 6, 352, 8)} transform="translate(24 0)" fill="none" className="d-ink" opacity="0.4" />
      <circle cx={last[0]} cy={last[1]} r="4" className="d-fill-accent" />
      <text x="24" y="40" fontSize="7.5">GOLD · SILVER · BDT</text>
      <rect x="290" y="28" width="86" height="20" rx="2" className="d-fill-surface d-line" />
      <text x="333" y="41" fontSize="7" textAnchor="middle">CALCULATOR</text>
    </>
  );
}

function LearnDE() {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <g key={i}>
          <text x="24" y={46 + i * 42} fontSize="7">[{i + 1}]</text>
          <rect x="48" y={34 + i * 42} width="328" height="30" rx="2" className={i === 2 ? "d-fill-soft d-accent" : "d-fill-surface d-line"} />
          <rect x="58" y={44 + i * 42} width={60 + rand(i) * 120} height="4" className="d-fill-ink" opacity="0.5" />
          <rect x="58" y={53 + i * 42} width={40 + rand(i + 4) * 160} height="4" className="d-fill-muted" opacity="0.35" />
        </g>
      ))}
    </>
  );
}

function Portfolio() {
  return (
    <>
      <rect x="40" y="26" width="320" height="208" rx="4" className="d-fill-surface d-line" />
      <line x1="40" x2="360" y1="44" y2="44" className="d-line" />
      {[52, 62, 72].map((x) => (
        <circle key={x} cx={x} cy="35" r="2.5" className="d-fill-muted" opacity="0.5" />
      ))}
      <rect x="60" y="66" width="150" height="14" className="d-fill-ink" />
      <rect x="60" y="86" width="110" height="14" className="d-fill-ink" />
      <rect x="60" y="112" width="180" height="4" className="d-fill-muted" opacity="0.4" />
      <rect x="60" y="120" width="140" height="4" className="d-fill-muted" opacity="0.4" />
      <rect x="60" y="138" width="54" height="14" rx="2" className="d-fill-accent" />
      <circle cx="300" cy="100" r="32" className="d-fill-sunken d-line" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={60 + i * 98} y="172" width="86" height="46" rx="2" className="d-fill-sunken" />
      ))}
    </>
  );
}

export function ProjectVisual({
  visual,
  className,
  animate = true,
  label = "Schematic",
}: {
  visual: VisualKey;
  className?: string;
  animate?: boolean;
  label?: string;
}) {
  const body = (() => {
    switch (visual) {
      case "biotherax":
        return <BioTheraX />;
      case "eeg":
        return <EEG animate={animate} />;
      case "awd":
        return <AWD />;
      case "durjog":
        return <Durjog />;
      case "maple":
        return <Maple />;
      case "cataract":
        return <Cataract />;
      case "shombhar":
        return <Shombhar />;
      case "pipeline":
        return <Pipeline />;
      case "yolo":
        return <Yolo />;
      case "gold":
        return <Gold />;
      case "learn-de":
        return <LearnDE />;
      case "portfolio":
        return <Portfolio />;
    }
  })();

  return (
    <figure className={cn("bg-gradient-surface shadow-glass relative overflow-hidden rounded-2xl border border-border", className)}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="diagram block h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`Schematic diagram for this project (illustration, not a screenshot)`}
        strokeWidth="1"
      >
        {body}
      </svg>
      <figcaption className="text-eyebrow glass absolute bottom-3 right-3 rounded-full px-2.5 py-1 text-muted-foreground">{label}</figcaption>
    </figure>
  );
}

