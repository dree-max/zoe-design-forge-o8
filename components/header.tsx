"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.46)" }}>
        {/* Logo and Branding */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-12">
            <Image 
              src="/logo.jpg"
              alt="Zoe Design Forge"
              height={40}
              width={50}
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="text-sm font-bold tracking-tight text-foreground hidden sm:inline">
            ZOE DESIGN FORGE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/gallery"
            className="text-sm transition-colors text-muted-foreground hover:text-foreground"
            style={{ color: '#110f0f', fontWeight: '700' }}
          >
            Gallery
          </Link>
          <Link
            href="/team"
            className="text-sm transition-colors text-muted-foreground hover:text-foreground"
            style={{ color: '#131010', fontWeight: '700' }}
          >
            Team
          </Link>
          <Link
            href="/services"
            className="text-sm transition-colors text-muted-foreground hover:text-foreground"
            style={{ color: '#151313', fontWeight: '700' }}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-sm transition-colors text-muted-foreground hover:text-foreground"
            style={{ color: '#171515', fontWeight: '700' }}
          >
            Blog
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium transition-all rounded-full bg-foreground text-background hover:opacity-80"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="transition-colors md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href="/gallery"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/team"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/services"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
