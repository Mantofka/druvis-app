export const AnimatableVariants = {
  open: {
    staggerChildren: 0.3,
    delayChildren: 0.5,
  },
  closed: {
    staggerChildren: 0.3,
    delayChildren: 0.5,
  },
};

export const ElementVariants = {
  open: {
    opacity: 1,
    y: '-50vh',
    transition: {
      duration: 0.2,
      delay: 0.3,
      ease: [0.43, 0.32, 0.37, 0.96],
    },
  },
  closed: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0.3,
      ease: [0.43, 0.32, 0.37, 0.96],
    },
  },
};
