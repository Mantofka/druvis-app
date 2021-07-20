import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  HeroImage,
  MainTextContainer,
  TextBox,
  Container,
  HeroSection,
  LoadingImage,
  LoadingImageContainer,
} from '../styled-components/section/PageStyles';

// Reusable functions
import {
  filteredImage,
  fetchHeroImages,
} from '../reusable-functions/HeroImage';

// Variants.
import {
  HeroImageVariants,
  loadingVariants,
} from '../framer-animation/PageVariants';

import GallerySection from './GallerySection';

import { useStateValue } from '../StateProvider';

// SVG
import EditedPropeller from '../images/EditedPropeller.svg';

const SectionPage = (props) => {
  const [{ fetchedHeroImages }, dispatch] = useStateValue();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadingShowing, setIsLoadingShowing] = useState(true);
  const imageRef = useRef(null);
  const [heroImageHeight, setHeroImageHeight] = useState(0);

  useEffect(() => {
    fetchedHeroImages.length == 0 && window.innerWidth > 840
      ? fetchHeroImages(dispatch, 'pc') // Gets Hero image for pc users.
      : fetchHeroImages(dispatch, 'mobile'); // Gets Hero image for mobile users.

    window.addEventListener('resize', handleResize);
    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    isLoaded
      ? setTimeout(() => {
          setIsLoadingShowing(false);
          setTimeout(() => {
            document.body.style.overflow = 'unset';
          }, 300);
        }, 600)
      : window.scrollY === 0 && (document.body.style.overflow = 'hidden');
  }, [isLoaded]);
  const handleResize = () => {
    setHeroImageHeight((prevState) => imageRef.current.height);
  };

  return (
    <Container>
      <HeroSection
        style={{
          backgroundColor: '#222222',
          height: !isLoaded && '100vh',
        }}
      >
        <AnimatePresence>
          {isLoadingShowing && (
            <LoadingImageContainer
              initial={{
                opacity: 0,
                transform: 'translate(-50%, -50%) scale(0)',
              }}
              exit={{
                opacity: 0,
                transform: 'translate(-50%, -50%) scale(0)',
                transition: { duration: 0.5 },
              }}
              animate={{
                opacity: 1,
                transform: 'translate(-50%, -50%) scale(1)',
                transition: { duration: 0.5, ease: [0.43, 0.32, 0.37, 0.96] },
              }}
            >
              <LoadingImage
                variants={loadingVariants}
                animate={!isLoaded ? 'visible' : 'hidden'}
                src={EditedPropeller}
              />
            </LoadingImageContainer>
          )}
        </AnimatePresence>
        <HeroImage
          variants={HeroImageVariants}
          onLoad={() => setIsLoaded((prevState) => true)}
          initial='hidden'
          animate={isLoaded ? 'visible' : 'hidden'}
          ref={imageRef}
          alt=''
          src={
            fetchedHeroImages.length > 0
              ? filteredImage(fetchedHeroImages, props.sectionAbbreviation)
              : ''
          }
        />
        {isLoaded && (
          <MainTextContainer
            style={{
              height:
                (heroImageHeight === imageRef.current.height ||
                  heroImageHeight !== imageRef.current.height) &&
                `${imageRef.current.height}px`,
            }}
          >
            <TextBox>
              <motion.h1
                variants={HeroImageVariants}
                initial='hidden'
                animate={fetchedHeroImages.length > 0 ? 'visible' : 'hidden'}
              >
                {props.sectionTitle}
              </motion.h1>
              <motion.p
                variants={HeroImageVariants}
                initial='hidden'
                animate={fetchedHeroImages.length > 0 ? 'visible' : 'hidden'}
              >
                {props.description}
              </motion.p>
            </TextBox>
          </MainTextContainer>
        )}
      </HeroSection>
      {isLoaded && (
        <GallerySection desiredSection={props.sectionAbbreviation} />
      )}
    </Container>
  );
};

export default SectionPage;
