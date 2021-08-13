import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Material UI icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";

// Context API
import { useStateValue } from "../StateProvider";

import { CHANGE_GALLERY_MODAL } from "../actions";

// Styles
import {
  Container,
  Modal,
  ImageContainer,
  Image,
  LeftArrow,
  RightArrow,
  DisabledArrow,
  CancelButton,
} from "../styled-components/PhotoModal";

import { PhotoVariants } from "../framer-animation/variants/PhotoModal";

function PhotoModal({ current, images }) {
  const [{ isGalleryModalOpened }, dispatch] = useStateValue();
  const [currentImage, setCurrentImage] = useState(["", 0]);
  const [animatePhotoDirection, setAnimatePhotoDirection] = useState(0);
  useEffect(() => {
    window.addEventListener("keydown", handleClick);
    document.body.style.cssText = "overflow: hidden; touch-action: none;";
    setCurrentImage([current[0], current[1]]);
    return () => {
      window.removeEventListener("keydown", handleClick);
      document.body.style.cssText = "overflow: unset; touch-action: unset;";
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1 } }}
              whileHover={{
                rotateZ: 90,
                transformOrigin: "12px 12px",
                transition: { duration: 0.5, ease: "easeOut" },
              }}
            >
              <ClearOutlinedIcon
                style={{ color: "white" }}
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
