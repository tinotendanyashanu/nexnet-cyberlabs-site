import Link from "next/link";
import { serviceDirectory, type ServiceSlug } from "@/lib/site-data";
import { Shield, Search, Activity, FileText, Lock, Users, AlertTriangle, Eye, Cloud, Cpu, Briefcase, MonitorDot, Scale } from "lucide-react";

const ordered: ServiceSlug[] = [
  "incident-response",
  "digital-forensics",
  "threat-intelligence",
  "grc",
  "assessments",
  "training",
  "risk-assessment",
  "brand-monitoring",
  "cloud-security",
  "ai-automation",
  "consulting",
  "managed-defense",
  "cyber-law"
];

const serviceIcons: Record<ServiceSlug, any> = {
  "incident-response": Shield,
  "digital-forensics": Search,
  "threat-intelligence": Activity,
  "grc": FileText,
  "assessments": Lock,
  "training": Users,
  "risk-assessment": AlertTriangle,
  "brand-monitoring": Eye,
  "cloud-security": Cloud,
  "ai-automation": Cpu,
  "consulting": Briefcase,
  "managed-defense": MonitorDot,
  "cyber-law": Scale
};

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ordered.map((slug) => {
        const service = serviceDirectory[slug];
        const Icon = serviceIcons[slug];
        return (
          <article key={slug} className="group card hover:border-brand-teal/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold group-hover:text-brand-teal transition-colors">{service.name}</h3>
              </div>
            </div>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">{service.summary}</p>
            {detailed && (
              <div className="mt-4 flex items-center justify-between">
                <Link href={`/services/${slug}`} className="inline-flex items-center gap-2 text-sm text-brand-teal hover:gap-3 transition-all">
                  Learn more <span>&rarr;</span>
                </Link>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

