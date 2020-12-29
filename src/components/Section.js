import React from 'react';
import '../css/Section.css';
import { motion, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import video from '../videos/InstagramBait.mp4';

const sectionVariant = {
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

const sectionContentVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      ease: [0.14, 0.57, 1, 1],
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



function Section({ bigText, subText, secRef }) {
  const y = useViewportScroll(0);
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section ref={secRef} className='section__container'>
      <motion.div
        ref={ref}
        variants={sectionVariant}
        initial='closed'
        animate={inView ? 'open' : 'closed'}
        className='section__left'
      >
        <motion.h1 variants={sectionContentVariant} custom={1}>
          {bigText}
        </motion.h1>
        <motion.p variants={sectionContentVariant} custom={1}>
          {subText}
        </motion.p>
        <motion.button variants={sectionContentVariant} custom={-1}>
          <Link to='/uav' style={{ textDecoration: 'none' }}>
            Į galeriją
          </Link>
        </motion.button>
      </motion.div>
      <div className='section__right'>
        <video muted autoPlay loop>
          <source src={video} />
        </video>
      </div>
    </section>
  );
}

export default Section;
