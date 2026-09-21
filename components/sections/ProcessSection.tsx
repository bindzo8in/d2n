"use client";

import { CheckCircle2 } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";

const PROCESS_STEPS = [
  {
    title: "Discovery call & business audit",
    description: "We dive deep into your business model, target audience, and current digital presence.",
  },
  {
    title: "Channel strategy & budget plan",
    description: "Mapping out the exact platforms (SEO, Google Ads, Meta) that will yield the highest ROI for your budget.",
  },
  {
    title: "Creative production",
    description: "Crafting high-converting ad copies, engaging landing pages, and compelling social content.",
  },
  {
    title: "Campaign launch & daily optimization",
    description: "Going live and continuously tweaking targeting, bids, and creatives for maximum performance.",
  },
  {
    title: "Weekly reporting & strategy review",
    description: "Transparent dashboards and regular catch-ups to ensure we are hitting your growth KPIs.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative w-full bg-muted/30 text-foreground py-12 md:py-16 lg:py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-[10cqw]">
        
        {/* Sticky Left Column */}
        <div className="lg:w-1/3 flex flex-col gap-6 relative">
          <div className="sticky top-[20cqw]">
            <RevealText
              as="h2"
              id="process-heading"
              className="text-[10cqw] md:text-[3cqw] font-bold leading-tight font-heading"
            >
              Our Process
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-muted-foreground text-lg md:text-xl text-balance">
                A proven 5-step framework to turn your website into a lead-generation machine.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="lg:w-2/3 flex flex-col gap-16 md:gap-32 mt-12 lg:mt-0">
          {PROCESS_STEPS.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: { title: string; description: string }; index: number }) {
  return (
    <FadeIn delay={0.1} direction="up" viewAmount={0.5}>
      <article className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-background border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary text-primary font-bold text-2xl md:text-4xl font-heading shadow-sm transition-all duration-500">
          {index + 1}
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground flex items-center gap-3">
            {step.title}
            <CheckCircle2 className="text-primary w-6 h-6 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
          </h3>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-balance">
            {step.description}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}
