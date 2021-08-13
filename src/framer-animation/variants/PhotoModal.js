export const PhotoVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
    },
    hidden: (custom) => ({
      x: -custom * -600,
      opacity: 0,
    }),
    exit: (custom) => ({
      x: -custom * 600,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn", delay: 0.2 },
    }),
  };