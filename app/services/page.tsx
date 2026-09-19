import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "@/lib/data/services";

import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Our Digital Marketing Services | D2N",
  description: "Explore our full-funnel digital marketing services in Coimbatore including SEO, Google Ads, Meta Ads, and Website Development.",
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-background min-h-screen pt-32 flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 py-12 md:py-24 text-center flex flex-col items-center gap-6 relative">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles size={16} />
            Digital Marketing Services
          </div>
        </FadeIn>
        
        <RevealText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-tight justify-center text-center">
          Everything you need to dominate your local market.
        </RevealText>
        
        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4 text-balance">
            From technical SEO to high-converting Meta Ads, we provide end-to-end solutions that turn clicks into loyal customers for Coimbatore businesses.
          </p>
        </FadeIn>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      </section>

      {/* Services Grid with Glassmorphism */}
      <section className="w-full bg-muted/30 border-t border-border py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.slug} delay={0.2 + (index * 0.1)} direction="up" fullWidth>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col h-full bg-background/50 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  aria-label={`View details for ${service.title}`}
                >
                  {/* Glass highlight on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <Icon size={32} />
                  </div>
                  
                  <h2 className="relative z-10 text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="relative z-10 text-muted-foreground leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  
                  <div className="relative z-10 mt-8 pt-6 border-t border-border/50 flex items-center justify-between text-primary font-medium group-hover:text-primary/80">
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Learn more</span>
                    <ArrowRight className="w-5 h-5 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>

      
    </main>
  );
}
