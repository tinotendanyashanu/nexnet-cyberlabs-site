import "@/styles/globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: {
    default: "NexNet CyberLabs - Cybersecurity you can trust",
    template: "%s - NexNet CyberLabs"
  },
  description: "Africa-born, enterprise-ready cybersecurity. Investigations, IR, training, and compliance.",
  metadataBase: new URL("https://www.nexnet.example"),
  openGraph: {
    title: "NexNet CyberLabs",
    description: "Enterprise-ready cybersecurity: investigations, IR, training, compliance.",
    url: "https://www.nexnet.example",
    siteName: "NexNet CyberLabs",
    images: [{ url: "/logo.svg", width: 1200, height: 630, alt: "NexNet CyberLabs" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexnet",
    title: "NexNet CyberLabs",
    description: "Enterprise-ready cybersecurity: investigations, IR, training, compliance.",
    images: ["/logo.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-brand-navy text-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-brand-teal focus:text-black">
          Skip to main content
        </a>
        <Header />
        <Breadcrumbs />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <StructuredData
          id="org-schema"
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NexNet CyberLabs",
            url: "https://www.nexnet.example",
            logo: "https://www.nexnet.example/logo.svg",
            sameAs: ["https://www.linkedin.com/company/nexnet-cyberlabs/"],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+263 8677 004 321",
                contactType: "customer support",
                areaServed: ["Africa", "European Union"],
                availableLanguage: ["English"]
              }
            ]
          }}
        />
      </body>
    </html>
  );
}

