import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-reveal-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From a shared vision to a thriving design studio, discover how Zoe Design Forge came to be and the values that guide every project.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="animate-reveal-up space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zoe Design Forge was founded in 2024 with a simple but ambitious mission: to redefine Architecture and Engineering through innovation. What began as a small team with a big vision has grown into a company building practical, technology-driven solutions for the built environment across East Africa.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At the heart of our work is Forge, our mobile application platform designed to bring efficiency and transparency to the industry. Forge integrates a CMMS (Computerized Maintenance Management System) for smarter facility management, real-time construction tracking to keep projects accountable and on schedule, and a real estate marketplace connecting people to housing opportunities with ease.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Central to our vision is the Forge Housing for All initiative — our commitment to using technology to make housing more accessible, transparent, and efficient for communities across the region.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since our founding, our team has delivered multiple projects across East Africa, learning, iterating, and refining our solutions with every engagement. We're proud of how far we've come, but we see this as just the beginning. As we look ahead, we're expanding our reach beyond East Africa, carrying the same drive for innovation to new markets and new challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              This journey has never been the work of one person — it's the result of a dedicated team that believes design, engineering, and technology can come together to build a better future.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
