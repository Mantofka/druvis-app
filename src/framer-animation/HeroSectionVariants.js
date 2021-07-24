export const AnimatableVariants = {
  open: {
    staggerChildren: 0.6,
    delayChildren: 1,
  },
  closed: {
    staggerChildren: 0.3,
    delayChildren: 0.5,
  },
};

export const ElementVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: 0.3,
      ease: [0.43, 0.32, 0.37, 0.96],
    },
  },
  closed: {
    opacity: 0,
    x: -window.innerWidth,
    transition: {
      duration: 0.2,
      delay: 0.3,
      ease: [0.43, 0.32, 0.37, 0.96],
    },
  },
};
