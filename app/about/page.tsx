import { Metadata } from "next";
import { Sparkles, Target, Users, Zap } from "lucide-react";

import CTASection from "@/components/sections/CTASection";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about D2N Digital Marketing, our mission, values, and the team driving results for businesses in Coimbatore.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen pt-20 md:pt-28 lg:pt-32 flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 py-6 md:py-16 lg:py-24 text-center flex flex-col items-center gap-4 md:gap-6">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Users size={16} />
            About D2N
          </div>
        </FadeIn>
        
        <RevealText as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-tight justify-center text-center">
          We are builders, marketers, and growth partners.
        </RevealText>
        
        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
            D2N Digital Marketing was founded on a simple premise: local businesses deserve agency-level growth without the agency-level fluff.
          </p>
        </FadeIn>
      </section>

      {/* Hero Parallax Image */}
      <FadeIn delay={0.6} className="w-full max-w-7xl px-6 pb-24 h-[50vh] md:h-[70vh]">
        <ParallaxImage 
          src="/img/agency-workspace.jpg" 
          alt="D2N Digital Marketing Workspace"
          containerClassName="rounded-[2.5rem] shadow-2xl"
          priority
        />
      </FadeIn>

      {/* Mission Section */}
      <section className="w-full bg-muted/30 py-24 px-6 border-y border-border relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8 relative z-10">
            <RevealText as="h2" className="text-4xl md:text-5xl font-bold font-heading">
              Our Mission
            </RevealText>
            
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                We empower businesses in Coimbatore and beyond to dominate their local markets. By blending data-driven strategies with creative execution, we turn clicks into loyal customers and ideas into memorable brands.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Our approach is transparent, our goals are aligned with yours, and our focus is entirely on your bottom line.
              </p>
            </FadeIn>
          </div>
          
          <div className="flex-1 w-full relative z-10">
            <div className="space-y-6">
              {[
                { icon: Target, title: "Results First", desc: "We measure our success entirely by the growth and ROI we generate for our clients." },
                { icon: Sparkles, title: "Total Transparency", desc: "No vanity metrics or confusing jargon. You always know exactly what we are doing and why." },
                { icon: Zap, title: "Fast Execution", desc: "In digital marketing, speed wins. We move fast, test often, and adapt quickly to changes." },
              ].map((val, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1} direction="left" fullWidth>
                  <div className="flex gap-6 items-start bg-background/50 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-xl hover:bg-background/80 transition-all duration-500 group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <val.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{val.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{val.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team/Collaboration Parallax */}
      <section className="w-full py-24 px-6 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-12">
          <RevealText as="h2" className="text-3xl md:text-5xl font-bold font-heading text-center">
            Driven by passion. Backed by data.
          </RevealText>
          
          <FadeIn delay={0.2} className="w-full h-[60vh] md:h-[80vh]">
            <ParallaxImage 
              src="/img/agency-team.jpg" 
              alt="D2N Creative Team Collaboration"
              containerClassName="rounded-[3rem] shadow-2xl"
            />
          </FadeIn>
        </div>
      </section>

      <CTASection />
      
    </main>
  );
}
