import Link from 'next/link';
import { CheckCircle2, ArrowLeft, Home } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata = {
  title: 'Thank You | Mahmudul Mashrafe',
  description: 'Thank you for your message. Mahmudul Mashrafe will respond to your inquiry shortly.',
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md p-8 sm:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-lg text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Inquiry Received
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Thank you for reaching out to Mahmudul Mashrafe. Your message has been received, and a response will be dispatched within 24 business hours.
          </p>
        </div>

        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
          <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            Mahmudul Mashrafe &bull; Data Scientist & ML Engineer
          </div>
        </div>
      </div>
    </div>
  );
}
