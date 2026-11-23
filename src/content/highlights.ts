import { education, skills } from "./profile";
import { projects, researchProjects } from "./projects";

/** Headline numbers. Every value is derived from the real content. */
export const highlights = [
  { value: projects.length, decimals: 0, suffix: "", label: "Projects built" },
  { value: researchProjects.length, decimals: 0, suffix: "", label: "Research studies" },
  { value: Number(education[0]?.score ?? 3.95), decimals: 2, suffix: "", label: `CGPA out of ${education[0]?.scoreMax ?? "4.00"}` },
  { value: skills.reduce((n, g) => n + g.items.length, 0), decimals: 0, suffix: "", label: "Tools & skills" },
];

/** Technologies scrolled in the strip under the hero. */
export const techStrip = [
  "Python",
  "SQL",
  "Scikit-learn",
  "XGBoost",
  "CatBoost",
  "SHAP",
  "Pandas",
  "NumPy",
  "MNE",
  "EEGNet",
  "OpenCV",
  "YOLO",
  "Apache Airflow",
  "Docker",
  "MongoDB",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
];

