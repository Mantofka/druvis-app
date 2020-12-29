import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../css/TopicsList.css';

const topicsVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {},
};

const topicVariants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'tween',
    },
  },
  closed: {
    opacity: 0,
  },
};

function TopicsList({ printingRef, uavRef, woodWorkingRef }) {
  const [ref, inView] = useInView({ threshold: 0.4 });

  const scrollToElement = (ref) => ref.current.scrollIntoView();

  return (
    <motion.section
      ref={ref}
      variants={topicsVariants}
      initial='closed'
      animate={inView ? 'open' : 'closed'}
      className='section__topics'
    >
      <motion.div
        variants={topicVariants}
        className='topics__gallery topics__container'
      ></motion.div>
      <motion.div
        onClick={() => scrollToElement(printingRef)}
        variants={topicVariants}
        className='topics__printing topics__container'
      ></motion.div>
      <motion.div
        onClick={() => scrollToElement(uavRef)}
        variants={topicVariants}
        className='topics__uav topics__container'
      ></motion.div>
      <motion.div
        onClick={() => scrollToElement(woodWorkingRef)}
        variants={topicVariants}
        className='topics__woodWorking topics__container'
      ></motion.div>
    </motion.section>
  );
}

export default TopicsList;
