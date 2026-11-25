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
  title: "Mahmudul Mashrafe",
  description: site.description,
  keywords: [...site.seo.keywords],
  alternates: {
    canonical: site.seo.siteUrl,
  },
  openGraph: {
    title: "Mahmudul Mashrafe",
    description: site.description,
    url: site.seo.siteUrl,
    siteName: "Mahmudul Mashrafe",
    locale: "en_US",
    type: "profile",
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
    creator: "@iammashrafe",
    site: "@iammashrafe",
    images: [site.photo.src],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.seo.siteUrl}/#person`,
        name: "Mahmudul Mashrafe",
        givenName: "Mahmudul",
        familyName: "Mashrafe",
        alternateName: ["MM", "Mashrafe", "iammashrafe", "MD Mahmudul Mashrafe"],
        url: site.seo.siteUrl,
        image: `${site.seo.siteUrl}${site.photo.src}`,
        jobTitle: "Junior Product Analyst",
        description:
          "Data Science graduate from United International University (UIU) and Junior Product Analyst at bdjobs.com limited, specializing in machine learning, healthcare AI, EEG signal processing, and product analytics in Dhaka, Bangladesh.",
        disambiguatingDescription:
          "Mahmudul Mashrafe is a Bangladeshi Data Science researcher, Junior Product Analyst at bdjobs.com limited, and UIU alumnus specializing in healthcare AI, EEG migraine classification, and product analytics.",
        worksFor: {
          "@type": "Organization",
          name: "bdjobs.com Limited",
          url: "https://www.bdjobs.com",
          sameAs: "https://www.linkedin.com/company/bdjobs-com-ltd-/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "United International University",
          alternateName: "UIU",
          url: "https://www.uiu.ac.bd",
          sameAs: "https://en.wikipedia.org/wiki/United_International_University",
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "Bachelor of Science in Data Science",
            recognizedBy: {
              "@type": "CollegeOrUniversity",
              name: "United International University",
            },
          },
        ],
        nationality: {
          "@type": "Country",
          name: "Bangladesh",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressRegion: "Dhaka Division",
          postalCode: "1230",
          addressCountry: "BD",
        },
        email: site.email.address,
        telephone: site.phone.display,
        sameAs: [
          site.socials.linkedin,
          site.socials.github,
          site.socials.x,
          site.socials.instagram,
          site.socials.facebook,
        ],
        knowsAbout: [
          "Mahmudul Mashrafe",
          "Data Science",
          "Machine Learning",
          "Artificial Intelligence",
          "Healthcare AI",
          "EEG Signal Processing",
          "Brain-Computer Interface",
          "Closed Loop Wearable Systems",
          "Binaural Beat Entrainment",
          "EEGNet",
          "MNE Python",
          "Functional Connectivity",
          "Product Analytics",
          "User Experience Evaluation",
          "Recruitment Technology",
          "Deep Learning",
          "Transfer Learning",
          "Python",
          "CatBoost",
          "TreeSHAP",
          "BioTheraX",
          "Multi-Omics Machine Learning",
          "Precision Oncology",
          "Natural Language Processing",
          "Computer Vision",
          "Explainable AI",
          "Predictive Modeling",
          "Feature Engineering",
          "Apache Airflow",
          "bdjobs.com Limited",
          "United International University",
        ],
        knowsLanguage: [
          { "@type": "Language", "name": "English", "alternateName": "en" },
          { "@type": "Language", "name": "Bengali", "alternateName": "bn" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.seo.siteUrl}/#website`,
        url: site.seo.siteUrl,
        name: "Mahmudul Mashrafe",
        alternateName: [
          "Mahmudul Mashrafe Portfolio",
          "Mahmudul Mashrafe Official Website",
          "mahmudulmashrafe.com",
        ],
        description: site.description,
        inLanguage: "en-US",
        publisher: {
          "@id": `${site.seo.siteUrl}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.seo.siteUrl}/#profilepage`,
        url: site.seo.siteUrl,
        name: "Mahmudul Mashrafe — Portfolio & Research",
        isPartOf: {
          "@id": `${site.seo.siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${site.seo.siteUrl}/#person`,
        },
        description: site.description,
        inLanguage: "en-US",
      },
    ],
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
