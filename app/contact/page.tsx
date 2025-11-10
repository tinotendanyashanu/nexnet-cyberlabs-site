"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, AlertCircle } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import Form from "@/components/ui/Form";

const offices = [
  {
    city: "Harare",
    country: "Zimbabwe",
    address: "123 Samora Machel Avenue\nCentral Business District\nHarare, Zimbabwe",
    phone: "+263 86 7700 4321",
    email: "harare@nexnet-cyberlabs.com",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM CAT\n24/7 Incident Response",
    image: "https://images.unsplash.com/photo-1587740896339-96a76170508d?w=800&h=600&fit=crop"
  },
  {
    city: "Warsaw",
    country: "Poland",
    address: "ul. Marszałkowska 142\n00-061 Warszawa\nPoland",
    phone: "+48 22 123 4567",
    email: "warsaw@nexnet-cyberlabs.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM CET\n24/7 Incident Response",
    image: "https://images.unsplash.com/photo-1581952976147-5a2d1e290a2a?w=800&h=600&fit=crop"
  }
];

const generalFields = [
  { name: "name", label: "Full Name", type: "text" as const, required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "company", label: "Company", type: "text" as const, required: false },
  { name: "phone", label: "Phone Number", type: "tel" as const, required: false },
  {
    name: "category",
    label: "Inquiry Type",
    type: "select" as const,
    required: true,
    options: ["Consultation", "Partnership", "Media", "Academy", "Other"]
  },
  { name: "message", label: "Message", type: "textarea" as const, required: true }
];

const incidentFields = [
  { name: "organization", label: "Organization Name", type: "text" as const, required: true },
  { name: "contact", label: "Primary Contact", type: "text" as const, required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone Number", type: "tel" as const, required: true },
  {
    name: "severity",
    label: "Severity Level",
    type: "select" as const,
    required: true,
    options: ["Critical - Ongoing Attack", "High - Systems Compromised", "Medium - Suspicious Activity", "Low - Security Question"]
  },
  {
    name: "incidentType",
    label: "Incident Type",
    type: "select" as const,
    required: true,
    options: ["Ransomware", "Business Email Compromise", "Data Breach", "Insider Threat", "DDoS Attack", "Other"]
  },
  { name: "summary", label: "Incident Summary", type: "textarea" as const, required: true }
];

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<"general" | "incident">("general");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/80 to-brand-navy" />
        </div>
        <div className="relative z-10 section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We respond within 2 hours. For emergencies, call our 24/7 hotline immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2638677004321" className="btn-primary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              24/7 Hotline
            </a>
            <a href="#contact-form" className="btn-secondary inline-flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-brand-navy/50 backdrop-blur-sm border-y border-brand-teal/20 py-6">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-5 h-5 text-brand-teal flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-400">24/7 Hotline</div>
                <a href="tel:+2638677004321" className="font-semibold hover:text-brand-teal transition-colors">
                  +263 86 7700 4321
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-brand-teal flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-400">Emergency IR</div>
                <a href="mailto:ir@nexnet-cyberlabs.com" className="font-semibold hover:text-brand-teal transition-colors">
                  ir@nexnet-cyberlabs.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="w-5 h-5 text-brand-teal flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-400">Response Time</div>
                <div className="font-semibold">Within 2 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-container py-20" id="contact-form">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Can We Help?</h2>
            <p className="text-gray-300 text-lg">Choose the form that best matches your needs</p>
          </div>

          {/* Form Tabs */}
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveForm("general")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeForm === "general"
                  ? "bg-brand-teal text-white"
                  : "glass-card text-gray-300 hover:text-white"
              }`}
            >
              <MessageSquare className="w-5 h-5 inline-block mr-2" />
              General Inquiry
            </button>
            <button
              onClick={() => setActiveForm("incident")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeForm === "incident"
                  ? "bg-red-600 text-white"
                  : "glass-card text-gray-300 hover:text-white"
              }`}
            >
              <AlertCircle className="w-5 h-5 inline-block mr-2" />
              Report Incident
            </button>
          </div>

          {/* Forms */}
          <GlowCard className="p-8">
            {activeForm === "general" ? (
              <div>
                <h3 className="text-2xl font-bold mb-2">General Inquiry</h3>
                <p className="text-gray-400 mb-6">For consultations, partnerships, or general questions</p>
                <Form
                  fields={generalFields}
                  submitLabel="Send Message"
                  onSubmit={(data) => {
                    console.log("General inquiry:", data);
                    alert("Thank you! We will respond within 2 hours.");
                  }}
                />
              </div>
            ) : (
              <div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 flex gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-red-400 mb-1">Emergency Incident Response</div>
                    <p className="text-sm text-gray-300">
                      This form triggers our 24/7 incident response desk. For life-threatening emergencies, call local authorities first.
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Report Security Incident</h3>
                <p className="text-gray-400 mb-6">Our team will contact you immediately</p>
                <Form
                  fields={incidentFields}
                  submitLabel="Escalate Incident"
                  onSubmit={(data) => {
                    console.log("Incident report:", data);
                    alert("INCIDENT ESCALATED. Our team will contact you within 30 minutes.");
                  }}
                />
              </div>
            )}
          </GlowCard>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-container py-20 bg-gradient-to-b from-transparent to-brand-navy/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Offices</h2>
          <p className="text-gray-300 text-lg">Serving Africa and Europe from two strategic locations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offices.map((office, idx) => (
            <GlowCard key={idx} className="overflow-hidden" hover>
              <div className="relative h-48">
                <Image
                  src={office.image}
                  alt={`${office.city} office`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold">{office.city}</h3>
                  <p className="text-gray-300">{office.country}</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand-teal flex-shrink-0 mt-1" />
                  <div className="whitespace-pre-line text-gray-300">{office.address}</div>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-gray-300 hover:text-brand-teal transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-gray-300 hover:text-brand-teal transition-colors">
                    {office.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-brand-teal flex-shrink-0 mt-1" />
                  <div className="whitespace-pre-line text-gray-300">{office.hours}</div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Security Notice */}
      <section className="section-container py-12">
        <GlowCard className="p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-3">Secure Communications</h3>
          <p className="text-gray-300 mb-4">
            Need to share sensitive information? We support PGP-encrypted email, Signal, and secure file transfers.
          </p>
          <div className="flex gap-4 justify-center flex-wrap text-sm">
            <span className="px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal">
              PGP Available
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal">
              Signal Supported
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal">
              Secure File Upload
            </span>
          </div>
        </GlowCard>
      </section>
    </>
  );
}
