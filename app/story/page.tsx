import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import Image from "next/image";

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

      {/* Forge App Interactive Banner */}
      <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-orange-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Content */}
            <div className="space-y-6 animate-reveal-up order-2 md:order-1">
              <div>
                <p className="text-orange-600 font-semibold tracking-widest text-sm mb-4">
                  OUR INNOVATION
                </p>
                <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                  Meet Forge
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our revolutionary mobile platform designed to transform the built environment. Forge brings efficiency, transparency, and innovation to every aspect of architecture and construction.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Real Estate Marketplace</h4>
                    <p className="text-sm text-muted-foreground">Connect people with housing opportunities seamlessly</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Construction Tracking</h4>
                    <p className="text-sm text-muted-foreground">Real-time project monitoring and accountability</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Property Management</h4>
                    <p className="text-sm text-muted-foreground">CMMS for smarter facility and maintenance management</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://forgeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-colors"
              >
                Download Forge App →
              </a>
            </div>
            
            {/* Right: Banner Image */}
            <div className="relative h-96 md:h-full animate-reveal-up order-1 md:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2025%2C%202026%2C%2001_58_46%20PM-CYpAgEXSgyW0zhghe5l3uJ6LqDQlPd.png"
                alt="Forge App - Mobile Platform"
                fill
                className="object-contain"
              />
            </div>
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
