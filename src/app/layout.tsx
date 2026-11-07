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
  keywords: PORTFOLIO_DATA.profile.seo.keywords,
  authors: [{ name: 'Mahmudul Mashrafe', url: PORTFOLIO_DATA.profile.seo.siteUrl }],
  creator: 'Mahmudul Mashrafe',
  publisher: 'Mahmudul Mashrafe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    username: 'mahmudulmashrafe',
    gender: 'male',
    locale: 'en_US',
    images: [
      {
        url: '/images/profile-display.jpg',
        width: 800,
        height: 1062,
        alt: 'Mahmudul Mashrafe — Data Scientist & Machine Learning Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PORTFOLIO_DATA.profile.seo.title,
    description: PORTFOLIO_DATA.profile.seo.description,
    creator: '@iammashrafe',
    images: ['/images/profile-display.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: PORTFOLIO_DATA.profile.seo.googleVerification,
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.png', type: 'image/png' },
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/favicons/favicon.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mahmudul Mashrafe',
    alternateName: ['Mashrafe', 'Mahmudul Mashrafe UIU', 'iammashrafe'],
    url: PORTFOLIO_DATA.profile.seo.siteUrl,
    image: `${PORTFOLIO_DATA.profile.seo.siteUrl}/images/profile-display.jpg`,
    jobTitle: 'Data Scientist & Machine Learning Engineer',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'United International University',
      url: 'https://www.uiu.ac.bd',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'United International University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'BD',
    },
    email: PORTFOLIO_DATA.profile.email,
    telephone: PORTFOLIO_DATA.profile.phone,
    sameAs: [
      PORTFOLIO_DATA.profile.socialLinks.linkedin,
      PORTFOLIO_DATA.profile.socialLinks.github,
      PORTFOLIO_DATA.profile.socialLinks.x,
      PORTFOLIO_DATA.profile.socialLinks.kaggle,
      PORTFOLIO_DATA.profile.socialLinks.researchgate,
    ],
    knowsAbout: [
      'Machine Learning',
      'Data Science',
      'Deep Learning',
      'Computer Vision',
      'Data Engineering',
      'PyTorch',
      'TensorFlow',
      'Apache Airflow',
      'Python',
      'Full Stack Web Development',
    ],
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mahmudul Mashrafe Portfolio',
    url: PORTFOLIO_DATA.profile.seo.siteUrl,
    description: PORTFOLIO_DATA.profile.seo.description,
    author: {
      '@type': 'Person',
      name: 'Mahmudul Mashrafe',
    },
    inLanguage: 'en-US',
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Verification meta tag for search engines */}
        <meta
          name="google-site-verification"
          content={PORTFOLIO_DATA.profile.seo.googleVerification}
        />
        {/* Anti-FOUC Theme Script */}
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
        {/* JSON-LD Structured Data for Search Engine Entity Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
