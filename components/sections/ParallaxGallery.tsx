"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Target, MapPin, BarChart3, Layers } from "lucide-react";

export default function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different translation speeds for parallax columns
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[200vh] bg-card text-foreground px-[5cqw] py-[15cqw] flex flex-col gap-[10cqw] z-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto gap-8 z-10">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Digital Marketing Agency in Coimbatore
        </motion.div>
        <motion.h2
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[4.5cqw] font-bold leading-[1.1] tracking-tight font-heading"
        >
          End-to-end digital marketing built for businesses that want{" "}
          <span className="text-primary">measurable growth.</span>
        </motion.h2>
      </div>

      {/* Parallax Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3cqw] w-full mt-[5cqw]">
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-[3cqw] pt-[10cqw] will-change-transform transform-gpu">
          <div className="bg-muted rounded-3xl p-[3cqw] flex flex-col gap-6 aspect-square justify-center transition-colors hover:bg-muted/80">
            <div className="w-16 h-16 rounded-2xl bg-card shadow-sm flex items-center justify-center text-primary">
              <Target size={32} />
            </div>
            <h3 className="text-[2.2cqw] font-semibold leading-tight">
              Strategy-first approach
            </h3>
            <p className="text-muted-foreground text-[1.2cqw] leading-relaxed">
              Every campaign starts with audience research, competitor study, and
              clear KPIs.
            </p>
          </div>
          
          <div className="relative aspect-3/4 rounded-3xl overflow-hidden bg-linear-to-br from-primary/20 to-accent/20 p-[3cqw] flex items-end">
             <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-lg">Discovery & Audit</h4>
                <p className="text-muted-foreground text-sm mt-2">Deep dive into your business.</p>
             </div>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-[3cqw] will-change-transform transform-gpu">
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-primary text-primary-foreground p-[4cqw] flex flex-col justify-between">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-[2.5cqw] font-semibold leading-tight mb-4">
                Local market expertise
              </h3>
              <p className="text-primary-foreground/80 text-[1.2cqw] leading-relaxed">
                Deep understanding of Coimbatore consumer behavior across industries.
              </p>
            </div>
          </div>

          <div className="bg-muted rounded-3xl p-[3cqw] flex flex-col gap-6 aspect-square justify-center transition-colors hover:bg-muted/80">
            <div className="w-16 h-16 rounded-2xl bg-card shadow-sm flex items-center justify-center text-indigo-600">
              <Layers size={32} />
            </div>
            <h3 className="text-[2.2cqw] font-semibold leading-tight">
              Full-funnel execution
            </h3>
            <p className="text-muted-foreground text-[1.2cqw] leading-relaxed">
              Awareness, consideration, conversion, and retention — handled by one
              team.
            </p>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-[3cqw] pt-[15cqw] will-change-transform transform-gpu">
          <div className="bg-muted rounded-3xl p-[3cqw] flex flex-col gap-6 aspect-square justify-center transition-colors hover:bg-muted/80">
            <div className="w-16 h-16 rounded-2xl bg-card shadow-sm flex items-center justify-center text-emerald-600">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-[2.2cqw] font-semibold leading-tight">
              Transparent reporting
            </h3>
            <p className="text-muted-foreground text-[1.2cqw] leading-relaxed">
              Weekly dashboards showing leads, cost-per-lead, and ROI — no jargon.
            </p>
          </div>
          
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-linear-to-tr from-emerald-100 to-teal-50 p-[3cqw] flex items-end">
             <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-lg">Weekly Reviews</h4>
                <p className="text-muted-foreground text-sm mt-2">Continuous optimization.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
