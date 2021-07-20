export const HeroImageVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.3,
      ease: [0.43, 0.32, 0.37, 0.96],
    },
  },
  hidden: {
    opacity: 0,
    y: -400,
  },
};

export const loadingVariants = {
  visible: {
    transform: 'rotateZ(360deg)',
    transition: {
      duration: 5,
      delay: 0.4,
      repeat: Infinity,
      ease: 'anticipate',
    },
  },
};
