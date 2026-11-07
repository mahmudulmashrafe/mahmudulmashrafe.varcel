export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails: string;
  category: 'Machine Learning' | 'Data Engineering' | 'Full Stack' | 'Robotics & CV';
  year: string;
  tags: string[];
  metrics: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  architectureHighlights: string[];
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
  scholarship?: string;
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
    tagline: 'Data Scientist & Machine Learning Engineer',
    roles: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Teaching Assistant @ UIU',
      'Deep Learning & CV Researcher',
      'Data Pipeline Architect',
    ],
    headline: 'Engineering resilient machine learning systems & high-throughput data architectures.',
    shortBio:
      'Undergraduate Assistant and Teaching Assistant at United International University (UIU), Dhaka. Maintaining a 3.92/4.00 CGPA with a 100% Academic Merit Scholarship. Passionate about computer vision, applied statistical learning, and building scalable full-stack data solutions.',
    location: 'Dhaka, Bangladesh',
    timezone: 'Asia/Dhaka (GMT+6)',
    email: 'mahmudulmashrafe@gmail.com',
    phone: '(+880) 1798210399',
    studentId: '0112230115',
    status: {
      available: true,
      label: 'Open for ML Engineering & Research Roles',
      currentRole: 'Teaching Assistant @ UIU Department of CSE',
    },
    achievements: [
      {
        title: '100% Merit Tuition Fee Waiver Scholarship',
        issuer: 'United International University',
        desc: 'Awarded for sustained top-tier academic excellence in B.Sc. in CSE.',
      },
      {
        title: '3.92 / 4.00 Cumulative GPA',
        issuer: 'Major in Data Science',
        desc: 'Consistent placement on the Vice-Chancellor & Dean’s Academic Honor List across 84+ completed credits.',
      },
      {
        title: 'Teaching Assistant (TA)',
        issuer: 'Department of CSE, UIU',
        desc: 'Conducting Machine Learning & Data Science labs and mentoring 100+ engineering students.',
      },
      {
        title: 'Double Golden GPA 5.00',
        issuer: 'HSC & SSC Science',
        desc: 'Perfect academic scores in board examinations across physics, chemistry, and higher mathematics.',
      },
    ],
    metrics: [
      { label: 'Academic CGPA', value: '3.92', detail: 'Out of 4.00 (Data Science Major)' },
      { label: 'Merit Scholarship', value: '100%', detail: 'Tuition Waiver at UIU' },
      { label: 'Credits Completed', value: '84+', detail: 'United International University' },
      { label: 'Students Mentored', value: '100+', detail: 'In Machine Learning Labs' },
    ],
    socialLinks: {
      github: 'https://github.com/mahmudulmashrafe',
      linkedin: 'https://www.linkedin.com/in/mahmudulmashrafe/',
      x: 'https://x.com/iammashrafe',
      kaggle: 'https://www.kaggle.com/mahmudulmashrafe',
      researchgate: 'https://www.researchgate.net/profile/Mahmudul-Mashrafe',
      email: 'mailto:mahmudulmashrafe@gmail.com',
    },
    seo: {
      siteUrl: 'https://www.mahmudulmashrafe.com',
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
        'Teaching Assistant UIU',
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
      metrics: '200+ academic papers and research projects structured into a searchable index.',
      githubUrl: 'https://github.com/mahmudulmashrafe',
      liveUrl: 'https://www.mahmudulmashrafe.com/#projects',
      featured: true,
      architectureHighlights: [
        'Semantic keyword matching for multidisciplinary research matchmaking.',
        'PostgreSQL relational schema with optimized composite indexes for sub-10ms query speeds.',
        'Docker containerized deployment pipeline ensuring deterministic local and production parity.',
      ],
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
      liveUrl: 'https://www.mahmudulmashrafe.com/#projects',
      featured: true,
      architectureHighlights: [
        'Real-time OpenCV edge hazard detection running on local embedded controller.',
        'Ultrasonic obstacle avoidance algorithm executing in closed-loop feedback.',
        'Low-overhead WebSocket telemetry pipeline transmitting soil moisture and thermal data.',
      ],
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
      githubUrl: 'https://github.com/mahmudulmashrafe/UGA_University_list_extractor',
      liveUrl: 'https://www.mahmudulmashrafe.com/#projects',
      featured: false,
      architectureHighlights: [
        'Airflow DAG orchestration with automated task retries and Slack error alerting.',
        'Strict Pydantic contract assertions preventing silent schema corruption at ingestion.',
        'Optimized Pandas vectorization accelerating preprocessing throughput by 4.2x.',
      ],
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
      githubUrl: 'https://github.com/mahmudulmashrafe/FYDP',
      liveUrl: 'https://www.mahmudulmashrafe.com/#projects',
      featured: false,
      architectureHighlights: [
        'Transfer learning backbone fine-tuned with custom focal loss for extreme class imbalance.',
        'Post-training INT8 quantization via ONNX Runtime cutting model footprint by 68%.',
        'Sub-30ms inference pipeline optimized for industrial visual quality control.',
      ],
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
        'Appointed by the Department of Computer Science & Engineering to lead laboratory instructional sessions, guide students through Machine Learning algorithms, and evaluate computational coursework.',
      highlights: [
        'Conducted interactive lab sessions covering supervised/unsupervised machine learning, statistical modeling, and Python data science ecosystems.',
        'Designed practical programming challenges, data exploratory problem sets, and automated autograding unit tests for student coursework.',
        'Provided 1-on-1 technical mentoring for 100+ undergraduate students on capstone data science implementations and neural network fine-tuning.',
      ],
      skills: ['Machine Learning', 'Data Science', 'Python', 'Teaching & Mentorship', 'PyTorch', 'Data Analysis'],
    },
    {
      id: 'freelance-developer',
      role: 'Freelance Full Stack & ML Engineer',
      company: 'Independent Software Engineering',
      location: 'Remote / Dhaka',
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
      details: 'Student ID: 0112230115 • 84+ Credits Completed • Awarded 100% Tuition Fee Waiver for Academic Merit.',
      badges: ['Major in Data Science', '100% Merit Scholarship', 'High Distinction'],
      scholarship: '100% Academic Tuition Fee Waiver (Top Merit Tier)',
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
      badges: ['Science Group', 'Golden GPA 5.00'],
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
      badges: ['Science Group', 'GPA 5.00'],
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
      { name: 'PyTorch', level: 'Advanced', exp: '3+ yrs' },
      { name: 'TensorFlow', level: 'Proficient', exp: '2+ yrs' },
      { name: 'OpenCV', level: 'Advanced', exp: '2+ yrs' },
      { name: 'Scikit-Learn', level: 'Advanced', exp: '3+ yrs' },
      { name: 'Pandas', level: 'Advanced', exp: '3+ yrs' },
      { name: 'NumPy', level: 'Advanced', exp: '3+ yrs' },
      { name: 'Deep Learning', level: 'Advanced', exp: '2+ yrs' },
      { name: 'Computer Vision', level: 'Advanced', exp: '2+ yrs' },
    ],
    backendData: [
      { name: 'Python', level: 'Expert', exp: '4+ yrs' },
      { name: 'Apache Airflow', level: 'Proficient', exp: '1+ yrs' },
      { name: 'PostgreSQL', level: 'Advanced', exp: '2+ yrs' },
      { name: 'MySQL', level: 'Proficient', exp: '3+ yrs' },
      { name: 'MongoDB', level: 'Proficient', exp: '2+ yrs' },
      { name: 'Node.js', level: 'Proficient', exp: '2+ yrs' },
      { name: 'Express', level: 'Proficient', exp: '2+ yrs' },
      { name: 'Django', level: 'Proficient', exp: '2+ yrs' },
    ],
    frontendWeb: [
      { name: 'React', level: 'Advanced', exp: '3+ yrs' },
      { name: 'Next.js', level: 'Advanced', exp: '2+ yrs' },
      { name: 'TypeScript', level: 'Advanced', exp: '2+ yrs' },
      { name: 'JavaScript', level: 'Advanced', exp: '3+ yrs' },
      { name: 'Tailwind CSS', level: 'Advanced', exp: '3+ yrs' },
      { name: 'HTML5 & Semantic Web', level: 'Expert', exp: '4+ yrs' },
      { name: 'CSS3 & Grid', level: 'Advanced', exp: '4+ yrs' },
      { name: 'Figma', level: 'Proficient', exp: '2+ yrs' },
    ],
    devopsEnvironment: [
      { name: 'Docker', level: 'Proficient', exp: '2+ yrs' },
      { name: 'Git & GitHub', level: 'Advanced', exp: '4+ yrs' },
      { name: 'Linux (Ubuntu/Debian)', level: 'Advanced', exp: '3+ yrs' },
      { name: 'macOS & Shell Scripting', level: 'Advanced', exp: '3+ yrs' },
      { name: 'Postman & API Testing', level: 'Advanced', exp: '3+ yrs' },
      { name: 'CI/CD & Vercel', level: 'Proficient', exp: '2+ yrs' },
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
