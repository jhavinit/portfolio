export const siteConfig = {
  name: "Vinit Narayan Jha",
  title: "Vinit Jha — Senior Software Engineer",
  description:
    "Senior software engineer building scalable full-stack products with code and AI — from APIs and dashboards to data pipelines and cloud-native deployments.",
  url: "https://vinit-jha-portfolio.onrender.com",
  ogImage: "/images/programmer.svg",
  location: "Bengaluru, India",
  role: "Senior Software Engineer",
  yearsExperience: "5+",
  linkedInUrl: "https://www.linkedin.com/in/vinit-narayan-jha-07",
};

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/jhavinit", label: "GitHub profile" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vinit-narayan-jha-07",
    label: "LinkedIn profile",
  },
  {
    name: "Stack Overflow",
    href: "https://stackoverflow.com/users/10180554/jhavinit",
    label: "Stack Overflow profile",
  },
  { name: "Medium", href: "https://medium.com/@vj76223", label: "Medium blog" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const heroContent = {
  eyebrow: "Senior Software Engineer · Code + AI · Systems",
  headline: "I build systems that solve",
  headlineAccent: "real business problems.",
  subheadline:
    "Full-stack engineer who designs and ships production software end to end — scalable backends, polished frontends, data pipelines, and cloud deployments that hold up under real-world load.",
  metrics: [
    { value: "5+", label: "Years in production" },
    { value: "500M+", label: "Records processed" },
    { value: "100TB+", label: "Data engineered" },
    { value: "10+", label: "Products shipped" },
  ],
};

export const aboutContent = {
  title: "Engineering mindset",
  paragraphs: [
    "I build scalable, data-driven applications where reliability, performance, and clarity matter as much as features. My experience spans SaaS backends, analytics platforms, IoT products, and AI-enabled tooling — with ownership from architecture through production deployment.",
    "I combine strong engineering fundamentals with product sense: shipping fast without cutting corners, collaborating across teams, and making deliberate tradeoffs between timelines and long-term maintainability.",
  ],
  highlights: [
    {
      title: "Full-stack delivery",
      description:
        "React and Angular frontends, Node.js and Python backends, REST APIs, and databases — designed as cohesive systems, not isolated layers.",
    },
    {
      title: "Code + AI",
      description:
        "FastAPI, modern React, and practical AI integration — using automation and intelligent tooling to build better products, faster.",
    },
    {
      title: "Production mindset",
      description:
        "Docker, Kubernetes, observability, security, and on-site delivery — software engineered to run reliably where it matters.",
    },
  ],
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  logo: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: "dimaag",
    role: "Senior Software Engineer",
    company: "DIMAAG",
    period: "Mar 2025 — Present",
    location: "Bengaluru, India",
    logo: "/images/dimaag_logo.png",
    summary:
      "Building scalable backend systems with FastAPI and dynamic React frontends — focused on cloud-native architecture and Kubernetes-based microservice deployment.",
    highlights: [
      "Develop production backends with FastAPI and modern React interfaces.",
      "Design cloud-native architectures with efficient microservice deployment on Kubernetes.",
      "Integrate AI into product workflows to accelerate development and improve accuracy.",
    ],
    tech: ["FastAPI", "React", "Python", "Kubernetes", "Docker", "Microservices"],
  },
  {
    id: "sechpoint",
    role: "Senior Software Engineer",
    company: "Sechpoint",
    period: "Feb 2025 — Feb 2026",
    location: "Dubai, UAE",
    logo: "/images/sechpoint_logo.png",
    summary:
      "Led end-to-end design and delivery of a high-throughput monitoring and analytics platform — international on-site rollouts, real-time dashboards, and cloud-native microservices.",
    highlights: [
      "Architected microservices for ingestion, device management, centralized configuration, and secure multi-tenant access.",
      "Built Node.js (TypeScript) and Python services with RBAC, JWT auth, and real-time analytics dashboards.",
      "Deployed analytical databases with materialized views; containerized production stack with Docker, Nginx, and SSL.",
      "Led international client demos, onboarding, and production rollouts with measurable performance gains.",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Python",
      "Kafka",
      "ClickHouse",
      "Keycloak",
      "RADIUS",
      "Docker",
      "Nginx",
    ],
  },
  {
    id: "nubewell",
    role: "Software Engineer",
    company: "Nubewell Networks",
    period: "Oct 2021 — Feb 2025",
    location: "Bengaluru, India",
    logo: "/images/nubewell_logo.png",
    summary:
      "Led a large-scale analytics platform from design to production — high-volume data ingestion, optimized storage, and dashboards used by enterprise clients daily.",
    highlights: [
      "Built streaming pipelines with Kafka for high-throughput ingestion and fault-tolerant processing.",
      "Delivered Angular dashboards with real-time visualization, alerts, and operational analytics.",
      "Migrated storage architecture for scale; added caching, logging, HA failover, and Prometheus monitoring.",
      "Core revenue-driving product — led client demos, production deployments, and cross-team delivery.",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Angular",
      "Kafka",
      "Elasticsearch",
      "HDFS",
      "Redis",
      "Keycloak",
      "Docker",
      "Prometheus",
    ],
  },
  {
    id: "iitb",
    role: "Research Intern",
    company: "IIT Bombay",
    period: "May 2019 — Jul 2019",
    logo: "/images/iitb_logo.png",
    summary:
      "Robotics & distributed systems research — blockchain IoT networks, AR path planning, and multi-robot foraging simulations.",
    highlights: [
      "Built IoT-blockchain robot networks; compared DAG vs blockchain models for decentralized coordination.",
      "e-Yantra: Dijkstra + IR sensor navigation with OpenCV AR projection (Blender assets on ArUco markers).",
      "Developed decentralized 2-bot foraging framework in V-REP with Python simulation.",
    ],
    tech: ["Python", "OpenCV", "MQTT", "Blockchain", "V-REP", "Raspberry Pi"],
  },
  {
    id: "dic",
    role: "Intern",
    company: "Design Innovation Centre, Panjab University",
    period: "Oct 2018 — Oct 2021",
    location: "Chandigarh, India",
    logo: "/images/dic_logo.jpeg",
    summary:
      "Built DIC's official WordPress site with custom plugins, plus IoT condition-monitoring platforms and published Industry 4.0 research.",
    highlights: [
      "Designed DIC Panjab University website — custom WordPress plugin, SEO structure, and production deployment.",
      "Condition Monitoring Platform: MQTT/SSL ingestion, Angular dashboards, Socket.io, Leaflet maps, AWS EC2, Flutter app.",
      "RFID UHF gateway for smart barriers and logistics; pyVHR heart-rate APIs with ML Python integration.",
      "Published IoT protocols research on ResearchGate; Staff Club UIET website delivery.",
    ],
    tech: ["Node.js", "Angular", "Flutter", "AWS", "MQTT", "MongoDB", "Redis", "WordPress"],
  },
  {
    id: "telelabs",
    role: "Intern",
    company: "Telecommunication Labs, UIET",
    period: "Jun 2018 — Jul 2018",
    logo: "/images/telelabs.png",
    summary:
      "Built a secure WebRTC peer-to-peer conferencing stack with SIP.js — video, audio, and chat without a central media server.",
    highlights: [
      "Implemented serverless P2P channels for video/audio conferencing and messaging.",
      "Deployed demo at jhavinit.github.io using SIP.js, HTML, CSS, and JavaScript.",
    ],
    tech: ["WebRTC", "SIP.js", "JavaScript"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  metrics: { label: string; value: string }[];
  tech: string[];
  links: { label: string; href: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "dpi-platform",
    title: "Network Monitoring & Analytics Platform",
    description:
      "Enterprise monitoring platform with real-time ingestion, secure access control, and analytical dashboards at scale.",
    longDescription:
      "End-to-end solution for international deployments: full-stack services, streaming pipelines, analytical databases, and operational dashboards for distributed device fleets.",
    image: "/images/sechpoint_logo.png",
    metrics: [
      { label: "Stack", value: "MERN + Django" },
      { label: "Streaming", value: "Kafka" },
      { label: "Analytics", value: "ClickHouse" },
    ],
    tech: ["React", "Node.js", "Django", "Kafka", "ClickHouse", "RADIUS", "Docker"],
    links: [],
    featured: true,
  },
  {
    id: "network-analytics",
    title: "Large-Scale Analytics Platform",
    description:
      "Central platform ingesting high-volume data from distributed sources — optimized storage, real-time ops, and enterprise dashboards.",
    longDescription:
      "Microservices architecture with RBAC, Angular analytics UI, Prometheus monitoring, fleet-wide config sync, and storage migration with HA failover.",
    image: "/images/nubewell_logo.png",
    metrics: [
      { label: "Scale", value: "500M+" },
      { label: "Throughput", value: "350M+" },
      { label: "Storage", value: "100TB+" },
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Angular",
      "Kafka",
      "Elasticsearch",
      "HDFS",
      "Redis",
      "Keycloak",
    ],
    links: [],
    featured: true,
  },
  {
    id: "iot-capteurio",
    title: "IoT Dashboard & Mobile Platform",
    description:
      "Multi-device IoT platform with live maps, Socket.io streaming, Flutter apps, and AWS cloud integration.",
    longDescription:
      "Real-time device telemetry, drag-and-drop map markers (Leaflet), admin RBAC panel, MQTT ingestion over SSL, and alerts via SES/SNS — deployed on EC2 with Nginx reverse proxy.",
    image: "/images/iot_logo.jpg",
    metrics: [
      { label: "Realtime", value: "Socket.io" },
      { label: "Mobile", value: "Flutter" },
      { label: "Cloud", value: "AWS EC2" },
    ],
    tech: ["Angular", "Node.js", "Flutter", "Socket.io", "MQTT", "AWS", "MongoDB"],
    links: [
      {
        label: "Web App",
        href: "https://cdap-capteurio.com/#/login",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.cdapcapteurio.cdapcapteurio",
      },
    ],
    featured: true,
  },
  {
    id: "pyvhr",
    title: "pyVHR Heart Rate Monitoring",
    description:
      "REST APIs integrating ML-based heart rate extraction from patient video streams with Redis-backed caching.",
    longDescription:
      "Node/Express + MongoDB API layer wrapping pyVHR Python module for clinical-style remote monitoring on AWS EC2.",
    image: "/images/research_page.png",
    metrics: [
      { label: "ML", value: "pyVHR" },
      { label: "API", value: "REST" },
      { label: "Cache", value: "Redis" },
    ],
    tech: ["Node.js", "Python", "MongoDB", "Redis", "AWS EC2"],
    links: [],
    featured: false,
  },
  {
    id: "webrtc-p2p",
    title: "WebRTC P2P Conferencing",
    description:
      "Serverless peer-to-peer video, audio, and chat — built with WebRTC and SIP.js.",
    longDescription:
      "Secure conferencing channel without centralized media servers; demo deployed for telecommunication lab research.",
    image: "/images/telelabs.png",
    metrics: [
      { label: "Protocol", value: "WebRTC" },
      { label: "Signaling", value: "SIP.js" },
    ],
    tech: ["WebRTC", "SIP.js", "JavaScript"],
    links: [{ label: "Live Demo", href: "https://jhavinit.github.io" }],
    featured: false,
  },
];

export const skillCategories = [
  {
    name: "Backend & Systems",
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "Django",
      "Express",
      "TypeScript",
      "Microservices",
      "REST APIs",
    ],
  },
  {
    name: "Data & Streaming",
    skills: [
      "Kafka",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "ClickHouse",
      "HDFS",
      "Parquet",
    ],
  },
  {
    name: "Frontend",
    skills: ["React", "Angular", "JavaScript", "Socket.io", "Chart.js"],
  },
  {
    name: "Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "Nginx",
      "Linux",
      "AWS EC2",
      "Keycloak",
      "Prometheus",
      "Fluentd",
    ],
  },
  {
    name: "Platforms & IoT",
    skills: ["WebRTC", "MQTT", "Socket.io", "RFID", "IoT", "WordPress"],
  },
  {
    name: "Tools & AI",
    skills: ["Git", "Jira", "Postman", "Cursor", "Copilot", "n8n"],
  },
];

export const education = [
  {
    school: "UIET, Panjab University",
    degree: "B.Tech Computer Science & Engineering",
    period: "2017 — 2021",
    detail: "89.7% — Strong foundation in algorithms, systems, and software engineering.",
    logo: "/images/UIET_logo.png",
  },
  {
    school: "Kendriya Vidyalaya, Chandigarh",
    degree: "Class XII",
    period: "2015 — 2016",
    detail: "91.8%",
    logo: "/images/kv_logo.png",
  },
];

export const awards = [
  {
    title: "AIR 5 — IIT Bombay eYantra Robotics",
    description: "National robotics competition among 4,000+ teams.",
    year: "2018",
    link: "https://portal.e-yantra.org/",
    image: "/images/iitb_logo.png",
  },
  {
    title: "AIR 2 — Smart India Hackathon",
    description: "All India Rank 2, Software Edition.",
    year: "2018",
    image: "/images/iitb_logo.png",
  },
  {
    title: "Research Publication",
    description:
      "IoT Protocols, Communication Technologies and Services in Industry — ResearchGate.",
    year: "2022",
    link: "https://www.researchgate.net/publication/359124654_Internet_of_Things_IoT_Protocols_Communication_Technologies_and_Services_in_Industry",
    image: "/images/research_page.png",
  },
  {
    title: "Arctic Code Vault Contributor",
    description: "GitHub Archive Program — code preserved for future generations.",
    year: "2020",
    link: "https://github.com/jhavinit?tab=achievements",
    image: "/images/arctic_code_github_badge.png",
  },
  {
    title: "Node.js Certification",
    description: "Udemy — production-grade Node development.",
    link: "https://www.udemy.com/certificate/UC-f3e209bc-1a05-4dd1-a55e-2008c4e2d895",
    image: "/images/nodejs_logo.png",
  },
];
