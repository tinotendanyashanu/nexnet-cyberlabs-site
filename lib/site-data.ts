export const heroStats = [
  { label: "Investigations led", value: 500, suffix: "+", prefix: "" },
  { label: "Incident containment success", value: 99, suffix: "%", prefix: "" },
  { label: "Average triage kickoff", value: 2, suffix: "h", prefix: "<" },
  { label: "Cyber professionals trained", value: 1200, suffix: "+", prefix: "" },
  { label: "Jurisdictions supported", value: 17, suffix: "", prefix: "" }
];

export type ServiceSlug =
  | "incident-response"
  | "digital-forensics"
  | "threat-intelligence"
  | "grc"
  | "assessments"
  | "training"
  | "risk-assessment"
  | "brand-monitoring"
  | "cloud-security"
  | "ai-automation"
  | "consulting"
  | "managed-defense"
  | "cyber-law";

export const serviceDirectory: Record<
  ServiceSlug,
  {
    name: string;
    summary: string;
    heroImage: string;
    methodology: { title: string; detail: string }[];
    tooling: { name: string; category: string }[];
    outcomes: string[];
    metrics: { label: string; value: string }[];
  }
> = {
  "incident-response": {
    name: "Incident Response & Breach Management",
    summary: "When seconds matter, we restore control. 24/7 breach containment and triage with rapid response to minimize downtime and data loss.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "24/7 Breach Containment", detail: "Rapid containment and triage using proven response frameworks (NIST SP 800-61, ISO/IEC 27035)." },
      { title: "Malware & Ransomware Analysis", detail: "In-depth analysis of malicious code and ransomware to understand attack vectors and impact." },
      { title: "Root Cause & Impact Assessment", detail: "Comprehensive investigation to identify how the breach occurred and what was affected." },
      { title: "Post-Incident Hardening", detail: "Evidence collection, documentation, and staff guidance to prevent future incidents." }
    ],
    tooling: [
      { name: "Velociraptor", category: "DFIR" },
      { name: "Splunk", category: "Log Analytics" },
      { name: "MISP", category: "Threat Intel" },
      { name: "Sysmon", category: "Monitoring" }
    ],
    outcomes: [
      "Rapid containment with minimized operational downtime.",
      "Complete documentation for legal and regulatory requirements.",
      "Strengthened defenses to prevent recurrence."
    ],
    metrics: [
      { label: "Response time", value: "< 2h" },
      { label: "Containment window", value: "< 6h" },
      { label: "Success rate", value: "99%" }
    ]
  },
  "digital-forensics": {
    name: "Digital Forensics & Investigations",
    summary: "Every byte leaves a trace — we follow it. Forensic analysts collect, preserve, and analyze digital evidence for legal, corporate, or disciplinary investigations.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Device & Drive Imaging", detail: "Forensic imaging of Windows, Linux, and mobile devices following ISO/IEC 27037 standards." },
      { title: "Email & Chat Investigation", detail: "Analysis of communication records to uncover evidence of fraud, insider threats, or misconduct." },
      { title: "Log & Timeline Reconstruction", detail: "Detailed timeline analysis to establish sequence of events and attribution." },
      { title: "Court-Admissible Reporting", detail: "Expert forensic report writing suitable for legal proceedings and regulatory compliance." }
    ],
    tooling: [
      { name: "Autopsy", category: "Forensics" },
      { name: "FTK Imager", category: "Acquisition" },
      { name: "Magnet Axiom", category: "Analysis" },
      { name: "Volatility", category: "Memory Forensics" }
    ],
    outcomes: [
      "Court-admissible evidence with full chain of custody.",
      "Clear attribution and narrative for stakeholders.",
      "Support for fraud, sabotage, and insider threat cases."
    ],
    metrics: [
      { label: "Cases handled", value: "500+" },
      { label: "Chain of custody", value: "100%" },
      { label: "Court testimony", value: "35+" }
    ]
  },
  "threat-intelligence": {
    name: "Threat Intelligence & OSINT",
    summary: "Understanding your adversary is half the battle. We monitor threat actors, digital footprints, and attack trends for proactive defense.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Threat Actor Profiling", detail: "Track and analyze threat actor campaigns, tactics, techniques, and procedures (TTPs)." },
      { title: "Dark Web Monitoring", detail: "Monitor dark web forums, marketplaces, and data leak sites for exposed credentials and threats." },
      { title: "Executive Exposure Assessment", detail: "Assess digital footprint of executives to identify social engineering and impersonation risks." },
      { title: "Infrastructure Monitoring", detail: "Domain, DNS, and infrastructure monitoring for indicators of compromise and malicious activity." }
    ],
    tooling: [
      { name: "Maltego", category: "OSINT" },
      { name: "SpiderFoot", category: "Recon" },
      { name: "OpenCTI", category: "Threat Intel" },
      { name: "Shodan", category: "Asset Discovery" },
      { name: "IntelX", category: "Data Breach Intelligence" }
    ],
    outcomes: [
      "Monthly threat briefings tailored to your risk profile.",
      "Early warning of targeted campaigns and data breaches.",
      "Actionable intelligence reports for proactive defense."
    ],
    metrics: [
      { label: "Actor profiles", value: "120+" },
      { label: "Alerts delivered", value: "Monthly" },
      { label: "Detection accuracy", value: "98%" }
    ]
  },
  grc: {
    name: "Governance, Risk & Compliance (GRC)",
    summary: "Security built on governance and accountability. Align cybersecurity with international standards through structured risk assessments, audits, and policy development.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Security Posture Assessment", detail: "Comprehensive evaluation of current security controls and maturity against industry standards." },
      { title: "Policy & SOP Drafting", detail: "Development of security policies, procedures, and standards aligned to ISO 27001, NIST, and GDPR." },
      { title: "Risk Register Creation", detail: "Identification, assessment, and documentation of organizational cyber risks with mitigation strategies." },
      { title: "Compliance Alignment", detail: "GDPR, POPIA, and Zimbabwe Cyber & Data Protection Act compliance assessments and remediation." }
    ],
    tooling: [
      { name: "OneTrust", category: "GRC Platform" },
      { name: "Vanta", category: "Compliance Automation" },
      { name: "LogicGate", category: "Risk Management" },
      { name: "PowerBI", category: "Risk Dashboards" }
    ],
    outcomes: [
      "ISO 27001, NIST CSF, or GDPR compliance readiness.",
      "Executive-ready risk dashboards and reporting.",
      "Accelerated audit preparation and certification paths."
    ],
    metrics: [
      { label: "Audit pass rate", value: "100%" },
      { label: "Compliance frameworks", value: "7+" },
      { label: "Clients certified", value: "40+" }
    ]
  },
  assessments: {
    name: "Penetration Testing & Vulnerability Assessment",
    summary: "Find weaknesses before attackers do. Ethical hackers perform controlled simulations to identify and validate vulnerabilities across systems, networks, and applications.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Web & API Testing", detail: "Comprehensive penetration testing of web applications and APIs following OWASP Top 10 methodology." },
      { title: "Cloud & Infrastructure Assessment", detail: "Security assessment of AWS, Azure, GCP environments and hybrid infrastructure configurations." },
      { title: "Attack Simulations", detail: "External and internal network penetration testing simulating real-world attack scenarios." },
      { title: "Mitigation Planning", detail: "Detailed remediation guidance prioritized by risk with re-testing to verify fixes." }
    ],
    tooling: [
      { name: "Burp Suite", category: "Web Security" },
      { name: "Nessus", category: "Vulnerability Scanning" },
      { name: "Metasploit", category: "Exploitation" },
      { name: "Nmap", category: "Network Mapping" },
      { name: "OWASP ZAP", category: "AppSec Testing" }
    ],
    outcomes: [
      "Comprehensive vulnerability identification and risk scoring.",
      "Actionable remediation roadmap prioritized by business impact.",
      "Third-party assurance reports for stakeholders and partners."
    ],
    metrics: [
      { label: "Assessments/year", value: "90+" },
      { label: "Findings validated", value: "100%" },
      { label: "Retest success", value: "85%" }
    ]
  },
  training: {
    name: "Security Awareness & Executive Training",
    summary: "Your people are your first line of defense. Customized cybersecurity training programs for technical staff, executives, and general workforce.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Phishing Simulations", detail: "Realistic phishing campaigns to test and improve employee awareness and reporting behaviors." },
      { title: "Executive Crisis Exercises", detail: "Tabletop exercises simulating cyber incidents for board and executive decision-making practice." },
      { title: "Technical Workshops", detail: "Hands-on training in secure development, cloud security hygiene, and defensive techniques." },
      { title: "Academy Programs", detail: "Comprehensive technical bootcamps through NexNet Academy with certification pathways." }
    ],
    tooling: [
      { name: "RangeForce", category: "Cyber Range" },
      { name: "Immersive Labs", category: "Skills Platform" },
      { name: "Miro", category: "Tabletop Exercises" },
      { name: "CTFd", category: "Challenge Platform" }
    ],
    outcomes: [
      "Measurable improvement in security awareness and behaviors.",
      "30% reduction in phishing susceptibility within 60 days.",
      "Executive readiness for cyber crisis management."
    ],
    metrics: [
      { label: "Professionals trained", value: "1,200+" },
      { label: "Satisfaction score", value: "4.8/5" },
      { label: "Behavior uplift", value: "30%" }
    ]
  },
  "risk-assessment": {
    name: "Cyber Risk Assessment & Security Audits",
    summary: "Know your exposure before it becomes an incident. Organization-wide cyber risk audits to identify vulnerabilities and recommend resilience strategies.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Asset & Threat Identification", detail: "Comprehensive inventory of digital assets with threat modeling and attack surface analysis." },
      { title: "Control Effectiveness Review", detail: "Evaluation of existing security controls against industry standards and best practices." },
      { title: "Risk Scoring & Prioritization", detail: "Quantitative risk assessment with scoring dashboard for executive decision-making." },
      { title: "Strategic Roadmap", detail: "Detailed mitigation roadmap with timelines, resource requirements, and success metrics." }
    ],
    tooling: [
      { name: "FAIR", category: "Risk Quantification" },
      { name: "NIST CSF", category: "Framework" },
      { name: "PowerBI", category: "Risk Dashboards" },
      { name: "ServiceNow", category: "Risk Management" }
    ],
    outcomes: [
      "Executive-ready risk scoring dashboard with clear metrics.",
      "Prioritized mitigation roadmap aligned to business objectives.",
      "Compliance alignment for regulatory audits."
    ],
    metrics: [
      { label: "Risk assessments", value: "150+" },
      { label: "Average risk reduction", value: "40%" },
      { label: "Client sectors", value: "8+" }
    ]
  },
  "brand-monitoring": {
    name: "Brand & Digital Footprint Monitoring",
    summary: "Protect your name, data, and online identity. Monitor internet, dark web, and data leak markets for exposed credentials and confidential information.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Executive Exposure Scanning", detail: "Continuous monitoring of executive digital footprints for PII exposure and impersonation risks." },
      { title: "Data Breach Alerting", detail: "Real-time alerts when organization credentials appear in data breaches or dark web markets." },
      { title: "Domain Impersonation Detection", detail: "Monitor for typosquatting, phishing domains, and brand impersonation attempts." },
      { title: "Takedown Support", detail: "Coordinated takedown of malicious domains, fake accounts, and leaked data where possible." }
    ],
    tooling: [
      { name: "HaveIBeenPwned", category: "Breach Intelligence" },
      { name: "DomainTools", category: "Domain Monitoring" },
      { name: "IntelX", category: "Dark Web" },
      { name: "SpiderFoot", category: "OSINT Automation" }
    ],
    outcomes: [
      "Early detection of credential leaks and data breaches.",
      "Protection of brand reputation through rapid takedown.",
      "Reduced attack surface from impersonation and phishing."
    ],
    metrics: [
      { label: "Brands monitored", value: "80+" },
      { label: "Alerts delivered", value: "Weekly" },
      { label: "Takedown success", value: "95%" }
    ]
  },
  "cloud-security": {
    name: "Cloud & Infrastructure Security",
    summary: "Resilience begins with architecture. Assess and secure on-premise, cloud, and hybrid infrastructure with modern security standards.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Cloud Configuration Review", detail: "Security assessment of AWS, Azure, GCP configurations against CIS benchmarks and best practices." },
      { title: "IAM & Access Control", detail: "Review and hardening of identity and access management policies, privilege escalation testing." },
      { title: "Network Segmentation", detail: "Evaluation of network architecture, segmentation controls, and lateral movement prevention." },
      { title: "Infrastructure Hardening", detail: "Firewall, VPN, and endpoint security configuration audits with remediation recommendations." }
    ],
    tooling: [
      { name: "OpenVAS", category: "Vulnerability Scanning" },
      { name: "CloudSploit", category: "Cloud Security" },
      { name: "ScoutSuite", category: "Multi-Cloud Audit" },
      { name: "Prowler", category: "AWS Security" }
    ],
    outcomes: [
      "Hardened cloud infrastructure aligned to CIS benchmarks.",
      "Reduced attack surface through proper segmentation.",
      "Compliance with cloud security best practices."
    ],
    metrics: [
      { label: "Cloud audits", value: "120+" },
      { label: "Misconfigurations found", value: "Avg 45/audit" },
      { label: "Remediation rate", value: "90%" }
    ]
  },
  "ai-automation": {
    name: "AI & Automation in Cyber Defense",
    summary: "Faster detection, smarter response. AI-powered models that detect anomalies, automate log analysis, and predict threats in real time.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Log-Based Anomaly Detection", detail: "Machine learning models trained to identify unusual patterns in log data indicating potential threats." },
      { title: "ML-Powered Phishing Detection", detail: "Automated analysis of emails and URLs using natural language processing to identify phishing attempts." },
      { title: "Autonomous Threat Triage", detail: "AI-powered bots that automatically categorize, prioritize, and route security alerts to appropriate teams." },
      { title: "ChatOps Integration", detail: "Integration of AI assistants with SOC workflows for automated playbook execution and alert enrichment." }
    ],
    tooling: [
      { name: "Python", category: "Development" },
      { name: "TensorFlow", category: "Machine Learning" },
      { name: "LangChain", category: "AI Framework" },
      { name: "Elasticsearch", category: "Log Analysis" }
    ],
    outcomes: [
      "50% reduction in alert fatigue through intelligent triage.",
      "Real-time threat detection with predictive analytics.",
      "Automated response workflows for common incident types."
    ],
    metrics: [
      { label: "ML models deployed", value: "15+" },
      { label: "Alert accuracy", value: "94%" },
      { label: "Response time reduction", value: "60%" }
    ]
  },
  consulting: {
    name: "Cybersecurity Consulting & Strategy",
    summary: "Strategic security for modern enterprises. Executive-level cybersecurity advisory turning technical defenses into business advantage.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "CISO-as-a-Service", detail: "Virtual CISO providing strategic leadership, governance, and executive advisory for organizations without full-time security leadership." },
      { title: "Security Strategy", detail: "Development of comprehensive security strategies aligned to business objectives and risk appetite." },
      { title: "Maturity Modeling", detail: "Assessment of current security maturity with roadmap for progressive capability development." },
      { title: "Crisis Management Planning", detail: "Development of incident response plans, business continuity strategies, and crisis communication frameworks." }
    ],
    tooling: [
      { name: "NIST CSF", category: "Framework" },
      { name: "CMMI", category: "Maturity Model" },
      { name: "FAIR", category: "Risk Quantification" },
      { name: "PowerBI", category: "Executive Dashboards" }
    ],
    outcomes: [
      "Clear security strategy aligned to business objectives.",
      "Executive visibility into cyber risk and posture.",
      "Optimized security investments with measurable ROI."
    ],
    metrics: [
      { label: "Consulting clients", value: "60+" },
      { label: "vCISO engagements", value: "25+" },
      { label: "Avg maturity increase", value: "2 levels" }
    ]
  },
  "managed-defense": {
    name: "Managed Defense & Monitoring",
    summary: "Continuous vigilance for continuous threats. Subscription-based managed defense with 24/7 monitoring, detection, and response.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Continuous Log Monitoring", detail: "24/7 monitoring of security logs from endpoints, network devices, cloud platforms, and applications." },
      { title: "Threat Detection & Alerting", detail: "Real-time threat detection using SIEM, EDR, and threat intelligence with immediate stakeholder alerting." },
      { title: "24/7 Advisory Hotline", detail: "Direct access to security analysts for incident triage, guidance, and emergency response coordination." },
      { title: "Monthly Risk Reporting", detail: "Executive-ready monthly reports on security posture, threat landscape, and risk trends." }
    ],
    tooling: [
      { name: "ELK Stack", category: "SIEM" },
      { name: "Wazuh", category: "Security Monitoring" },
      { name: "Splunk", category: "Log Analytics" },
      { name: "MISP", category: "Threat Intelligence" }
    ],
    outcomes: [
      "24/7 security monitoring and incident detection.",
      "Rapid threat response with expert analyst support.",
      "Predictable monthly cost for comprehensive security coverage."
    ],
    metrics: [
      { label: "Clients monitored", value: "45+" },
      { label: "Mean time to detect", value: "< 15min" },
      { label: "Threat containment", value: "< 1h" }
    ]
  },
  "cyber-law": {
    name: "Cyber Law & Policy Advisory",
    summary: "Building frameworks for digital justice. Work with policymakers and institutions to shape cyber laws and response frameworks aligned with global standards.",
    heroImage: "/images/services/operations-room.svg",
    methodology: [
      { title: "Policy Drafting & Review", detail: "Development and review of cybersecurity policies, data protection laws, and digital governance frameworks." },
      { title: "Legal Evidence Standards", detail: "Advisory on digital evidence collection, preservation, and presentation standards for legal proceedings." },
      { title: "National Awareness Programs", detail: "Design of national cybersecurity awareness campaigns and capacity-building initiatives." },
      { title: "Public-Private Collaboration", detail: "Facilitation of partnerships between government, private sector, and civil society for cyber resilience." }
    ],
    tooling: [
      { name: "GDPR", category: "Framework" },
      { name: "Budapest Convention", category: "Cybercrime Treaty" },
      { name: "AU Cyber Convention", category: "Regional Framework" },
      { name: "NIST", category: "Standards" }
    ],
    outcomes: [
      "Modern cyber laws aligned to international standards.",
      "Enhanced national cyber resilience and incident response capability.",
      "Effective public-private partnerships for cyber defense."
    ],
    metrics: [
      { label: "Policy projects", value: "12+" },
      { label: "Jurisdictions advised", value: "5" },
      { label: "Training programs", value: "20+" }
    ]
  }
};

export const leadershipTeam = [
  { name: "Nyasha Dube", title: "Chief Executive Officer", focus: "Strategy, partnerships, and corporate governance.", avatar: "/images/leadership/nyasha.svg" },
  { name: "Tariro Makoni", title: "Chief Technology Officer", focus: "Threat research, product, and engineering.", avatar: "/images/leadership/tariro.svg" },
  { name: "Kacper Nowak", title: "Head of Investigations", focus: "Digital forensics, DFIR playbooks, and testimony.", avatar: "/images/leadership/kacper.svg" },
  { name: "Zanele Sibanda", title: "Director, Governance & Compliance", focus: "GDPR, ISO 27001, and regulatory relations.", avatar: "/images/leadership/zanele.svg" },
  { name: "Mateusz Kowalski", title: "Director, Threat Intelligence", focus: "CTI programs, intel products, and OSINT lab.", avatar: "/images/leadership/mateusz.svg" },
  { name: "Farai Gumbo", title: "Dean, CyberLabs Academy", focus: "Curriculum, internships, and research partnerships.", avatar: "/images/leadership/farai.svg" }
];

export const academyTracks = [
  { level: "Beginner", name: "Foundations & SOC Readiness", duration: "8 weeks", highlights: ["Security fundamentals", "SOC tooling primer", "Capstone tabletop"] },
  { level: "Intermediate", name: "Incident Response & DFIR", duration: "12 weeks", highlights: ["Live-fire labs", "Memory analysis", "Executive reporting"] },
  { level: "Advanced", name: "Threat Intelligence & Hunt", duration: "10 weeks", highlights: ["Campaign tracking", "Automation sprints", "Actor profiling"] },
  { level: "Executive", name: "Boardroom & Policy Leadership", duration: "4 weeks", highlights: ["Scenario exercises", "Regulator briefings", "Budget alignment"] }
];

export const industries = [
  {
    key: "financial",
    name: "Financial Services",
    synopsis: "Combat fraud, meet PCI DSS/ISO 27001, and modernize SOC modernization across banking, insurance, and fintech.",
    controls: ["PCI DSS", "ISO 27001", "SWIFT CSCF"],
    needs: ["Fraud fusion cells", "Digital forensics retainers", "Regulator-ready reporting"],
    image: "/images/industries/financial.svg"
  },
  {
    key: "telecom",
    name: "Telecom",
    synopsis: "Assure 5G cores, roaming, and customer identity platforms with 24/7 detection and response.",
    controls: ["GSMA FS.11", "NIST CSF", "GDPR"],
    needs: ["Supply-chain assurance", "Network segmentation reviews", "Purple teaming"],
    image: "/images/industries/telecom.svg"
  },
  {
    key: "energy",
    name: "Mining & Energy",
    synopsis: "Protect OT/IT convergence, mine planning systems, and remote sites with resilient architectures.",
    controls: ["IEC 62443", "ISO 27019", "NERC CIP"],
    needs: ["OT visibility", "Incident playbooks", "Crisis communications"],
    image: "/images/industries/energy.svg"
  },
  {
    key: "government",
    name: "Government",
    synopsis: "Secure citizen services, elections, and national infrastructure with sovereign-grade capabilities.",
    controls: ["NIST 800-53", "GDPR", "National CERT standards"],
    needs: ["Digital forensics labs", "National cyber drills", "Cloud security posture"],
    image: "/images/industries/government.svg"
  },
  {
    key: "education",
    name: "Education",
    synopsis: "Safeguard research IP, student records, and campus infrastructure while enabling open collaboration.",
    controls: ["GDPR", "POPIA", "ISO 27001"],
    needs: ["Identity protection", "Awareness programs", "Incident tabletop exercises"],
    image: "/images/industries/education.svg"
  }
];

export const blogPosts = [
  {
    slug: "zero-day-triage",
    title: "Zero-Day Triage Across Distributed Teams",
    summary: "Playbooks for coordinating Africa + EU IR teams when zero-days drop on a Friday night.",
    author: "Tariro Makoni",
    date: "2025-03-12",
    tags: ["Incident Response", "Process", "Playbooks"],
    hero: "/images/insights/zero-day.svg",
    readingTime: "8 min"
  },
  {
    slug: "grc-fast-lane",
    title: "GRC in the Fast Lane: ISO 27001 in 120 Days",
    summary: "How our hybrid audit pods accelerated certification for a Zimbabwean fintech unicorn.",
    author: "Zanele Sibanda",
    date: "2025-02-04",
    tags: ["GRC", "ISO 27001"],
    hero: "/images/insights/grc.svg",
    readingTime: "6 min"
  },
  {
    slug: "threat-landscape-ssa",
    title: "2025 Threat Landscape for Sub-Saharan Africa",
    summary: "Top ransomware crews, geo-political drivers, and sector hotspots.",
    author: "Mateusz Kowalski",
    date: "2025-01-18",
    tags: ["Threat Intel", "Reports"],
    hero: "/images/insights/landscape.svg",
    readingTime: "12 min"
  }
];

export const reports = [
  { title: "State of DFIR in Emerging Markets", description: "Benchmarks and field notes from 60+ incidents.", href: "/docs/state-of-dfir.pdf" },
  { title: "Executive Guide to Cyber Resilience", description: "Board-focused playbook for resilience decisions.", href: "/docs/executive-guide.pdf" },
  { title: "Education Sector Threat Brief", description: "Research panel findings and mitigation guidance.", href: "/docs/education-brief.pdf" }
];

export const caseStudies = [
  { title: "Telecom Supply Chain Breach", result: "Zero customer impact, regulator brief in 36h.", sector: "Telecom" },
  { title: "Digital Bank Ransomware", result: "99% data recovery, new IR runbooks, no ransom paid.", sector: "Financial Services" },
  { title: "Government CERT Enablement", result: "Incident response maturity uplift to level 4.", sector: "Government" }
];

export const complianceMatrix = [
  { framework: "ISO 27001:2022", coverage: "ISMS build-outs, lead auditor coaching, certification prep.", status: "Certified" },
  { framework: "NIST Cybersecurity Framework", coverage: "Assessments, tier progression, and implementation roadmaps.", status: "Implemented" },
  { framework: "GDPR & POPIA", coverage: "Data mapping, DPIAs, DPO advisory, breach notification support.", status: "Operational" },
  { framework: "SOC 2 Type II", coverage: "Control design, evidence rooms, monitoring automation.", status: "In Progress" }
];

export const offices = [
  { city: "Harare", country: "Zimbabwe", address: "51 Samora Machel Ave, Harare", phone: "+263 8677 004 321" },
  { city: "Warsaw", country: "Poland", address: "Plac Europejski 1, Warsaw", phone: "+48 22 307 80 10" }
];

export const partnerUniversities = [
  "University of Zimbabwe",
  "National University of Science & Technology",
  "University of Pretoria",
  "Warsaw University of Technology"
];

export const photoGallery = [
  "/images/gallery/academy-lab.svg",
  "/images/gallery/mentorship.svg",
  "/images/gallery/war-room.svg",
  "/images/gallery/soc-night.svg"
];

export const newsletterBenefits = [
  "Monthly threat briefings tailored to African markets.",
  "Invites to closed-door executive roundtables.",
  "Early access to academy cohorts and scholarships."
];

