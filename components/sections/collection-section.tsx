"use client";

import Link from "next/link";
import { FadeImage } from "@/components/fade-image";
import { useEffect, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const slideshowPosts = posts.slice(0, 6);

  useEffect(() => {
    if (slideshowPosts.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideshowPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideshowPosts.length]);

  const activePost = slideshowPosts[activeIndex];

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
        <div className="flex px-4 md:px-8 lg:px-12 justify-center">
          <div className="w-full max-w-7xl bg-black/80 rounded-3xl px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Copy + CTA */}
            <div className="lg:w-[38%] lg:shrink-0 flex flex-col justify-between gap-6">
              <div>
                <p className="text-orange-600 font-semibold tracking-widest text-sm mb-3">
                  INSIGHTS & UPDATES
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  Explore our Latest Architectural Stories
                </h3>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  Dive deep into our design philosophy, project showcases, and the latest trends in architectural landscape.
                </p>
              </div>

              <div>
                <Link
                  href="/blog"
                  className="inline-block px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-colors"
                >
                  VISIT OUR BLOG →
                </Link>
              </div>
            </div>

            {/* Slideshow */}
            {slideshowPosts.length > 0 && activePost && (
              <div className="flex-1 flex flex-col justify-between gap-4">
                <div className="flex-1 flex flex-col justify-center">
                  {slideshowPosts.map((post, index) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.slug}`}
                      aria-hidden={index !== activeIndex}
                      tabIndex={index === activeIndex ? 0 : -1}
                      className={`group flex flex-col bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-600 transition-all duration-700 ${
                        index === activeIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-3 pointer-events-none absolute inset-0"
                      }`}
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
                      <h4 className="text-xl lg:text-2xl font-semibold text-white leading-snug mb-3 group-hover:text-orange-500 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm lg:text-base text-gray-400 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 text-sm font-medium text-orange-500 group-hover:translate-x-1 transition-transform inline-block">
                        Read Article →
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {slideshowPosts.map((post, index) => (
                    <button
                      key={post._id}
                      type="button"
                      aria-label={`Show post ${index + 1}: ${post.title}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-6 bg-orange-500"
                          : "w-1.5 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
