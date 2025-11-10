import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceDirectory, ServiceSlug } from "@/lib/site-data";
import { CTA } from "@/components/CTA";

type Params = Promise<{ slug: ServiceSlug }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDirectory[slug];
  if (!service) return {};
  return {
    title: `${service.name} - NexNet CyberLabs`,
    description: service.summary,
    openGraph: {
      title: service.name,
      description: service.summary,
      images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.name }]
    }
  };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = serviceDirectory[slug];
  if (!service) notFound();

  return (
    <div className="container py-16 space-y-12">
      <div className="relative rounded-3xl overflow-hidden border border-white/10">
        <Image
          src={service.heroImage}
          alt=""
          width={1600}
          height={800}
          className="w-full h-80 md:h-[420px] object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-8 left-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-teal">Expert service</p>
          <h1 className="text-4xl font-semibold">{service.name}</h1>
          <p className="text-gray-200 mt-3 text-lg">{service.summary}</p>
        </div>
      </div>

      <section className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold">Methodology</h2>
          <ol className="space-y-4">
            {service.methodology.map((step, index) => (
              <li key={step.title} className="card flex gap-4">
                <span className="text-brand-teal text-xl font-semibold">{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-300 mt-2">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <aside className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold">Tooling Stack</h3>
            <ul className="mt-4 space-y-3 text-gray-300">
              {service.tooling.map((tool) => (
                <li key={tool.name} className="flex justify-between text-sm">
                  <span>{tool.name}</span>
                  <span className="text-gray-400">{tool.category}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Success Metrics</h3>
            <ul className="mt-4 space-y-3">
              {service.metrics.map((metric) => (
                <li key={metric.label} className="flex justify-between text-gray-300">
                  <span>{metric.label}</span>
                  <span className="text-white font-semibold">{metric.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold">Outcomes we guarantee</h2>
        <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
          {service.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>

      <CTA />
    </div>
  );
}

