"use client"

import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { Accordion } from "@/components/ui/Accordion";

const FAQS = [
  {
    question: "Why do I need a digital marketing agency in Coimbatore?",
    answer: "A specialized agency understands both the local Coimbatore market and broader digital trends. We save you time and money by applying proven strategies to get you in front of the right customers, rather than relying on guesswork."
  },
  {
    question: "How long does it take to see results?",
    answer: "For SEO, it typically takes 3 to 6 months to see significant movement in rankings as search engines index and trust your site. Paid ads (Google Ads, Meta Ads) can generate leads within the first week of launching the campaign."
  },
  {
    question: "Do you work with small businesses and startups?",
    answer: "Yes! We work with businesses of all sizes. Whether you are a local shop looking to improve Google Maps visibility or a growing startup needing a full-scale digital strategy, we tailor our services to fit your budget and goals."
  },
  {
    question: "What makes D2N different from other agencies?",
    answer: "We prioritize actual revenue and qualified leads over vanity metrics like impressions or 'likes'. Our strategies are highly customized, and we maintain complete transparency with monthly performance reporting."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing depends on the scope of the project, your specific goals, and the services required. We offer custom packages starting from foundational Local SEO up to comprehensive multi-channel marketing. Contact us for a free quote!"
  }
];

export default function FAQSection() {
  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-6 bg-muted/10">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-4">
          <FadeIn>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Got Questions?</span>
          </FadeIn>
          <RevealText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-balance justify-center text-center">
            Frequently Asked Questions
          </RevealText>
        </div>

        <FadeIn delay={0.2}>
          <Accordion items={FAQS} />
        </FadeIn>
        
      </div>
    </section>
  );
}
