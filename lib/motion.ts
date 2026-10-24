import type { Variants, Transition } from "framer-motion";

/**
 * ProBird Sports Athletic Motion Architecture
 * Premium athletic deceleration curves & spring physics.
 */

// Precise athletic acceleration into decisive deceleration
export const athleticEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const athleticSnappy: [number, number, number, number] = [0.25, 1, 0.5, 1];

export const springAthletic: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 28,
};

export const springMicro: Transition = {
  type: "spring",
  stiffness: 450,
  damping: 24,
};

// Unified viewport observer options for scroll reveals
export const viewportDefault = {
  once: true,
  margin: "-50px",
} as const;

export const viewportImmediate = {
  once: true,
  margin: "0px",
} as const;

// Base Reusable Variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: athleticEase,
    },
  },
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: athleticEase,
    },
  },
};

export const revealDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: athleticEase,
    },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: athleticEase,
    },
  },
};

export const createStaggerContainer = (
  staggerDelay = 0.08,
  delayChildren = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: athleticEase,
    },
  },
};

export const staggerScaleItem: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: athleticEase,
    },
  },
};

// Micro-interaction presets
export const cardHoverProps = {
  whileHover: {
    y: -4,
    transition: { duration: 0.25, ease: athleticEase },
  },
};

export const buttonMotionProps = {
  whileHover: { scale: 1.025 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.18, ease: athleticSnappy },
};
