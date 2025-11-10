import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/lib/site-data";

type Params = Promise<{ sector: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { sector } = await params;
  const industry = industries.find((item) => item.key === sector);
  if (!industry) return {};
  return {
    title: `${industry.name} - NexNet CyberLabs`,
    description: industry.synopsis
  };
}

export default async function IndustryDetailPage({ params }: { params: Params }) {
  const { sector } = await params;
  const industry = industries.find((item) => item.key === sector);
  if (!industry) notFound();

  return (
    <div className="container py-16 space-y-8">
      <div className="relative rounded-3xl overflow-hidden border border-white/10">
        <Image src={industry.image} alt={industry.name} width={1600} height={900} className="w-full h-72 object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
        <div className="absolute bottom-6 left-6 max-w-3xl">
          <h1 className="text-4xl font-semibold">{industry.name}</h1>
          <p className="text-gray-200 mt-3">{industry.synopsis}</p>
        </div>
      </div>

      <section className="grid md:grid-cols-2 gap-6">
        <article className="card">
          <h2 className="text-2xl font-semibold">Controls and standards</h2>
          <ul className="mt-4 space-y-2 text-gray-300">
            {industry.controls.map((control) => (
              <li key={control}>{control}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2 className="text-2xl font-semibold">Critical needs</h2>
          <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
            {industry.needs.map((need) => (
              <li key={need}>{need}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold">Sample outcomes</h2>
        <ul className="mt-4 text-gray-300 space-y-2">
          <li>Playbooks mapped to regulators covering detection, response, and reporting windows.</li>
          <li>Sector-specific threat briefings for executives and SOC leads.</li>
          <li>Exercises simulating ransomware, insider threats, and third-party compromises.</li>
        </ul>
      </section>
    </div>
  );
}

