import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Disclosure Policy - NexNet CyberLabs",
  description: "Legal safe harbor statement for security researchers."
};

export default function DisclosurePolicy() {
  return (
    <div className="container py-16 prose prose-invert">
      <h1>Responsible Disclosure Policy</h1>
      <p>We appreciate security researchers who help keep our ecosystem safe.</p>
      <h2>Safe harbor</h2>
      <p>
        If you follow this policy when reporting a vulnerability, we will not initiate legal action or law enforcement investigation against you.
      </p>
      <h2>Scope</h2>
      <p>Report issues to security@nexnet.example. Out-of-scope: social engineering, DDoS, physical attacks.</p>
      <h2>Process</h2>
      <ol>
        <li>Encrypt details with our PGP key (fingerprint C6A1 1F85 2F42 1ACC E912 5D58 F244 8F3B D79B 9C1A).</li>
        <li>Provide steps to reproduce, impact, and suggested remediation.</li>
        <li>We acknowledge within 48 hours and aim to remediate within 30 days.</li>
      </ol>
      <h2>Recognition</h2>
      <p>We offer optional public thanks, swag, or charitable donations.</p>
    </div>
  );
}

