"use client"

import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { Accordion } from "@/components/ui/Accordion";

const FAQS = [
  {
    question: "Which is the best digital marketing agency in Coimbatore?",
    answer: "D2N Digital Marketing helps businesses improve their online visibility, attract potential customers, and generate leads through SEO, Local SEO, Google Ads, Meta Ads, social media marketing, and website optimization. We create strategies based on each business's goals, target audience, and budget."
  },
  {
    question: "What digital marketing services does D2N Digital Marketing offer?",
    answer: "D2N Digital Marketing offers search engine optimization (SEO), Google Business Profile optimization, Google Ads, Facebook and Instagram advertising, social media management, website development, content creation, and lead generation services."
  },
  {
    question: "Why should I choose D2N Digital Marketing in Coimbatore?",
    answer: "D2N Digital Marketing focuses on practical marketing strategies, local audience targeting, campaign optimization, and measurable business outcomes. Our approach is designed to help businesses strengthen their online presence and generate relevant enquiries."
  },
  {
    question: "Does D2N Digital Marketing provide digital marketing services for small businesses?",
    answer: "Yes. Our marketing strategies can be tailored to small businesses, startups, clinics, real estate companies, educational institutions, retailers, and other service providers based on their objectives and budget."
  },
  {
    question: "Does D2N Digital Marketing provide Local SEO services in Coimbatore?",
    answer: "Yes. We help businesses improve their local online visibility through Google Business Profile optimization, relevant local website content, business information consistency, review management, and local SEO improvements."
  },
  {
    question: "Can D2N Digital Marketing help my business rank on Google Maps?",
    answer: "We optimize eligible Google Business Profiles and relevant website pages to improve local search visibility. Google Maps rankings depend on relevance, distance, prominence, competition, and other factors, so specific positions cannot be guaranteed."
  },
  {
    question: "What is the difference between SEO and Google Ads?",
    answer: "SEO improves your website's visibility in organic search results over time. Google Ads allows businesses to pay for eligible ad placements and reach people searching for relevant products or services. Combining both can support short-term and long-term marketing goals."
  },
  {
    question: "Does D2N Digital Marketing offer Google Ads management?",
    answer: "Yes. We help businesses plan and manage Google Ads campaigns, including keyword research, targeting, ad creation, conversion tracking where supported, and ongoing performance optimization."
  },
  {
    question: "Can D2N Digital Marketing generate leads through Facebook and Instagram Ads?",
    answer: "Yes. Meta Ads campaigns can be designed to generate enquiries through instant forms, WhatsApp, calls, or website landing pages, depending on the campaign objective and business requirements."
  },
  {
    question: "Does D2N Digital Marketing provide website development services?",
    answer: "Yes. Website development can be tailored to your business requirements, including service pages, contact forms, mobile-friendly layouts, and SEO-friendly content structure."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-6 bg-muted/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
