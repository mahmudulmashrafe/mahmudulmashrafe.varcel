"use client";

import React from "react";
import {
  SiPython,
  SiCplusplus,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiApacheairflow,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiPostgresql,
  SiLinux,
  SiFastapi,
  SiSupabase,
  SiSocketdotio,
  SiLeaflet,
  SiJsonwebtokens,
  SiChartdotjs,
  SiArduino,
  SiHtml5,
  SiJupyter,
} from "react-icons/si";

import {
  TbBrain,
  TbNetwork,
  TbEye,
  TbChartBar,
  TbFilter,
  TbTools,
  TbTarget,
  TbGauge,
  TbWaveSine,
  TbHeartRateMonitor,
  TbDeviceAnalytics,
  TbUserCheck,
  TbCompass,
  TbBinaryTree,
  TbTrees,
  TbArrowsExchange,
  TbAdjustments,
  TbChartHistogram,
  TbChartDots,
  TbActivityHeartbeat,
  TbCirclesRelation,
  TbWorldDownload,
  TbDatabase,
  TbTerminal2,
  TbCpu,
  TbChartPie,
  TbBrandCss3,
} from "react-icons/tb";

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className = "h-4 w-4" }: SkillIconProps) {
  const norm = name.toLowerCase().trim();

  // --- 1. Programming & Core Languages ---
  if (norm.includes("python")) {
    return <SiPython className={`${className} text-[#3776AB]`} />;
  }
  if (norm.includes("typescript") || norm === "ts") {
    return <SiTypescript className={`${className} text-[#3178C6]`} />;
  }
  if (norm.includes("c/c++") || norm === "c++" || norm === "c") {
    return <SiCplusplus className={`${className} text-[#00599C]`} />;
  }
  if (norm.includes("javascript") || norm === "js") {
    return <SiJavascript className={`${className} text-[#F7DF1E]`} />;
  }
  if (norm.includes("php")) {
    return <SiPhp className={`${className} text-[#777BB4]`} />;
  }
  if (norm.includes("sql") || norm.includes("postgres")) {
    return <SiPostgresql className={`${className} text-[#4169E1]`} />;
  }
  if (norm.includes("pandas")) {
    return <SiPandas className={`${className} text-[#150458] dark:text-[#E70488]`} />;
  }
  if (norm.includes("numpy")) {
    return <SiNumpy className={`${className} text-[#013243] dark:text-[#4BA3E3]`} />;
  }

  // --- 2. Machine Learning & Computer Vision ---
  if (norm.includes("scikit-learn") || norm.includes("sklearn")) {
    return <SiScikitlearn className={`${className} text-[#F7931E]`} />;
  }
  if (norm.includes("catboost")) {
    return <TbBrain className={`${className} text-[#FFCC00]`} />;
  }
  if (norm.includes("xgboost")) {
    return <TbChartHistogram className={`${className} text-[#22C55E]`} />;
  }
  if (norm.includes("random forest")) {
    return <TbTrees className={`${className} text-[#10B981]`} />;
  }
  if (norm.includes("shap")) {
    return <TbChartBar className={`${className} text-[#EC4899]`} />;
  }
  if (norm.includes("deep learning") || norm.includes("neural")) {
    return <TbNetwork className={`${className} text-[#F43F5E]`} />;
  }
  if (norm.includes("transfer learning")) {
    return <TbArrowsExchange className={`${className} text-[#818CF8]`} />;
  }
  if (norm.includes("explainable ai") || norm.includes("xai")) {
    return <TbEye className={`${className} text-[#A855F7]`} />;
  }
  if (norm.includes("opencv") || norm.includes("computer vision") || norm.includes("yolo")) {
    return <SiOpencv className={`${className} text-[#5C3EE8]`} />;
  }
  if (norm.includes("pytorch")) {
    return <SiPytorch className={`${className} text-[#EE4C2C]`} />;
  }
  if (norm.includes("tensorflow")) {
    return <SiTensorflow className={`${className} text-[#FF6F00]`} />;
  }
  if (norm.includes("jupyter")) {
    return <SiJupyter className={`${className} text-[#F37626]`} />;
  }

  // --- 3. Data Science & Analytics ---
  if (norm.includes("preprocessing")) {
    return <TbFilter className={`${className} text-[#38BDF8]`} />;
  }
  if (norm.includes("feature engineering")) {
    return <TbTools className={`${className} text-[#F59E0B]`} />;
  }
  if (norm.includes("feature selection")) {
    return <TbTarget className={`${className} text-[#EC4899]`} />;
  }
  if (norm.includes("exploratory") || norm.includes("eda")) {
    return <TbDeviceAnalytics className={`${className} text-[#10B981]`} />;
  }
  if (norm.includes("evaluation") || norm.includes("gauge")) {
    return <TbGauge className={`${className} text-[#6366F1]`} />;
  }
  if (norm.includes("statistical")) {
    return <TbChartDots className={`${className} text-[#14B8A6]`} />;
  }
  if (norm.includes("visualization") || norm.includes("chart.js") || norm.includes("charts")) {
    return <SiChartdotjs className={`${className} text-[#FF6384]`} />;
  }

  // --- 4. Healthcare AI & Biosignals ---
  if (norm.includes("eeg") || norm.includes("signal")) {
    return <TbWaveSine className={`${className} text-[#06B6D4]`} />;
  }
  if (norm.includes("mne")) {
    return <TbActivityHeartbeat className={`${className} text-[#8B5CF6]`} />;
  }
  if (norm.includes("biomedical")) {
    return <TbHeartRateMonitor className={`${className} text-[#EF4444]`} />;
  }
  if (norm.includes("spectral")) {
    return <TbWaveSine className={`${className} text-[#F59E0B]`} />;
  }
  if (norm.includes("connectivity")) {
    return <TbCirclesRelation className={`${className} text-[#3B82F6]`} />;
  }

  // --- 5. Data Engineering & Cloud ---
  if (norm.includes("mongodb") || norm.includes("mongoose")) {
    return <SiMongodb className={`${className} text-[#47A248]`} />;
  }
  if (norm.includes("mysql")) {
    return <SiMysql className={`${className} text-[#4479A1]`} />;
  }
  if (norm.includes("sqlite")) {
    return <SiSqlite className={`${className} text-[#003B57] dark:text-[#38BDF8]`} />;
  }
  if (norm.includes("airflow")) {
    return <SiApacheairflow className={`${className} text-[#017CEE]`} />;
  }
  if (norm.includes("docker")) {
    return <SiDocker className={`${className} text-[#2496ED]`} />;
  }
  if (norm.includes("scraping") || norm.includes("beautifulsoup")) {
    return <TbWorldDownload className={`${className} text-[#10B981]`} />;
  }

  // --- 6. Modern Web, Frontend & Product ---
  if (norm.includes("tailwind")) {
    return <SiTailwindcss className={`${className} text-[#06B6D4]`} />;
  }
  if (norm.includes("supabase")) {
    return <SiSupabase className={`${className} text-[#3ECF8E]`} />;
  }
  if (norm.includes("next.js") || norm.includes("nextjs")) {
    return <SiNextdotjs className={`${className} text-foreground`} />;
  }
  if (norm.includes("react") || norm.includes("tanstack")) {
    return <SiReact className={`${className} text-[#61DAFB]`} />;
  }
  if (norm.includes("node")) {
    return <SiNodedotjs className={`${className} text-[#5FA04E]`} />;
  }
  if (norm.includes("express")) {
    return <SiExpress className={`${className} text-foreground`} />;
  }
  if (norm.includes("socket")) {
    return <SiSocketdotio className={`${className} text-foreground`} />;
  }
  if (norm.includes("leaflet")) {
    return <SiLeaflet className={`${className} text-[#199900]`} />;
  }
  if (norm.includes("jwt")) {
    return <SiJsonwebtokens className={`${className} text-[#D63AFF]`} />;
  }
  if (norm.includes("arduino")) {
    return <SiArduino className={`${className} text-[#00979D]`} />;
  }
  if (norm.includes("html")) {
    return <SiHtml5 className={`${className} text-[#E34F26]`} />;
  }
  if (norm.includes("css")) {
    return <TbBrandCss3 className={`${className} text-[#1572B6]`} />;
  }
  if (norm.includes("git") && !norm.includes("hub")) {
    return <SiGit className={`${className} text-[#F05032]`} />;
  }
  if (norm.includes("github")) {
    return <SiGithub className={`${className} text-foreground`} />;
  }
  if (norm.includes("postman")) {
    return <SiPostman className={`${className} text-[#FF6C37]`} />;
  }
  if (norm.includes("product")) {
    return <TbDeviceAnalytics className={`${className} text-[#F59E0B]`} />;
  }
  if (norm.includes("ux")) {
    return <TbUserCheck className={`${className} text-[#8B5CF6]`} />;
  }
  if (norm.includes("fastapi")) {
    return <SiFastapi className={`${className} text-[#009688]`} />;
  }
  if (norm.includes("linux")) {
    return <SiLinux className={`${className} text-[#FCC624]`} />;
  }

  // Default fallback for any unspecified skill
  return <TbCpu className={`${className} text-muted-foreground`} />;
}
