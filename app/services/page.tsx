'use client';

import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";
import Image from "next/image";

const services = [
  {
    title: "Building Engineering",
    description: "Comprehensive structural and building engineering solutions that ensure safety, durability, and optimal performance. Our engineering team designs structures that support bold architectural visions while maintaining the highest standards of safety and efficiency.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagine%20a%20own%20home%20%F0%9F%8F%A1.jfif-lMRJ97SJfTvVFvZaSkVI9QOvX0U6RO.jpeg"
  },
  {
    title: "Architectural Design",
    description: "Innovative architectural solutions that blend aesthetics, functionality, and sustainability. We create spaces that inspire, reflect cultural context, and enhance human experience through thoughtful design.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download.jfif-ZizYLPzzJegyezXvqhrTdBpOotw22y.jpeg"
  },
  {
    title: "Interior Design",
    description: "Thoughtfully designed interiors that bridge the gap between architecture and lived experience. Our interior design team creates spaces that are both beautiful and functional, reflecting your unique vision.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9.jfif-edrcOpqQTQdXT9ZOToFyXfOCj4ng14.jpeg"
  },
  {
    title: "Furniture Design",
    description: "Custom furniture solutions that marry form and function. We design bespoke furniture pieces that complement architectural spaces and enhance interior environments with both elegance and practicality.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modern%20Multi-Functional%20Living%20Room%20Design%20with%20Home%20Office.jfif-2bii1s8IefWc6Fnbl4igmp4U2YMjCr.jpeg"
  },
  {
    title: "Landscape & Lawn",
    description: "Outdoor spaces that extend your property's design narrative. We create landscaped environments that enhance beauty, encourage connection with nature, and provide functional outdoor living spaces.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wakiso%20Gardens-Ot3emkWjb65TzG6ncggRjkHGPSQcZU.jpeg"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-reveal-up">
            <p className="text-orange-600 font-semibold tracking-widest mb-4">WHAT WE DO</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive design solutions for modern living. From architectural design to landscape architecture, we deliver excellence across every discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-reveal-up ${
                  index % 2 === 1 ? 'md:grid-cols-2 md:auto-cols-auto' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className={`relative h-80 md:h-96 rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <button className="px-6 py-3 bg-foreground text-background font-medium rounded-full hover:opacity-80 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
