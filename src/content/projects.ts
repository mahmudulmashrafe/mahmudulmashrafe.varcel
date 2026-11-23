/**
 * Central project data — synchronized with https://github.com/mahmudulmashrafe?tab=repositories
 */

export const categories = [
  {
    "id": "all",
    "label": "All Projects"
  },
  {
    "id": "research-health",
    "label": "Research & Healthcare AI"
  },
  {
    "id": "ml-cv",
    "label": "Machine Learning & Computer Vision"
  },
  {
    "id": "data-eng",
    "label": "Data Engineering"
  },
  {
    "id": "full-stack",
    "label": "Full-Stack Development"
  },
  {
    "id": "iot",
    "label": "IoT & Smart Systems"
  }
] as const;

export type CategoryId = (typeof categories)[number]["id"];
export type ProjectCategory = Exclude<CategoryId, "all">;

export type VisualKey = string;

export interface Metric {
  label: string;
  value: string;
}

export interface DetailBlock {
  heading: string;
  items: string[];
  ordered?: boolean;
}

export interface Project {
  slug: string;
  number: string;
  kind: "research" | "engineering";
  title: string;
  fullTitle: string;
  domain: string;
  categories: ProjectCategory[];
  summary: string;
  overview: string;
  problem: string;
  approach: string;
  methodology: string[];
  details: DetailBlock[];
  results?: { heading: string; metrics: Metric[]; note?: string };
  stack: string[];
  github?: string;
  paperUrl?: string;
  visual?: VisualKey;
  notice?: string;
}

export const projects: Project[] = [
  {
    "slug": "biotherax",
    "number": "",
    "kind": "research",
    "title": "BioTheraX: Explainable Multi-Omics Machine Learning for Precision Breast Cancer Treatment Selection",
    "fullTitle": "BioTheraX: Explainable Multi-Omics Machine Learning for Precision Breast Cancer Treatment Selection",
    "domain": "Healthcare AI / Precision Oncology / Explainable Machine Learning",
    "categories": [
      "research-health",
      "ml-cv"
    ],
    "summary": "An explainable machine learning research project exploring data-driven breast cancer treatment selection using clinical and molecular features from the METABRIC dataset.",
    "overview": "An explainable machine learning research project exploring data-driven breast cancer treatment selection using clinical and molecular features from the METABRIC dataset.",
    "problem": "Treatment selection in breast cancer depends on many interacting clinical and molecular factors. The project asks whether a machine learning model can learn treatment-relevant patterns from multi-omics data while remaining interpretable enough for each prediction to be examined.",
    "approach": "A leakage-aware pipeline: split before oversampling, agree on features through five independent selection methods, classify with CatBoost, then explain the model globally and per patient with TreeSHAP.",
    "methodology": [
      "80:20 train-test split before SMOTE (1,025 training samples, 257 test samples)",
      "SMOTE with k=5 applied only to training data",
      "Five-method consensus feature selection: ANOVA F-test, Mutual Information, Random Forest, XGBoost and TreeSHAP",
      "Top 50 selected features",
      "CatBoost classification",
      "Global and local TreeSHAP interpretation"
    ],
    "details": [
      {
        "heading": "Dataset & feature engineering",
        "items": [
          "METABRIC dataset",
          "1,282 patients after preprocessing",
          "704-dimensional engineered feature space",
          "11 domain-specific features, including DNA damage repair capacity, HRD surrogate, cell-cycle pathway activity, hormone-receptor-to-proliferation ratio, and clinical risk indices"
        ]
      },
      {
        "heading": "Research context",
        "items": [
          "Primary macro-stratification variables: surgical procedure type, lymph node positivity, ER status, and Nottingham Prognostic Index",
          "Transcriptomic context features: HSD17B8, MAPK9, VEGFA, MTOR, RAD51, and E2F1"
        ]
      }
    ],
    "results": {
      "heading": "Key results (held-out test set)",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "89.16%"
        },
        {
          "label": "Macro F1-score",
          "value": "88.91%"
        },
        {
          "label": "ROC-AUC",
          "value": "98.60%"
        },
        {
          "label": "Cross-entropy log loss",
          "value": "0.3402"
        }
      ]
    },
    "stack": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "CatBoost",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "METABRIC",
      "SMOTE"
    ],
    "visual": "biotherax",
    "notice": "Academic research project. Results describe model performance on a held-out test split, not clinical validation."
  },
  {
    "slug": "eeg-migraine",
    "number": "",
    "kind": "research",
    "title": "A Closed Loop Wearable EEG Framework for Migraine Mitigation via Binaural Beat Entrainment",
    "fullTitle": "A Closed-Loop Wearable EEG Framework for Migraine Mitigation via Binaural Beat Entrainment",
    "domain": "Biomedical AI / EEG Signal Processing / Healthcare Technology / Neuromodulation",
    "categories": [
      "research-health"
    ],
    "summary": "Undergraduate Thesis & Final Year Design Project (FYDP) exploring an EEG-based framework for identifying migraine brain activity patterns and dynamic binaural-beat entrainment feedback.",
    "overview": "Undergraduate Thesis & FYDP research project investigating an EEG-based framework for identifying migraine-related brain activity patterns and developing a personalized binaural-beat audio entrainment closed loop.",
    "problem": "Can migraine-related patterns be identified in wearable EEG recordings, and could those signals inform an adaptive, personalized audio entrainment loop to mitigate migraine symptoms non-invasively?",
    "approach": "Extract spectral and connectivity features from multi-channel EEG, classify participant subtypes, explore transfer learning using EEGNet pretrained on LEMON (213 subjects), and design a closed-loop adaptive audio synthesis engine.",
    "methodology": [
      "Multi-channel EEG signal preprocessing and artifact removal",
      "Spectral power band extraction (delta, theta, alpha, beta, gamma)",
      "Phase-locking value (PLV) functional connectivity analysis",
      "Random Forest classification across migraineurs and healthy controls",
      "Transfer learning using EEGNet architecture",
      "Dynamic binaural-beat frequency modulation in the alpha band (8–12 Hz)"
    ],
    "details": [
      {
        "heading": "Dataset",
        "items": [
          "31 human participants",
          "18 healthy controls",
          "9 participants with migraine with aura",
          "4 participants with migraine without aura",
          "1,738 spectral and functional connectivity features"
        ]
      },
      {
        "heading": "Proposed closed-loop framework (concept)",
        "ordered": true,
        "items": [
          "Acquire EEG signals via wearable headset",
          "Preprocess EEG stream and remove ocular/muscular artifacts",
          "Extract power spectrum and functional connectivity matrices",
          "Detect onset of migraine-specific neural signatures",
          "Synthesize real-time binaural-beat audio stimulus",
          "Monitor auditory steady-state response (ASSR) and subjective score",
          "Dynamically modulate carrier frequency and beat offset",
          "Log continuous entrainment outcomes and telemetry"
        ]
      }
    ],
    "results": {
      "heading": "Experimental Classification Metric",
      "metrics": [
        {
          "label": "Classification Accuracy",
          "value": "84.6%"
        },
        {
          "label": "Alpha Band Entrainment",
          "value": "8-12 Hz"
        }
      ],
      "note": "Evaluated on participant EEG records as part of the UIU undergraduate thesis."
    },
    "stack": [
      "Python",
      "MNE",
      "EEGNet",
      "Random Forest",
      "PyTorch",
      "Signal Processing",
      "Functional Connectivity"
    ],
    "github": "https://github.com/mahmudulmashrafe/FYDP",
    "visual": "eeg",
    "notice": "Undergraduate Thesis project (FYDP). Evaluated on experimental classification protocols; closed-loop feedback engine is an engineering concept."
  },
  {
    "slug": "awd-irrigation",
    "number": "",
    "kind": "research",
    "title": "Automated Alternate Wetting and Drying (AWD) Rice Irrigation System Using a Low Power Multi-Hop LoRa Network and Weather Forecast Emitters",
    "fullTitle": "Automated Alternate Wetting and Drying (AWD) Rice Irrigation System Using a Low Power Multi-Hop LoRa Network and Weather Forecast Emitters",
    "domain": "IoT / Wireless Sensor Networks / Smart Agriculture",
    "categories": [
      "iot"
    ],
    "summary": "An intelligent irrigation system designed to support alternate wetting and drying in rice cultivation through low-power wireless sensor networks and weather-aware irrigation decisions.",
    "overview": "An intelligent irrigation system designed to support alternate wetting and drying in rice cultivation through low-power wireless sensor networks and weather-aware irrigation decisions.",
    "problem": "Alternate wetting and drying depends on knowing field water levels and timing irrigation well. Rice fields are often far from reliable power and internet, so sensing and decisions need to work with low-power hardware and intermittent connectivity.",
    "approach": "Battery-friendly child nodes measure water level and relay through mother nodes over multi-hop LoRa to a local base station, which combines telemetry with a weather forecast to decide whether irrigation should start.",
    "methodology": [
      "Child nodes monitor water levels with waterproof ultrasonic sensors",
      "Data travels from child to mother nodes and between mother nodes via LoRa SX1278",
      "An eight-state scheduling state machine manages node activity and battery life",
      "Daytime sleep cycle: 2 hours; nighttime sleep cycle: 4 hours",
      "Nodes remain active for approximately one minute per telemetry cycle"
    ],
    "details": [
      {
        "heading": "Hardware & architecture",
        "items": [
          "Arduino Pro Mini microcontrollers",
          "LoRa SX1278 long-range radio modules",
          "SR04M2 waterproof ultrasonic distance sensors",
          "Multi-hop packet forwarding and aggregation"
        ]
      },
      {
        "heading": "Irrigation logic",
        "items": [
          "Threshold > 65 cm distance marks soil drying phase",
          "Threshold < 48 cm distance indicates submerged or flooded status",
          "Base station queries Open-Meteo API for real-time rain prediction",
          "Inhibits motor activation if rain precipitation is predicted within 3-4 hours"
        ]
      }
    ],
    "results": {
      "heading": "Field Operational Parameters",
      "metrics": [
        {
          "label": "Water Level Threshold",
          "value": "65 cm"
        },
        {
          "label": "Telemetry Sleep Duty",
          "value": "98.5%"
        }
      ]
    },
    "stack": [
      "Arduino",
      "C/C++",
      "LoRa SX1278",
      "SR04M2",
      "SQLite",
      "Open-Meteo API"
    ],
    "visual": "awd"
  },
  {
    "slug": "finor-asset",
    "number": "",
    "kind": "engineering",
    "title": "FinorAsset",
    "fullTitle": "FinorAsset — Personal Wealth & Financial Asset Management Platform",
    "domain": "Financial Technology / Full-Stack Web Application",
    "categories": [
      "full-stack"
    ],
    "summary": "A high-performance personal financial and asset management platform built with React, TanStack Start, Vite, Tailwind CSS, and Supabase.",
    "overview": "FinorAsset is an enterprise-grade personal wealth tracking application designed to provide granular visibility over multi-currency bank accounts, investment portfolios, debt instruments, and recurring budgets.",
    "problem": "Tracking assets, cash flows, and investments across fragmented platforms often results in broken visibility and delayed budgeting decisions.",
    "approach": "Leveraged TanStack Start and React for fast edge-rendered navigation, coupled with Supabase for real-time relational persistence, Row-Level Security (RLS), and automated balance auditing.",
    "methodology": [
      "Multi-account and asset classification (cash, equities, liabilities)",
      "Real-time transaction categorization and ledger synchronization",
      "Interactive asset allocation charts and net-worth progression curves",
      "Strict Row-Level Security (RLS) enforcement via Supabase Auth"
    ],
    "details": [
      {
        "heading": "Key Architecture",
        "items": [
          "React 19 & TanStack Start full-stack router",
          "Tailwind CSS responsive design system",
          "Supabase PostgreSQL backend with continuous auditing"
        ]
      }
    ],
    "results": {
      "heading": "Platform Metrics",
      "metrics": [
        {
          "label": "Framework",
          "value": "TanStack Start"
        },
        {
          "label": "Backend",
          "value": "Supabase"
        }
      ]
    },
    "stack": [
      "TypeScript",
      "React",
      "TanStack Start",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL"
    ],
    "github": "https://github.com/mahmudulmashrafe/FinorAsset",
    "visual": "finor"
  },
  {
    "slug": "data-pipeline",
    "number": "",
    "kind": "engineering",
    "title": "Web Scraping & Data Pipeline",
    "fullTitle": "Containerized Web Scraping & Automated Data Pipeline with Python, Docker, Airflow & MongoDB",
    "domain": "Data Engineering / ETL Orchestration",
    "categories": [
      "data-eng"
    ],
    "summary": "Automated Apache Airflow data pipeline that collects real estate listings from Finn.no, sanitizes records, de-duplicates schemas, and ingests them into MongoDB.",
    "overview": "A production-style ETL data engineering project designed to automatically scrape real estate listing data from Norwegian marketplace Finn.no, transform unstructured markup into structured schemas, eliminate duplicates, and persist documents into MongoDB.",
    "problem": "Online marketplace listings mutate frequently. Manually retrieving and validating rental and property records is brittle and non-scalable.",
    "approach": "Orchestrated scheduled DAGs via Apache Airflow running in Docker containers, utilizing custom Python scrapers with exponential retry logic and MongoDB upsert pipelines.",
    "methodology": [
      "Custom scraping workers with user-agent rotation and rate limiting",
      "Data sanitation and type coercion pipelines in Pandas",
      "De-duplication via unique composite indexing in MongoDB",
      "Docker Compose multi-container deployment (Airflow Scheduler, Webserver, Worker, MongoDB)"
    ],
    "details": [],
    "results": {
      "heading": "Pipeline Performance",
      "metrics": [
        {
          "label": "Orchestrator",
          "value": "Apache Airflow"
        },
        {
          "label": "Database",
          "value": "MongoDB"
        }
      ]
    },
    "stack": [
      "Python",
      "Docker",
      "Apache Airflow",
      "MongoDB",
      "BeautifulSoup",
      "Pandas"
    ],
    "github": "https://github.com/mahmudulmashrafe/Web_Scraping_and_Data_Pipeline_Development_with_Python_Docker_Airflow_and_MongoDB",
    "visual": "pipeline"
  },
  {
    "slug": "durjog-prohori",
    "number": "",
    "kind": "engineering",
    "title": "Durjog Prohori",
    "fullTitle": "Durjog Prohori — Nationwide Disaster Management & Live Response Platform",
    "domain": "Disaster Management / Full-Stack Application",
    "categories": [
      "full-stack"
    ],
    "summary": "A comprehensive disaster preparedness and real-time emergency response platform featuring GPS SOS reporting, interactive hazard maps, and NGO coordination.",
    "overview": "A real-time disaster coordination platform designed to bridge victims, emergency responders, NGOs, and municipal authorities during floods, earthquakes, and cyclones in Bangladesh.",
    "problem": "Disaster response in vulnerable regions suffers from fragmented communication, delayed SOS location sharing, and uncoordinated relief distribution.",
    "approach": "Built a high-concurrency Node.js and Express API with Socket.IO bidirectional telemetry, paired with a React frontend and Leaflet geo-mapping.",
    "methodology": [
      "GPS-enabled emergency SOS transmission with offline dispatch queuing",
      "Live Leaflet mapping displaying active disaster hazard zones and shelters",
      "Multi-tenant role access: Citizens, Responders, NGOs, and Dispatchers",
      "Real-time volunteer task assignment and aid inventory accounting"
    ],
    "details": [],
    "results": {
      "heading": "System Architecture",
      "metrics": [
        {
          "label": "Real-Time Telemetry",
          "value": "Socket.IO"
        },
        {
          "label": "Mapping Engine",
          "value": "Leaflet GIS"
        }
      ]
    },
    "stack": [
      "React 18",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Leaflet",
      "Tailwind CSS",
      "JWT"
    ],
    "github": "https://github.com/mahmudulmashrafe/Durjog_Prohori",
    "visual": "durjog"
  },
  {
    "slug": "cascading-cataract-detection",
    "number": "",
    "kind": "engineering",
    "title": "Cascading Cataract Detection",
    "fullTitle": "Cascading Deep Learning Framework for Multi-Stage Cataract Detection",
    "domain": "Healthcare AI / Computer Vision",
    "categories": [
      "research-health",
      "ml-cv"
    ],
    "summary": "A multi-stage cascading computer vision framework for automatic detection and severity grading of human eye cataracts.",
    "overview": "An automated ophthalmology screening pipeline that classifies ocular fundus/slit-lamp images in a hierarchical cascade: initial cataract screening followed by mature versus immature classification.",
    "problem": "Single-stage classifiers struggle to balance high sensitivity on early cataract lesions with fine-grained severity classification.",
    "approach": "Employed a two-stage sequential classifier that separates detection from staging, achieving higher diagnostic reliability.",
    "methodology": [
      "Stage 1: Normal eye vs. cataract identification",
      "Stage 2: Mature vs. immature cataract classification",
      "Image augmentation and CLAHE contrast enhancement for ocular images"
    ],
    "details": [],
    "results": {
      "heading": "Screening Architecture",
      "metrics": [
        {
          "label": "Pipeline",
          "value": "2-Stage Cascade"
        },
        {
          "label": "Modality",
          "value": "Computer Vision"
        }
      ]
    },
    "stack": [
      "Python",
      "OpenCV",
      "Scikit-learn",
      "Deep Learning",
      "Jupyter Notebook"
    ],
    "github": "https://github.com/mahmudulmashrafe/Cascading_Cataract_Detection",
    "visual": "cataract"
  },
  {
    "slug": "maple-house",
    "number": "",
    "kind": "engineering",
    "title": "Maple House",
    "fullTitle": "Maple House — Senior Care & Assisted Living ERP",
    "domain": "Enterprise Software / Healthcare Management",
    "categories": [
      "full-stack"
    ],
    "summary": "A comprehensive senior care ERP managing administrative, medical, and operational workflows of an assisted living facility.",
    "overview": "An end-to-end web ERP system engineered for retirement and nursing communities. Centralizes resident electronic medical records (EMR), dietary preferences, room occupancy, and doctor appointments.",
    "problem": "Care facilities require strict synchronization between medical history, daily medication schedules, dietary plans, and billing.",
    "approach": "Constructed a modular PHP/MySQL enterprise backend with granular role-based access control (RBAC) across administrative, medical, and family personas.",
    "methodology": [
      "Role-based access control for 6 distinct stakeholder roles",
      "Electronic resident health records and vitals logging",
      "Bed and room occupancy management system",
      "Doctor appointment scheduling and medication reminders"
    ],
    "details": [],
    "results": {
      "heading": "System Architecture",
      "metrics": [
        {
          "label": "User Roles",
          "value": "6 Personas"
        },
        {
          "label": "Architecture",
          "value": "PHP PDO / MySQL"
        }
      ]
    },
    "stack": [
      "PHP",
      "PDO",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    "github": "https://github.com/mahmudulmashrafe/Maple_House",
    "visual": "maple"
  },
  {
    "slug": "shombhar",
    "number": "",
    "kind": "engineering",
    "title": "Shombhar: The Farmers Market",
    "fullTitle": "Shombhar: Direct Agro-Marketplace Platform",
    "domain": "E-Commerce / Agro-Technology",
    "categories": [
      "full-stack"
    ],
    "summary": "A digital agricultural marketplace connecting rural producers directly with retail consumers, featuring real-time bidding and order tracking.",
    "overview": "A two-sided agro-commerce platform aimed at disintermediating agricultural supply chains by enabling farmers to list harvested produce directly for consumers and wholesalers.",
    "problem": "Traditional agricultural distribution relies on multiple layers of middlemen, drastically reducing profits for farmers.",
    "approach": "Implemented dual-dashboard workflows in PHP and MySQL with asynchronous AJAX updates and sales analytics.",
    "methodology": [
      "Farmer listing management with pricing and quantity metrics",
      "Consumer cart, checkout, and order history tracking",
      "Interactive sales analytics charts using Chart.js"
    ],
    "details": [],
    "results": {
      "heading": "Marketplace Metrics",
      "metrics": [
        {
          "label": "Domain",
          "value": "Agri-Marketplace"
        },
        {
          "label": "Tech",
          "value": "PHP / MySQL / AJAX"
        }
      ]
    },
    "stack": [
      "PHP",
      "MySQL",
      "JavaScript",
      "AJAX",
      "Chart.js"
    ],
    "github": "https://github.com/mahmudulmashrafe/Shombhar_The_Farmers_Market",
    "visual": "shombhar"
  },
  {
    "slug": "learn-data-engineering",
    "number": "",
    "kind": "engineering",
    "title": "Learn Data Engineering Basic",
    "fullTitle": "Foundational Data Engineering Laboratory & Exercises",
    "domain": "Data Engineering / Educational",
    "categories": [
      "data-eng"
    ],
    "summary": "A structured repository of foundational data engineering exercises covering data pipelines, Pandas ETL, and MongoDB document storage.",
    "overview": "A hands-on repository of implementation notebooks and scripts exploring data extraction, schema validation, aggregation pipelines, and NoSQL storage patterns.",
    "problem": "Mastering core data engineering workflows requires reproducible, isolated exercises across ingestion and storage primitives.",
    "approach": "Organized modular code exercises demonstrating data cleaning, relational-to-document mapping, and pipeline automation.",
    "methodology": [
      "ETL data manipulation with Python and Pandas",
      "NoSQL document storage and indexing with MongoDB",
      "Pipeline modularity and reproducibility"
    ],
    "details": [],
    "results": {
      "heading": "Curriculum Scope",
      "metrics": [
        {
          "label": "Core Topics",
          "value": "ETL & NoSQL"
        },
        {
          "label": "Stack",
          "value": "Python / MongoDB"
        }
      ]
    },
    "stack": [
      "Python",
      "Pandas",
      "MongoDB",
      "Jupyter Notebook"
    ],
    "github": "https://github.com/mahmudulmashrafe/Learn_Data_Engineering_Basic",
    "visual": "learn-de"
  },
  {
    "slug": "germany-doc-tracker",
    "number": "",
    "kind": "engineering",
    "title": "Germany Document Submission Tracker",
    "fullTitle": "Germany Document Submission Tracker & Batch Projection Engine",
    "domain": "Predictive Analytics / Higher Education Tooling",
    "categories": [
      "full-stack",
      "data-eng"
    ],
    "summary": "A web application tracking German Embassy document submission batches and projecting appointment timelines across Masters, Bachelor, and Family Reunion streams.",
    "overview": "A specialized tracker built to bring transparency to embassy appointment waitlists. It aggregates community submission timelines, historical batch processing speeds, and computes moving-average projections.",
    "problem": "Prospective students applying for German student visas face unpredictable document submission windows with zero official waitlist timeline visibility.",
    "approach": "Built a community-backed chronological tracker that normalizes applicant batch timestamps and applies statistical projection algorithms to estimate upcoming slot dates.",
    "methodology": [
      "Multi-category tracking for Masters, Bachelor, and Family Reunion streams",
      "Historical batch velocity calculation using weighted rolling averages",
      "Dynamic visual timeline and waitlist duration estimator",
      "Responsive client-side data filtering and batch delta metrics"
    ],
    "details": [],
    "results": {
      "heading": "System Scope",
      "metrics": [
        {
          "label": "Tracking Streams",
          "value": "3 Categories"
        },
        {
          "label": "Projection Model",
          "value": "Rolling Mean"
        }
      ]
    },
    "stack": [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Statistical Modeling"
    ],
    "github": "https://github.com/mahmudulmashrafe/germany_masters_doc_tracker",
    "visual": "germany"
  },
  {
    "slug": "bangladesh-institution-extractor",
    "number": "",
    "kind": "engineering",
    "title": "Bangladesh Institution Dataset Extractor",
    "fullTitle": "Nationwide Educational Institution Dataset Extractor & Data Cleaning Pipeline",
    "domain": "Data Engineering / Web Scraping / Open Data",
    "categories": [
      "data-eng"
    ],
    "summary": "Scraped, cleaned, and cataloged 167,396 educational institutions across Bangladesh into structured CSV/JSON datasets.",
    "overview": "A large-scale data engineering pipeline built to scrape, normalize, and geocode educational institution data across Bangladesh from Sohopathi and university directories, generating a clean 167k+ record dataset.",
    "problem": "National educational directory data was fragmented, paginated across disparate sources, and riddled with missing location metadata.",
    "approach": "Engineered asynchronous Python extraction scripts to traverse hierarchical administrative boundaries (Division, District, Upazila) and sanitize addresses.",
    "methodology": [
      "Scraped 167,396 records spanning Schools, Colleges, Madrasas, and Universities",
      "Standardized geographic hierarchy (Division -> District -> Upazila)",
      "Automated deduplication and phone/email regex sanitization",
      "Published open datasets in CSV and JSON formats"
    ],
    "details": [],
    "results": {
      "heading": "Data Volume",
      "metrics": [
        {
          "label": "Institutions Extracted",
          "value": "167,396"
        },
        {
          "label": "Administrative Levels",
          "value": "All 64 Districts"
        }
      ]
    },
    "stack": [
      "Python",
      "Pandas",
      "BeautifulSoup",
      "Data Cleaning",
      "Automation"
    ],
    "github": "https://github.com/mahmudulmashrafe/UGA_University_list_extractor",
    "visual": "extractor"
  },
  {
    "slug": "fcc-netlink",
    "number": "",
    "kind": "engineering",
    "title": "FCC NetLink Broadband Portal",
    "fullTitle": "FCC NetLink — Ultra Fast Fiber Broadband & 4K IPTV Web Portal",
    "domain": "ISP Infrastructure / Full-Stack Web Portal",
    "categories": [
      "full-stack"
    ],
    "summary": "Official ISP web portal and administrative control panel built with TanStack Start, React 19, TypeScript, and Supabase integration.",
    "overview": "Modern web portal for broadband ISP operations, featuring interactive package selection, live BDIX IPTV streaming links, subscriber ticketing, and an administrative control suite.",
    "problem": "Broadband subscribers require instantaneous access to BDIX media servers, bandwidth billing plans, and responsive technical support tickets.",
    "approach": "Designed a modern web application with TanStack Start, React 19, and Tailwind CSS v4, connecting to Supabase for customer profile management.",
    "methodology": [
      "BDIX FTP and Live IPTV portal directory navigation",
      "Interactive bandwidth calculator and fiber package browser",
      "Customer account authentication and support ticket dispatching"
    ],
    "details": [],
    "results": {
      "heading": "Technology Stack",
      "metrics": [
        {
          "label": "UI Library",
          "value": "React 19"
        },
        {
          "label": "Styling",
          "value": "Tailwind v4"
        }
      ]
    },
    "stack": [
      "TypeScript",
      "React 19",
      "TanStack Start",
      "Tailwind CSS",
      "Supabase"
    ],
    "github": "https://github.com/mahmudulmashrafe/fcc-netlink",
    "visual": "netlink"
  },
  {
    "slug": "house-price-prediction",
    "number": "",
    "kind": "engineering",
    "title": "House Price Prediction Model",
    "fullTitle": "Real Estate Valuation & Price Prediction Using Multiple Linear Regression",
    "domain": "Machine Learning / Predictive Modeling",
    "categories": [
      "ml-cv",
      "data-eng"
    ],
    "summary": "An end-to-end regression modeling project analyzing property attributes, collinearity, and feature scaling to predict residential sale prices.",
    "overview": "A comprehensive machine learning regression project that applies rigorous exploratory data analysis, outlier mitigation, collinearity diagnosis (VIF), and cross-validated Linear Regression models.",
    "problem": "Real estate price estimates often suffer from multicollinearity among square footage, room counts, and neighborhood indicators.",
    "approach": "Conducted extensive feature engineering, log transformations for skewed variables, and evaluated performance against Mean Absolute Error (MAE) and R² metrics.",
    "methodology": [
      "Outlier detection using Interquartile Range (IQR)",
      "Variance Inflation Factor (VIF) evaluation to eliminate multi-collinearity",
      "Ordinary Least Squares (OLS) and Regularized regression benchmarking",
      "Diagnostic residual analysis verifying homoscedasticity assumptions"
    ],
    "details": [],
    "results": {
      "heading": "Modeling Evaluation",
      "metrics": [
        {
          "label": "Model",
          "value": "Multiple OLS"
        },
        {
          "label": "Environment",
          "value": "Jupyter / Pandas"
        }
      ]
    },
    "stack": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Jupyter Notebook",
      "Matplotlib",
      "Seaborn"
    ],
    "github": "https://github.com/mahmudulmashrafe/House_Price_Prediction_Using_Linear_Regression_Model",
    "visual": "house"
  },
  {
    "slug": "yolo-object-detection",
    "number": "",
    "kind": "engineering",
    "title": "Object Detection with YOLO & OpenCV",
    "fullTitle": "Object Detection for Static Images Using YOLO and OpenCV",
    "domain": "Computer Vision / Deep Learning Inference",
    "categories": [
      "ml-cv"
    ],
    "summary": "Real-time object localization and classification on static images using YOLO architecture with OpenCV DNN module.",
    "overview": "A computer vision deployment utilizing the Darknet YOLO deep learning weights integrated directly through OpenCV's DNN inference module, performing multi-class bounding box regression with non-maximum suppression (NMS).",
    "problem": "Performing efficient local inference on static imagery without heavy server dependencies.",
    "approach": "Implemented blob transformation, forward pass extraction, confidence threshold filtering, and non-maximum suppression (NMS) to eliminate duplicate detection boxes.",
    "methodology": [
      "Blob from image normalization (1/255 scaling, 416x416 resolution)",
      "OpenCV DNN module forward propagation",
      "Confidence filtering (> 0.5) and Non-Maximum Suppression (NMS)",
      "Real-time bounding box annotations with class labeling"
    ],
    "details": [],
    "results": {
      "heading": "Inference Engine",
      "metrics": [
        {
          "label": "Architecture",
          "value": "YOLOv3"
        },
        {
          "label": "Backend",
          "value": "OpenCV DNN"
        }
      ]
    },
    "stack": [
      "Python",
      "OpenCV",
      "YOLOv3",
      "Computer Vision"
    ],
    "github": "https://github.com/mahmudulmashrafe/Object_Detection_for_Static_Images_Using_Yolo_and_OpenCV",
    "visual": "yolo"
  },
  {
    "slug": "gold-rate-bd",
    "number": "",
    "kind": "engineering",
    "title": "Gold Rate Tracking Bangladesh",
    "fullTitle": "Bangladesh Real-Time Gold & Silver Price Tracking Portal",
    "domain": "Web Application / Data Visualization / Automation",
    "categories": [
      "full-stack",
      "data-eng"
    ],
    "summary": "Automated Bangladesh gold and silver rate tracking application with historical charts, automated price scraping, and interactive calculators.",
    "overview": "A specialized financial utility that continuously aggregates hallmark gold (22K, 21K, 18K) and traditional silver market prices in Bangladesh, rendering time-series price graphs and unit conversions (Bhori, Gram, Anna).",
    "problem": "Daily gold price revisions announced by jewellers' associations are dispersed across newspapers without historical trend analysis.",
    "approach": "Designed automated scraping crons in PHP to parse daily price declarations, storing records in MySQL and serving them through mobile-friendly Chart.js visualizations.",
    "methodology": [
      "Scheduled web scrapers extracting market rate updates",
      "Interactive time-series charting showing price volatility",
      "Custom price calculator for weight conversion (Bhori, Vori, Gram, Tola)"
    ],
    "details": [],
    "results": {
      "heading": "Features",
      "metrics": [
        {
          "label": "Metals Tracked",
          "value": "Gold & Silver"
        },
        {
          "label": "Carats",
          "value": "22K, 21K, 18K"
        }
      ]
    },
    "stack": [
      "PHP",
      "MySQL",
      "JavaScript",
      "Chart.js",
      "Web Scraping"
    ],
    "github": "https://github.com/mahmudulmashrafe/Gold_Rate_Tracking_BD",
    "visual": "gold"
  },
  {
    "slug": "mars-rover-prototype",
    "number": "",
    "kind": "engineering",
    "title": "Mars Rover Prototype",
    "fullTitle": "Ignis: Mars Rover Environmental Sensor Monitoring System",
    "domain": "Robotics / IoT Telemetry / Sensor Systems",
    "categories": [
      "iot"
    ],
    "summary": "A telemetry and dashboard monitoring system for a Mars Rover prototype collecting temperature, humidity, and atmospheric gas levels.",
    "overview": "Telemetry interface built for the Ignis Mars Rover prototype. Collects multi-sensor environmental feeds from rover microcontroller nodes and displays diagnostic data streams in real time.",
    "problem": "Remote planetary rover prototypes require lightweight telemetry ingestion that operates reliably over constrained serial or wireless links.",
    "approach": "Developed a web dashboard consuming sensor packet streams, evaluating atmospheric anomalies and plotting historical ambient trends.",
    "methodology": [
      "Multi-sensor ingestion: DHT temperature/humidity and MQ gas sensor modules",
      "Real-time visual telemetry status indicators",
      "Historical diagnostic logging for post-mission analysis"
    ],
    "details": [],
    "results": {
      "heading": "Telemetry System",
      "metrics": [
        {
          "label": "Sensors",
          "value": "Temp, Humidity, Gas"
        },
        {
          "label": "Platform",
          "value": "Ignis Prototype"
        }
      ]
    },
    "stack": [
      "PHP",
      "JavaScript",
      "IoT Sensors",
      "Hardware Telemetry",
      "HTML5"
    ],
    "github": "https://github.com/mahmudulmashrafe/Ignis_a_Mars_Rover_Prototype",
    "visual": "rover"
  },
  {
    "slug": "uiu-cgpa-calculator",
    "number": "",
    "kind": "engineering",
    "title": "UIU CGPA Calculator",
    "fullTitle": "UIU CGPA & Academic Progress Calculator",
    "domain": "Academic Tooling / Web Utility",
    "categories": [
      "full-stack"
    ],
    "summary": "Tailored GPA/CGPA calculator implementing the United International University (UIU) exact 4.00 grading scale and retake policies.",
    "overview": "A streamlined web calculator designed for students at United International University to plan semester schedules, compute term GPA, simulate course retake impact, and project cumulative CGPA.",
    "problem": "Generic GPA calculators fail to accommodate UIU's specific letter-to-point mappings and previous-grade substitution rules.",
    "approach": "Built a client-side reactive calculator with TypeScript and Tailwind CSS, featuring local persistence to save transcript simulations.",
    "methodology": [
      "Exact UIU grading scale conversion matrix (A to F, 4.00 max)",
      "Retake grade substitution algorithm recalculating earned credits",
      "Local storage sync preserving student course plans across sessions"
    ],
    "details": [],
    "results": {
      "heading": "Utility",
      "metrics": [
        {
          "label": "Grading Scale",
          "value": "UIU 4.00"
        },
        {
          "label": "Client Engine",
          "value": "TypeScript"
        }
      ]
    },
    "stack": [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "C"
    ],
    "github": "https://github.com/mahmudulmashrafe/UIU_CGPA_Calculator",
    "visual": "cgpa"
  },
  {
    "slug": "its-my-seat",
    "number": "",
    "kind": "engineering",
    "title": "ItsMySeat",
    "fullTitle": "ItsMySeat — Interactive Seat Reservation Engine",
    "domain": "Interactive Frontend / Booking Systems",
    "categories": [
      "full-stack"
    ],
    "summary": "An interactive seat selection and reservation web interface with real-time seat availability state management.",
    "overview": "A dynamic seat mapping application designed for movie theatres and auditorium ticketing, enabling patrons to pick, reserve, and calculate seat tiers interactively.",
    "problem": "Interactive seat selection grids often become slow when managing dozens of simultaneous seat states (available, occupied, selected, VIP).",
    "approach": "Implemented a clean DOM-driven state architecture with event delegation, real-time ticket pricing calculation, and local reservation caching.",
    "methodology": [
      "Visual grid layout representing theater seating arrangements",
      "Dynamic pricing based on selected seat categories",
      "Instantaneous UI state updates on click interactions"
    ],
    "details": [],
    "results": {
      "heading": "Interface",
      "metrics": [
        {
          "label": "Interaction",
          "value": "Instantaneous DOM"
        },
        {
          "label": "Logic",
          "value": "Vanilla JavaScript"
        }
      ]
    },
    "stack": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "DOM API"
    ],
    "github": "https://github.com/mahmudulmashrafe/ItsMySeat",
    "visual": "seat"
  },
  {
    "slug": "personal-portfolio",
    "number": "",
    "kind": "engineering",
    "title": "Personal Portfolio (VCard & Web)",
    "fullTitle": "Personal Portfolio & Interactive VCard Web Application",
    "domain": "Frontend Architecture / Modern Web",
    "categories": [
      "full-stack"
    ],
    "summary": "Interactive portfolio and developer VCard built with TypeScript, React, and modern CSS architecture.",
    "overview": "Personal portfolio platform showcasing technical publications, software engineering projects, verified credentials, and interactive contact channels.",
    "problem": "Presenting academic research alongside industry data engineering projects requires a disciplined, high-performance web architecture.",
    "approach": "Architected using Next.js 15 App Router, Framer Motion transitions, Tailwind CSS, and strict TypeScript types.",
    "methodology": [
      "Modern server-side rendering and static site generation (SSG)",
      "Accessible semantic markup and WCAG AA contrast compliance",
      "Interactive filtering across technology stacks and research domains"
    ],
    "details": [],
    "results": {
      "heading": "Performance",
      "metrics": [
        {
          "label": "Page Speed",
          "value": "Sub-200ms"
        },
        {
          "label": "Architecture",
          "value": "Next.js 15 App Router"
        }
      ]
    },
    "stack": [
      "TypeScript",
      "Next.js 15",
      "React",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "github": "https://github.com/mahmudulmashrafe/mahmudulmashrafe.varcel",
    "visual": "portfolio"
  }
];

export const researchProjects = projects.filter((p) => p.kind === "research");
export const engineeringProjects = projects.filter((p) => p.kind === "engineering");

export function filterProjects(list: Project[], category: CategoryId): Project[] {
  if (category === "all") return list;
  return list.filter((p) => p.categories.includes(category));
}

export function countByCategory(list: Project[], category: CategoryId): number {
  return filterProjects(list, category).length;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function categoryLabel(id: CategoryId): string {
  return categories.find((c) => c.id === id)?.label ?? id;
}
