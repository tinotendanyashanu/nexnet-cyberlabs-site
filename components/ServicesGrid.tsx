import Link from "next/link";
import { serviceDirectory } from "@/lib/site-data";

const ordered = [
  "incident-response",
  "digital-forensics",
  "threat-intelligence",
  "assessments",
  "grc",
  "training"
] as const;

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {ordered.map((slug) => {
        const service = serviceDirectory[slug];
        return (
          <article key={slug} className="card">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-300 mt-2">{service.summary}</p>
            {detailed && (
              <Link href={`/services/${slug}`} className="inline-block mt-4 text-brand-teal">
                Learn more &rarr;
              </Link>
            )}
          </article>
        );
      })}
    </div>
  );
}

