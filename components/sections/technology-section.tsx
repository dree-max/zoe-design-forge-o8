"use client";

import Image from "next/image";

export function TechnologySection() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Forge App Banner */}
        <div className="relative w-full animate-reveal-up" style={{ aspectRatio: '16 / 9' }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2025%2C%202026%2C%2001_58_46%20PM-CYpAgEXSgyW0zhghe5l3uJ6LqDQlPd.png"
            alt="Forge App - Available on Playstore"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
