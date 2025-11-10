import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { Mail, Linkedin, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team - NexNet CyberLabs",
  description: "Meet the leadership and departments driving NexNet CyberLabs across DFIR, intelligence, compliance, and education."
};

const leadership = [
  {
    name: "Tinotenda Nyashanu",
    title: "Co-Founder & Chief Executive Officer",
    location: "Warsaw, Poland & Harare, Zimbabwe",
    bio: "AI and Cybersecurity Engineer with a strong background in digital forensics, network defense, and intelligent systems design. Co-founder of NexNet CyberLabs, building Africa’s first world-class cybersecurity and intelligence bureau focused on ethical defense, research, and innovation.",
    focus: "Strategic leadership, innovation, partnerships, and organizational development",
    email: "tinotendanyash@gmail.com",
    linkedin: "linkedin.com/in/tinotenda-nyashanu-90163712b",
    avatar: "/images/team/Tinotenda.png"
  },
  {
    name: "Nyasha Mutonhori",
    title: "Co-Founder & Chief Technology Officer",
    location: "Warsaw, Poland",
    bio: "Digital forensics expert with background in law enforcement cyber crime units. Published researcher on APT tactics in African infrastructure. GCFE, GREM, and EnCE certified.",
    focus: "Forensic analysis, R&D, tooling development",
    email: "chipo.ncube@nexnet.example",
    linkedin: "linkedin.com/in/chiponcube",
    avatar: "/images/team/chipo-ncube.jpg"
  },
  {
    name: "Nyasha Jaidi",
    title: "Co-Founder & Chief Operating Officer",
    location: "Harare, Zimbabwe",
    bio: "Operations-driven cybersecurity professional with a background in Computer Engineering, specializing in Cybersecurity and Computer Networking. Currently pursuing an MBA to strengthen her leadership and strategic management expertise, blending technical insight with organizational acumen to drive efficiency and innovation. As Co-Founder and Chief Operating Officer of NexNet CyberLab, she oversees business operations, growth strategies, and administrative frameworks that keep the company agile and scalable. She is dedicated to building systems that empower teams and support sustainable success.",
    focus: "Operations management, strategic planning, organizational efficiency, and quality assurance",
    email: "nyasha.jaidi@nexnetcyberlab.com",
    linkedin: "www.linkedin.com/in/nyasha-jaidi-51668521a",
    avatar: "/images/team/nyasha.jpg"
  }
];

const departments = [
  {
    name: "Incident Response & DFIR",
    head: "Tapiwa Mutasa",
    location: "Harare",
    size: "12 analysts",
    description: "24/7 incident response, digital forensics, malware analysis, and threat hunting. Average response time: 45 minutes.",
    specialties: ["Ransomware containment", "Memory forensics", "Log analysis", "Evidence preservation"]
  },
  {
    name: "Threat Intelligence & OSINT",
    head: "Nyasha Gumbo",
    location: "Warsaw",
    size: "6 analysts",
    description: "Strategic and tactical threat intelligence, OSINT investigations, dark web monitoring, and adversary profiling.",
    specialties: ["APT tracking", "Dark web intelligence", "Geopolitical threat analysis", "Attribution research"]
  },
  {
    name: "Governance, Risk & Compliance",
    head: "Farai Mpofu",
    location: "Harare",
    size: "8 consultants",
    description: "Compliance assessments, policy development, risk management, and audit support for ISO 27001, SOC 2, and GDPR.",
    specialties: ["ISO 27001 audits", "GDPR compliance", "Risk assessments", "Security awareness"]
  },
  {
    name: "Security Assessments",
    head: "Tinashe Khumalo",
    location: "Warsaw",
    size: "7 consultants",
    description: "Penetration testing, vulnerability assessments, red team operations, and secure code review.",
    specialties: ["Web application testing", "Network penetration", "Cloud security", "Social engineering"]
  },
  {
    name: "CyberLabs Academy",
    head: "Rutendo Sibanda",
    location: "Harare",
    size: "4 instructors + 15 mentors",
    description: "Training, internships, certifications, and research fellowships. 500+ professionals trained since 2024.",
    specialties: ["Hands-on labs", "Internship program", "Certification prep", "Research mentorship"]
  }
];

export default function TeamPage() {
  return (
    <>
      <ImageHero
        title="Our Team"
        subtitle="Meet the leadership and departments driving NexNet CyberLabs across incident response, intelligence, compliance, and education."
        bgSrc="/images/hero/network-connections.svg"
        ctaPrimary={{ href: "/careers", text: "Join Our Team" }}
        ctaSecondary={{ href: "/about", text: "About Us" }}
      />

      <div className="container py-20 space-y-20">
        {/* Leadership */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <article key={leader.name} className="card space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  {leader.avatar ? (
                    <img
                      src={leader.avatar}
                      alt={`${leader.name} avatar`}
                      className="w-32 h-32 rounded-full object-cover border-2 border-brand-teal/30"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-brand-navy rounded-full flex items-center justify-center text-4xl font-bold text-brand-teal border-2 border-brand-teal/30">
                      {leader.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-brand-teal text-sm font-medium">{leader.title}</p>
                  <p className="text-gray-400 text-xs flex items-center justify-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {leader.location}
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{leader.bio}</p>

                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Focus areas:</p>
                  <p className="text-sm text-gray-300">{leader.focus}</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-2 text-sm text-brand-teal hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a
                    href={`https://${leader.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-brand-teal hover:underline"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Departments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <article key={dept.name} className="card space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{dept.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Led by {dept.head} · {dept.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-brand-teal/20 text-brand-teal rounded-full text-xs font-semibold">
                    {dept.size}
                  </span>
                </div>

                <p className="text-gray-300">{dept.description}</p>

                <div>
                  <p className="text-xs text-gray-400 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {dept.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="card bg-gradient-to-br from-brand-teal/10 to-transparent border-brand-teal/30 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-300 mb-6">
            We&apos;re always looking for disciplined, curious cybersecurity professionals who share our values
            and want to build Africa&apos;s leading intelligence bureau.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/careers"
              className="rounded-md px-6 py-3 bg-brand-teal font-semibold text-black hover:bg-brand-teal/90 transition-all"
            >
              View Open Roles
            </a>
            <a 
              href="/academy/internships"
              className="rounded-md px-6 py-3 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all font-semibold"
            >
              Internship Program
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
