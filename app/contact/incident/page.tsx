import { Metadata } from "next";
import { FormSection } from "@/components/forms/FormSection";

export const metadata: Metadata = {
  title: "Incident Report - NexNet CyberLabs",
  description: "Escalate a cyber incident to NexNet CyberLabs."
};

export default function IncidentPage() {
  return (
    <div className="container py-16 space-y-8">
      <header className="max-w-3xl">
        <p className="text-brand-teal text-sm uppercase tracking-[0.3em]">Incident Report</p>
        <h1 className="text-4xl font-semibold mt-3">Activate responders now</h1>
        <p className="text-gray-300 mt-4">Hotline: +263 8677 004 321 · ir@nexnet.example.</p>
      </header>
      <FormSection
        title="Incident intake"
        description="We'll respond on encrypted channels."
        fields={[
          { name: "organization", label: "Organization", type: "text", required: true },
          { name: "contact", label: "Primary contact", type: "text", required: true },
          { name: "phone", label: "Phone", type: "text" },
          { name: "email", label: "Email", type: "email", required: true },
          {
            name: "incidentType",
            label: "Type of incident",
            type: "select",
            required: true,
            options: ["Ransomware", "Supply Chain", "Cloud Compromise", "Fraud", "Other"]
          },
          { name: "impact", label: "Impact summary", type: "textarea", required: true }
        ]}
        submitLabel="Report incident"
      />
    </div>
  );
}

