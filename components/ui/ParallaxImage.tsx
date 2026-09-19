"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export function ParallaxImage({ src, alt, className, containerClassName, priority = false }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves the image slower than the scroll, creating a parallax effect
  // Scale it up slightly so it has room to translate without showing edges
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  
  // Awwwards style reveal: Image scales down as it enters
  const scale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden w-full h-full", containerClassName)}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full scale-125 origin-center"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", className)}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  );
}
