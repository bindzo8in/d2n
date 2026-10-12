"use client"

import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Mohan Moniz",
    role: "Google Review",
    text: "I have worked with several marketing agencies before but D2N Digital Marketing truly stands out. If anyone looking digital marketing service I personally recommend this team. All the best guys….",
  },
  {
    name: "Boopathi Victory",
    role: "Google Review",
    text: "Very satisfied with their digital marketing service. From poster design to promotions, everything was handled professionally. If you are searching for a reliable advertising agency in Coimbatore, this is a great choice.",
  },
  {
    name: "Sentamil Power Tools",
    role: "Google Review",
    text: "After taking their GMB service our business started appearing better on Google search maps we received more organic call and improve local visibility excellent digital marketing service in coimbatore",
  },
  {
    name: "Navanesh",
    role: "Google Review",
    text: "Their digital marketing strategies are very effective and professional. Good communication, creative ideas, and timely support. They helped improve our online visibility and customer engagement. Highly recommended for anyone looking for reliable digital marketing services!",
  }
];

export default function TestimonialSection() {
  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-6 bg-background overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Client Stories</span>
          </FadeIn>
          <RevealText as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-balance justify-center text-center">
            Hear from businesses we've helped grow
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <FadeIn key={i} delay={0.15 * i} direction="up" className="flex">
              <div className="bg-card text-card-foreground border border-border p-8 rounded-3xl flex flex-col gap-6 relative shadow-sm hover:shadow-md transition-shadow flex-1">
                <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
                
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-lg leading-relaxed flex-1 z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="flex flex-col gap-1 mt-4 border-t border-border/50 pt-6">
                  <span className="font-bold text-lg font-heading">{testimonial.name}</span>
                  <span className="text-muted-foreground text-sm">{testimonial.role}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  );
}
