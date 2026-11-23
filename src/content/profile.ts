export const about = {
  paragraphs: [
    "I'm a Computer Science and Engineering graduate majoring in Data Science from United International University. My interests lie at the intersection of machine learning, artificial intelligence, data-driven research, and product development.",
    "I enjoy exploring how intelligent systems can address real-world problems, particularly in healthcare, computer vision, and applied machine learning. Alongside research, I am interested in understanding users, evaluating product experiences, and translating ideas into practical digital solutions.",
    "My experience includes academic laboratory assistance, research projects, machine learning experimentation, software development, and product analysis.",
  ],
  focus: [
    {
      title: "Research & Intelligence",
      body: "Exploring machine learning, deep learning, explainable AI, healthcare AI, and intelligent systems.",
    },
    {
      title: "Engineering & Development",
      body: "Building data pipelines, machine learning applications, computer vision systems, and full-stack solutions.",
    },
    {
      title: "Product Thinking",
      body: "Understanding user needs, analyzing product experiences, evaluating features, and improving digital products through structured thinking.",
    },
  ],
};

export const experience = [
  {
    role: "Junior Product Analyst",
    org: "bdjobs.com Limited",
    period: "October 2026 – Present",
    location: "Dhaka, Bangladesh",
    image: "/images/bdjobs.png",
    current: true,
    description:
      "Working in product analysis and development within the recruitment technology ecosystem, with an interest in understanding user needs, evaluating digital experiences, and identifying opportunities for product improvement.",
    listLabel: "Focus areas",
    items: [
      "Product feature analysis",
      "User experience evaluation",
      "Product research",
      "Recruitment technology",
      "Data-driven product thinking",
      "Feature assessment and improvement opportunities",
    ],
  },
  {
    role: "Undergraduate Assistant",
    org: "United International University",
    period: "November 2024 – October 2026",
    location: "Dhaka, Bangladesh",
    image: "/images/uiu.png",
    current: false,
    description:
      "Worked as an Undergraduate Assistant for the Structured Programming Language Laboratory, supporting academic and laboratory activities.",
    listLabel: "Responsibilities",
    items: [
      "Assisted students with structured programming concepts",
      "Supported laboratory sessions and practical exercises",
      "Helped students understand programming problems",
      "Evaluated lab assignments and problem-solving tasks",
      "Provided academic and technical guidance",
      "Supported laboratory activities and learning environments",
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  detailLabel: string;
  detail: string;
  period: string;
  scoreLabel: string;
  score: string;
  scoreMax: string;
  image: string;
  location?: string;
  thesis?: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "United International University",
    detailLabel: "Major",
    detail: "Data Science",
    period: "Oct 2022 – Nov 2026",
    scoreLabel: "CGPA",
    score: "3.95",
    scoreMax: "4.00",
    image: "/images/uiu.png",
    location: "Dhaka - 1212, Bangladesh",
    thesis: "A Closed Loop Wearable EEG Framework for Migraine Mitigation via Binaural Beat Entrainment",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Jatir Janak Bangabandhu Sheikh Mujibur Rahman Govt. College",
    detailLabel: "Group",
    detail: "Science",
    period: "Jul 2019 – Dec 2021",
    scoreLabel: "GPA",
    score: "5.00",
    scoreMax: "5.00",
    image: "/images/jjbbsmrgc.jpeg",
    location: "Dhaka - 1230, Bangladesh",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Nawab Habibullah Model School & College",
    detailLabel: "Group",
    detail: "Science",
    period: "Jan 2017 – May 2019",
    scoreLabel: "GPA",
    score: "5.00",
    scoreMax: "5.00",
    image: "/images/nhmsc.jpeg",
    location: "Dhaka - 1230, Bangladesh",
  },
];

export const skills = [
  {
    group: "Programming & Data",
    items: ["Python", "SQL", "PHP", "C/C++", "JavaScript", "Pandas", "NumPy"],
  },
  {
    group: "Machine Learning & AI",
    items: [
      "Scikit-learn",
      "CatBoost",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "Deep Learning",
      "Transfer Learning",
      "Explainable AI",
      "Computer Vision",
    ],
  },
  {
    group: "Data Science & Analytics",
    items: [
      "Data Preprocessing",
      "Feature Engineering",
      "Feature Selection",
      "Exploratory Data Analysis",
      "Model Evaluation",
      "Statistical Analysis",
      "Data Visualization",
    ],
  },
  {
    group: "Research & Healthcare AI",
    items: [
      "EEG Signal Processing",
      "MNE",
      "EEGNet",
      "Biomedical Data Analysis",
      "Functional Connectivity",
    ],
  },
  {
    group: "Data Engineering",
    items: ["MongoDB", "MySQL", "SQLite", "Apache Airflow", "Docker", "Web Scraping"],
  },
  {
    group: "Development & Product",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Product Analysis",
      "UX Evaluation",
      "Feature Research",
    ],
  },
];

export const interests = [
  "Explainable Artificial Intelligence",
  "Healthcare Machine Learning",
  "Precision Medicine",
  "EEG and Biomedical Signal Processing",
  "Deep Learning and Transfer Learning",
  "Computer Vision",
  "Data-Centric AI",
  "Intelligent Product Development",
];
