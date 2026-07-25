import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { BlogBannerSection } from "@/components/sections/blog-banner-section";
import { ServicesBannerSection } from "@/components/sections/services-banner-section";
import { CTABannerSection } from "@/components/sections/cta-banner-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <FeaturedProductsSection />
      <PortfolioSection />
      <BlogBannerSection />
      <ServicesBannerSection />
      <CTABannerSection />
      <TestimonialsSection />
      <TechnologySection />
      <FooterSection />
    </main>
  );
}
