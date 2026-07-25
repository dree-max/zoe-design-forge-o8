"use client";

import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "Gallery", href: "/gallery" },
    { label: "Team", href: "/team" },
    { label: "Story", href: "/story" },
    { label: "FAQ", href: "/faq" },
  ],
  about: [
    { label: "Our Story", href: "/story" },
    { label: "Team", href: "/team" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  service: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  service: [
    { label: "FAQ", href: "/faq" },
    { label: "Gallery", href: "/gallery" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-base font-bold text-foreground">
              ZOE DESIGN FORGE
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Transforming visions into structural reality. We build the future of landscape.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 ZOE DESIGN FORGE. All rights reserved.
          </p>

          

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/zoeforge.arch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="https://x.com/zforge29184?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
