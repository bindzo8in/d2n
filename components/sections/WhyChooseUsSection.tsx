"use client"

import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { TrendingUp, Users, Target, Activity } from "lucide-react";

const FEATURES = [
  {
    icon: TrendingUp,
    title: "Data-Driven Strategies",
    description: "Every campaign we build is backed by real data, ensuring your marketing budget is spent where it brings the most return.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description: "We don't just chase vanity metrics like impressions. Our core focus is generating qualified leads and sales for your business.",
  },
  {
    icon: Users,
    title: "Expert Local Team",
    description: "Based in Coimbatore, we understand the local market dynamics while having the expertise to scale brands globally.",
  },
  {
    icon: Activity,
    title: "Transparent Reporting",
    description: "No hidden numbers or confusing jargon. You get clear, honest reports showing exactly what we've achieved each month.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
            </FadeIn>
            <RevealText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-balance">
              Not just an agency. Your growth partner.
            </RevealText>
          </div>
          <FadeIn delay={0.2} className="max-w-md">
            <p className="text-muted-foreground text-lg text-balance">
              We go beyond standard digital marketing to understand your business inside out, building custom solutions that drive measurable growth.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {FEATURES.map((feature, i) => (
            <FadeIn key={i} delay={0.1 * i} className="flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  );
}
