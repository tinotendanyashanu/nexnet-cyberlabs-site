import { Metadata } from "next";
import Link from "next/link";
import { ImageHero } from "@/components/ImageHero";
import { 
  Calendar,
  Tag,
  ArrowRight,
  TrendingUp,
  Shield,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity News & Blog | NexNet CyberLabs",
  description: "Latest cybersecurity news, threat intelligence updates, industry analysis, and security insights from NexNet CyberLabs experts in Africa.",
};

// Sample news articles with realistic content
const newsArticles = [
  {
    id: "1",
    title: "LockBit 3.0 Ransomware Targets African Financial Institutions",
    excerpt: "NexNet CyberLabs Threat Intelligence team identifies new LockBit 3.0 campaign targeting banks and fintech companies across Southern Africa with sophisticated social engineering tactics.",
    category: "Threat Intelligence",
    date: "2025-11-05",
    author: "Dr. Sarah Moyo",
    readTime: "8 min read",
    featured: true,
    image: "/images/globe-network.svg"
  },
  {
    id: "2",
    title: "Zimbabwe Cyber Incident Response Bill: What Organizations Need to Know",
    excerpt: "Analysis of the proposed Cyber and Data Protection (Incident Response) Bill 2025 and its implications for mandatory breach reporting requirements for Zimbabwean organizations.",
    category: "Compliance & Regulation",
    date: "2025-10-28",
    author: "Tafadzwa Ncube",
    readTime: "12 min read",
    featured: true,
    image: "/images/globe-network.svg"
  },
  {
    id: "3",
    title: "SADC Region Faces 340% Increase in DDoS Attacks in Q3 2025",
    excerpt: "Our Q3 2025 Threat Landscape Report reveals alarming trends in distributed denial-of-service attacks targeting telecommunications and ISP infrastructure across Southern Africa.",
    category: "Industry Analysis",
    date: "2025-10-20",
    author: "Michael Banda",
    readTime: "10 min read",
    featured: true,
    image: "/images/globe-network.svg"
  },
  {
    id: "4",
    title: "Securing Mobile Money Platforms: Lessons from Recent Breaches",
    excerpt: "Analysis of recent mobile money security incidents in Kenya and Ghana, with recommendations for securing USSD, mobile app, and API channels against emerging threats.",
    category: "Mobile Security",
    date: "2025-10-12",
    author: "Grace Ochieng",
    readTime: "15 min read",
    featured: false,
    image: "/images/globe-network.svg"
  },
  {
    id: "5",
    title: "Cloud Security Best Practices for African SMEs Migrating to AWS",
    excerpt: "Practical guidance for small and medium enterprises in Africa transitioning to cloud infrastructure, covering IAM, data encryption, compliance, and cost optimization.",
    category: "Cloud Security",
    date: "2025-10-05",
    author: "Tsitsi Makoni",
    readTime: "11 min read",
    featured: false,
    image: "/images/globe-network.svg"
  },
  {
    id: "6",
    title: "Inside Our SOC: How We Detected and Stopped a Nation-State APT",
    excerpt: "Behind-the-scenes look at a recent incident where our Security Operations Center identified and neutralized an advanced persistent threat targeting critical infrastructure.",
    category: "Incident Response",
    date: "2025-09-28",
    author: "Dr. Kudakwashe Chigwedere",
    readTime: "18 min read",
    featured: false,
    image: "/images/globe-network.svg"
  },
  {
    id: "7",
    title: "POPIA Compliance Update: New Guidance from Information Regulator SA",
    excerpt: "Summary of the Information Regulator's October 2025 guidance notes on cross-border data transfers and processing personal information of South African citizens.",
    category: "Compliance & Regulation",
    date: "2025-09-20",
    author: "Nomsa Dlamini",
    readTime: "9 min read",
    featured: false,
    image: "/images/globe-network.svg"
  },
  {
    id: "8",
    title: "Building a Cybersecurity Culture: Lessons from 500+ Awareness Campaigns",
    excerpt: "Key insights and metrics from NexNet's security awareness training programs across Africa, including common pitfalls and strategies that drive lasting behavioral change.",
    category: "Security Awareness",
    date: "2025-09-12",
    author: "Chipo Mutasa",
    readTime: "14 min read",
    featured: false,
    image: "/images/globe-network.svg"
  },
  {
    id: "9",
    title: "Emerging Threat: AI-Powered Phishing Attacks Bypass Traditional Filters",
    excerpt: "Analysis of new ChatGPT-generated phishing campaigns targeting African executives with highly personalized, context-aware social engineering that evades email security gateways.",
    category: "Threat Intelligence",
    date: "2025-08-30",
    author: "Dr. Sarah Moyo",
    readTime: "13 min read",
    featured: false,
    image: "/images/globe-network.svg"
  },
  {
    id: "10",
    title: "Critical Infrastructure Protection: IEC 62443 Implementation Roadmap",
    excerpt: "Step-by-step guide for mining, energy, and utility companies implementing IEC 62443 industrial cybersecurity standards for OT/ICS environments.",
    category: "OT Security",
    date: "2025-08-22",
    author: "Tafadzwa Ncube",
    readTime: "16 min read",
    featured: false,
    image: "/images/globe-network.svg"
  },
  {
    id: "11",
    title: "Zero Trust Architecture: Real-World Implementation in African Enterprises",
    excerpt: "Case studies and practical lessons from deploying Zero Trust security models in three Southern African organizations, including ROI analysis and challenges encountered.",
    category: "Security Architecture",
    date: "2025-08-15",
    author: "Michael Banda",
    readTime: "17 min read",
    featured: false,
    image: "/images/globe-network.svg"
  },
  {
    id: "12",
    title: "NexNet CyberLabs Achieves ISO 27001:2022 Certification",
    excerpt: "We're proud to announce our successful ISO 27001:2022 certification audit, demonstrating our commitment to information security management excellence.",
    category: "Company News",
    date: "2025-08-08",
    author: "Tinashe Mpofu, CEO",
    readTime: "5 min read",
    featured: false,
    image: "/images/globe-network.svg"
  }
];

const categories = [
  "All",
  "Threat Intelligence",
  "Compliance & Regulation",
  "Industry Analysis",
  "Incident Response",
  "Cloud Security",
  "Mobile Security",
  "Security Awareness",
  "OT Security",
  "Company News"
];

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <ImageHero
        bgSrc="/images/globe-network.svg"
        title="Cybersecurity News & Insights"
        subtitle="Latest threat intelligence, industry analysis, compliance updates, and security best practices from our team of experts across Africa."
        ctaPrimary={{ text: "Subscribe to Newsletter", href: "/contact" }}
        ctaSecondary={{ text: "View Reports", href: "/insights/reports" }}
      />

      {/* Featured Articles */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Featured Articles</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => article.featured).map((article) => (
                <div
                  key={article.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border-2 border-blue-200 dark:border-blue-800 overflow-hidden hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900" />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-sm">
                        <div className="font-semibold">{article.author}</div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs">
                          {article.readTime}
                        </div>
                      </div>
                      <Link
                        href={`/insights/${article.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    category === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Recent Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800" />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {article.readTime}
                      </div>
                      <Link
                        href={`/insights/${article.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
                      >
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg">
                1
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                3
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Globe className="w-16 h-16 text-brand-teal mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to our weekly newsletter for the latest threat intelligence, security insights, 
            and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-brand-teal text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Join 2,800+ cybersecurity professionals receiving our insights. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
