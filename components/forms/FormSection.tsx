"use client";

import { FormEvent, useState } from "react";

type Field =
  | { name: string; label: string; type: "text" | "email" | "textarea"; required?: boolean; placeholder?: string }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean }
  | { name: string; label: string; type: "file"; required?: boolean };

interface FormSectionProps {
  title: string;
  description: string;
  fields: Field[];
  submitLabel?: string;
}

export function FormSection({ title, description, fields, submitLabel = "Submit" }: FormSectionProps) {
  const [state, setState] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((field) => [field.name, ""]))
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function validate() {
    const nextErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if ("required" in field && field.required && !state[field.name]?.trim()) {
        nextErrors[field.name] = "Required";
      }
      if (field.type === "email" && state[field.name] && !state[field.name].match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        nextErrors[field.name] = "Enter a valid email";
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("success");
  }

  function onChange(name: string, value: string) {
    setState((prev) => ({ ...prev, [name]: value }));
    setStatus("idle");
  }

  return (
    <section className="card">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        {fields.map((field) => (
          <div key={field.name}>
            <label className="text-sm font-medium text-gray-200" htmlFor={field.name}>
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white focus:border-brand-teal focus:outline-none"
                rows={4}
                placeholder={field.placeholder}
                value={state[field.name] || ""}
                onChange={(e) => onChange(field.name, e.target.value)}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white focus:border-brand-teal focus:outline-none"
                value={state[field.name] || ""}
                onChange={(e) => onChange(field.name, e.target.value)}
              >
                <option value="">Select an option</option>
                {field.options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "file" ? (
              <input
                id={field.name}
                type="file"
                className="mt-2 w-full rounded-xl border border-dashed border-white/20 bg-white/5 p-3 text-white focus:border-brand-teal focus:outline-none"
                onChange={(e) => onChange(field.name, e.target.files?.[0]?.name ?? "")}
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white focus:border-brand-teal focus:outline-none"
                placeholder={field.placeholder}
                value={state[field.name] || ""}
                onChange={(e) => onChange(field.name, e.target.value)}
              />
            )}
            {errors[field.name] && <p className="text-sm text-red-400 mt-1">{errors[field.name]}</p>}
          </div>
        ))}

        <button
          type="submit"
          className="w-full rounded-xl bg-brand-teal text-black font-semibold py-3 hover:bg-brand-teal/80 transition-colors"
        >
          {submitLabel}
        </button>

        {status === "success" && (
          <p className="text-sm text-brand-teal font-medium">Received. Our team will respond shortly.</p>
        )}
      </form>
    </section>
  );
}

