'use client';

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Wakiso Gardens",
    type: "Landscape",
    year: 2023,
    description: "A contemporary landscape design featuring water features, native plantings, and architectural hardscaping.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wakiso%20Gardens-DwKAqBs8uvBfDGEGEvT2BnXUZu8tqj.jpeg"
    ]
  },
  {
    id: 2,
    name: "Residential Entebbe Akright",
    type: "Residential",
    year: 2023,
    description: "A luxury residential estate featuring clean lines, modern materiality, and strategic fenestration.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Residential%20Entebbe%20Akright-2nLn7GElRMjnPshVbRQZ1fueOYkyb3.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Residential%20Entebbe%20Akright%202-jL13cS5xAbfSHkqLBfPqkYn4pksYTr.png"
    ]
  },
  {
    id: 3,
    name: "Apartments Garuga Entebbe",
    type: "Residential",
    year: 2022,
    description: "Multi-unit residential complex featuring a mix of spacious apartments with shared amenities.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apartments%20Garuga%20Entebbe%202-ZjVyiPTrD7fNipCAN4kYTqpf7KHBHj.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apartments%20Garuga%20Entebbe-C6HnSqv5qaAOPRyl4gjOGFIvJztVtK.png"
    ]
  },
  {
    id: 4,
    name: "KMT Plaza Nansana",
    type: "Commercial",
    year: 2023,
    description: "A vibrant mixed-use commercial plaza featuring retail, offices, and public gathering spaces.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KMT%20Plaza%20Nansana-k0FIkOIO50kE58ghldeNcSyrsDeoyp.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KMT%20Plaza%20Nansana%202-Tl1FtF5pYp3tANnZ66xx9f7w9fsmBF.jpeg"
    ]
  },
  {
    id: 5,
    name: "Kyankwazi Country Home",
    type: "Residential",
    year: 2022,
    description: "An elegant country residence with classical proportions and contemporary comforts.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kyankwazi%20country%20Home%202-wC8OBI1xyCgre69pgxkOlnSsWQOavN.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kyankwazi%20country%20Home-ouURwRThCiNNknmJjxdbhGL9uzIavA.png"
    ]
  },
  {
    id: 6,
    name: "Residential Wakiso Buyera",
    type: "Residential",
    year: 2021,
    description: "A contemporary residential design showcasing innovative use of materials and natural lighting.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Residential%20Wakiso%20Buyera-YTkdWzxBVfeIx8BcqLq1ZL5eNUWe7E.png"
    ]
  }
];

type FilterType = 'all' | 'Residential' | 'Commercial' | 'Landscape';

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === selectedFilter);

  const sortedProjects = [...filteredProjects].sort((a, b) => b.year - a.year);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 animate-reveal-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A curated selection of our recent projects showcasing diverse typologies, scales, and design approaches across residential, commercial, and landscape disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {(['all', 'Residential', 'Commercial', 'Landscape'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter as FilterType)}
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  selectedFilter === filter
                    ? 'bg-foreground text-background'
                    : 'border border-border text-foreground hover:border-foreground'
                }`}
              >
                {filter === 'all' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-reveal-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg bg-muted aspect-square mb-4">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-light mb-1 group-hover:text-muted-foreground transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {project.type} • {project.year}
                  </p>
                  <p className="text-sm text-accent">
                    {project.images.length} {project.images.length === 1 ? 'image' : 'images'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-light mb-2">
                    {selectedProject.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {selectedProject.type} • {selectedProject.year}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-2xl font-light text-muted-foreground hover:text-foreground"
                >
                  ×
                </button>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="space-y-6">
                {selectedProject.images.map((image, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={image}
                      alt={`${selectedProject.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </main>
  );
}
