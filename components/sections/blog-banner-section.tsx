"use client";

import Image from "next/image";
import Link from "next/link";

export function BlogBannerSection() {
  return (
    <section className="relative w-full py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <Link href="/blog" className="block relative w-full rounded-lg overflow-hidden animate-reveal-up hover:opacity-90 transition-opacity">
          <div className="relative w-full" style={{ aspectRatio: '16 / 6' }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rSyMqIfwW9NKnZ6AIS4OLQSi6pEIfU.png"
              alt="Start Your Design Journey - Visit Our Blog"
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
