"use client";
import * as React from "react";
import { motion } from "motion/react";

interface CurveArrowProps extends React.SVGProps<SVGSVGElement> {
  isInView?: boolean;
  delay?: number;
}

const CurveArrow: React.FC<CurveArrowProps> = ({ className, style, isInView = true, delay = 0, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='32 32 1201 428.297'
    preserveAspectRatio="xMidYMid meet"
    className={className}
    style={style}
    {...props}
  >
    <g
      aria-owns='hero-arrow1'
      data-stacking-context='true'
      data-tag='div'
      data-z-index='auto'
    >
      <g
        aria-hidden='true'
        className='hero-arrow'
        data-stacking-context='true'
        data-tag='svg'
        data-z-index='auto'
        mask='url(#a)'
      >
        <mask id='a'>
          <path fill='#fff' d='M32 32h1200.953v428.297H32z'></path>
        </mask>
        <g
          fill='none'
          stroke='#E5804B'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='8'
          className='svg-content hero-arrow'
          color='#000'
          data-view-box='0 0 258.001 92.0106'
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            d='M4 82.842C19.039 56.387 64.078 3.58 115.132 4.002c19.036.158 27.251 8.602 31.359 20.107 4.352 12.188 2.329 30.243-2.2 42.857-5.529 15.398-14.917 23.984-22.557 20.107-10.933-5.55-12.4-24.712 1.101-41.27 10.956-13.439 28.005-30.373 62.717-25.927 16.505 2.114 21.971 5.11 38.511 14.812 8.717 5.114 19.644 14.737 29.708 22.225'
            className='hero-arrow__stroke'
            transform='matrix(4.65484 0 0 4.65486 32 32)'
          ></motion.path>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.6, ease: "easeOut" }}
            d='M253.77 56.914c-.917 2.645-14.854 3.703-45.663 3.703m45.663-3.703c1.284-2.999-2.091-19.792-28.058-43.92'
            className='hero-arrow__head'
            transform='matrix(4.65484 0 0 4.65486 32 32)'
          ></motion.path>
        </g>
      </g>
    </g>
  </svg>
);

export default React.memo(CurveArrow);
