"use client";

import Image from "next/image";

export function TechnologySection() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Forge App Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] animate-reveal-up">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ATA....-ZY04QXESq1U4dpVWQa14mmRLgJzsYd.png"
              alt="Forge App - Managing Your Property & Projects Effortlessly"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-reveal-up">
            <div>
              <p className="text-orange-600 font-semibold tracking-widest mb-4">OUR INNOVATION</p>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
                Forge App
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Revolutionizing the built environment through technology-driven solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-light text-lg mb-2">Real Estate Marketplace</h3>
                  <p className="text-muted-foreground">Connect people with housing opportunities with ease and transparency.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-light text-lg mb-2">Construction Tracking</h3>
                  <p className="text-muted-foreground">Real-time project tracking to keep construction on schedule and accountable.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-light text-lg mb-2">Property Care Services</h3>
                  <p className="text-muted-foreground">Comprehensive CMMS for smarter facility management and maintenance.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700 transition-colors inline-block">
                Get It On Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
