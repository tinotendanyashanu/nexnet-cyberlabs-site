"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const partners = [
  { name: "FIRST", subtitle: "Forum of Incident Response Teams", logo: "/images/partners/first.svg" },
  { name: "AFRISEC", subtitle: "African Security Collective", logo: "/images/partners/afrisec.svg" },
  { name: "GDPR Institute", subtitle: "EU Compliance Partner", logo: "/images/partners/gdpr.svg" },
  { name: "Cyber Security Centre", subtitle: "Zimbabwe National CERT", logo: "/images/partners/csc.svg" }
];

export function PartnersStrip() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="py-12 border-t border-white/10">
      <div className="container">
        <motion.div initial={reduceMotion ? undefined : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={reduceMotion ? undefined : { duration: 0.6 }}>
          <p className="text-sm text-gray-400 text-center mb-6 uppercase tracking-wide">Memberships & Affiliations</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col items-center text-center gap-3">
                <Image src={partner.logo} alt={`Logo: ${partner.name}`} width={160} height={60} className="h-14 w-auto" sizes="160px" />
                <div>
                  <p className="text-sm font-semibold text-white">{partner.name}</p>
                  <p className="text-xs text-gray-400">{partner.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

