"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Compact Model",
    description: "120m² living space with optimal energy efficiency",
    
    image: "/images/hero-side-1.png",
  },
  {
    id: 2,
    name: "Standard Model",
    description: "180m² perfect balance of space and sustainability",
    
    image: "/images/hero-side-2.png",
  },
  {
    id: 3,
    name: "Premium Model",
    description: "250m² expansive design with maximum comfort",
    
    image: "/images/hero-side-4.png",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Our Portfolio 
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Blog Preview */}
        <div className="hidden md:flex md:px-12 lg:px-20 justify-center">
          <div className="w-full max-w-4xl bg-black/80 rounded-3xl p-8 lg:p-12 flex flex-col justify-between min-h-[280px]">
            {/* Label */}
            <div>
              <p className="text-orange-600 font-semibold tracking-widest text-sm mb-4">
                INSIGHTS & UPDATES
              </p>
              
              {/* Heading */}
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Explore our Latest Architectural Stories
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8">
                Dive deep into our design philosophy, project showcases, and the latest trends in architectural landscape.
              </p>
            </div>

            {/* Button */}
            <div>
              <a
                href="/blog"
                className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-colors"
              >
                VISIT OUR BLOG →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
