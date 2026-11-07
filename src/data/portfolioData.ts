export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  thesis?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  location: string;
  issued: string;
  credentialId: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Mahmudul Mashrafe',
    title: 'Jr. Product Analyst & Software Engineer',
    headline: 'Jr. Product Analyst at Bdjobs.com & Teaching Assistant at United International University',
    bio: 'Product analyst and software engineer based in Dhaka, Bangladesh. Currently an Intern Jr. Product Analyst at Bdjobs.com and an Undergraduate Teaching Assistant at UIU, where I completed my B.Sc. in Computer Science & Engineering with a 3.95 / 4.00 CGPA. My research centers on biomedical signal processing and closed-loop wearable EEG systems.',
    location: 'Dhaka, Bangladesh',
    email: 'mahmudulmashrafe@gmail.com',
    phone: '+880 1798210399',
    resumePdf: '/MahmudulMashrafe_CV.pdf',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/mahmudulmashrafe/',
      github: 'https://github.com/mahmudulmashrafe',
      x: 'https://x.com/iammashrafe',
      email: 'mailto:mahmudulmashrafe@gmail.com',
    },
    seo: {
      siteUrl: 'https://www.mahmudulmashrafe.com',
      title: 'Mahmudul Mashrafe | Jr. Product Analyst & Software Engineer',
      description:
        'Official portfolio of Mahmudul Mashrafe — Jr. Product Analyst at Bdjobs.com and Teaching Assistant at United International University (UIU). B.Sc. in CSE with a 3.95/4.00 CGPA.',
      googleVerification: 'TZ12rYnenVpiu8cF9ohFxLrOBryUdbgvZIpL5H-pLBI',
    },
  },

  experiences: [
    {
      id: 'bdjobs',
      role: 'Intern — Jr. Product Analyst',
      company: 'Bdjobs.com',
      location: 'Dhaka - 1212, Bangladesh',
      period: 'Oct 2026 — Present',
      current: true,
      bullets: [
        'Conduct product research, market analysis, and identify opportunities for data-driven product improvements on Bangladesh’s premier employment platform.',
        'Collaborate with cross-functional teams on product strategy, user requirements, and feature development.',
      ],
      skills: ['Product Analytics', 'Market Research', 'Data-Driven Strategy', 'Cross-Functional Collaboration'],
    },
    {
      id: 'ta-uiu',
      role: 'Undergraduate Teaching Assistant',
      company: 'United International University',
      location: 'Dhaka - 1212, Bangladesh',
      period: 'Nov 2024 — Oct 2026',
      current: false,
      bullets: [
        'Assisted faculty members in teaching and coordinating laboratory sessions for 300+ students in CSE courses, supporting hands-on programming and technical learning.',
        'Supported grading, course materials preparation, and dataset management.',
      ],
      skills: ['Machine Learning', 'Data Science', 'Teaching', 'Curriculum Support', 'Python'],
    },
  ] as Experience[],

  projects: [
    {
      id: 'durjog-prohori',
      title: 'Durjog Prohori',
      subtitle: 'Disaster Management & Early Warning Platform',
      description:
        'A full-stack disaster management platform designed to provide rapid emergency response and real-time environmental monitoring.',
      bullets: [
        'Built using the MERN stack with multi-role authentication for citizens, responders, and administrators.',
        'Implemented SOS emergency alerts with geolocation and real-time earthquake and weather tracking.',
        'Integrated an AI assistant and interactive maps for disaster guidance and evacuation response.',
      ],
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Interactive Maps', 'Real-Time APIs'],
      githubUrl: 'https://github.com/mahmudulmashrafe',
    },
    {
      id: 'airflow-pipeline',
      title: 'Web Scraping & Data Pipeline',
      subtitle: 'Automated ETL Architecture with Docker & Airflow',
      description:
        'A robust automated data extraction and pipeline architecture designed for scalable and repeatable analytical workflows.',
      bullets: [
        'Built resilient web extraction and transformation pipelines using Python and Apache Airflow.',
        'Containerized all computational workflows with Docker for cross-platform portability.',
        'Integrated MongoDB for high-throughput unstructured data storage and automated schema assertions.',
      ],
      tags: ['Python', 'Apache Airflow', 'Docker', 'MongoDB', 'ETL', 'Web Scraping'],
      githubUrl: 'https://github.com/mahmudulmashrafe/UGA_University_list_extractor',
    },
    {
      id: 'sombhar',
      title: 'Sombhar — The Farmers Market',
      subtitle: 'Direct Agricultural Supply Chain Platform',
      description:
        'A database-driven marketplace connecting agricultural producers directly with end consumers.',
      bullets: [
        'Developed a DBMS-based agricultural supply chain to eliminate intermediary overhead.',
        'Enabled secure, transparent transactions to increase farmer profit margins and provide fresh produce.',
        'Implemented database-driven product inventory, transaction ledgers, and order management.',
      ],
      tags: ['PHP', 'MySQL', 'JavaScript', 'Database Architecture'],
      githubUrl: 'https://github.com/mahmudulmashrafe',
    },
    {
      id: 'maple-house',
      title: 'Maple House',
      subtitle: 'Old Age Home & Eldercare Management System',
      description:
        'A comprehensive web-based management portal for eldercare residences and healthcare operations.',
      bullets: [
        'Designed system modules to manage residents, health records, staff shifts, meals, and facility logistics.',
        'Implemented multi-role authentication with dedicated portals for administrators, doctors, chefs, and residents.',
      ],
      tags: ['PHP', 'MySQL', 'JavaScript', 'Role-Based Auth', 'UI/UX'],
      githubUrl: 'https://github.com/mahmudulmashrafe/Maple_House',
    },
  ] as Project[],

  education: [
    {
      id: 'uiu',
      institution: 'United International University',
      degree: 'Bachelor of Science in Computer Science and Engineering (BSCSE)',
      location: 'Dhaka - 1212, Bangladesh',
      period: 'Oct 2022 — Nov 2026',
      grade: 'CGPA: 3.95 / 4.00',
      thesis: 'A Closed Loop Wearable EEG Framework for Migraine Mitigation via Binaural Beat Entrainment',
    },
    {
      id: 'hsc',
      institution: 'Jatir Janak Bangabandhu Sheikh Mujibur Rahman Govt. College',
      degree: 'Higher Secondary Certificate (HSC) — Science',
      location: 'Dhaka - 1230, Bangladesh',
      period: 'Jul 2019 — Dec 2021',
      grade: 'GPA: 5.00 / 5.00',
    },
  ] as EducationItem[],

  certifications: [
    {
      id: 'cdip',
      title: 'Data Engineer with Python & Machine Learning',
      issuer: 'Center For Development of IT Professionals (CDIP), UIU',
      location: 'Dhaka - 1212, Bangladesh',
      issued: 'Mar 2025',
      credentialId: '921242003',
    },
  ] as CertificationItem[],

  skills: {
    languages: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'PHP', 'SQL'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    frameworks: ['React', 'Node.js', 'Express', 'OpenCV', 'Pandas', 'NumPy'],
    tools: ['Git', 'Docker', 'Postman', 'Apache Airflow', 'Jupyter Notebook'],
  },
};
