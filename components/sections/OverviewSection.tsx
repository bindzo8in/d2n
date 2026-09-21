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
            Who We Are
          </h2>
        </FadeIn>
        
        <RevealText
          className="text-[6cqw] md:text-[3.5cqw] font-bold leading-tight font-heading text-balance justify-center text-center"
        >
          D2N Digital Marketing is a results-driven digital marketing agency in Coimbatore. We combine SEO, paid ads, social media, and conversion optimization into one growth engine for local businesses across Peelamedu, Saravanampatti, Gandhipuram, RS Puram, and Singanallur.
        </RevealText>
      </div>

      {/* Abstract Background Element for Aesthetics */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80cqw] h-[80cqw] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
