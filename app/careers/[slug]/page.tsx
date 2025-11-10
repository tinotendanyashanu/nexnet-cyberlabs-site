import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageHero } from "@/components/ImageHero";
import { getRoleBySlug, roles } from "@/lib/careers";
import { MapPin, Clock, CheckCircle2, ListChecks } from "lucide-react";
import { CareerApplicationForm } from "@/components/CareerApplicationForm";

export async function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) return { title: "Role not found - NexNet CyberLabs" };
  return {
    title: `${role.title} - Careers at NexNet CyberLabs`,
    description: role.summary
  };
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) return notFound();

  return (
    <>
      <ImageHero
        title={role.title}
        subtitle={role.summary}
        bgSrc="/images/hero/careers-role-bg.svg"
        ctaPrimary={{ href: "#apply", text: "Apply for this role" }}
        ctaSecondary={{ href: "/careers", text: "Back to roles" }}
      />

      <div className="container py-16 space-y-12">
        <section className="card">
          <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-4">
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-teal" /> {role.location}</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-brand-teal" /> {role.type}</span>
            {role.level && <span className="inline-flex items-center gap-2">Level: {role.level}</span>}
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2"><ListChecks className="w-5 h-5 text-brand-teal" /> Responsibilities</h2>
              <ul className="space-y-2 text-gray-300">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" /> <span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2"><ListChecks className="w-5 h-5 text-brand-teal" /> Requirements</h2>
              <ul className="space-y-2 text-gray-300">
                {role.requirements.map((item) => (
                  <li key={item} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" /> <span>{item}</span></li>
                ))}
              </ul>
              {role.niceToHave && role.niceToHave.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Nice to have</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {role.niceToHave.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="apply" className="card">
          <h2 className="text-xl font-semibold mb-3">Apply for {role.title}</h2>
          <CareerApplicationForm roleSlug={role.slug} />
          <p className="text-xs text-gray-400 mt-3">We respond to most applications within 7 business days.</p>
        </section>
      </div>
    </>
  );
}
