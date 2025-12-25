export type PortfolioProjectLink = { label: string; href: string };

export type PortfolioProject = {
  title: string;
  slug: string;
  href: string;
  tags: string[];
  description: string;
  links?: PortfolioProjectLink[];
};

export const portfolio = {
  headline: "Cybersecurity • Cloud • Software Engineering",
  name: "Tobi Alaofin",
  location: "Silver Spring, MD",

  focus:
    "I build secure, scalable systems across cloud security monitoring, compliance engineering, and full-stack development. I care about defense-in-depth that works in real life: strong identity controls, hardened endpoints, and detections you can actually operate (logs, alerting, triage, and evidence).",

  // ✅ About section (matches your about page fields)
  about: {
    intro:
      "I’m a African-American Computer Science student who enjoys building secure systems and learning how real-world defenses work at scale.",
    originStory:
      "I became seriously interested in cloud, software, and cybersecurity engineering when I was 18. I started by learning core CS fundamentals (programming, data structures, systems thinking) and then leaned into cloud identity, monitoring, and practical security controls.",
    now:
      "Today, I focus on cloud security, detection engineering, and compliance-driven engineering — making sure controls don’t just exist, but actually work and can be proven during audits.",
    interests: {
      sports: ["Football", "Basketball", "Soccer", "Track", "Baseball"],
      music: ["Jazz", "Classical", "R&B", "K-pop"],
      travel:
        "I love traveling and going on cruises — exploring new places, cultures, and experiences whenever I can.",
      gaming:
        "I enjoy video games and I’m currently working on my own video game simulation project, combining systems design, logic, and interactive experiences.",
    },
  },

  highlights: [
    "CMMC Level 2 / NIST 800-171: translated requirements into real Microsoft configurations and audit-ready evidence (Intune, Sentinel, Defender, Purview).",
    "Cloud security + detection mindset: signal quality, runbooks, incident triage, phishing simulations, and repeatable response workflows.",
    "Software engineering foundations: TypeScript/React, Java, C, SQL with systems thinking and troubleshooting under pressure.",
    "Compliance meets engineering: I don’t just ‘enable controls’ — I validate behavior, capture proof, and explain it clearly for audits.",
  ],

  experience: [
    {
      title: "Cybersecurity Engineer Intern — Mobius Consulting",
      period: "2025",
      bullets: [
        "Supported CMMC Level 2 readiness by implementing security configurations and assembling evidence artifacts.",
        "Worked across Microsoft ecosystem: Intune, Microsoft Sentinel, Defender, Purview, Entra ID, Azure Monitor / Log Analytics.",
        "Helped align technical controls to NIST 800-171 requirements and audit expectations.",
      ],
    },
    {
      title: "Software Engineer (Support) — Delexis Healthcare Solutions",
      period: "2022 – 2025",
      bullets: [
        "Deployed and configured computer systems across client offices, improving setup speed and consistency.",
        "Built a secure ID card processing workflow to improve onboarding efficiency and reduce errors.",
        "Provided technical support and troubleshooting; resolved most issues on first response.",
      ],
    },
  ],

  projects: [
    {
      title: "CMMC Compliance & Intune Security Hardening",
      slug: "cmmc-intune",
      href: "https://github.com/tobialaofin/cloud-security-compliance-portfolio",
      tags: ["Compliance", "Intune", "Microsoft 365", "NIST 800-171"],
      description:
        "Reviewed an existing Intune environment, helped redesign baseline policies for Windows devices, tested configurations, and produced audit-ready evidence and policy summaries for CMMC Level 2.",
      links: [{ label: "GitHub", href: "https://github.com/tobialaofin/cloud-security-compliance-portfolio" }],
    },
    {
      title: "GCC High Deployment & Security Monitoring",
      slug: "gcc-high",
      href: "https://github.com/tobialaofin",
      tags: ["GCC High", "Sentinel", "FedRAMP", "Azure AD/Entra"],
      description:
        "Helped plan and validate a GCC High tenant with baseline identity controls, audit logging, and monitoring. Integrated Sentinel, built alerts, and documented settings for internal audits.",
      links: [{ label: "GitHub", href: "https://github.com/tobialaofin" }],
    },
    {
      title: "Real-Time Market Data Stream Processor",
      slug: "real-time-stream",
      href: "https://github.com/tobialaofin/real-time-market-data-stream",
      tags: ["Python", "FastAPI", "asyncio", "JavaScript"],
      description:
        "Designed a real-time market data streaming system that ingests live/simulated equity prices and computes rolling analytics in memory. Built an async FastAPI backend and a live dashboard with rolling windows, averages, and percent change per symbol.",
      links: [{ label: "GitHub", href: "https://github.com/tobialaofin/real-time-market-data-stream" }],
    },
  ] as PortfolioProject[],

  certifications: [
    "CompTIA Security+ (2024)",
    "Microsoft Certified: Azure Administrator Associate (AZ-104) (2025)",
    "AWS Security Specialty (2025)",
    "Certified Ethical Hacker (In Progress)",
  ],

  contact: {
    email: "tobialaofin2004@gmail.com",
    linkedin: "https://www.linkedin.com/in/tobi-alaofin-a17b66277/",
    github: "https://github.com/tobialaofin",
    resumePath: "/assets/resume.pdf",
    headshotPath: "/assets/headshot.jpg",
  },
};
