import { Metadata } from "next";
import { FormSection } from "@/components/forms/FormSection";

export const metadata: Metadata = {
  title: "Request Consultation - NexNet CyberLabs",
  description: "Book a consultation with NexNet CyberLabs."
};

export default function ConsultationPage() {
  return (
    <div className="container py-16 space-y-8">
      <header className="max-w-3xl">
        <p className="text-brand-teal text-sm uppercase tracking-[0.3em]">Consultation</p>
        <h1 className="text-4xl font-semibold mt-3">Tailored security programs</h1>
        <p className="text-gray-300 mt-4">
          Share your objectives and constraints. We will craft an engagement model within 48 hours.
        </p>
      </header>
      <FormSection
        title="Consultation Request"
        description="Provide context so we can assign the right experts."
        fields={[
          { name: "name", label: "Full name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "organization", label: "Organization", type: "text", required: true },
          {
            name: "service",
            label: "Service of interest",
            type: "select",
            required: true,
            options: [
              "Incident Response",
              "Digital Forensics",
              "Threat Intelligence",
              "GRC",
              "Assessments",
              "Training"
            ]
          },
          { name: "message", label: "Context", type: "textarea", required: true }
        ]}
        submitLabel="Submit request"
      />
    </div>
  );
}

