// Framer motion variants.

export const sectionVariants = {
    open: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };
  
  export const contentVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.32, 0.37, 0.96],
      },
    },
    closed: (direction) => ({
      x: direction * 1000,
      opacity: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    }),
  };