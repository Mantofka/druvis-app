import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// Styles.
import {
  Container,
  SectionContainer,
  SectionLeft,
  SectionRight,
  Button,
  Video,
  PrimaryText,
  SecondaryText,
} from '../styled-components/SectionStyles';

// Framer motion variants.

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

function Section({ bigText, subText, secRef, reference, video = '' }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [isVisible, setIsVisible] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    inView && setIsVisible(true);
    if (video != '') {
      inView ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [inView]);

  return (
    <Container>
      <SectionContainer ref={secRef}>
        <SectionLeft
          ref={ref}
          variants={sectionVariant}
          initial='closed'
          animate={isVisible ? 'open' : 'closed'}
        >
          <PrimaryText variants={sectionContentVariant} custom={1}>
            {bigText}
          </PrimaryText>
          <SecondaryText variants={sectionContentVariant} custom={1}>
            {subText}
          </SecondaryText>
          <Button variants={sectionContentVariant} custom={-1}>
            <Link to={reference} style={{ textDecoration: 'none' }}>
              Į galeriją
            </Link>
          </Button>
        </SectionLeft>
        <SectionRight>
          <Video muted loop preload='none' playsinline ref={videoRef}>
            <source src={video} />
          </Video>
        </SectionRight>
      </SectionContainer>
    </Container>
  );
}

export default Section;
