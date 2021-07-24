import React, { useEffect, useRef } from 'react';
import {
  HeroContainer,
  LogoImage,
  TextContainer,
  TextArea,
  TopicListContainer,
  AnimatableContainer,
  PrimaryText,
  SecondaryText,
} from '../styled-components/HeroSectionStyles';
import { useTransform, useViewportScroll } from 'framer-motion';

// Images
import Logo from '../images/logo.svg';
import Cloud from '../images/cloud.png';

// Framer motion variants
import {
  AnimatableVariants,
  ElementVariants,
} from '../framer-animation/HeroSectionVariants';

function HeroSection({ title, subText, children }) {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 400], [0, 400]);
  const opacity = useTransform(scrollY, [150, 400], [1, 0.3]);
  const imageRef = useRef(null);
  const animContainerRef = useRef(null);

  const handleScrolling = (e) => {
    setTimeout(function () {
      animContainerRef.current.scrollIntoView({ behavior: "smooth", block: "nearest"});

    }, 1);
  };

  return (
    <HeroContainer>
      <div
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '130vh',
          background: `url(${Cloud}) no-repeat`,
          opacity: '0.09',
          backgroundSize: '100% auto',
          left: 0,
        }}
      ></div>
      <LogoImage
        ref={imageRef}
        style={{ y: y, opacity: opacity }}
        src={Logo}
        onClick={(e) => handleScrolling(e)}
      />
      <AnimatableContainer
        variants={AnimatableVariants}
        initial='closed'
        animate={window.scrollY >= window.innerHeight - 150 ? 'open' : 'closed'}
        ref={animContainerRef}
      >
        <TextContainer variants={ElementVariants}>
          <TextArea>
            <PrimaryText>{title}</PrimaryText>
            <SecondaryText>{subText}</SecondaryText>
          </TextArea>
        </TextContainer>
        <TopicListContainer variants={ElementVariants}>
          {children}
        </TopicListContainer>
      </AnimatableContainer>
    </HeroContainer>
  );
}

export default HeroSection;
