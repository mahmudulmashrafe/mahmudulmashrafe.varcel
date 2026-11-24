import type { Metadata, Viewport } from "next";
import { Manrope, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { themeInitScript } from "@/lib/theme";
import { AmbientBackground } from "@/components/portfolio/AmbientBackground";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { LampPullCord } from "@/components/portfolio/LampPullCord";

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0C0E" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: {
    default: "Mahmudul Mashrafe",
    template: `%s | Mahmudul Mashrafe`,
  },
  description: site.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.name, url: site.seo.siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.seo.siteUrl,
    title: "Mahmudul Mashrafe",
    description: site.description,
    siteName: "Mahmudul Mashrafe",
    firstName: "Mahmudul",
    lastName: "Mashrafe",
    username: "mahmudulmashrafe",
    gender: "male",
    images: [
      {
        url: site.photo.src,
        width: 1200,
        height: 630,
        alt: `${site.name} — Data Science & Product Analyst Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmudul Mashrafe",
    description: site.description,
    images: [site.photo.src],
    creator: "@iammashrafe",
    site: "@iammashrafe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: site.seo.siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-black`}
      >
        <AmbientBackground />
        <ScrollProgress />
        <LampPullCord />
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
