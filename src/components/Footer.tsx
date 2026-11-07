import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-xs text-zinc-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
