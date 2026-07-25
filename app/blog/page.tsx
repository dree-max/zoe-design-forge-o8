'use client';

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import Link from "next/link";

// Placeholder blog posts - will be replaced with Sanity CMS data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture",
    excerpt: "Exploring how innovative design and technology can reduce environmental impact while creating beautiful, functional spaces.",
    date: "July 15, 2024",
    category: "Architecture",
    featured: true
  },
  {
    id: 2,
    title: "Real Estate Innovation in East Africa",
    excerpt: "How technology and design are transforming property development and making housing more accessible to communities.",
    date: "July 10, 2024",
    category: "Real Estate"
  },
  {
    id: 3,
    title: "Interior Design Trends for Modern Living",
    excerpt: "Contemporary design elements that create functional, beautiful spaces for today's lifestyle.",
    date: "July 5, 2024",
    category: "Interior Design"
  },
  {
    id: 4,
    title: "Engineering Excellence in Urban Development",
    excerpt: "Building resilient infrastructure for growing cities across East Africa.",
    date: "June 28, 2024",
    category: "Engineering"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-reveal-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Insights & Stories
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Deep dives into design philosophy, project showcases, and the latest trends in architecture and engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block group animate-reveal-up border-b border-border pb-12 last:border-b-0 hover:text-accent transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="px-3 py-1 bg-orange-600/20 text-orange-600 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Read Article →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
