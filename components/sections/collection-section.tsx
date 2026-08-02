"use client";

import Link from "next/link";
import { FadeImage } from "@/components/fade-image";
import type { Post } from "@/sanity/types";

const accessories = [
  {
    id: 1,
    name: "Compact Model",
    description: "120m² living space with optimal energy efficiency",
    image: "/images/hero-side-1.png",
  },
  {
    id: 2,
    name: "Standard Model",
    description: "180m² perfect balance of space and sustainability",
    image: "/images/hero-side-2.png",
  },
  {
    id: 3,
    name: "Premium Model",
    description: "250m² expansive design with maximum comfort",
    image: "/images/hero-side-4.png",
  },
];

interface CollectionSectionProps {
  posts?: Post[];
}

function formatDate(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function CollectionSection({ posts = [] }: CollectionSectionProps) {
  const latestPosts = posts.slice(0, 2);

  return (
    <section id="accessories" className="bg-background">
      {/* Accessories Grid/Carousel */}
      <div className="pb-12">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <h3 className="text-lg font-medium leading-snug text-foreground">
                  {accessory.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {accessory.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Preview */}
        <div className="flex md:px-12 lg:px-20 justify-center">
          <div className="w-full max-w-4xl bg-black/80 rounded-3xl p-8 lg:p-12 flex flex-col justify-between min-h-[280px]">
            {/* Label */}
            <div>
              <p className="text-orange-600 font-semibold tracking-widest text-sm mb-4">
                INSIGHTS & UPDATES
              </p>
              
              {/* Heading */}
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Explore our Latest Architectural Stories
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8">
                Dive deep into our design philosophy, project showcases, and the latest trends in architectural landscape.
              </p>
            </div>

            {/* Latest Posts */}
            {latestPosts.length > 0 && (
              <div className="grid gap-4 md:grid-cols-2 mb-8">
                {latestPosts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-600 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-gray-400">
                        {formatDate(post.publishedAt)}
                      </span>
                      {post.categories?.[0] && (
                        <span className="px-2 py-0.5 bg-orange-600/20 text-orange-400 rounded-full text-xs font-medium">
                          {post.categories[0].title}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-white leading-snug mb-2 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-sm font-medium text-orange-500 group-hover:translate-x-1 transition-transform inline-block">
                      Read Article →
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Button */}
            <div>
              <Link
                href="/blog"
                className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-colors"
              >
                VISIT OUR BLOG →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
