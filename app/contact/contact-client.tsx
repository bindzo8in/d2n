"use client";

import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      
      {/* Hero Section with Parallax Background */}
      {/* pt-24 ensures content clears the sticky header (h-16 + top-6 gap = ~88px) */}
      <section className="relative w-full min-h-[70vh] landscape:min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage 
            src="/img/contact-office.jpg"
            alt="D2N Digital Marketing Office"
            containerClassName="brightness-[0.4] contrast-125"
            priority
          />
        </div>

        <div className="relative z-10 text-center flex flex-col items-center gap-4 md:gap-6 text-white max-w-5xl mx-auto w-full">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
              <MessageCircle size={16} />
              Let&apos;s Talk
            </div>
          </FadeIn>
          
          <RevealText as="h1" className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-tight justify-center text-center">
            Ready to scale? Contact us today.
          </RevealText>
          
          <FadeIn delay={0.4}>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mt-2 md:mt-4 text-balance px-2">
              Whether you need a new website, a local SEO overhaul, or a high-converting ad campaign, we&apos;re here to help.
            </p>
          </FadeIn>
        </div>
        
        {/* Gradient transition to content below */}
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-linear-to-t from-background to-transparent z-10" />
      </section>

      {/* Contact Info & Form */}
      <section className="w-full bg-background py-12 md:py-24 px-4 md:px-6 relative z-20 -mt-8 md:-mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-12">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-8 md:gap-10">
            <FadeIn direction="right" delay={0.2}>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-3 md:mb-4">Get in touch</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-balance">
                  We&apos;d love to hear from you. Fill out the form or reach out directly using the details below. We typically respond within 2 hours during business days.
                </p>
              </div>
            </FadeIn>
            
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Phone, title: "Call Us / WhatsApp", val: "+91 97872 05707", link: "https://wa.me/919787205707" },
                { icon: Mail, title: "Email Us", val: "hello@d2ndigital.com", link: "mailto:hello@d2ndigital.com" },
                { icon: MapPin, title: "Visit Us", val: "Coimbatore, Tamil Nadu, India", link: null }
              ].map((item, i) => (
                <FadeIn key={i} direction="right" delay={0.3 + i * 0.1}>
                  <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-muted/30 backdrop-blur-md rounded-2xl md:rounded-3xl border border-border/50 hover:bg-muted/50 hover:border-primary/20 transition-all duration-300 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 text-primary rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium mb-1">{item.title}</p>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold hover:text-primary transition-colors">
                          {item.val}
                        </a>
                      ) : (
                        <p className="text-lg md:text-xl font-bold">{item.val}</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Contact Form - Glassmorphism style */}
          <FadeIn direction="left" delay={0.4}>
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-primary/30 to-blue-500/30 rounded-[2.5rem] blur-2xl opacity-50 pointer-events-none" />
              <div className="relative bg-background/60 backdrop-blur-2xl rounded-3xl md:rounded-4xl p-6 md:p-10 border border-border/50 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 font-heading">Send us a message</h3>
                <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2 group">
                      <label htmlFor="firstName" className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">First Name</label>
                      <input type="text" id="firstName" className="w-full bg-background/50 border border-border rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="John" />
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="lastName" className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Last Name</label>
                      <input type="text" id="lastName" className="w-full bg-background/50 border border-border rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 group">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Email Address</label>
                    <input type="email" id="email" className="w-full bg-background/50 border border-border rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" placeholder="john@company.com" />
                  </div>
                  
                  <div className="space-y-2 group">
                    <label htmlFor="service" className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">What are you looking for?</label>
                    <div className="relative">
                      <select id="service" defaultValue="" className="w-full bg-background/50 border border-border rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground appearance-none shadow-sm cursor-pointer">
                        <option value="" disabled>Select a service</option>
                        <option value="seo">SEO &amp; Local SEO</option>
                        <option value="ads">Google &amp; Meta Ads</option>
                        <option value="web">Website Development</option>
                        <option value="social">Social Media Marketing</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-muted-foreground">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground group-focus-within:text-primary transition-colors">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-background/50 border border-border rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none shadow-sm" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" className="w-full relative group overflow-hidden bg-primary text-primary-foreground font-bold rounded-xl md:rounded-2xl px-4 py-4 md:py-5 mt-2 md:mt-4 hover:scale-[1.02] transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30 shadow-lg">
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 h-full w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Map Section — no grayscale on mobile (touch devices can't hover) */}
      <FadeIn direction="up" delay={0.2} fullWidth>
        <section className="w-full relative mt-8 md:mt-12 bg-muted/20">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.798571938305!2d77.00964499999999!3d11.053723399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8599d27e2b9d3%3A0xfd95c2ed359f1cd5!2sD2N%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1789968208701!5m2!1sen!2sin" 
              className="w-full h-full border-0 md:grayscale md:hover:grayscale-0 md:transition-all md:duration-500" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="D2N Digital Marketing location on Google Maps"
            />
          </div>
        </section>
      </FadeIn>
      
    </main>
  );
}
