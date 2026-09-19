"use client";

import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  id?: string;
}

export function RevealText({ children, className, delay = 0, as: Component = "div", id }: RevealTextProps) {
  const words = children.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Component id={id} ref={ref} className={cn("inline-flex flex-wrap gap-[0.25em]", className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "120%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "120%", opacity: 0 }}
            transition={{
              delay: delay + index * 0.04,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1], // Custom Awwwards-style spring-like ease
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
