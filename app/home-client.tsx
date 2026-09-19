"use client"
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import ParallaxGallery from "@/components/sections/ParallaxGallery";
import OverviewSection from "@/components/sections/OverviewSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";

import BookImage from "@/public/img/home-hero/hero-book.webp";
import CardImage from "@/public/img/home-hero/hero-card.webp";
import WatchImage from "@/public/img/home-hero/hero-watch.webp";
import CurveArrow from "@/components/CurveArrow";
import { useRef } from "react";

function MaskItem({ 
  children, 
  delay, 
  isInView,
  style
}: { 
  children: React.ReactNode; 
  delay: number; 
  isInView: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}) {
  return (
    <motion.span style={style} className="inline-block overflow-hidden align-bottom px-[0.15em] mx-[-0.15em] pt-[0.1em] mt-[-0.1em] pb-[0.2em] mb-[-0.2em]">
      <motion.span
        className="inline-block"
        initial={{ y: "130%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "130%", opacity: 0 }}
        transition={{
          delay: delay * 0.1, // staggered delay based on index
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export default function Home() {

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const videoWidth = useTransform(scrollYProgress, [0, 0.8], ["13cqw", "75cqw"]);
  const videoYProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  // Move down by exactly 100vh minus the placeholder's offset from center, landing perfectly in Section 2.
  const videoY = useTransform(videoYProgress, (val) => `calc(${val * 100}vh - ${val * 7.04}cqw)`);
  const videoBorderRadius = useTransform(scrollYProgress, [0, 0.8], ["0.7cqw", "2cqw"]);

  return (
    <main className="w-full">
      <div ref={containerRef} className="relative w-full h-[200vh]">
        
        {/* SECTION 1 */}
        {/* Removed overflow-hidden so the video can float down into Section 2 */}
        <section ref={ref} className="h-screen @container/hero section flex w-full items-center justify-center px-[2cqw] py-[5cqw]">
          <h1 className="flex w-full flex-col gap-[0.2cqw] text-center text-[7.2cqw] font-semibold leading-[0.95] tracking-[-0.35cqw]">

            {/* ROW 1 */}
            <motion.div style={{ opacity: textOpacity }} className="flex items-center justify-center gap-[1cqw]">
              <MaskItem delay={0} isInView={isInView}>We</MaskItem>

              <div className="flex gap-[0.1cqw] items-center">
                {/* Book */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  className="relative w-[6.5cqw] h-[6.5cqw] shrink-0 overflow-hidden rounded-[0.7cqw] border-3 border-white"
                >
                  <Image
                    src={BookImage}
                    alt="Book"
                    fill
                    sizes="6.5cqw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
                  className="relative w-[6.5cqw] h-[6.5cqw] shrink-0 overflow-hidden rounded-[0.7cqw] border-3 border-white ml-[-2cqw]"
                >
                  <Image
                    src={CardImage}
                    alt="Card"
                    fill
                    sizes="6.5cqw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Watch */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  className="relative w-[6.5cqw] h-[6.5cqw] shrink-0 overflow-hidden rounded-[0.7cqw] border-3 border-white ml-[-2cqw]"
                >
                  <Image
                    src={WatchImage}
                    alt="Watch"
                    fill
                    sizes="6.5cqw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <MaskItem delay={2} isInView={isInView}>turn</MaskItem>
              <MaskItem delay={3} isInView={isInView}>great</MaskItem>
            </motion.div>

            {/* ROW 2 */}
            <motion.div style={{ opacity: textOpacity }} className="flex items-center justify-center gap-[1cqw]">
              <MaskItem delay={4} isInView={isInView}>ideas</MaskItem>
              <MaskItem delay={5} isInView={isInView}>into</MaskItem>

              <MaskItem delay={6} isInView={isInView}>
                <div className="w-[12cqw] shrink-0">
                  <CurveArrow className="block h-auto w-full" isInView={isInView} delay={0.8} />
                </div>
              </MaskItem>

              <MaskItem delay={7} isInView={isInView}>brands</MaskItem>
            </motion.div>

            {/* ROW 3 */}
            <div className="flex w-full items-center justify-center gap-[1cqw]">
              <div className="flex flex-1 justify-end">
                <MaskItem style={{ opacity: textOpacity }} delay={8} isInView={isInView}>people</MaskItem>
              </div>

              <div className="w-[13cqw] aspect-video shrink-0 relative flex items-center justify-center z-50">
                {/* 0x0 Anchor for perfectly symmetric centering without transform conflicts */}
                <div className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      width: videoWidth,
                      y: videoY,
                      borderRadius: videoBorderRadius,
                    }}
                    className="shrink-0  overflow-hidden flex items-center justify-center aspect-video shadow-2xl"
                  >
                    <video
                      controls={false}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    >
                      <source src="/video/reel-teaser.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-1 justify-start">
                <MaskItem style={{ opacity: textOpacity }} delay={10} isInView={isInView}>remember</MaskItem>
              </div>
            </div>

          </h1>
        </section>

        {/* SECTION 2 */}
        <section className="h-screen w-full flex items-center justify-center mb-[2%]">
          {/* The video lands perfectly in the center of this section! */}
        </section>

      </div>

      {/* REMAINDER OF THE PAGE */}
      <div className="relative z-10 bg-background rounded-tl-[5%] rounded-tr-[5%] mt-[-5%] overflow-hidden flex flex-col w-full">
        <ParallaxGallery />
        <OverviewSection />
        <ProcessSection />
        <ServicesGrid />
        <BlogSection />
        <CTASection />
        
      </div>
    </main>
  );
}
