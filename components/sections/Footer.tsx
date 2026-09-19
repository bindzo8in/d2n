"use client";
import { usePathname } from "next/navigation";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data/services";

const QUICK_LINKS = [
  "Home", "All Services", "About Us", "Blog", "Contact", "Privacy Policy", "Terms & Conditions", "Sitemap"
];



const AREAS_SERVED = [
  "Coimbatore", "Peelamedu", "Saravanampatti", "Gandhipuram", "RS Puram", "Singanallur", "Avinashi Road", "Across Tamil Nadu"
];

import Image from "next/image";
import LogoImage from "@/public/img/d2n_logo.webp";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="w-full bg-background text-muted-foreground py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand & Contact */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Image 
              src={LogoImage} 
              alt="D2N Digital Marketing Logo" 
              className="w-auto h-12 object-contain opacity-90 hover:opacity-100 transition-opacity" 
              quality={75} 
              loading="eager"
              priority
            />
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A performance-focused digital marketing agency in Coimbatore helping local businesses generate leads and grow.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <a href="tel:+919787205707" className="flex items-center gap-3 hover:text-primary transition-colors focus:outline-none focus:underline" aria-label="Call us">
              <Phone size={18} aria-hidden="true" />
              <span>+91 97872 05707</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0" aria-hidden="true" />
              <address className="not-italic text-sm leading-relaxed">
                Saravanampatti Road, Jeeva Nagar, <br />
                Cheran Ma Nagar, Villankurichi, <br />
                Coimbatore, Tamil Nadu 641035, India
              </address>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links" className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary transition-colors focus:outline-none focus:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services Links" className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-foreground">Services</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {SERVICES_DATA.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors focus:outline-none focus:underline">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Areas We Serve */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-foreground">Areas We Serve</h3>
          <ul className="flex flex-wrap gap-2 text-sm">
            {AREAS_SERVED.map((area) => (
              <li key={area} className="px-3 py-1 bg-card rounded-full text-muted-foreground text-xs border border-border">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center md:text-left">
        <p>
          &copy; {new Date().getFullYear()} D2N Digital Marketing. All rights reserved.
        </p>
        <p>
          Digital Marketing Agency in Coimbatore, Tamil Nadu
        </p>
      </div>
    </footer>
  );
}
