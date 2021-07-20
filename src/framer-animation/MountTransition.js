import React from 'react';
import { motion } from 'framer-motion';

export const MountTransition = ({ children, slide = 0, slideUp = 0 }) => (
  <motion.div
    exit={{
      opacity: 0,
      x: slide < 0 ? slide : -slide,
      y: slideUp,
      transition: { delay: 0.2, duration: 0.5, ease: 'easeOut' },
    }}
    initial={{
      opacity: 0,
      x: slide < 0 ? -slide : slide,
      y: slideUp,
      transition: { duration: 0.5, ease: 'easeIn' },
    }}
    animate={{
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    }}
  >
    {children}
  </motion.div>
);
