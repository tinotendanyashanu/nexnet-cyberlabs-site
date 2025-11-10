"use client";

import { useState } from "react";

type Props = {
  roleSlug?: string;
};

export function CareerApplicationForm({ roleSlug }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roleSlug: roleSlug || payload.roleSlug || null,
          fullName: payload.fullName,
          email: payload.email,
          phone: payload.phone,
          linkedin: payload.linkedin,
          portfolio: payload.portfolio,
          resumeUrl: payload.resumeUrl,
          message: payload.message
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Submission failed");
      setStatus("success");
      setMessage("Application submitted successfully. We will get back to you soon.");
      e.currentTarget.reset();
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong";
      setStatus("error");
      setMessage(errorMessage);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {roleSlug ? (
        <input type="hidden" name="roleSlug" value={roleSlug} />
      ) : (
        <div>
          <label htmlFor="roleSlug" className="block text-sm font-medium mb-1">Role (optional)</label>
          <input
            id="roleSlug"
            name="roleSlug"
            placeholder="e.g., security-engineer"
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            required
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </div>
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium mb-1">LinkedIn</label>
          <input
            id="linkedin"
            name="linkedin"
            placeholder="https://www.linkedin.com/in/username"
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="portfolio" className="block text-sm font-medium mb-1">Portfolio</label>
          <input
            id="portfolio"
            name="portfolio"
            placeholder="https://github.com/username"
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </div>
        <div>
          <label htmlFor="resumeUrl" className="block text-sm font-medium mb-1">Resume URL</label>
          <input
            id="resumeUrl"
            name="resumeUrl"
            placeholder="https://drive.example/resume.pdf"
            className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal"
          placeholder="Briefly tell us why you are a great fit."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md px-6 py-3 bg-brand-teal font-semibold text-black hover:bg-teal-300 transition-all disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>

      {status !== "idle" && (
        <p className={status === "success" ? "text-green-400" : "text-red-400"}>{message}</p>
      )}
    </form>
  );
}
