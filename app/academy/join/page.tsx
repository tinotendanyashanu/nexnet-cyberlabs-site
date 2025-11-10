"use client";

import { useState } from "react";
import { ImageHero } from "@/components/ImageHero";
import Link from "next/link";
import { 
  GraduationCap, 
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  FileText,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function AcademyJoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    currentRole: "",
    experience: "",
    program: "",
    format: "",
    startDate: "",
    motivation: "",
    hearAbout: "",
    financialAid: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `Academy Application: ${formData.program}`,
          type: "academy-application"
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          city: "",
          currentRole: "",
          experience: "",
          program: "",
          format: "",
          startDate: "",
          motivation: "",
          hearAbout: "",
          financialAid: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Application submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Apply to NexNet CyberLabs Academy"
        subtitle="Start your journey to becoming a cybersecurity professional. Complete the application form below and our admissions team will review your submission within 3-5 business days."
         ctaPrimary={{ text: "View Programs", href: "/academy/programs" }}
      />

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Application Form</h2>
            </div>

            {submitStatus === "success" && (
              <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-green-800 dark:text-green-200 mb-1">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Thank you for applying to NexNet CyberLabs Academy. Our admissions team will review your 
                    application and contact you within 3-5 business days. Check your email for confirmation.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-800 dark:text-red-200 mb-1">
                    Submission Failed
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    There was an error submitting your application. Please try again or contact us at 
                    academy@nexnetcyberlabs.com for assistance.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+263 XXX XXX XXX"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select country</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Background */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Professional Background
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="currentRole" className="block text-sm font-medium mb-2">
                      Current Role/Position
                    </label>
                    <input
                      type="text"
                      id="currentRole"
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleChange}
                      placeholder="e.g., IT Support Technician, Student, Career Changer"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium mb-2">
                      Relevant Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select experience level</option>
                      <option value="none">No IT/Security experience</option>
                      <option value="basic">Basic IT knowledge</option>
                      <option value="1-2years">1-2 years in IT/Security</option>
                      <option value="3-5years">3-5 years in IT/Security</option>
                      <option value="5+years">5+ years in IT/Security</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Program Details
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium mb-2">
                      Program of Interest *
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a program</option>
                      <option value="Professional Cybersecurity Bootcamp">Professional Cybersecurity Bootcamp (12 weeks)</option>
                      <option value="Advanced Penetration Testing">Advanced Penetration Testing (8 weeks)</option>
                      <option value="SOC Analyst Training">SOC Analyst Training Program (6 weeks)</option>
                      <option value="Web Application Security">Web Application Security (2 weeks)</option>
                      <option value="Cloud Security">Cloud Security (AWS/Azure) (3 weeks)</option>
                      <option value="Digital Forensics">Digital Forensics & IR (2 weeks)</option>
                      <option value="Mobile App Security">Mobile App Security (2 weeks)</option>
                      <option value="Threat Intelligence">Threat Intelligence Analysis (1 week)</option>
                      <option value="GRC">GRC & Compliance (2 weeks)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="format" className="block text-sm font-medium mb-2">
                      Preferred Format *
                    </label>
                    <select
                      id="format"
                      name="format"
                      value={formData.format}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select format</option>
                      <option value="In-Person (Harare)">In-Person (Harare, Zimbabwe)</option>
                      <option value="In-Person (Cape Town)">In-Person (Cape Town, South Africa)</option>
                      <option value="Virtual">Virtual (Online)</option>
                      <option value="Hybrid">Hybrid (Mix of in-person & virtual)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                      Preferred Start Date *
                    </label>
                    <select
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select start date</option>
                      <option value="January 2026">January 2026</option>
                      <option value="February 2026">February 2026</option>
                      <option value="March 2026">March 2026</option>
                      <option value="April 2026">April 2026</option>
                      <option value="May 2026">May 2026</option>
                      <option value="June 2026">June 2026</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium mb-2">
                      Why do you want to join NexNet CyberLabs Academy? *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your career goals, why you're interested in cybersecurity, and what you hope to achieve through our program..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Twitter/X">Twitter/X</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Referral">Referral from friend/colleague</option>
                      <option value="University">University/College</option>
                      <option value="Conference/Event">Conference or Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="financialAid"
                      name="financialAid"
                      checked={formData.financialAid}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <label htmlFor="financialAid" className="text-sm">
                      I am interested in financial aid or payment plans. (Optional - our team will contact you 
                      with more information)
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </button>
              </div>

              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                By submitting this application, you agree to our{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-blue-600 hover:text-blue-700 underline">
                  Terms of Service
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Happens Next?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Application Review</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our admissions team reviews your application within 3-5 business days.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Interview</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Qualified candidates are invited for a 30-minute virtual interview to discuss goals and fit.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Enrollment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Accepted students receive an offer letter and can enroll by paying the registration fee.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold mb-2">Questions?</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Contact our admissions team at{" "}
                <a href="mailto:academy@nexnetcyberlabs.com" className="text-blue-600 hover:text-blue-700 underline">
                  academy@nexnetcyberlabs.com
                </a>{" "}
                or call{" "}
                <a href="tel:+263242123456" className="text-blue-600 hover:text-blue-700 underline">
                  +263 24 2123 456
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

