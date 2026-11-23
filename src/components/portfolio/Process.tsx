"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    num: "01",
    title: "Discover & Hypothesize",
    lead: "Framing research questions & real-world product bottlenecks.",
    body: "Investigating literature, identifying domain gaps across clinical EEG entrainment or product funnel telemetry, and establishing verifiable hypotheses.",
  },
  {
    num: "02",
    title: "Clean & Signal Preprocess",
    lead: "Rigorous signal filtering, feature extraction & artifact removal.",
    body: "Applying MNE-Python, Butterworth bandpass filters, ICA ocular denoising, spectral Fourier power density, and structured feature engineering.",
  },
  {
    num: "03",
    title: "Model & Architect",
    lead: "Designing deep learning and gradient boosted ensembles.",
    body: "Developing EEGNet architectures, CatBoost/XGBoost classifiers, convolutional pipelines, and tuning hyperparameters via cross-validation.",
  },
  {
    num: "04",
    title: "Benchmark & Explain",
    lead: "Transparent metric validation and SHAP interpretability.",
    body: "Evaluating with ROC-AUC, sensitivity/specificity, and decomposing model feature attributions with SHAP and statistical significance testing.",
  },
  {
    num: "05",
    title: "Deploy & Scale",
    lead: "Production-ready APIs, dockerization & user experience.",
    body: "Containerizing inference pipelines with Docker, FastAPI, and integrating real-time telemetry dashboards for production monitoring.",
  },
];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-pad relative z-10">
      <div className="container-page">
        <SectionHeader
          id="process-title"
          index="03"
          eyebrow="Methodology & Architecture"
          title={<>How I <span className="font-editorial">Work</span></>}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 md:mt-20">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.06} className="h-full">
              <div
                data-cursor="PROCESS"
                className="glass relative flex h-full flex-col justify-between rounded-3xl p-6 border border-white/10 hover:border-[#ff5a2a]/40 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-display text-2xl font-black text-[#ff5a2a] group-hover:text-[#ffc58f] transition-colors">
                      {s.num}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-[#ff5a2a] transition-colors" />
                  </div>
                  <h3 className="font-display mt-4 text-base font-bold text-white tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-[#ffb89a] leading-relaxed">
                    {s.lead}
                  </p>
                </div>

                <p className="mt-5 text-xs text-white/55 leading-relaxed pt-4 border-t border-white/5">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
