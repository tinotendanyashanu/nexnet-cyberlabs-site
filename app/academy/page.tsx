"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  GraduationCap, 
  Target, 
  Users, 
  Award, 
  Globe, 
  Code, 
  Shield, 
  Search, 
  FileSearch, 
  Lock,
  Cpu,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Clock,
  Zap,
  BookOpen,
  Terminal,
  Layers,
  ArrowRight
} from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import Form from "@/components/ui/Form";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 1200, label: "Students Trained", suffix: "+" },
  { value: 95, label: "Placement Rate", suffix: "%" },
  { value: 4, label: "Learning Tracks", suffix: "" },
  { value: 8, label: "Student:Mentor Ratio", prefix: "1:", suffix: "" }
];

const phases = [
  {
    number: "01",
    title: "Foundation Camp",
    duration: "3 weeks",
    description: "Evaluate problem-solving, discipline, teamwork, and ethical reasoning.",
    activities: [
      "Linux and networking fundamentals",
      "Secure scripting basics",
      "Cyber ethics and digital discipline",
      "Short Capture-the-Flag (CTF) challenge"
    ],
    outcome: "Graduates admitted into Core Academy",
    icon: Target,
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Core Academy",
    duration: "1012 weeks",
    description: "Build technical and investigative skills through practical challenges and peer collaboration.",
    activities: [
      "System & Network Security  configure and defend network environments",
      "Digital Forensics  acquire, preserve, and analyze evidence",
      "Threat Intelligence & OSINT  gather actionable intelligence",
      "Security Assessments  vulnerability and configuration reviews",
      "Automation & Scripting  develop Python tools for defense"
    ],
    outcome: "XP-based progression with peer review",
    icon: Code,
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Internship Deployment",
    duration: "36 months",
    description: "Apply learning to real-world environments under mentor supervision.",
    activities: [
      "Join operational pods (IR, Forensics, Threat Intel, GRC, AI)",
      "Support live investigations and research",
      "Produce deliverables reviewed by senior analysts",
      "Work on real client projects (anonymized)",
      "Weekly mentorship and technical guidance"
    ],
    outcome: "Certified Cyber Analyst Intern credential",
    icon: Users,
    color: "from-amber-500 to-orange-500"
  },
  {
    number: "04",
    title: "Capstone Mission",
    duration: "24 weeks",
    description: "Execute a complete cyber defense or investigation scenario as a team.",
    activities: [
      "Receive simulated enterprise environment",
      "Perform detection, investigation, and reporting",
      "Draft forensic report and executive summary",
      "Present findings to NexNet leadership",
      "Defend recommendations under questioning"
    ],
    outcome: "Graduate as Certified Cyber Analyst",
    icon: Award,
    color: "from-green-500 to-teal-500"
  }
];

const operationalPods = [
  {
    name: "Incident Response",
    description: "Participate in simulated and real triage and containment activities.",
    tools: ["Velociraptor", "MISP", "Elastic", "TheHive"],
    icon: Shield,
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    name: "Digital Forensics",
    description: "Support live and sandbox evidence analysis.",
    tools: ["Autopsy", "FTK Imager", "Volatility", "Plaso"],
    icon: FileSearch,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Threat Intelligence",
    description: "Track threat actors, collect OSINT, draft intel briefs.",
    tools: ["Maltego", "OpenCTI", "SpiderFoot", "MISP"],
    icon: Search,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Governance & Risk",
    description: "Assist in audits, risk registers, and policy reviews.",
    tools: ["ISO 27001", "NIST CSF", "GDPR", "COBIT"],
    icon: Lock,
    gradient: "from-green-500/20 to-teal-500/20"
  },
  {
    name: "AI & Automation",
    description: "Build detection scripts and ML pipelines.",
    tools: ["Python", "TensorFlow", "LangChain", "Jupyter"],
    icon: Cpu,
    gradient: "from-amber-500/20 to-yellow-500/20"
  }
];

const certificationLevels = [
  {
    level: "L1",
    title: "Trainee",
    description: "Completed Foundation Camp",
    xp: "0-100 XP",
    color: "bg-gray-500"
  },
  {
    level: "L2",
    title: "Junior Cyber Analyst",
    description: "Completed Core Academy",
    xp: "100-500 XP",
    color: "bg-blue-500"
  },
  {
    level: "L3",
    title: "Cyber Analyst Intern",
    description: "Deployed in operational pod",
    xp: "500-1500 XP",
    color: "bg-purple-500"
  },
  {
    level: "L4",
    title: "Senior Intern",
    description: "Led a project or mentored peers",
    xp: "1500-3000 XP",
    color: "bg-amber-500"
  },
  {
    level: "L5",
    title: "Graduate Analyst",
    description: "Completed Capstone Mission",
    xp: "3000+ XP",
    color: "bg-green-500"
  }
];

const regionalHubs = [
  {
    region: "Southern Africa",
    city: "Harare",
    country: "Zimbabwe",
    type: "Head Office",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop",
    features: ["Physical Lab", "Local Mentorship", "Internet Access Points"]
  },
  {
    region: "East Africa",
    city: "Nairobi",
    country: "Kenya",
    type: "Virtual Lab",
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=600&h=400&fit=crop",
    features: ["Virtual Workspace", "Regional Coordination", "Community Events"]
  },
  {
    region: "West Africa",
    city: "Lagos",
    country: "Nigeria",
    type: "Virtual Lab",
    image: "https://images.unsplash.com/photo-1568808810756-7ef2e1d9e93b?w=600&h=400&fit=crop",
    features: ["Virtual Workspace", "Local Partnerships", "Career Networking"]
  },
  {
    region: "Europe",
    city: "Warsaw",
    country: "Poland",
    type: "Operations Desk",
    image: "https://images.unsplash.com/photo-1559564484-e48bf0cedf93?w=600&h=400&fit=crop",
    features: ["24/7 Operations", "EU Client Projects", "Research Lab"]
  }
];

const learningComponents = [
  { name: "Virtual Cyber Lab", description: "Cloud-based workspaces accessible via browser", icon: Globe },
  { name: "Repository Platform", description: "GitLab for project submissions and code review", icon: Code },
  { name: "Challenge Engine", description: "CTFd for technical exercises and CTF events", icon: Target },
  { name: "Collaboration Channels", description: "Discord / Slack for peer support and standups", icon: Users },
  { name: "Knowledge Hub", description: "Internal Wiki with guides, SOPs, and playbooks", icon: BookOpen },
  { name: "Command Center", description: "Real-time dashboards and operational metrics", icon: Terminal }
];

const applicationFields = [
  { name: "name", label: "Full Name", type: "text" as const, required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone Number", type: "tel" as const, required: false },
  { name: "country", label: "Country", type: "text" as const, required: true },
  { 
    name: "skillLevel", 
    label: "Current Skill Level", 
    type: "select" as const, 
    required: true,
    options: ["Beginner - No prior experience", "Novice - Some fundamentals", "Intermediate - 1-2 years", "Advanced - 3+ years"]
  },
  { 
    name: "track", 
    label: "Preferred Track", 
    type: "select" as const, 
    required: true,
    options: ["Incident Response", "Digital Forensics", "Threat Intelligence", "Governance & Risk", "AI & Automation", "Undecided - Need guidance"]
  },
  { name: "background", label: "Technical Background", type: "textarea" as const, required: true, placeholder: "Describe your education, work experience, or self-study in cybersecurity or related fields..." },
  { name: "motivation", label: "Why CyberLabs Academy?", type: "textarea" as const, required: true, placeholder: "What drives you to join this program? What do you hope to achieve?" }
];

export default function AcademyPage() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="CyberLabs Academy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/90 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <GraduationCap className="w-5 h-5 text-brand-teal" />
            <span className="text-sm font-semibold">Academy & Internship Program</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn by <span className="text-brand-teal">Defending</span>.
            <br />
            Graduate by <span className="text-brand-teal">Solving</span> Real Incidents.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            NexNet CyberLabs Academy trains and deploys Africa's next generation of cyber defenders through real-world projects and mentorship.
            <br />
            <strong className="text-white">No lectures, no rote memorization  just missions, peers, and measurable outcomes.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apply" className="btn-primary inline-flex items-center gap-2">
              <Users className="w-5 h-5" />
              Apply Now
            </a>
            <a href="#program" className="btn-secondary inline-flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-gradient-to-r from-brand-teal/10 via-purple-500/10 to-brand-teal/10 border-y border-brand-teal/20 py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">
                  {stat.prefix}
                  <AnimatedCounter end={stat.value} duration={2000} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section-container py-20" id="program">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Program Design</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A challenge-based, self-paced learning journey integrated directly into NexNet's live operations.
            Participants train in defensive and investigative techniques while gaining real internship experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <GlowCard className="p-6 text-center">
            <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Academy Track</h3>
            <p className="text-gray-300 text-sm">
              Challenge-based, self-paced learning in cybersecurity fundamentals, forensics, intelligence, and automation.
            </p>
          </GlowCard>
          <GlowCard className="p-6 text-center">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Internship Track</h3>
            <p className="text-gray-300 text-sm">
              Hands-on placement inside NexNet's operational pods supporting real projects and research.
            </p>
          </GlowCard>
          <GlowCard className="p-6 text-center">
            <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Outcome</h3>
            <p className="text-gray-300 text-sm">
              Certified Cyber Analyst Intern with a verified portfolio of technical and analytical work.
            </p>
          </GlowCard>
        </div>

        {/* Phase Timeline */}
        <div className="space-y-8">
          {phases.map((phase, idx) => (
            <GlowCard key={idx} className="overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${phase.color}`} />
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-2xl font-bold text-white`}>
                      {phase.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold flex items-center gap-3">
                        <phase.icon className="w-6 h-6 text-brand-teal" />
                        {phase.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-sm border border-white/10 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{phase.description}</p>
                    
                    {selectedPhase === idx && (
                      <div className="mt-6 pt-6 border-t border-white/10 space-y-4 animate-fadeIn">
                        <h4 className="font-semibold text-brand-teal mb-3">Core Activities:</h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-brand-teal/10 to-purple-500/10 border border-brand-teal/20">
                          <div className="flex items-center gap-2 text-brand-teal font-semibold mb-1">
                            <TrendingUp className="w-5 h-5" />
                            Outcome
                          </div>
                          <p className="text-sm text-gray-300">{phase.outcome}</p>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => setSelectedPhase(selectedPhase === idx ? null : idx)}
                      className="mt-4 text-brand-teal text-sm font-medium flex items-center gap-2 hover:underline"
                    >
                      {selectedPhase === idx ? "Show Less" : "Show More"}
                      <ArrowRight className={`w-4 h-4 transition-transform ${selectedPhase === idx ? "rotate-90" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Operational Pods */}
      <section className="section-container py-20 bg-gradient-to-b from-transparent to-brand-navy/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Operational Pods</h2>
          <p className="text-gray-300 text-lg">Choose your specialization and work on real projects</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operationalPods.map((pod, idx) => (
            <GlowCard key={idx} className="p-6 relative overflow-hidden" hover>
              <div className={`absolute inset-0 bg-gradient-to-br ${pod.gradient} opacity-50`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <pod.icon className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">{pod.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{pod.description}</p>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-brand-teal mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Tools & Frameworks:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pod.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-xs border border-white/10">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Certification Levels */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Certification Levels</h2>
          <p className="text-gray-300 text-lg">Progress through five levels of expertise</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {certificationLevels.map((cert, idx) => (
            <GlowCard key={idx} className="p-6 flex items-center gap-6" hover>
              <div className={`w-20 h-20 rounded-2xl ${cert.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-2xl font-bold text-white">{cert.level}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{cert.description}</p>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">
                  <Zap className="w-3 h-3 text-amber-400" />
                  {cert.xp}
                </span>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Regional Hubs */}
      <section className="section-container py-20 bg-gradient-to-b from-transparent to-brand-navy/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Regional Hubs</h2>
          <p className="text-gray-300 text-lg">Learn locally, impact globally</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {regionalHubs.map((hub, idx) => (
            <GlowCard key={idx} className="overflow-hidden" hover>
              <div className="relative h-48">
                <Image
                  src={hub.image}
                  alt={hub.city}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-brand-teal" />
                    <span className="text-sm font-semibold text-brand-teal">{hub.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{hub.city}, {hub.country}</h3>
                  <p className="text-sm text-gray-300">{hub.region}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {hub.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Learning Environment */}
      <section className="section-container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Learning Environment</h2>
          <p className="text-gray-300 text-lg">Enterprise-grade tools and platforms</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningComponents.map((component, idx) => (
            <GlowCard key={idx} className="p-6" hover>
              <component.icon className="w-10 h-10 text-brand-teal mb-4" />
              <h3 className="text-lg font-bold mb-2">{component.name}</h3>
              <p className="text-gray-300 text-sm">{component.description}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Internship Details */}
      <section className="section-container py-20 bg-gradient-to-b from-transparent to-brand-navy/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Internship Details</h2>
            <p className="text-gray-300 text-lg">Real work. Real mentorship. Real impact.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <GlowCard className="p-6">
              <Globe className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Format</h3>
              <p className="text-gray-300 text-sm">Remote-first, optional hybrid hubs in Harare and Warsaw</p>
            </GlowCard>
            <GlowCard className="p-6">
              <Clock className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Duration & Commitment</h3>
              <p className="text-gray-300 text-sm">36 months, 2030 hours per week</p>
            </GlowCard>
            <GlowCard className="p-6">
              <Users className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Mentorship</h3>
              <p className="text-gray-300 text-sm">Weekly technical and career guidance from senior analysts</p>
            </GlowCard>
            <GlowCard className="p-6">
              <TrendingUp className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Evaluation</h3>
              <p className="text-gray-300 text-sm">XP score + mentor review + project impact assessment</p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-container py-20" id="apply">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Apply to the Academy</h2>
            <p className="text-gray-300 text-lg">
              Start your journey to becoming a Certified Cyber Analyst
            </p>
          </div>
          <GlowCard className="p-8">
            <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <h3 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Application Process
              </h3>
              <ol className="text-sm text-gray-300 space-y-2 ml-7">
                <li>1. Submit application form below</li>
                <li>2. Receive Foundation Camp invitation (3-week trial)</li>
                <li>3. Complete technical and ethics assessments</li>
                <li>4. Top performers enter Core Academy</li>
                <li>5. After Level 2, join operational internship pods</li>
              </ol>
            </div>
            <Form 
              fields={applicationFields} 
              submitLabel="Submit Application"
              onSubmit={(data) => {
                console.log("Academy application:", data);
              }}
            />
          </GlowCard>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container py-20">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-purple-500/20" />
          <GlowCard className="relative p-12 text-center">
            <Terminal className="w-16 h-16 text-brand-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Defend the Future?</h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join Africa's most hands-on cybersecurity training program. Learn from real incidents, work with expert mentors, and launch your career in cyber defense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#apply" className="btn-primary inline-flex items-center gap-2">
                <Users className="w-5 h-5" />
                Apply Now
              </a>
              <a href="/contact" className="btn-secondary inline-flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Learn More
              </a>
            </div>
          </GlowCard>
        </div>
      </section>
    </>
  );
}
