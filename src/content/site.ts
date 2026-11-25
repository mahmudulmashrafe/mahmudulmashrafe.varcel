/**
 * Central site configuration with verified personal information.
 */

export const site = {
  name: "Mahmudul Mashrafe",
  shortName: "MM",
  role: "Data Science Graduate | AI/ML Research Enthusiast | Junior Product Analyst",
  tagline: "Exploring Intelligence. Building Meaningful Products.",
  title: "Mahmudul Mashrafe",
  description:
    "Official portfolio and research repository of Mahmudul Mashrafe, Data Science graduate and Junior Product Analyst at bdjobs.com limited. Specializing in machine learning research, healthcare AI, EEG signal processing, and product analytics in Dhaka, Bangladesh.",

  location: {
    short: "Dhaka, Bangladesh",
    full: "Dhaka-1230, Bangladesh",
  },

  email: {
    address: "mail@mahmudulmashrafe.com",
    portal: "https://mail.mahmudulmashrafe.com",
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
    instagram: "https://www.instagram.com/iammashrafe/",
    facebook: "https://www.facebook.com/iammashrafe",
  },

  vcard: "https://card.mahmudulmashrafe.com",

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

  contactEndpoint: "https://formsubmit.co/ajax/mail@mahmudulmashrafe.com",

  seo: {
    siteUrl: "https://www.mahmudulmashrafe.com",
    keywords: [
      "Mahmudul Mashrafe",
      "mahmudul mashrafe",
      "Mashrafe",
      "iammashrafe",
      "MD Mahmudul Mashrafe",
      "Mahmudul Mashrafe portfolio",
      "Mahmudul Mashrafe website",
      "Mahmudul Mashrafe CV",
      "Mahmudul Mashrafe resume",
      "Mahmudul Mashrafe bdjobs",
      "Mahmudul Mashrafe bdjobs.com",
      "Mahmudul Mashrafe UIU",
      "Mahmudul Mashrafe United International University",
      "Mahmudul Mashrafe UIU CSE",
      "Mahmudul Mashrafe CGPA 3.95",
      "Mahmudul Mashrafe Data Science",
      "Mahmudul Mashrafe Machine Learning",
      "Mahmudul Mashrafe AI Research",
      "Mahmudul Mashrafe Junior Product Analyst",
      "Mahmudul Mashrafe BioTheraX",
      "Mahmudul Mashrafe EEG",
      "Mahmudul Mashrafe EEG Migraine",
      "Mahmudul Mashrafe thesis",
      "Mahmudul Mashrafe GitHub",
      "Mahmudul Mashrafe LinkedIn",
      "Mahmudul Mashrafe Google Scholar",
      "Mahmudul Mashrafe ResearchGate",
      "Mahmudul Mashrafe email",
      "Mahmudul Mashrafe contact",
      "Mahmudul Mashrafe Dhaka",
      "Mahmudul Mashrafe Bangladesh",
      "Junior Product Analyst bdjobs",
      "Data Science Graduate Bangladesh",
      "Data Science Graduate UIU",
      "Machine Learning Researcher Dhaka",
      "AI Researcher Bangladesh",
      "Healthcare AI Researcher",
      "EEG Signal Processing Bangladesh",
      "Bioinformatics Researcher Dhaka",
      "Explainable AI Bangladesh",
      "Explainable Artificial Intelligence XAI Dhaka",
      "Product Analytics bdjobs",
      "BioTheraX drug discovery",
      "AWD Irrigation IoT Bangladesh",
      "Python Machine Learning Developer Dhaka",
      "Deep Learning Researcher Dhaka",
      "Bangla Sign Language AI",
      "Lung Cancer CT Scan Classification AI",
      "Closed Loop Wearable EEG Framework",
      "Migraine Mitigation Binaural Beat Entrainment",
      "Brain-Computer Interface BCI Bangladesh",
      "EEGNet Deep Learning Classification",
      "MNE Python EEG Analysis",
      "Functional Connectivity Brain Signals",
      "Multi-Omics Machine Learning",
      "METABRIC Breast Cancer Machine Learning",
      "TreeSHAP Interpretability Precision Oncology",
      "CatBoost Healthcare Machine Learning",
      "Consensus Feature Selection Machine Learning",
      "Biomedical Signal Processing Bangladesh",
      "Precision Medicine AI Bangladesh",
      "Recruitment Technology Product Analyst",
      "Job Market Analytics bdjobs",
      "Product Feature Analysis Dhaka",
      "User Experience Evaluation Product Analytics",
      "Data-Driven Product Development Bangladesh",
      "United International University Data Science",
      "UIU CSE Laboratory Undergraduate Assistant",
      "Structured Programming Language UIU",
      "Best Data Science Portfolio Bangladesh",
      "Top Machine Learning Researcher Dhaka",
      "Computer Science Graduate United International University",
      "Healthcare Machine Learning Engineer",
      "Biomedical Data Science Specialist",
      "AWD Smart Irrigation IoT Bangladesh",
      "ESP32 Precision Agriculture IoT",
      "Automated Data Pipeline Apache Airflow",
      "Dockerized Machine Learning Pipelines",
      "Computer Vision Transfer Learning Bangladesh",
      "Bangla Sign Language Recognition Deep Learning",
      "CT Scan Lung Cancer Classification CNN",
      "Exploratory Data Analysis EDA Python",
      "Predictive Modeling Data Science Dhaka",
      "Statistical Data Analysis Python SQL",
      "Full-Stack Next.js Developer Dhaka",
      "Tailwind CSS TypeScript Portfolio",
      "Data Science Internships Dhaka",
      "AI ML Engineer Bangladesh",
      "Emerging Tech Researcher Bangladesh",
      "bdjobs.com Limited tech team",
    ],
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

