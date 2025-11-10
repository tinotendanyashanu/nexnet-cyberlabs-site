import { Metadata } from "next";
import { ImageHero } from "@/components/ImageHero";
import { roles } from "@/lib/careers";
import { Briefcase, MapPin, Clock, Users, School, Trophy, Sparkles } from "lucide-react";
import Link from "next/link";
import { CareerApplicationForm } from "@/components/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Careers - NexNet CyberLabs",
  description: "Join NexNet CyberLabs. Explore open roles across offensive security, SOC, DFIR, threat intelligence, GRC, and engineering."
};

export default function CareersPage() {
  return (
    <>
      <ImageHero
        title="Careers at NexNet CyberLabs"
        subtitle="Build security that matters. Learn fast, do meaningful work, and grow your career with supportive mentors."
        bgSrc="/images/hero/careers-bg.svg"
        ctaPrimary={{ href: "#open-roles", text: "View Open Roles" }}
        ctaSecondary={{ href: "#apply", text: "Apply Now" }}
      />

      <div className="container py-20 space-y-20">
        {/* Open Roles */}
        <section id="open-roles">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2"><Briefcase className="w-7 h-7 text-brand-teal" /> Open Roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <Link key={role.slug} href={`/careers/${role.slug}`} className="card hover:shadow-lg hover:shadow-brand-teal/10 transition-all">
                <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{role.department}</p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4 text-brand-teal" /> {role.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4 text-brand-teal" /> {role.type}</span>
                </div>
                <p className="text-gray-300 mt-4 text-sm line-clamp-3">{role.summary}</p>
                <span className="text-brand-teal text-sm font-semibold mt-4 inline-block">View details →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Culture & Values */}
        <section className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-2"><Users className="w-7 h-7 text-brand-teal" /> Culture & Values</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Ownership and accountability from day one</li>
              <li>Kindness, candor, and continuous feedback</li>
              <li>Client impact over vanity metrics</li>
              <li>Bias to action with security rigor</li>
              <li>Knowledge sharing and mentorship</li>
            </ul>
          </div>
          <div className="card space-y-4 bg-gradient-to-br from-brand-teal/10 to-transparent border-brand-teal/30">
            <h3 className="text-xl font-semibold flex items-center gap-2"><Sparkles className="w-6 h-6 text-brand-teal" /> Benefits</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-300 text-sm">
              <li>Competitive salary</li>
              <li>Training budget & certifications</li>
              <li>Flexible work (role-dependent)</li>
              <li>Modern hardware & tools</li>
              <li>Paid time off & parental leave</li>
              <li>Health benefits allowance</li>
            </ul>
          </div>
        </section>

        {/* Development Paths */}
        <section className="card">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><School className="w-6 h-6 text-brand-teal" /> Career Development</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold mb-2">Offensive Security</h3>
              <p className="text-sm">Junior Tester → Penetration Tester → Senior → Practice Lead</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Defensive & SOC</h3>
              <p className="text-sm">SOC L1 → SOC L2 → Detection Engineer → SOC Lead</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">DFIR & Intelligence</h3>
              <p className="text-sm">Analyst → Specialist → Senior → IR Manager</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Trophy className="w-7 h-7 text-brand-teal" /> Team Voices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="card text-gray-300 italic">“I shipped detections to production in my first month and led an investigation by month three.” <span className="not-italic block text-sm text-gray-400 mt-2">— SOC Analyst L2</span></blockquote>
            <blockquote className="card text-gray-300 italic">“Mentorship here is real. I moved from junior to mid-level in under a year with structured coaching.” <span className="not-italic block text-sm text-gray-400 mt-2">— Penetration Tester</span></blockquote>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="card">
          <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
          <p className="text-gray-300 mb-6">Submit a general application or specify a role. We review every application carefully.</p>
          <CareerApplicationForm />
        </section>
      </div>
    </>
  );
}
