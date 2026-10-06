"use client";
import { usePathname } from "next/navigation";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data/services";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "All Services", href: "/services-d2ndigitalmarketing-coimbatore" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog-d2ndigitalmarketing-coimbatore" },
  { label: "Contact", href: "/contact-d2ndigitalmarketing-coimbatore" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Sitemap", href: "/sitemap.xml" }
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
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.facebook.com/d2ndigitalmarketing" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Visit our Facebook page">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/d2ndigitalmarketing/" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Visit our Instagram page">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={`https://wa.me/919787205707?text=${encodeURIComponent(`Hi D2N Digital Marketing! I am interested in your services. (Source: Website - ${pathname})`)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Chat with us on WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links" className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-primary transition-colors focus:outline-none focus:underline">
                  {link.label}
                </Link>
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
                <Link href={`/services-d2ndigitalmarketing-coimbatore/${service.slug}`} className="hover:text-primary transition-colors focus:outline-none focus:underline">
                  {service.shortName || service.title}
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
