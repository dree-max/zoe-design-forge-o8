import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import Image from "next/image";

const teamMembers = [
  {
    name: "Katurebe Alvin Edson",
    title: "Chief Executive Officer",
    discipline: "Leadership & Vision",
    bio: "Visionary leader and founder. Alvin shapes the creative direction and business strategy of Zoe Design Forge — turning bold ideas into built reality.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alvin%20-6tMeVexyBOLB6EwiSvdTDF5OAzBJZz.jpeg"
  },
  {
    name: "Agaba Amon",
    title: "Chief Operating Officer",
    discipline: "Operations & Project Management",
    bio: "The engine behind every project. Amon ensures Zoe's commissions run on time, on budget, and to the standard every client expects.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agaba%20Amon-n3MQQmPlVtHUfdP3cRKn4bghkezdnu.jpeg"
  },
  {
    name: "Aitaa Solomon Justin",
    title: "Architect & Interior Designer",
    discipline: "Architecture & Design",
    bio: "Where structure meets soul. Solomon brings technical precision and design intuition to every space — from first sketch to final blueprint.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aita%20Solomon-uUUtiEeNN04Fhy9JGCe2268WR9gusr.png"
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
                <div className="mb-6 overflow-hidden rounded-lg bg-muted h-96 relative flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                  />
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
