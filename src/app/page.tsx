import type { Metadata } from "next";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { EngineeringProjects } from "@/components/portfolio/EngineeringProjects";
import { Experience } from "@/components/portfolio/Experience";
import { Hero } from "@/components/portfolio/Hero";
import { ResearchProjects } from "@/components/portfolio/ResearchProjects";
import { Skills } from "@/components/portfolio/Skills";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: {
    canonical: site.seo.siteUrl,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.seo.siteUrl,
    siteName: site.name,
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: "@iammashrafe",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Junior Product Analyst & Data Science Researcher",
    worksFor: {
      "@type": "Organization",
      name: "bdjobs.com Limited",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "United International University",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    email: site.email.address,
    telephone: site.phone.display,
    url: site.seo.siteUrl,
    sameAs: [site.socials.linkedin, site.socials.github, site.socials.x],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <ResearchProjects />
      <EngineeringProjects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
