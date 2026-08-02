import { client } from '@/sanity/lib/client'
import { isSanityConfigured } from '@/sanity/lib/env'
import { postsIndexQuery } from '@/sanity/lib/queries'
import type { Post } from '@/sanity/types'
import { Header } from '@/components/header'
import { FooterSection } from '@/components/sections/footer-section'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60 // ISR: revalidate every 60 seconds

export default async function BlogPage() {
  const posts = isSanityConfigured
    ? await client.fetch<Post[]>(postsIndexQuery)
    : []

  return (
    <main className="min-h-screen bg-background">
      <Header />
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

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {posts.length === 0 && (
              <p className="border-y border-border py-12 text-lg text-muted-foreground">
                New insights are on the way. Check back soon.
              </p>
            )}
            {posts.map((post, index) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group block animate-reveal-up hover:text-accent transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'No date'}
                    </span>
                    {post.categories && (
                      <div className="flex gap-2">
                        {post.categories.map((category) => (
                          <span
                            key={category._id}
                            className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium"
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {post.coverImage?.asset && (
                    <div className="relative mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(post.coverImage).width(800).height(450).auto('format').url()}
                        alt={post.coverImage.alt || post.title}
                        width={800}
                        height={450}
                        className="rounded-lg"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium group-hover:translate-x-2 transition-transform">
                      Read Article →
                    </span>
                    {post.author?.name && (
                      <span className="text-sm text-muted-foreground">
                        by {post.author.name}
                      </span>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
