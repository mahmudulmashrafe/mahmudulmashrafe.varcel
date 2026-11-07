'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

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
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        form.submit();
      }
    } catch (err) {
      form.submit();
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Feel free to reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Contact Details (5 cols) */}
          <div className="md:col-span-5 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-5">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase text-zinc-400">Email</div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm font-mono text-zinc-900 dark:text-zinc-100 hover:underline"
                >
                  {profile.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-mono uppercase text-zinc-400">Phone</div>
              <div className="text-sm font-mono text-zinc-900 dark:text-zinc-100">
                {profile.phone}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-mono uppercase text-zinc-400">Location</div>
              <div className="text-sm font-mono text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-2">
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:underline"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:underline"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="md:col-span-7 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
            {formState === 'success' ? (
              <div className="p-8 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Message Sent
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Thank you for reaching out. I’ll get back to you soon.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline pt-2 cursor-pointer font-mono"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="New Portfolio Contact" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-mono uppercase text-zinc-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-hidden focus:border-zinc-500"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-mono uppercase text-zinc-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-hidden focus:border-zinc-500"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-mono uppercase text-zinc-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-hidden focus:border-zinc-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-zinc-50 dark:text-zinc-900 text-sm font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <span>{formState === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
