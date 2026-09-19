"use client";

import { MessageCircle, Zap } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CTASection() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative w-full bg-foreground text-background py-[15cqw] px-[5cqw] overflow-hidden"
    >
      {/* Background Graphic */}
      <div 
        className="absolute top-0 right-0 w-[50cqw] h-[50cqw] bg-primary rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <FadeIn direction="up">
          <div
            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary-foreground mb-4 shadow-xl"
          >
            <Zap size={32} />
          </div>
        </FadeIn>
        
        <RevealText
          as="h2"
          id="cta-heading"
          className="text-[5cqw] md:text-[4cqw] font-bold leading-tight font-heading justify-center text-center"
        >
          Ready to Get Started?
        </RevealText>
        
        <FadeIn delay={0.2} direction="up">
          <p
            className="text-primary-foreground text-xl md:text-2xl max-w-2xl text-balance"
          >
            Let&apos;s talk about your project and how we can help. We&apos;ll send you a free, no-obligation plan tailored to your goals.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3} direction="up" className="w-full sm:w-auto">
          <div
            className="flex flex-col items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919787205707"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-card text-primary px-8 py-5 rounded-full font-bold text-lg hover:bg-muted/50 hover:scale-105 transition-all w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Get My Free Consultation via WhatsApp"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform text-green-500" />
              Get My Free Consultation
            </a>
            <p className="text-sm text-primary-foreground font-medium">
              We&apos;ll reply on WhatsApp within minutes. No spam, ever.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} direction="up">
          <p
            className="mt-16 pt-8 border-t border-primary/30 text-primary-foreground/80 text-sm max-w-xl text-balance"
          >
            D2N Digital Marketing — a performance-focused digital marketing agency in Coimbatore helping local businesses generate leads and grow.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
