"use client";

import { Zap, Rocket, BarChart3, Target, Megaphone, MousePointerClick, TrendingUp } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppIcon } from "@/components/icons";
import { motion } from "motion/react";

import { usePathname } from "next/navigation";

function FloatingShape({
  children,
  className,
  delay = 0,
  duration = 20,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -30, 0, 30, 0],
        x: [0, 20, 0, -20, 0],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function CTASection() {
  const pathname = usePathname();

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative w-full bg-foreground text-background py-16 md:py-24 lg:py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Glowing Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-primary rounded-full blur-[100px] md:blur-[150px] translate-x-1/3 -translate-y-1/3" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-blue-600 rounded-full blur-[100px] md:blur-[150px] -translate-x-1/3 translate-y-1/3" 
        />
        
        {/* CSS Grid Pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        {/* Floating Icons */}
        <FloatingShape className="top-[15%] left-[5%] md:left-[10%] text-primary/30" duration={15} delay={0}>
          <Rocket size={48} className="md:w-16 md:h-16" />
        </FloatingShape>
        
        <FloatingShape className="top-[60%] left-[2%] md:left-[8%] text-primary/20" duration={18} delay={2}>
          <BarChart3 size={64} className="md:w-24 md:h-24" />
        </FloatingShape>
        
        <FloatingShape className="top-[20%] right-[5%] md:right-[15%] text-primary/30" duration={20} delay={1}>
          <Target size={56} className="md:w-20 md:h-20" />
        </FloatingShape>
        
        <FloatingShape className="bottom-[15%] right-[2%] md:right-[10%] text-primary/20" duration={17} delay={3}>
          <Megaphone size={40} className="md:w-16 md:h-16" />
        </FloatingShape>

        <FloatingShape className="top-[45%] right-[2%] md:right-[5%] text-primary/10" duration={22} delay={5}>
          <MousePointerClick size={72} className="md:w-28 md:h-28" />
        </FloatingShape>

        <FloatingShape className="bottom-[30%] left-[8%] md:left-[15%] text-primary/15" duration={25} delay={4}>
          <TrendingUp size={50} className="md:w-20 md:h-20" />
        </FloatingShape>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <FadeIn direction="up">
          <div
            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-4 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Zap size={32} />
          </div>
        </FadeIn>
        
        <RevealText
          as="h2"
          id="cta-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-heading justify-center text-center text-white drop-shadow-lg"
        >
          Ready to Get Started?
        </RevealText>
        
        <FadeIn delay={0.2} direction="up">
          <p
            className="text-white/90 text-xl md:text-2xl max-w-2xl text-balance drop-shadow-md"
          >
            Let&apos;s talk about your project and how we can help. We&apos;ll send you a free, no-obligation plan tailored to your goals.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3} direction="up" className="w-full sm:w-auto">
          <div
            className="flex flex-col items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <a
              href={`https://wa.me/919787205707?text=${encodeURIComponent(`Hi D2N Digital Marketing! I'd like a free consultation. (Source: Website - ${pathname})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 bg-white text-primary px-8 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-white/50 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              aria-label="Get My Free Consultation via WhatsApp"
            >
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.08),transparent)] bg-[length:200%_100%] bg-[-200%_0] group-hover:animate-shimmer" />
              
              <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform text-[#25D366] relative z-10" />
              <span className="relative z-10">Get My Free Consultation</span>
            </a>
            <p className="text-sm text-white/70 font-medium">
              We&apos;ll reply on WhatsApp within minutes. No spam, ever.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} direction="up">
          <p
            className="mt-16 pt-8 border-t border-white/20 text-white/60 text-sm max-w-xl text-balance"
          >
            D2N Digital Marketing — a performance-focused digital marketing agency in Coimbatore helping local businesses generate leads and grow.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
