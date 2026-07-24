import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { EditorialSection } from "@/components/sections/editorial-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PortfolioSection />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
