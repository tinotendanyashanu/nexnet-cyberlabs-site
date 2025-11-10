"use client";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";

const tiers = [
  {
    name: "Incident Response Retainer",
    price: "Contact",
    features: [
      "Priority queue (< 2h mobilization SLA)",
      "Quarterly tabletop exercises",
      "Threat intel briefings",
      "Discounted hourly rate"
    ]
  },
  {
    name: "GRC Program Setup",
    price: "Project-based",
    features: [
      "Policy development (ISO 27001, GDPR)",
      "Risk register creation",
      "Audit support",
      "Training for compliance officers"
    ]
  },
  {
    name: "Security Assessment",
    price: "Quote",
    features: [
      "Penetration testing",
      "Application security review",
      "Red team / Purple team exercises",
      "Executive summary + technical report"
    ]
  }
];

export function PricingTiers() {
  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold">Service Packages</h2>
        <p className="text-gray-300 mt-2">
          Flexible engagement models tailored to your risk profile and budget.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card"
          >
            <h3 className="text-xl font-semibold">{tier.name}</h3>
            <p className="text-2xl font-bold text-brand-teal mt-2">{tier.price}</p>
            <ul className="mt-4 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-300">
                  <CheckIcon className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-6 block text-center rounded-md px-4 py-2 border border-white/20 hover:border-brand-teal hover:text-brand-teal transition-colors"
            >
              Get a Quote
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

