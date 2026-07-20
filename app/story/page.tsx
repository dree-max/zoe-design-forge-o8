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

      {/* Founding */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="animate-reveal-up">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
              The Beginning
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Zoe Design Forge was founded with a simple belief: exceptional design emerges when diverse disciplines collaborate from the very beginning. Rather than working in silos, our team of architects, structural engineers, MEP specialists, civil engineers, interior designers, and landscape architects work together to create holistic solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project starts with a conversation. We listen, we question, we explore possibilities that others might overlook. This collaborative approach has become the foundation of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 animate-reveal-up">
            Key Milestones
          </h2>
          
          <div className="space-y-12">
            {[
              {
                year: "2015",
                title: "Foundation",
                description: "Zoe Design Forge is established with a core team of three principals, each bringing expertise from Africa's leading architecture firms."
              },
              {
                year: "2017",
                title: "Growth",
                description: "The team expands to include specialists in MEP, civil engineering, and landscape architecture—establishing our truly multi-disciplinary approach."
              },
              {
                year: "2019",
                title: "Recognition",
                description: "Our innovative residential and commercial projects begin earning regional awards and international recognition for design excellence."
              },
              {
                year: "2021",
                title: "Expansion",
                description: "We open a new studio and expand our capabilities in sustainable design and large-scale mixed-use developments."
              },
              {
                year: "2024",
                title: "Evolution",
                description: "Today, we continue to push boundaries, exploring new materials, technologies, and design methodologies to create spaces that inspire."
              }
            ].map((milestone, index) => (
              <div 
                key={index}
                className="flex gap-8 animate-reveal-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="text-3xl font-light text-accent w-24">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow border-l border-border pl-8 pb-8 last:pb-0">
                  <h3 className="text-xl font-light mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Discipline Model */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 animate-reveal-up">
            Our Multi-Disciplinary Approach
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 animate-reveal-up">
            Most design firms organize around disciplines, with each specialist working in isolation before handing off to the next phase. We believe this approach misses crucial opportunities for innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                discipline: "Architecture",
                description: "Visionary design that balances aesthetics, functionality, and human experience."
              },
              {
                discipline: "Structural Engineering",
                description: "Innovative structural solutions that enable bold designs while ensuring safety and durability."
              },
              {
                discipline: "MEP Engineering",
                description: "Integrated mechanical, electrical, and plumbing systems designed for efficiency and performance."
              },
              {
                discipline: "Civil Engineering",
                description: "Site planning and infrastructure that harmonizes development with the natural landscape."
              },
              {
                discipline: "Interior Design",
                description: "Thoughtfully designed interiors that reflect the building's architectural vision."
              },
              {
                discipline: "Landscape Architecture",
                description: "Outdoor spaces that extend the design narrative and enhance quality of life."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="animate-reveal-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-light mb-2">
                  {item.discipline}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 animate-reveal-up">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed animate-reveal-up">
            To create exceptional spaces that enhance human experience, elevate communities, and demonstrate that great design is possible when diverse expertise collaborates from inception. We pursue projects that challenge us to innovate, that matter to our clients and their users, and that contribute positively to the built environment.
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
