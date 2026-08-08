import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { FooterSection } from "@/components/sections/footer-section";
import { client } from "@/sanity/lib/client";
import { isSanityConfigured } from "@/sanity/lib/env";
import { postsIndexQuery } from "@/sanity/lib/queries";
import type { Post } from "@/sanity/types";

export const revalidate = 60;

export default async function Home() {
  const posts = isSanityConfigured && client
    ? await client.fetch<Post[]>(postsIndexQuery)
    : [];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <FeaturedProductsSection />
      <PortfolioSection />
      <CollectionSection posts={posts} />
      <EditorialSection />
      <TestimonialsSection />
      <TechnologySection />
      <FooterSection />
    </main>
  );
}
