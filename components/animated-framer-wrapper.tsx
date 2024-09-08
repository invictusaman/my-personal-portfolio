'use client';

import React, { ReactNode } from 'react';
import { motion, useInView, Variants, TargetAndTransition } from 'framer-motion';

type AnimationVariant =
  'subtleFade' | 'gentleRise' | 'softExpand' | 'quietSpin' |
  'slideFromTop' | 'slideFromBottom' | 'slideFromLeft' |
  'scaleIn' | 'expandWidth' | 'hoverScale' | 'arrowBounce';

interface AnimatedWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
  useInView?: boolean;
}

export const variants: Record<AnimationVariant, Variants> = {
  subtleFade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  gentleRise: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  softExpand: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  quietSpin: {
    initial: { opacity: 0, rotateY: 45 },
    animate: { opacity: 1, rotateY: 0 },
  },
  slideFromTop: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  slideFromBottom: {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  slideFromLeft: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  expandWidth: {
    initial: { width: 0 },
    animate: { width: 80 },
  },
  hoverScale: {
    initial: {},
    whileHover: { scale: 1.05 } as TargetAndTransition,
    whileTap: { scale: 0.95 } as TargetAndTransition,
  },
  arrowBounce: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    whileHover: { y: 15 } as TargetAndTransition,
  },
};


const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  variant = 'subtleFade',
  useInView: useInViewProp = true,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={useInViewProp ? (isInView ? "animate" : "initial") : "animate"}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing function
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;

export const useAnimationVariant = (variant: AnimationVariant, delay?: number, duration?: number) => {
  return {
    variants: variants[variant],
    initial: "initial",
    animate: "animate",
    whileHover: variants[variant].whileHover as TargetAndTransition,
    whileTap: variants[variant].whileTap as TargetAndTransition,
    transition: {
      duration: duration || 0.7,
      delay: delay || 0,
      ease: [0.25, 0.1, 0.25, 1],
    },
  };
};
