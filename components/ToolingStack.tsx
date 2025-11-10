"use client";
import { motion } from "framer-motion";

const tools = [
  { category: "DFIR", items: ["Velociraptor", "KAPE", "FTK Imager", "Autopsy", "Wireshark"] },
  { category: "Detection", items: ["Suricata", "Zeek", "Sigma", "Elastic SIEM", "SentinelOne"] },
  { category: "OSINT", items: ["Maltego", "SpiderFoot", "Recon-ng", "ShadowDragon"] },
  { category: "Assessment", items: ["Burp Suite Pro", "Metasploit", "Cobalt Strike", "Nmap", "Nuclei"] }
];

export function ToolingStack() {
  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold">Tooling & Methodology</h2>
        <p className="text-gray-300 mt-2">
          Enterprise-grade, open-source, and commercial tools-integrated into documented SOPs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6 mt-8">
        {tools.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <h3 className="text-lg font-semibold text-brand-teal">{group.category}</h3>
            <ul className="mt-3 space-y-1 text-sm text-gray-300">
              {group.items.map((tool) => (
                <li key={tool}>- {tool}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

