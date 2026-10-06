"use client";

import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="relative w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-background text-foreground flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center gap-8">
        <FadeIn direction="up">
          <h2
            id="overview-heading"
            className="text-primary font-semibold tracking-wide uppercase text-sm md:text-base"
          >
            Digital Marketing Agency in Coimbatore
          </h2>
        </FadeIn>
        
        <RevealText
          className="text-[6cqw] md:text-[3.5cqw] font-bold leading-tight font-heading text-balance justify-center text-center"
        >
          Grow Your Business with a Result-Focused Digital Marketing Agency in Coimbatore. D2N Digital Marketing helps businesses build a stronger online presence, reach the right audience and generate qualified leads.
        </RevealText>

        <FadeIn delay={0.2} direction="up">
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl text-balance mt-4">
            Based in Coimbatore, we provide SEO, Local SEO, Google Ads, Meta Ads, Social Media Marketing, Lead Generation and Website Development for businesses looking to grow through digital channels.
            <br/><br/>
            Whether you are a local business, service provider, manufacturer, healthcare business, real estate company or growing brand, our strategies are designed around your business goals, target audience and market.
          </p>
        </FadeIn>
      </div>

      {/* Abstract Background Element for Aesthetics */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80cqw] h-[80cqw] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
