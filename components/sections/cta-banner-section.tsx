"use client";

import Image from "next/image";

export function CTABannerSection() {
  const whatsappNumber = "+256702254979";
  const whatsappMessage = "Hi, I'm interested in discussing my design project with Zoe Design Forge.";
  const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative w-full py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <a 
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full rounded-lg overflow-hidden animate-reveal-up hover:opacity-90 transition-opacity"
        >
          <div className="relative w-full" style={{ aspectRatio: '16 / 6' }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oXrDjDLu7HAK5s84giWCYzzDlGBgBK.png"
              alt="Start Your Design Journey - WhatsApp Us Today"
              fill
              className="object-cover"
              priority
            />
          </div>
        </a>
      </div>
    </section>
  );
}
