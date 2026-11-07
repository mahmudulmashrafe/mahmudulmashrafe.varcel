'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Clock, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch (e) {
        setCurrentTime('');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/mahmudulmashrafe@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        // Fallback to standard form submit if ajax fails
        form.submit();
      }
    } catch (err) {
      // In case of network blocker, fall back to native submit
      form.submit();
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            07 / Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Initiate Contact or Collaboration
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Open for full-time engineering positions, machine learning research projects, and technical consultations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Verified Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 space-y-5">
              <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                Verified Channels
              </h3>

              {/* Email */}
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500">
                  Electronic Mail
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-xs sm:text-sm font-mono text-zinc-800 dark:text-zinc-200 hover:underline truncate"
                  >
                    {profile.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-1.5 rounded-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500">
                  Telephone / WhatsApp
                </div>
                <div className="p-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 font-mono text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                  {profile.phone}
                </div>
              </div>

              {/* Location & Timezone Clock */}
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500">
                  Base Location & Live Time
                </div>
                <div className="p-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between font-mono text-xs text-zinc-800 dark:text-zinc-200">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  {currentTime && (
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{currentTime}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                &bull; Response latency: Typically within 24 hours.
              </div>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/30 space-y-6">
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                  Send a Structured Message
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Inquiries are encrypted and routed directly to my personal inbox.
                </p>
              </div>

              {formState === 'success' ? (
                <div className="p-6 rounded-lg border border-emerald-500/20 bg-emerald-500/10 space-y-3 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                  <div className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                    Message Dispatched Successfully
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will review it promptly.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="inline-flex items-center text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  action="https://formsubmit.co/mahmudulmashrafe@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_subject" value="New Portfolio Contact from Mahmudul Mashrafe Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://mahmudulmashrafe.vercel.app/thanks" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. Dr. Alex Mercer"
                        className="w-full px-3.5 py-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="name@organization.com"
                        className="w-full px-3.5 py-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">
                      Message / Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Outline your project scope, technical requirements, or consultation timeline..."
                      className="w-full px-3.5 py-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-medium transition-colors disabled:opacity-60 cursor-pointer"
                  >
                    {formState === 'submitting' ? (
                      <span>Dispatching message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
