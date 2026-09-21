"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/data/services";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full bg-muted/30 border-y border-border text-foreground py-12 md:py-16 lg:py-20 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-[8cqw] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/50 pb-[4cqw]">
          <div className="flex flex-col gap-4">
            <RevealText
              as="h2"
              id="services-heading"
              className="text-[10cqw] md:text-[3.5cqw] font-bold leading-tight font-heading"
            >
              Related Services
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl text-balance">
                Everything you need to dominate the local Coimbatore market under one roof.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.3} direction="left">
            <Link
              href="/services"
              className="group flex items-center gap-2 text-primary hover:text-primary transition-colors font-medium text-lg focus:outline-none focus:underline"
              aria-label="View all services"
            >
              All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_DATA.slice(0, 6).map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.slug} delay={index * 0.1} direction="up" fullWidth>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col h-full bg-background/50 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden transform-gpu"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {/* Glass highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Icon size={28} />
                  </div>
                  
                  <div className="relative z-10 flex flex-col gap-3 flex-1">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {service.shortDescription}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-8 pt-6 border-t border-border/50 flex items-center justify-between text-primary font-medium group-hover:text-primary/80">
                    <span className="transition-transform duration-300">Learn more</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
