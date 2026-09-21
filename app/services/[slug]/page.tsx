import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA, getServiceBySlug } from "@/lib/data/services";
import CTASection from "@/components/sections/CTASection";
import { Accordion } from "@/components/ui/Accordion";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

// Generate Static Params for all services at build time
export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

// Generate Metadata dynamically based on the slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | D2N Digital Marketing Coimbatore`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="w-full min-h-screen pt-20 md:pt-28 lg:pt-32 flex flex-col items-center">
      
      {/* Back Link */}
      <div className="w-full max-w-7xl px-6 mb-8 flex justify-start">
        <FadeIn delay={0.1} direction="left">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:underline group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all services
          </Link>
        </FadeIn>
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none -z-10" />

        <div className="flex flex-col gap-8">
          <FadeIn delay={0.2} direction="up">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center border border-primary/10 shadow-sm">
              <Icon size={40} />
            </div>
          </FadeIn>
          
          <div className="flex flex-col gap-6">
            <RevealText as="h1" delay={0.2} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
              {service.title}
            </RevealText>
            <FadeIn delay={0.5} direction="up">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                {service.longDescription}
              </p>
            </FadeIn>
          </div>
        </div>
        
        <FadeIn delay={0.6} direction="left" className="relative w-full h-[50vh] lg:h-full lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
           <ParallaxImage 
             src={service.heroImage}
             alt={`${service.title} Visualization`}
             priority
           />
           {/* Glass overlay gradient */}
           <div className="absolute inset-0 bg-linear-to-tr from-background/20 via-transparent to-transparent pointer-events-none" />
        </FadeIn>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-muted/30 border-y border-border py-24 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="flex flex-col gap-4 max-w-3xl">
            <RevealText as="h2" className="text-3xl md:text-4xl font-bold font-heading">
              What&apos;s included in our strategy?
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg text-balance">
                We focus on measurable results, not just vanity metrics. Here is exactly what we do to grow your business.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <FadeIn key={index} delay={0.2 + index * 0.1} direction="up" fullWidth>
                  <div className="bg-background/50 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-border/50 flex flex-col gap-5 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                    
                    {/* Glassmorphism shine */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-125 group-hover:-rotate-12 pointer-events-none">
                       <BenefitIcon size={140} />
                    </div>
                    
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary relative z-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                      <BenefitIcon size={26} />
                    </div>
                    
                    <div className="relative z-10 mt-2 flex-1">
                      <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-24 px-6 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 flex flex-col gap-6 sticky top-32 self-start">
            <RevealText as="h2" className="text-3xl md:text-5xl font-bold font-heading">
              Our Proven Process
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed text-balance">
                We don&apos;t guess. We follow a systematic, data-driven approach to ensure every campaign we launch has the highest probability of success.
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:w-2/3 flex flex-col">
            {service.process.map((step, index) => (
              <FadeIn key={index} delay={0.1} direction="left" viewAmount={0.5}>
                <div className="flex gap-6 md:gap-10 group relative">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-muted group-hover:bg-primary group-hover:text-primary-foreground text-foreground font-bold text-xl flex items-center justify-center shadow-sm shrink-0 transition-all duration-500 relative z-10">
                      {step.step}
                    </div>
                    {/* Animated connecting line */}
                    {index !== service.process.length - 1 && (
                      <div className="w-0.5 h-full bg-border my-2 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full bg-primary h-full -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-out" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4 pb-12 pt-2 flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg text-balance">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Elements & FAQs */}
      <section className="w-full bg-muted/30 border-t border-border py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Why Choose Us */}
          <div className="flex flex-col gap-10">
             <h2 className="text-3xl font-bold font-heading">Why choose D2N for {service.title}?</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {[
                  "Data-driven strategies",
                  "Transparent monthly reporting",
                  "No long-term lock-in contracts",
                  "Dedicated local support team"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-background border border-border rounded-2xl shadow-sm">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                    <span className="font-semibold text-foreground">{point}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* FAQs */}
          <div className="flex flex-col gap-10">
             <h2 className="text-3xl font-bold font-heading">Frequently Asked Questions</h2>
             <Accordion items={service.faqs} />
          </div>

        </div>
      </section>

      <CTASection />
    </main>
  );
}
