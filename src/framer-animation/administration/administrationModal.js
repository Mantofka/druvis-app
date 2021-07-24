export const SourceVariants = {
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  hidden: {
    opacity: 0,
    y: -30,
    height: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const DeleteSectionVariants = {
  visible: {
    opacity: 1,
    width: "auto",
    x: 0,
    zIndex: 10,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  hidden: {
    opacity: 0,
    width: 0,
    x: -50,
    display: "none",
    zIndex: "-1",
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const ModalVariants = {
  visible: {
    opacity: 1,
    zIndex: 10,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  hidden: {
    opacity: 0,
    zIndex: 1,
    x: -400,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.22, 0.26, 0.32, 0.96],
    },
  },
};
