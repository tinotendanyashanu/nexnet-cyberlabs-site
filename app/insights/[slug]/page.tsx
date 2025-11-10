import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site-data";
import { ArticleStructuredData } from "@/components/ArticleStructuredData";
import { canonical } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} - NexNet Insights`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [{ url: post.hero, width: 1200, height: 630, alt: post.title }]
    },
    authors: [{ name: post.author }]
  };
}

export default async function InsightArticle({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="container py-16 space-y-6 prose prose-invert max-w-3xl">
      <div>
        <p className="text-brand-teal text-sm uppercase tracking-[0.3em]">{post.tags.join(" • ")}</p>
        <h1 className="text-4xl font-semibold mt-3">{post.title}</h1>
        <p className="text-gray-400 text-sm">
          {post.author} · {new Date(post.date).toLocaleDateString()} · {post.readingTime}
        </p>
      </div>
      <Image src={post.hero} alt="" width={1024} height={512} className="rounded-2xl border border-white/10 w-full h-auto" />
      <p>
        {post.summary} This article covers tactical plays, decision frameworks, and checklists we deploy with clients across Africa and the EU.
      </p>
      <h2>Key takeaways</h2>
      <ul>
        <li>Align mission-critical assets to threat scenarios before tooling investments.</li>
        <li>Practice coordinated response with distributed teams and multilingual comms.</li>
        <li>Translate indicators into actions for both executives and SOC operators.</li>
      </ul>
      <p>
        Need a bespoke briefing? <a href="/contact" className="text-brand-teal">Contact us</a> for workshops or closed-door executive sessions.
      </p>
      <ArticleStructuredData
        title={post.title}
        description={post.summary}
        datePublished={post.date}
        author={post.author}
        image={post.hero}
        url={canonical(`/insights/${post.slug}`)}
        type="Article"
      />
    </article>
  );
}

