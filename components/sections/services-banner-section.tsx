"use client";

import Image from "next/image";
import Link from "next/link";

export function ServicesBannerSection() {
  return (
    <section className="relative w-full py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <Link href="/services" className="block relative w-full rounded-lg overflow-hidden animate-reveal-up hover:opacity-90 transition-opacity">
          <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ThBvMdBG2fsIB3pp21Ai47no6PGo0o.png"
              alt="Our Services - Building Engineering, Architectural Design, Interior Design, Landscape & Lawn, Furniture Design"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
