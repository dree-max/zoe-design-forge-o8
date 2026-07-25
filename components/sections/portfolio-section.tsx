"use client";

import Image from "next/image";
import Link from "next/link";

export function PortfolioSection() {
  const projects = [
    {
      id: 1,
      image: "/images/mono-1.png",
      title: "Residential Entebbe",
      description: "A contemporary residential development combining modern aesthetics with sustainable building practices. The project showcases innovative architectural design with focus on natural light and ventilation."
    },
    {
      id: 2,
      image: "/images/mono-2.png",
      title: "Commercial Mixed-Use",
      description: "An integrated commercial and residential complex featuring modern facade design and efficient space utilization. The project demonstrates our expertise in multi-functional urban development."
    },
    {
      id: 3,
      image: "/images/mono-3.png",
      title: "Luxury Residential",
      description: "A premium residential project showcasing architectural excellence with sophisticated design elements. The development features spacious layouts, premium finishes, and contemporary aesthetics."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-reveal-up">
          <p className="text-orange-600 font-semibold tracking-widest mb-4">OUR WORK</p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Selected Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our architectural and interior projects.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group animate-reveal-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <h3 className="text-2xl font-light mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-reveal-up">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700 transition-colors"
          >
            All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
