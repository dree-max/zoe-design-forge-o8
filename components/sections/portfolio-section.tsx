"use client";

import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "Kyankwazi Country Home",
    description: "Contemporary residential design with elegant architecture, perfect for modern living.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kyankwazi%20country%20Home-ouURwRThCiNNknmJjxdbhGL9uzIavA.png",
  },
  {
    title: "KMT Plaza Nansana",
    description: "Mixed-use commercial development featuring innovative retail and office spaces.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KMT%20Plaza%20Nansana-k0FIkOIO50kE58ghldeNcSyrsDeoyp.jpeg",
  },
  {
    title: "Residential Entebbe",
    description: "Luxury residential complex showcasing sophisticated architectural design and modern amenities.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Residential%20Entebbe%20Akright-2nLn7GElRMjnPshVbRQZ1fueOYkyb3.png",
  },
];

export function PortfolioSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-orange-600 mb-4">OUR WORK</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Selected Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our architectural and interior projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-80 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/gallery"
            className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors"
          >
            ALL PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}
