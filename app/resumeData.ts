export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "GenAI & RAG" | "Autonomous IoT" | "Enterprise AI";
  description: string;
  bullets: string[];
  tags: string[];
  metrics: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Sheik Mohammed Kashif",
  shortName: "Kashif",
  role: "Generative AI Engineer & Backend Architect",
  tagline: "Architecting enterprise RAG systems, autonomous LLM agents, and high-performance inference microservices.",
  bio: "Generative AI Engineer with production experience owning LLM application architecture end-to-end — from retrieval design, prompt evaluation, and grounding to deployment, CI/CD, and real-time monitoring on Google Cloud Platform.",
  location: "Mangaluru, Karnataka, India",
  phone: "+91 63618 57060",
  email: "sheikmohammedkashif@gmail.com",
  github: "https://github.com/Kashif4164",
  linkedin: "https://linkedin.com/in/sheikmohammedkashif",
  availableFor: "Full-Time GenAI / Backend Engineer Roles (from mid-2026)",
  stats: [
    { label: "RAG Accuracy", value: ">90%", desc: "Retrieval evaluation harness" },
    { label: "Inference Latency", value: "Sub-second", desc: "Optimized FastAPI & FAISS" },
    { label: "Manual Effort Cut", value: "50%", desc: "Cross-verification automated" },
    { label: "Production Scale", value: "Enterprise", desc: "Banking & Petroleum clients" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "rag-document-agent",
    title: "Document Q&A Agent (Advanced RAG)",
    subtitle: "Multi-document high-precision retrieval system with hallucination mitigation",
    category: "GenAI & RAG",
    description:
      "Designed and deployed an end-to-end multi-document RAG architecture featuring intelligent chunking strategy, HuggingFace embeddings, FAISS vector search, and cross-encoder re-ranking for strict grounding.",
    bullets: [
      "Built a custom retrieval-evaluation harness achieving >90% precision across ambiguous queries.",
      "Shipped interactive Streamlit UI with source-chunk inspection and token attribution to reduce hallucination risk.",
      "Integrated metadata filtering, query transformation, and semantic reranking pipelines.",
    ],
    tags: ["Python", "LangChain", "FAISS", "HuggingFace", "OpenAI", "Streamlit", "Vector DB"],
    metrics: [">90% Retrieval Precision", "Source Inspection", "Multi-Document Parsing"],
    github: "https://github.com/Kashif4164",
    featured: true,
  },
  {
    id: "ai-customer-support-bot",
    title: "Enterprise AI Customer Support Bot",
    subtitle: "Context-aware multi-turn conversational system with GCP Cloud deployment",
    category: "Enterprise AI",
    description:
      "Built and deployed an LLM-powered enterprise chatbot with multi-turn context memory and prompt optimization for inference efficiency, containerized and shipped to Google Cloud Platform.",
    bullets: [
      "Containerized with Docker and deployed onto GCP App Engine with automated CI/CD workflows.",
      "Reduced manual FAQ handling response time by 70% with grounded retrieval and fallback rules.",
      "Implemented token streaming, session state management, and fallback human-handoff pipelines.",
    ],
    tags: ["Python", "Flask", "OpenAI GPT-4", "LangChain", "Docker", "GCP App Engine", "CI/CD"],
    metrics: ["70% Faster FAQ Response", "GCP App Engine Deployed", "Multi-turn Memory"],
    github: "https://github.com/Kashif4164",
    featured: true,
  },
  {
    id: "autonomous-airport-trolley",
    title: "Automated Travel Trolley for Airport",
    subtitle: "Autonomous AI/IoT luggage tracking system with sensor fusion (Co-authored Paper)",
    category: "Autonomous IoT",
    description:
      "Co-developed an autonomous AI/IoT-powered airport luggage trolley combining RFID-authenticated user-following, LiDAR, and ultrasonic sensor fusion for obstacle avoidance and weight verification.",
    bullets: [
      "Fused LiDAR & ultrasonic sensors in real-time to navigate crowded terminals with obstacle avoidance.",
      "Engineered load-cell based baggage weight verification to reduce passenger terminal delays.",
      "Co-authored the accompanying research paper detailing system architecture, methodology, and experimental results.",
    ],
    tags: ["Arduino Uno", "LiDAR", "Ultrasonic Sensors", "RFID", "Bluetooth", "Sensor Fusion", "IoT"],
    metrics: ["Research Paper Published", "LiDAR Sensor Fusion", "Zero Collisions in Trials"],
    github: "https://github.com/Kashif4164",
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Karanji Infotech",
    role: "GenAI Developer",
    period: "Dec 2025 — May 2026",
    location: "Mangaluru, India",
    type: "Industry Experience",
    highlights: [
      "Owned end-to-end architecture of a production RAG system for a petroleum-sector client: designed document chunking and embedding strategy, built LangChain retrieval pipeline with FAISS vector search over bank statements and payroll JSON.",
      "Defined grounding-evaluation approach to control hallucination risk in reconciliation outputs — automating contractor payment cross-verification and cutting manual effort by ~50%.",
      "Architected and shipped LMS GenAI V4, an enterprise AI-powered Learning Management System (React 19, TypeScript, Vite, Tailwind CSS v4) deploying it to a banking client at production scale with low-downtime CI/CD.",
      "Built an AI agent-driven Module Editor combining WaveNet-compatible voice-over generation, live preview rendering, and REST API quiz engine, reducing manual content-authoring time by 30%.",
      "Implemented Firebase Auth with JWT local-expiry validation, forced logout on invalidation, light/dark theming, and Vitest test coverage.",
    ],
    technologies: ["LangChain", "FAISS", "FastAPI", "React 19", "TypeScript", "Tailwind CSS", "Firebase", "GCP", "Vitest"],
  },
  {
    company: "Movidu Technologies",
    role: "AI Engineer Intern",
    period: "Sep 2024 — Dec 2024",
    location: "Remote / Hybrid",
    type: "Internship",
    highlights: [
      "Built LLM application features end-to-end using LangChain and OpenAI APIs, spanning React/Next.js frontend and a FastAPI inference backend on Google Cloud Platform.",
      "Engineered RAG pipeline integrations — embeddings, retrieval, and prompt evaluation — improving grounding and content-generation relevance while reducing manual editing effort.",
      "Developed LLM-based task-automation agents that streamlined internal content workflows, contributing to faster turnaround on AI content-generation tasks.",
    ],
    technologies: ["OpenAI API", "LangChain", "FastAPI", "Next.js", "Python", "Google Cloud Platform", "Prompt Eng."],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "GenAI & LLM Architecture",
    description: "Core generative models, autonomous agents, and grounded retrieval pipelines",
    skills: [
      { name: "RAG Architecture", level: "Production" },
      { name: "LangChain & LangGraph", level: "Advanced" },
      { name: "AI Agents & Function Calling", level: "Production" },
      { name: "Retrieval Evaluation", level: "Advanced" },
      { name: "Hallucination Mitigation", level: "Advanced" },
      { name: "OpenAI GPT-4 & Anthropic Claude", level: "Advanced" },
      { name: "Gemini & Meta LLaMA", level: "Advanced" },
      { name: "FAISS & Vector DBs", level: "Production" },
      { name: "HuggingFace Transformers", level: "Proficient" },
      { name: "Transformer Fine-Tuning", level: "Proficient" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "High-throughput microservices, API architecture, and inference optimization",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "FastAPI & REST APIs", level: "Production" },
      { name: "Inference Optimization", level: "Production" },
      { name: "TypeScript & Node", level: "Advanced" },
      { name: "SQL & Data Modeling", level: "Proficient" },
      { name: "Docker Containerization", level: "Production" },
      { name: "Git & GitHub CI/CD", level: "Advanced" },
      { name: "LLMOps & Monitoring", level: "Production" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Production cloud setups on Google Cloud Platform and serverless platforms",
    skills: [
      { name: "Google Cloud Platform", level: "Certified" },
      { name: "Vertex AI", level: "Production" },
      { name: "Cloud Run & App Engine", level: "Production" },
      { name: "Cloud Functions & Storage", level: "Advanced" },
      { name: "Firebase Auth & Firestore", level: "Production" },
      { name: "Vercel Deployment", level: "Advanced" },
    ],
  },
  {
    title: "Frontend & Full Stack",
    description: "Building responsive, modern, interactive user interfaces for AI applications",
    skills: [
      { name: "React 19 & Next.js", level: "Production" },
      { name: "Tailwind CSS (v3 & v4)", level: "Production" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Streamlit UIs", level: "Advanced" },
      { name: "Vitest & Testing Library", level: "Proficient" },
    ],
  },
];

export const EDUCATION = {
  degree: "B.E. in Artificial Intelligence & Machine Learning",
  institution: "Sahyadri College of Engineering and Management (VTU)",
  period: "2022 — 2026",
  location: "Mangaluru, Karnataka, India",
  description: "Specialized in Deep Learning, NLP, Data Structures & Algorithms, Computer Vision, and Distributed Systems.",
};

export const CERTIFICATIONS = [
  {
    title: "Google Cloud Fundamentals",
    issuer: "Google",
    topics: "Compute Engine, Cloud Storage, Vertex AI, IAM",
    badge: "GCP Certified",
  },
  {
    title: "Data Analytics & Visualization",
    issuer: "Accenture North America (Forage)",
    topics: "Data Modeling, Strategic Insights, Visual Dashboards",
    badge: "Verified",
  },
  {
    title: "Excel Skills for Business",
    issuer: "JPMorgan Chase & Co. (Forage)",
    topics: "Financial Modeling, Automation, Analysis",
    badge: "Verified",
  },
];

export const TOOLBOX = [
  { name: "LangChain", category: "GenAI", icon: "🔗", desc: "LLM Orchestration" },
  { name: "FastAPI", category: "Backend", icon: "⚡", desc: "High-perf APIs" },
  { name: "Python", category: "Core", icon: "🐍", desc: "Primary language" },
  { name: "GCP Vertex AI", category: "Cloud", icon: "☁️", desc: "Model serving" },
  { name: "Docker", category: "DevOps", icon: "🐳", desc: "Containerization" },
  { name: "FAISS", category: "Vector DB", icon: "🔍", desc: "Semantic search" },
  { name: "Next.js 15", category: "Frontend", icon: "▲", desc: "React framework" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨", desc: "Modern UI styling" },
];
