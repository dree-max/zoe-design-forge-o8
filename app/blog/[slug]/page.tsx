import { client } from '@/sanity/lib/client'
import { isSanityConfigured } from '@/sanity/lib/env'
import { postBySlugQuery, postsIndexQuery } from '@/sanity/lib/queries'
import type {PortableImage, Post} from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import {PortableText, type PortableTextComponents, type PortableTextTypeComponentProps} from 'next-sanity'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Tell Next.js which slugs to pre-render at build time
export async function generateStaticParams() {
  if (!isSanityConfigured || !client) return []

  const posts = await client.fetch<Post[]>(postsIndexQuery)
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: PageProps) {
  if (!isSanityConfigured || !client) notFound()

  const { slug } = await params
  const post = await client.fetch<Post>(postBySlugQuery, { slug })

  if (!post) notFound()

  const portableTextComponents: PortableTextComponents = {
    block: {
      h1: ({children}) => (
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-10 mb-4">{children}</h1>
      ),
      h2: ({children}) => (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-4">{children}</h2>
      ),
      h3: ({children}) => (
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mt-8 mb-3">{children}</h3>
      ),
      h4: ({children}) => (
        <h4 className="text-lg md:text-xl font-bold tracking-tight mt-6 mb-2">{children}</h4>
      ),
      normal: ({children}) => (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{children}</p>
      ),
    },
    marks: {
      strong: ({children}) => <strong className="font-semibold text-foreground">{children}</strong>,
      em: ({children}) => <em className="italic">{children}</em>,
      link: ({value, children}) => (
        <a
          href={value?.href}
          target={value?.href?.startsWith('http') ? '_blank' : undefined}
          rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-accent underline underline-offset-4 hover:opacity-70"
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({children}) => <ul className="list-disc pl-6 space-y-2 mb-6 text-base md:text-lg text-muted-foreground leading-relaxed">{children}</ul>,
      number: ({children}) => <ol className="list-decimal pl-6 space-y-2 mb-6 text-base md:text-lg text-muted-foreground leading-relaxed">{children}</ol>,
    },
    listItem: {
      bullet: ({children}) => <li className="marker:text-accent">{children}</li>,
      number: ({children}) => <li className="marker:text-accent">{children}</li>,
    },
    types: {
      image: ({value}: PortableTextTypeComponentProps<PortableImage>) => {
        if (!value?.asset?._ref && !value?.asset?._id) return null
        return (
          <div className="my-8 relative rounded-lg overflow-hidden">
            <Image
              src={urlFor(value).width(800).height(450).auto('format').url()}
              alt={value.alt || ""}
              width={800}
              height={450}
              className="rounded-lg"
            />
            {value.caption && (
              <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                {value.caption}
              </figcaption>
            )}
          </div>
        );
      },
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 md:px-12">
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/blog" className="hover:text-foreground transition-colors">
          ← Back to Blog
        </Link>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}

          {post.author?.name && (
            <span>by {post.author.name}</span>
          )}

          {post.categories && (
            <div className="flex gap-2">
              {post.categories.map((category) => (
                <span key={category._id} className="px-2 py-1 bg-secondary/50 rounded text-xs">
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {post.coverImage?.asset && (
        <div className="relative mb-12 rounded-xl overflow-hidden">
          <Image
            src={urlFor(post.coverImage).width(1200).height(630).auto('format').url()}
            alt={post.coverImage.alt || post.title}
            width={1200}
            height={630}
            className="rounded-xl"
            priority
          />
        </div>
      )}

      <div className="max-w-none">
        <PortableText value={post.body || []} components={portableTextComponents} />
      </div>

      <footer className="mt-16 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium hover:text-accent transition-colors"
        >
          ← Back to all articles
        </Link>
      </footer>
    </article>
  );
}
