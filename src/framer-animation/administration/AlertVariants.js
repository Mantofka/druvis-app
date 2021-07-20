export const AlertVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  hidden: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.22, 0.26, 0.32, 0.96],
    },
  },
};
