import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Material UI icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

// Context API
import { useStateValue } from '../StateProvider';

import { CHANGE_GALLERY_MODAL } from '../actions';

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(75, 75, 75, 0.8);
  z-index: 10000000;
  overflow: hidden;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1200px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  z-index: 100000;
  @media (max-width: 720px) {
    min-width: 400px;
  }
  @media (max-width: 480px) {
    min-width: 250px;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LeftArrow = styled(motion.div)`
  position: absolute;
  color: white;
  top: 50%;
  left: 2%;
`;

const RightArrow = styled(motion.div)`
  position: absolute;
  color: white;
  top: 50%;
  right: 2%;
`;

const DisabledArrow = styled.div`
  color: grey;
`;

const CancelButton = styled(motion.div)`
  position: absolute;
  top: 1%;
  right: 1%;
  color: rgb(25, 25, 25);
`;

const PhotoVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.2 },
  },
  hidden: (custom) => ({
    x: -custom * -600,
    opacity: 0,
  }),
  exit: (custom) => ({
    x: -custom * 600,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn', delay: 0.2 },
  }),
};

function PhotoModal({ current, images }) {
  const [{ isGalleryModalOpened }, dispatch] = useStateValue();
  const [currentImage, setCurrentImage] = useState(['', 0]);
  const [animatePhotoDirection, setAnimatePhotoDirection] = useState(0);
  useEffect(() => {
    window.addEventListener('keydown', handleClick);
    document.body.style.cssText = 'overflow: hidden; touch-action: none;';
    setCurrentImage([current[0], current[1]]);
    return () => {
      window.removeEventListener('keydown', handleClick);
      document.body.style.cssText = 'overflow: unset; touch-action: unset;';
      dispatch({
        type: CHANGE_GALLERY_MODAL,
        payload: false,
      });
    };
  }, []);

  const handleClick = (event) => {
    switch (event.keyCode) {
      case 27:
        dispatch({
          type: CHANGE_GALLERY_MODAL,
          payload: false,
        });
    }
  };

  const changeImage = (direction) => {
    direction == animatePhotoDirection &&
      setCurrentImage([
        images[currentImage[1] + animatePhotoDirection].sourceBigURL,
        currentImage[1] + animatePhotoDirection,
      ]);

    setAnimatePhotoDirection((prevState) => direction);
  };

  useEffect(() => {
    animatePhotoDirection !== 0 &&
      setCurrentImage([
        images[currentImage[1] + animatePhotoDirection].sourceBigURL,
        currentImage[1] + animatePhotoDirection,
      ]);
  }, [animatePhotoDirection]);

  return (
    <Container style={{ top: `${window.pageYOffset}px` }}>
      <Modal>
        <ImageContainer>
          <AnimatePresence exitBeforeEnter>
            <Image
              src={currentImage[0]}
              key={currentImage[1]}
              variants={PhotoVariants}
              custom={animatePhotoDirection}
              initial='hidden'
              animate='visible'
              exit='exit'
            />
            <CancelButton
              whileHover={{
                rotateZ: 90,
                transition: { duration: 0.5, ease: 'easeOut' },
              }}
            >
              <ClearOutlinedIcon
                style={{ color: 'white' }}
                onClick={() =>
                  dispatch({ type: CHANGE_GALLERY_MODAL, payload: false })
                }
              />
            </CancelButton>
          </AnimatePresence>
        </ImageContainer>
      </Modal>
      {currentImage[1] <= 0 ? (
        <LeftArrow>
          <DisabledArrow>
            <ArrowBackIosIcon />
          </DisabledArrow>
        </LeftArrow>
      ) : (
        <LeftArrow whileHover={{ scale: 1.2 }}>
          <ArrowBackIosIcon onClick={() => changeImage(-1)} />
        </LeftArrow>
      )}
      {currentImage[1] >= images.length - 1 ? (
        <RightArrow>
          <DisabledArrow>
            <ArrowForwardIosIcon />
          </DisabledArrow>
        </RightArrow>
      ) : (
        <RightArrow whileHover={{ scale: 1.2 }}>
          <ArrowForwardIosIcon onClick={() => changeImage(1)} />
        </RightArrow>
      )}
    </Container>
  );
}

export default PhotoModal;
