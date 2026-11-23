/**
 * Central site configuration with verified personal information.
 */

export const site = {
  name: "Mahmudul Mashrafe",
  shortName: "MM",
  role: "Data Science Graduate | AI/ML Research Enthusiast | Junior Product Analyst",
  tagline: "Exploring Intelligence. Building Meaningful Products.",
  title: "Mahmudul Mashrafe | Data Science, AI/ML Research & Product Analysis",
  description:
    "Explore the portfolio of Mahmudul Mashrafe, a Data Science graduate and Junior Product Analyst working across machine learning research, healthcare AI, intelligent systems, and product development.",

  location: {
    short: "Dhaka, Bangladesh",
    full: "Dhaka-1230, Bangladesh",
  },

  email: {
    address: "mail@mahmudulmashrafe.com",
    displayPlaceholder: "mail@mahmudulmashrafe.com",
    verified: true,
  },

  phone: {
    display: "+880 1798 210399",
    href: "tel:+8801798210399",
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/mahmudulmashrafe/",
    github: "https://github.com/mahmudulmashrafe",
    x: "https://x.com/iammashrafe",
  },

  cv: {
    path: "/MahmudulMashrafe_CV.pdf",
    available: true,
  },

  photo: {
    src: "/images/profile.jpg",
    alt: "Portrait of Mahmudul Mashrafe",
  },

  availability: {
    label: "Open to research collaborations & product roles",
    tone: "available" as "available" | "busy",
  },

  contactEndpoint: "",

  seo: {
    siteUrl: "https://www.mahmudulmashrafe.com",
    googleVerification: "TZ12rYnenVpiu8cF9ohFxLrOBryUdbgvZIpL5H-pLBI",
  },
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research Work" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type NavId = (typeof navItems)[number]["id"];

export function hasVerifiedEmail() {
  return site.email.verified && site.email.address.includes("@");
}

