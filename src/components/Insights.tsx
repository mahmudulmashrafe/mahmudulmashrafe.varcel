'use client';

import { useState } from 'react';
import { BookOpen, Clock, ArrowUpRight, ChevronRight, X } from 'lucide-react';
import { PORTFOLIO_DATA, InsightArticle } from '@/data/portfolioData';

const detailedArticles: Record<string, string[]> = {
  'architecting-reliable-ml-pipelines': [
    'A prototype machine learning model functioning in a local Jupyter notebook is merely a proof of concept. The true challenge begins when operationalizing models into resilient, unattended production pipelines that reliably process continuous streams of non-stationary data.',
    'Core architectural pillars include: 1) Deterministic data ingestion with contract-based schema assertions using Pydantic or Great Expectations. 2) Explicit pipeline step containerization using Docker to guarantee identical computational dependencies across environments. 3) Automated drift monitoring: tracking Kolmogorov-Smirnov statistics on incoming numerical distributions to trigger automated alerting before silent performance degradation affects downstream stakeholders.',
    'By establishing clear orchestration workflows using tools like Apache Airflow, data engineering teams ensure that model retraining is reproducible, traceable, and backed by comprehensive lineage metadata.',
  ],
  'feature-engineering-strategies': [
    'Feature engineering remains the highest leverage vector for boosting model performance on structured and tabular datasets, frequently outpacing the incremental gains of complex hyperparameter tuning.',
    'Effective practices include target encoding with Out-of-Fold (OOF) regularization to prevent data leakage in high-cardinality categorical variables, temporal rolling-window aggregations to capture recent momentum without lookahead bias, and interaction term discovery via decision tree depth inspections.',
    'Maintaining a versioned feature store decouples feature extraction from offline model training and online serving, ensuring identical transformation logic across both training and inference stages.',
  ],
  'optimizing-edge-vision-models': [
    'Deploying computer vision workloads onto resource-constrained edge devices (such as robotic rovers, IoT gateways, and mobile hardware) demands extreme attention to latency, memory footprint, and thermals.',
    'Techniques such as Post-Training Quantization (PTQ) from FP32 to INT8 typically yield a 3x to 4x reduction in model parameter memory while incurring less than a 1% decline in mean Average Precision (mAP).',
    'Combined with structured weight pruning and compiling neural computation graphs through ONNX Runtime or TensorRT, models achieve sub-30ms frame inference times, enabling real-time closed-loop decision making on robotics platforms.',
  ],
};

export default function Insights() {
  const { insights } = PORTFOLIO_DATA;
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <section
      id="insights"
      className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              06 / Technical Writing & Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Engineering Notes & Research
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Published architectural breakdowns on reliable machine learning operations, feature engineering, and edge vision.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 self-start md:self-auto">
            Monetization & Search Engine Index Ready
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800 text-[11px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                  {article.date}
                </span>
                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors cursor-pointer"
                >
                  <span>Read Breakdown</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                  {activeArticle.category} &bull; {activeArticle.readTime}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Close article"
                className="w-8 h-8 rounded-md flex items-center justify-center border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {(detailedArticles[activeArticle.slug] || [activeArticle.excerpt]).map(
                (paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                )
              )}
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Author: Mahmudul Mashrafe</span>
              <span>Published: {activeArticle.date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
