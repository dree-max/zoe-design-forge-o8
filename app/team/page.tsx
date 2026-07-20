import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Obalufa",
    title: "Lead Architect",
    discipline: "Architecture",
    bio: "With over 15 years of experience in residential and commercial design, Sarah leads the architectural vision at Zoe Design Forge with a focus on sustainable and human-centered spaces.",
    image: "/images/team-member-1.jpg"
  },
  {
    name: "James Kabega",
    title: "Structural Engineer",
    discipline: "Structural Engineering",
    bio: "James brings innovative structural solutions to every project, ensuring that bold designs are grounded in engineering excellence and safety.",
    image: "/images/team-member-2.jpg"
  },
  {
    name: "Amelia Nkomo",
    title: "Interior Designer",
    discipline: "Interior Design",
    bio: "Amelia transforms spaces through thoughtful material selection and spatial planning, creating interiors that are both beautiful and functional.",
    image: "/images/team-member-3.jpg"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-reveal-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Exceptional design requires exceptional people. Meet the architects, engineers, and designers who bring Zoe Design Forge visions to life through collaboration and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-reveal-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 overflow-hidden rounded-lg bg-muted h-80 relative">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-light text-muted-foreground mb-2">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="text-sm text-muted-foreground">{member.discipline}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-1 group-hover:text-muted-foreground transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-4">
                  {member.title}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 animate-reveal-up">
            What We Believe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Collaboration",
                description: "Our multi-disciplinary approach means every project benefits from diverse expertise working in harmony."
              },
              {
                title: "Excellence",
                description: "We pursue excellence in every detail, from initial concept through final execution."
              },
              {
                title: "Innovation",
                description: "We challenge conventions and explore new possibilities in design and construction."
              },
              {
                title: "Sustainability",
                description: "We design spaces that endure, respecting both human needs and environmental responsibility."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="animate-reveal-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-light mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
