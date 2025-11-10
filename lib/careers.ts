export type CareerRole = {
  slug: string;
  title: string;
  department: string;
  level?: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

export const roles: CareerRole[] = [
  {
    slug: "senior-penetration-tester",
    title: "Senior Penetration Tester",
    department: "Offensive Security",
    level: "Senior",
    location: "Harare, Zimbabwe (Hybrid)",
    type: "Full-time",
    summary:
      "Lead complex application, network, and cloud penetration tests across African and EU clients. Mentor team members and contribute to methodology and tooling.",
    responsibilities: [
      "Plan and execute web, mobile, infrastructure, and cloud penetration tests",
      "Develop threat models and test plans aligned to industry frameworks",
      "Author detailed, executive-ready reports with proof of exploitation",
      "Lead red team and purple team engagements with blue team collaboration",
      "Present findings to technical and executive stakeholders",
      "Mentor junior testers and improve internal tooling and processes"
    ],
    requirements: [
      "5+ years of hands-on penetration testing experience",
      "Expertise with Burp Suite, Nmap, Metasploit, and common tooling",
      "Strong understanding of OWASP Top 10, ASVS, and ATT&CK",
      "Proficiency in at least one scripting language (Python, JavaScript, or Go)",
      "Relevant certifications (OSCP/OSWE/OSCE or comparable)",
      "Excellent written and verbal communication"
    ],
    niceToHave: [
      "Experience with cloud provider assessments (AWS, Azure, GCP)",
      "Hardware and wireless testing exposure",
      "Public speaking or research publications"
    ]
  },
  {
    slug: "junior-penetration-tester",
    title: "Junior Penetration Tester",
    department: "Offensive Security",
    level: "Junior",
    location: "Harare, Zimbabwe (Onsite)",
    type: "Full-time",
    summary:
      "Execute scoped testing tasks under senior guidance. Grow skills via structured mentorship and real client work.",
    responsibilities: [
      "Perform reconnaissance, vulnerability discovery, and exploitation under supervision",
      "Document steps, evidence, and findings clearly",
      "Support patch validation and client retests",
      "Maintain lab environments and contribute to internal playbooks"
    ],
    requirements: [
      "1-2 years experience or strong portfolio of labs and CTFs",
      "Understanding of networking, web security, and Linux fundamentals",
      "Basic scripting in Python or JavaScript",
      "Excellent curiosity and willingness to learn"
    ],
    niceToHave: ["OSCP eJPT or comparable entry certification"]
  },
  {
    slug: "soc-analyst-l1",
    title: "SOC Analyst L1",
    department: "Security Operations Center",
    level: "L1",
    location: "Harare, Zimbabwe (Shift)",
    type: "Full-time",
    summary:
      "Monitor alerts, triage incidents, and escalate according to SOPs within a 24/7 environment.",
    responsibilities: [
      "Monitor SIEM, EDR, and IDS alerts to identify suspicious activity",
      "Perform initial triage and enrichment per playbooks",
      "Escalate confirmed incidents with clear documentation",
      "Create and tune detection rules under guidance"
    ],
    requirements: [
      "Knowledge of Windows/Linux security events and networking",
      "Familiarity with SIEM/EDR tools and alert triage",
      "Strong analytical mindset and attention to detail",
      "Comfort with shift-based work"
    ]
  },
  {
    slug: "soc-analyst-l2",
    title: "SOC Analyst L2",
    department: "Security Operations Center",
    level: "L2",
    location: "Harare, Zimbabwe (Hybrid)",
    type: "Full-time",
    summary:
      "Lead investigations, perform threat hunting, and mentor L1 analysts. Improve detections and response.",
    responsibilities: [
      "Lead complex investigations and coordinate incident response",
      "Develop detection content and improve SIEM/EDR efficacy",
      "Perform proactive threat hunting and hypothesis-driven analysis",
      "Create training materials and mentor L1 analysts"
    ],
    requirements: [
      "3+ years in SOC/IR roles",
      "Strong knowledge of logs, EDR telemetry, and MITRE ATT&CK",
      "Scripting for automation and enrichment (Python preferred)",
      "Certifications like GCIA/GCIH/GCFA or comparable"
    ]
  },
  {
    slug: "dfir-specialist",
    title: "DFIR Specialist",
    department: "Incident Response",
    location: "Harare, Zimbabwe (Hybrid)",
    type: "Full-time",
    summary:
      "Handle end-to-end incident response and digital forensics. Acquire, analyze, and present evidence.",
    responsibilities: [
      "Acquire and analyze disk, memory, and log evidence",
      "Perform malware analysis and support eradication",
      "Reconstruct timelines and author formal forensic reports",
      "Support testimony and regulator briefings as needed"
    ],
    requirements: [
      "3+ years DFIR experience",
      "Hands-on with Volatility, Autopsy, and EDR platforms",
      "Understanding of legal processes and chain of custody",
      "Strong communication and reporting skills"
    ]
  },
  {
    slug: "threat-intelligence-analyst",
    title: "Threat Intelligence Analyst",
    department: "Threat Intelligence",
    location: "Remote (Africa/EU time zones)",
    type: "Full-time",
    summary:
      "Collect, analyze, and disseminate actionable threat intelligence mapped to client risks.",
    responsibilities: [
      "Monitor open sources, dark web, and community feeds",
      "Produce strategic, operational, and tactical intelligence",
      "Maintain IOC feeds and ATT&CK mappings",
      "Collaborate with SOC and IR teams on emerging threats"
    ],
    requirements: [
      "Strong writing and analytical skills",
      "Familiarity with STIX/TAXII, MISP, and TIP workflows",
      "Understanding of regional threat landscape"
    ]
  },
  {
    slug: "grc-consultant",
    title: "GRC Consultant",
    department: "Governance, Risk & Compliance",
    location: "Harare, Zimbabwe (Hybrid)",
    type: "Full-time",
    summary:
      "Guide clients through ISO 27001, SOC 2, GDPR/POPIA, and risk management implementations.",
    responsibilities: [
      "Conduct gap assessments and maturity roadmaps",
      "Design policies, controls, and risk treatments",
      "Prepare for audits and support evidence collection",
      "Deliver workshops and executive briefings"
    ],
    requirements: [
      "3+ years in GRC/ISMS roles",
      "Experience with ISO 27001 and SOC 2",
      "Strong stakeholder communication"
    ]
  },
  {
    slug: "security-engineer",
    title: "Security Engineer",
    department: "Engineering",
    location: "Harare, Zimbabwe (Hybrid)",
    type: "Full-time",
    summary:
      "Design, build, and operate security tooling, detections, and automation for clients and internal teams.",
    responsibilities: [
      "Build integrations, parsers, and automation pipelines",
      "Harden cloud and on-prem environments",
      "Develop detections and continuous validation",
      "Collaborate with product and operations teams"
    ],
    requirements: [
      "Experience with Python/TypeScript and cloud services",
      "IaC tools and CI/CD familiarity",
      "Understanding of detection engineering principles"
    ]
  }
];

export function getRoleBySlug(slug: string): CareerRole | undefined {
  return roles.find((r) => r.slug === slug);
}
