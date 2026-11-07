export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails: string;
  category: 'Machine Learning' | 'Data Engineering' | 'Full Stack' | 'Robotics & CV';
  year: string;
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major?: string;
  grade: string;
  gradeLabel: string;
  period: string;
  current?: boolean;
  details?: string;
  location: string;
  badges?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  topics: string[];
  credentialId?: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Mahmudul Mashrafe',
    role: 'Data Scientist & Machine Learning Engineer',
    headline: 'Engineering resilient machine learning systems & high-throughput data architectures.',
    shortBio:
      'Undergraduate Assistant at United International University specializing in machine learning, statistical modeling, and computer vision. Committed to clean code, rigorous data engineering, and human-centered design.',
    location: 'Dhaka, Bangladesh',
    timezone: 'Asia/Dhaka (GMT+6)',
    email: 'mahmudulmashrafe@gmail.com',
    phone: '(+880) 1798210399',
    status: {
      available: true,
      label: 'Available for ML Engineering & Research Collaborations',
    },
    metrics: [
      { label: 'Academic CGPA', value: '3.92', detail: 'Out of 4.00 (Data Science Major)' },
      { label: 'Credits Completed', value: '84+', detail: 'United International University' },
      { label: 'HSC & SSC GPA', value: '5.00', detail: 'Golden GPA in Science Group' },
      { label: 'Research & Labs', value: '100+', detail: 'Students Guided in ML/Data Science' },
    ],
    socialLinks: {
      github: 'https://github.com/mahmudulmashrafe',
      linkedin: 'https://linkedin.com/in/mahmudulmashrafe',
      x: 'https://x.com/iammashrafe',
      kaggle: 'https://www.kaggle.com/mahmudulmashrafe',
      researchgate: 'https://www.researchgate.net/profile/Mahmudul-Mashrafe',
      email: 'mailto:mahmudulmashrafe@gmail.com',
    },
    seo: {
      siteUrl: 'https://mahmudulmashrafe.vercel.app',
      title: 'Mahmudul Mashrafe | Data Scientist & Machine Learning Engineer',
      description:
        'Official portfolio of Mahmudul Mashrafe — Data Scientist, Machine Learning Engineer, and Teaching Assistant at United International University (UIU). Specializing in Deep Learning, Computer Vision, and Data Engineering.',
      keywords: [
        'Mahmudul Mashrafe',
        'Mashrafe',
        'Data Scientist Bangladesh',
        'Machine Learning Engineer Dhaka',
        'UIU Data Science',
        'United International University',
        'Computer Vision',
        'PyTorch',
        'TensorFlow',
        'Data Engineering',
        'Mahmudul Mashrafe Portfolio',
      ],
      googleVerification: 'TZ12rYnenVpiu8cF9ohFxLrOBryUdbgvZIpL5H-pLBI',
    },
  },

  projects: [
    {
      id: 'uiu-research-collab',
      title: 'UIU ReseachCollab',
      subtitle: 'Academic Research & Faculty Collaboration Engine',
      description:
        'A comprehensive platform engineered for United International University to interconnect researchers, index ongoing research initiatives, and streamline student-faculty collaborations.',
      fullDetails:
        'Engineered to break academic research silos. Features publication indexing, researcher interest matching via keyword embeddings, lab proposal tracking, and automated grant collaboration notifications.',
      category: 'Full Stack',
      year: '2024',
      tags: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Machine Learning'],
      metrics: 'Over 200+ academic papers and research projects structured into a searchable index.',
      githubUrl: 'https://github.com/mahmudulmashrafe',
      liveUrl: 'https://github.com/mahmudulmashrafe',
      featured: true,
    },
    {
      id: 'mars-rover-prototype',
      title: 'Autonomous Mars Rover Prototype',
      subtitle: 'Multi-Sensor Robotics & Real-Time Computer Vision Platform',
      description:
        'A remote-controlled, semi-autonomous planetary exploration rover prototype incorporating multi-sensor environmental telemetry and real-time vision streaming.',
      fullDetails:
        'Constructed custom hardware-software integration featuring ultrasonic obstacle avoidance, gas/fire detection modules, soil moisture sensor telemetry, and low-latency Wi-Fi video streaming for real-time terrain navigation.',
      category: 'Robotics & CV',
      year: '2023 - 2024',
      tags: ['Computer Vision', 'PyTorch', 'OpenCV', 'Robotics Telemetry', 'IoT', 'C++'],
      metrics: 'Sub-50ms sensor response loop with real-time video streaming across local networks.',
      githubUrl: 'https://github.com/mahmudulmashrafe',
      liveUrl: 'https://github.com/mahmudulmashrafe',
      featured: true,
    },
    {
      id: 'data-engineering-pipeline',
      title: 'High-Throughput Data Pipeline & Feature Store',
      subtitle: 'Automated ETL & Predictive Feature Architecture',
      description:
        'An enterprise-grade data extraction and preprocessing pipeline designed for automated scraping, schema validation, data cleaning, and statistical feature engineering.',
      fullDetails:
        'Developed DAG workflows in Apache Airflow handling multi-source data ingestion, automated quality assertions, normalization, and partitioned loading into relational and NoSQL storage.',
      category: 'Data Engineering',
      year: '2024',
      tags: ['Apache Airflow', 'Python', 'PostgreSQL', 'Docker', 'Pandas', 'Data Cleaning'],
      metrics: 'Automated daily ingestion of 50K+ unstructured data records with 99.9% pipeline uptime.',
      githubUrl: 'https://github.com/mahmudulmashrafe',
      liveUrl: 'https://github.com/mahmudulmashrafe',
      featured: false,
    },
    {
      id: 'vision-defect-detection',
      title: 'Real-Time Neural Visual Inspection Engine',
      subtitle: 'Deep Learning Computer Vision System',
      description:
        'Convolutional neural network architecture fine-tuned for high-precision surface anomaly detection and real-time bounding box segmentation.',
      fullDetails:
        'Utilized PyTorch and OpenCV for data augmentation, model training, and ONNX runtime quantization, achieving near-zero latency inference suitable for edge deployment.',
      category: 'Machine Learning',
      year: '2024',
      tags: ['PyTorch', 'OpenCV', 'TensorFlow', 'ONNX', 'Python', 'Image Processing'],
      metrics: '97.4% mAP on benchmark anomaly dataset with 28ms average frame inference.',
      githubUrl: 'https://github.com/mahmudulmashrafe',
      liveUrl: 'https://github.com/mahmudulmashrafe',
      featured: false,
    },
  ] as Project[],

  experience: [
    {
      id: 'ta-uiu',
      role: 'Undergraduate Assistant (Teaching Assistant)',
      company: 'United International University',
      location: 'Dhaka, Bangladesh',
      period: 'Nov 2024 — Present',
      current: true,
      type: 'Academic & Instructional',
      description:
        'Assisting the Department of Computer Science & Engineering in Machine Learning and Data Science curriculum instruction, lab assessments, and student project mentorship.',
      highlights: [
        'Conducted interactive lab sessions covering supervised/unsupervised machine learning, statistical modeling, and Python data libraries.',
        'Architected coding challenges and automated autograding unit tests for student coursework.',
        'Provided 1-on-1 technical mentoring for 100+ undergraduate students on capstone data projects and model optimization.',
      ],
      skills: ['Machine Learning', 'Data Science', 'Python', 'Teaching', 'PyTorch', 'Data Analysis'],
    },
    {
      id: 'freelance-developer',
      role: 'Freelance Full Stack & ML Engineer',
      company: 'Independent Software Engineering',
      location: 'Remote',
      period: 'Jan 2023 — Present',
      current: true,
      type: 'Contract & Consulting',
      description:
        'Designing end-to-end web applications, custom machine learning models, and automated data pipelines for diverse clients.',
      highlights: [
        'Architected modern web applications with clean, responsive user interfaces and robust RESTful backends.',
        'Implemented computer vision pipelines and data scraping microservices for market intelligence and analytics.',
        'Ensured high accessibility, SEO optimization, and fast Core Web Vitals on all production deliveries.',
      ],
      skills: ['Full Stack Development', 'React', 'Node.js', 'Django', 'PostgreSQL', 'Docker'],
    },
  ] as Experience[],

  education: [
    {
      id: 'edu-uiu',
      institution: 'United International University (UIU)',
      degree: 'Bachelor of Science in Computer Science & Engineering',
      major: 'Major: Data Science',
      grade: '3.92 / 4.00',
      gradeLabel: 'CGPA',
      period: '2022 — Present',
      current: true,
      location: 'Dhaka, Bangladesh',
      details: 'Student ID: 011223015 • 84+ Credits Completed with Consistent Academic Honor List.',
      badges: ['Major in Data Science', 'High Distinction', '84 Credits'],
    },
    {
      id: 'edu-hsc',
      institution: 'Jatir Janak Bangabandhu Sheikh Mujibur Rahman Govt. College',
      degree: 'Higher Secondary Certificate (HSC)',
      grade: '5.00 / 5.00',
      gradeLabel: 'GPA',
      period: '2019 — 2021',
      location: 'Dhaka, Bangladesh',
      details: 'Science Group. Secured top-tier Golden GPA in all core science disciplines.',
      badges: ['Science', 'Golden GPA 5.00'],
    },
    {
      id: 'edu-ssc',
      institution: 'Nawab Habibullah Model School & College',
      degree: 'Secondary School Certificate (SSC)',
      grade: '5.00 / 5.00',
      gradeLabel: 'GPA',
      period: '2017 — 2019',
      location: 'Dhaka, Bangladesh',
      details: 'Science Group. Perfect academic record across mathematics and physics.',
      badges: ['Science', 'GPA 5.00'],
    },
  ] as EducationItem[],

  certifications: [
    {
      id: 'cert-cdip',
      title: 'Data Engineering with Python & Machine Learning',
      issuer: 'Center for Development of IT Professionals (CDIP), UIU',
      period: '2024 — 2025',
      topics: [
        'Data Engineering',
        'Machine Learning',
        'Data Scraping',
        'Data Visualization',
        'Data Cleaning',
        'Data Preprocessing',
        'Data Mining',
        'Statistical Data Analysis',
      ],
    },
  ] as CertificationItem[],

  skills: {
    machineLearning: [
      { name: 'PyTorch', level: 'Advanced' },
      { name: 'TensorFlow', level: 'Proficient' },
      { name: 'OpenCV', level: 'Advanced' },
      { name: 'Scikit-Learn', level: 'Advanced' },
      { name: 'Pandas', level: 'Advanced' },
      { name: 'NumPy', level: 'Advanced' },
      { name: 'Deep Learning', level: 'Advanced' },
      { name: 'Computer Vision', level: 'Advanced' },
    ],
    backendData: [
      { name: 'Python', level: 'Expert' },
      { name: 'Apache Airflow', level: 'Proficient' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MySQL', level: 'Proficient' },
      { name: 'MongoDB', level: 'Proficient' },
      { name: 'Node.js', level: 'Proficient' },
      { name: 'Express', level: 'Proficient' },
      { name: 'Django', level: 'Proficient' },
    ],
    frontendWeb: [
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 & Semantic Web', level: 'Expert' },
      { name: 'CSS3 & CSS Grid', level: 'Advanced' },
      { name: 'Figma', level: 'Proficient' },
    ],
    devopsEnvironment: [
      { name: 'Docker', level: 'Proficient' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Linux (Ubuntu/Debian)', level: 'Advanced' },
      { name: 'macOS & Shell Scripting', level: 'Advanced' },
      { name: 'Postman & API Testing', level: 'Advanced' },
      { name: 'CI/CD & Vercel', level: 'Proficient' },
    ],
  },

  insights: [
    {
      slug: 'architecting-reliable-ml-pipelines',
      title: 'Architecting Resilient Machine Learning Pipelines: Beyond the Jupyter Notebook',
      excerpt:
        'A comprehensive breakdown of transitioning prototype models into reproducible, containerized production pipelines with schema validation and automated drift detection.',
      category: 'Data Engineering',
      readTime: '6 min read',
      date: 'Jan 2025',
    },
    {
      slug: 'feature-engineering-strategies',
      title: 'High-Impact Feature Engineering Strategies for Tabular & Time-Series Data',
      excerpt:
        'Systematic methodologies for target encoding, temporal lag variables, and dimensional clustering that consistently improve model generalizability.',
      category: 'Machine Learning',
      readTime: '5 min read',
      date: 'Dec 2024',
    },
    {
      slug: 'optimizing-edge-vision-models',
      title: 'Optimizing Computer Vision Models for Edge Hardware & Real-Time Inference',
      excerpt:
        'Techniques in post-training INT8 quantization, layer pruning, and TensorRT/ONNX compilation to achieve sub-30ms latencies on constrained devices.',
      category: 'Computer Vision',
      readTime: '7 min read',
      date: 'Nov 2024',
    },
  ] as InsightArticle[],
};
