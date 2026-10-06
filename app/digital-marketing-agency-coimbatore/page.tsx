import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, PhoneCall, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Coimbatore | D2N",
  description: "Looking for a digital marketing company in Coimbatore? D2N provides SEO, Local SEO, Google Ads, Meta Ads, social media and lead generation services for businesses.",
  alternates: {
    canonical: '/digital-marketing-agency-coimbatore',
  },
};

const OFFERINGS = [
  "SEO Services",
  "Local SEO",
  "Google Business Profile Optimization",
  "Google Ads",
  "Meta Ads",
  "Social Media Marketing",
  "Lead Generation",
  "Website Development",
  "Content Marketing",
  "Conversion Optimization"
];

export default function DigitalMarketingAgencyCoimbatore() {
  return (
    <main className="w-full bg-background min-h-screen pt-20 md:pt-28 lg:pt-32 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative">
        <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none -z-10" />

        <div className="flex flex-col gap-8 lg:pr-8">
          <FadeIn delay={0.2} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
              <MapPin size={16} />
              <span className="text-sm font-semibold">Coimbatore, Tamil Nadu</span>
            </div>
          </FadeIn>
          
          <div className="flex flex-col gap-6">
            <RevealText as="h1" delay={0.2} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
              Digital Marketing Company in Coimbatore
            </RevealText>
            <FadeIn delay={0.5} direction="up">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                D2N Digital Marketing is a full-service digital marketing company in Coimbatore helping businesses improve online visibility, attract potential customers and generate qualified enquiries.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.7} direction="up" className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact-d2ndigitalmarketing-coimbatore" className={buttonVariants({ size: "lg", className: "rounded-full px-8 text-md gap-2" })}>
                 Get a Free Audit <ArrowRight size={18} />
              </Link>
              <a href="tel:+919787205707" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8 text-md gap-2" })}>
                 <PhoneCall size={18} /> Call Now
              </a>
            </FadeIn>
          </div>
        </div>
        
        <FadeIn delay={0.6} direction="left" className="relative w-full h-full flex flex-col justify-center">
            <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold font-heading mb-4">Our Approach</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our approach combines organic search, paid advertising, social media and conversion-focused websites to create a connected digital marketing strategy.
                  <br/><br/>
                  From a local business looking to improve Google Maps visibility to a growing company looking for consistent lead generation, we develop strategies based on your business model, audience and objectives.
                </p>
            </div>
        </FadeIn>
      </section>

      {/* Services List Section */}
      <section className="w-full bg-muted/30 border-y border-border py-24 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3 flex flex-col gap-6">
            <RevealText as="h2" className="text-3xl md:text-4xl font-bold font-heading">
              What We Offer
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg text-balance">
                A comprehensive suite of digital marketing services tailored for Coimbatore businesses.
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
             {OFFERINGS.map((offer, i) => (
                 <FadeIn key={offer} delay={0.1 * i} direction="up" className="flex items-center gap-3 bg-background border border-border/50 p-4 rounded-xl shadow-sm">
                     <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                     <span className="font-medium text-foreground">{offer}</span>
                 </FadeIn>
             ))}
          </div>
        </div>
      </section>

      {/* Local Strategy Section */}
      <section className="w-full bg-background py-24 px-6 relative z-10 overflow-hidden text-center flex flex-col items-center">
        <RevealText as="h2" className="text-3xl md:text-4xl font-bold font-heading max-w-2xl mb-6">
          Local Digital Marketing in Coimbatore
        </RevealText>
        <FadeIn delay={0.2} className="max-w-3xl">
          <p className="text-muted-foreground text-lg text-balance mb-12">
            We understand that local businesses need more than website traffic. They need calls, enquiries, visits and customers. Our local marketing strategy can combine:
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up" className="w-full max-w-4xl">
           <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 shadow-sm text-primary font-bold text-lg md:text-xl lg:text-2xl leading-relaxed text-balance">
             Google Business Profile + Local SEO + Website SEO + Google Ads + Meta Ads + Content
           </div>
           <p className="text-muted-foreground mt-6 text-base md:text-lg">
             This creates multiple opportunities for potential customers to discover your business.
           </p>
        </FadeIn>
      </section>

      <CTASection />
    </main>
  );
}
