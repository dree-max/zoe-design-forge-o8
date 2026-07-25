'use client';

import Link from "next/link";

export function BlogPreviewSection() {
  const featuredPost = {
    id: 1,
    title: "The Future of Sustainable Architecture",
    excerpt: "Exploring how innovative design and technology can reduce environmental impact while creating beautiful, functional spaces.",
    date: "July 15, 2024",
    category: "Architecture",
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="animate-reveal-up">
          <p className="text-orange-600 font-semibold tracking-widest mb-4">INSIGHTS & ARTICLES</p>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
                Explore our Latest Architectural Stories
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Deep dives into design philosophy, project showcases, and the latest trends in architecture and engineering.
              </p>
            </div>

            <Link
              href="/blog"
              className="px-8 py-4 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700 transition-colors whitespace-nowrap self-start md:self-auto"
            >
              Visit Our Blog →
            </Link>
          </div>

          {/* Featured Post */}
          <Link
            href={`/blog/${featuredPost.id}`}
            className="block group border border-gray-700 rounded-lg p-8 hover:border-orange-600 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-gray-400">{featuredPost.date}</span>
              <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-xs font-medium">
                {featuredPost.category}
              </span>
              <span className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4 group-hover:text-orange-600 transition-colors">
              {featuredPost.title}
            </h3>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              {featuredPost.excerpt}
            </p>
            
            <div className="text-sm font-medium group-hover:translate-x-2 transition-transform inline-block">
              Read Article →
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
