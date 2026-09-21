"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Target, MapPin, BarChart3, Search, LineChart, Zap } from "lucide-react";
import Image from "next/image";

export default function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different translation speeds for parallax columns
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["8%", "-35%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-card text-foreground px-4 md:px-8 py-12 md:py-16 lg:py-20 flex flex-col gap-12 md:gap-16"
    >
      {/* Header — bg-card blocks cards that translate upward behind it */}
      <div className="relative z-20 bg-card flex flex-col items-center justify-center text-center max-w-5xl mx-auto gap-6 pb-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Digital Marketing Agency in Coimbatore
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[8cqw] md:text-[4.5cqw] font-bold leading-[1.1] tracking-tight font-heading"
        >
          End-to-end digital marketing built for businesses that want{" "}
          <span className="text-primary">measurable growth.</span>
        </motion.h2>
      </div>

      {/* Parallax Grid */}
      <div className="relative z-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">

        {/* Column 1 */}
        <motion.div
          style={{ y: y1 }}
          className="flex flex-col gap-4 md:gap-6 pt-0 md:pt-[8cqw] will-change-transform transform-gpu"
        >
          {/* Card 1 — Strategy */}
          <div className="bg-muted rounded-3xl p-6 md:p-8 flex flex-col gap-4 aspect-square justify-center transition-all duration-300 hover:bg-muted/70 hover:shadow-lg group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Target size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold leading-tight">
              Strategy-first approach
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Every campaign starts with audience research, competitor analysis,
              and clear KPIs tailored to your business goals.
            </p>
          </div>

          {/* Card 2 — Discovery & Audit (image) */}
          <div className="rounded-3xl overflow-hidden aspect-[4/5] relative group cursor-default">
            <Image
              src="/img/discovery_and_audit.jpg"
              alt="Discovery & Audit process"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Search size={20} />
                </div>
              </div>
              <h4 className="font-bold text-lg text-white leading-tight">Discovery & Audit</h4>
              <p className="text-white/80 text-sm mt-1">Deep dive into your brand, competitors & market.</p>
            </div>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          style={{ y: y2 }}
          className="flex flex-col gap-4 md:gap-6 will-change-transform transform-gpu"
        >
          {/* Card 3 — Local Expertise (accent) */}
          <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-6 md:p-8 flex flex-col justify-between aspect-[4/5]">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-3">
                Local market expertise
              </h3>
              <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed">
                Deep understanding of Coimbatore consumer behavior across industries — from retail to real estate.
              </p>
            </div>
            {/* subtle decorative blob */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Card 4 — Performance Stats */}
          <div className="bg-foreground text-background rounded-3xl p-6 md:p-8 flex flex-col gap-4 aspect-square justify-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Zap size={28} className="text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold leading-tight">
              Fast execution
            </h3>
            <p className="text-background/70 text-sm md:text-base leading-relaxed">
              We move fast, test often, and adapt in real time — launching campaigns within days, not weeks.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-primary">3x</p>
                <p className="text-xs text-background/60 mt-1">Avg. ROI</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-primary">48h</p>
                <p className="text-xs text-background/60 mt-1">Launch time</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          style={{ y: y3 }}
          className="flex flex-col gap-4 md:gap-6 pt-0 md:pt-[14cqw] will-change-transform transform-gpu"
        >
          {/* Card 5 — Transparent Reporting */}
          <div className="bg-muted rounded-3xl p-6 md:p-8 flex flex-col gap-4 aspect-square justify-center transition-all duration-300 hover:bg-muted/70 hover:shadow-lg group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold leading-tight">
              Transparent reporting
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Weekly dashboards showing leads, cost-per-lead, and ROI — no jargon, just clear numbers.
            </p>
          </div>

          {/* Card 6 — Weekly Reviews (image) */}
          <div className="rounded-3xl overflow-hidden aspect-[4/5] relative group cursor-default">
            <Image
              src="/img/weekly_reviews.jpg"
              alt="Weekly review meeting"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <LineChart size={20} />
                </div>
              </div>
              <h4 className="font-bold text-lg text-white leading-tight">Weekly Reviews</h4>
              <p className="text-white/80 text-sm mt-1">Strategy check-ins to keep growth on track.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
