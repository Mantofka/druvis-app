import React from 'react';
import { useInView } from 'react-intersection-observer';

import {
  SectionContainer,
  TopicContainer,
} from '../styled-components/TopicsList';

// Images
import UavImage from '../images/uav.jpg';
import MechatronicsImage from '../images/mechatronics.jpg';
import PrintingImage from '../images/printing.jpg';
import ModellingImage from '../images/modelling.jpg';

// Images minimized (phones/ tablets)
import UavImage_min from '../images/uav_min.jpg';
import MechatronicsImage_min from '../images/mechatronics_min.jpg';
import PrintingImage_min from '../images/printing_min.jpg';
import ModellingImage_min from '../images/modelling_min.jpg';

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
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  closed: {
    x: window.innerWidth,
    opacity: 0,
  },
};

function TopicsList({ printingRef, uavRef, engineeringRef, modelingRef }) {
  const [ref, inView] = useInView({ threshold: 0.4 });

  const scrollToElement = (ref) =>
    ref.current.scrollIntoView({ block: 'center', behavior: 'smooth' });

  return (
    <SectionContainer ref={ref} variants={topicsVariants}>
      <TopicContainer
        bigURL={PrintingImage}
        minURL={PrintingImage_min}
        onClick={() => scrollToElement(printingRef)}
        variants={topicVariants}
      ></TopicContainer>
      <TopicContainer
        bigURL={UavImage}
        minURL={UavImage_min}
        onClick={() => scrollToElement(uavRef)}
        variants={topicVariants}
      ></TopicContainer>
      <TopicContainer
        bigURL={MechatronicsImage}
        minURL={MechatronicsImage_min}
        onClick={() => scrollToElement(engineeringRef)}
        variants={topicVariants}
      ></TopicContainer>
      <TopicContainer
        bigURL={ModellingImage}
        minURL={ModellingImage_min}
        onClick={() => scrollToElement(modelingRef)}
        variants={topicVariants}
      ></TopicContainer>
    </SectionContainer>
  );
}

export default TopicsList;
