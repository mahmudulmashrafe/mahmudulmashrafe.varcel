import type { Metadata } from 'next';
import './globals.css';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO_DATA.profile.seo.siteUrl),
  title: {
    default: PORTFOLIO_DATA.profile.seo.title,
    template: `%s | Mahmudul Mashrafe`,
  },
  description: PORTFOLIO_DATA.profile.seo.description,
  authors: [{ name: 'Mahmudul Mashrafe', url: PORTFOLIO_DATA.profile.seo.siteUrl }],
  creator: 'Mahmudul Mashrafe',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    title: PORTFOLIO_DATA.profile.seo.title,
    description: PORTFOLIO_DATA.profile.seo.description,
    url: PORTFOLIO_DATA.profile.seo.siteUrl,
    siteName: 'Mahmudul Mashrafe',
    firstName: 'Mahmudul',
    lastName: 'Mashrafe',
    images: [{ url: '/images/profile.jpg', width: 800, height: 800, alt: 'Mahmudul Mashrafe' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: PORTFOLIO_DATA.profile.seo.title,
    description: PORTFOLIO_DATA.profile.seo.description,
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: PORTFOLIO_DATA.profile.seo.googleVerification,
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.png', type: 'image/png' },
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mahmudul Mashrafe',
    url: PORTFOLIO_DATA.profile.seo.siteUrl,
    image: `${PORTFOLIO_DATA.profile.seo.siteUrl}/images/profile.jpg`,
    jobTitle: 'Jr. Product Analyst',
    worksFor: {
      '@type': 'Organization',
      name: 'Bdjobs.com',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'United International University',
    },
    sameAs: [
      PORTFOLIO_DATA.profile.socialLinks.linkedin,
      PORTFOLIO_DATA.profile.socialLinks.github,
      PORTFOLIO_DATA.profile.socialLinks.x,
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content={PORTFOLIO_DATA.profile.seo.googleVerification}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('mm-theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'light' || (!storedTheme && !supportDarkMode)) {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-150">
        {children}
      </body>
    </html>
  );
}
