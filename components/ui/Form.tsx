"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox" | "radio";
  placeholder?: string;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
  validation?: (value: string) => string | null;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => Promise<void>;
  submitLabel?: string;
  successMessage?: string;
  className?: string;
}

export default function Form({
  fields,
  onSubmit,
  submitLabel = "Submit",
  successMessage = "Form submitted successfully!",
  className,
}: FormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? "true" : "false") : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      const value = formData[field.name] || "";

      if (field.required && !value.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      } else if (field.validation) {
        const error = field.validation(value);
        if (error) newErrors[field.name] = error;
      } else if (field.type === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[field.name] = "Please enter a valid email address";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await onSubmit(formData);
      setSubmitStatus("success");
      setFormData({});
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    const baseInputClasses =
      "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all";

    switch (field.type) {
      case "textarea":
        return (
          <textarea
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required={field.required}
            rows={4}
            className={clsx(baseInputClasses, "resize-none")}
          />
        );

      case "select":
        return (
          <select
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required={field.required}
            className={baseInputClasses}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map((option, idx) => {
              // Handle both string arrays and object arrays
              const optionValue = typeof option === "string" ? option : option.value;
              const optionLabel = typeof option === "string" ? option : option.label;
              return (
                <option key={optionValue || idx} value={optionValue}>
                  {optionLabel}
                </option>
              );
            })}
          </select>
        );

      case "checkbox":
        return (
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name={field.name}
              checked={formData[field.name] === "true"}
              onChange={handleChange}
              required={field.required}
              className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-brand-teal focus:ring-2 focus:ring-brand-teal focus:ring-offset-0"
            />
            <span className="text-gray-300 group-hover:text-white transition-colors">
              {field.label}
            </span>
          </label>
        );

      case "radio":
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={handleChange}
                  required={field.required}
                  className="w-5 h-5 border-white/20 bg-white/5 text-brand-teal focus:ring-2 focus:ring-brand-teal focus:ring-offset-0"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        );

      default:
        return (
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required={field.required}
            className={baseInputClasses}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={clsx("space-y-6", className)}>
      {fields.map((field) => (
        <div key={field.name}>
          {field.type !== "checkbox" && (
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-2">
              {field.label}
              {field.required && <span className="text-brand-teal ml-1">*</span>}
            </label>
          )}
          
          {renderField(field)}

          {errors[field.name] && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-400 flex items-center gap-1"
            >
              <ExclamationCircleIcon className="w-4 h-4" />
              {errors[field.name]}
            </motion.p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className={clsx(
          "btn-primary w-full",
          isSubmitting && "opacity-50 cursor-not-allowed"
        )}
      >
        {isSubmitting ? "Submitting..." : submitLabel}
      </button>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3"
        >
          <CheckCircleIcon className="w-5 h-5 text-green-400" />
          <p className="text-green-400">{successMessage}</p>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
        >
          <ExclamationCircleIcon className="w-5 h-5 text-red-400" />
          <p className="text-red-400">
            Something went wrong. Please try again.
          </p>
        </motion.div>
      )}
    </form>
  );
}
