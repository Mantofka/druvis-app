import React, { useState, useEffect, Suspense } from 'react';
import { openGalleryModal } from '../reusable-functions/OpenGallery';
import { fetchImages } from '../reusable-functions/FetchImages';
import { sections } from '../sections';
import { useStateValue } from '../StateProvider';

import {
  GalleryContainer,
  Image,
  SubSection,
  Selection,
  Option,
  LoadingContainer,
  LoadingText,
} from '../styled-components/Gallery';

import { LoadingImage } from '../styled-components/Page';

// Loading PNG
import GearPNG from '../images/Gear.png';

const galleryLoadingVariants = {
  visible: {
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatDelay: 0.4,
      ease: 'anticipate',
    },
  },
  hidden: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const PhotoModal = React.lazy(() => import('./PhotoModal'));

const GallerySection = ({ desiredSection }) => {
  const [{ isGalleryModalOpened }, dispatch] = useStateValue();
  const [bigImage, setBigImage] = useState(['', 0]);
  const [imagesPromise, setImagesPromise] = useState([]);
  const [section, setSection] = useState('');
  const [sectionInfo, setSectionInfo] = useState([]);
  useEffect(() => {
    desiredSection !== 'printing' && handleSections();
  }, []);

  useEffect(() => {
    desiredSection !== 'printing' &&
      sectionInfo.length > 0 &&
      setSection(sectionInfo[0][0]);
    desiredSection === 'printing' && setSection('printing');
  }, [sectionInfo]);

  useEffect(() => {
    if (section !== '') {
      desiredSection === 'printing'
        ? fetchImages(`printing-images`, setImagesPromise)
        : fetchImages(`${section}-images`, setImagesPromise);
    }
  }, [section]);

  const handleSections = () => {
    setSectionInfo(
      Object.entries(sections)
        .filter((current) => current[0] === desiredSection)
        .flat(2)
    );
    setSectionInfo((prevState) => prevState.slice(1));
  };

  return (
    <div style={{backgroundColor: "#0081a7"}}>
      {isGalleryModalOpened && (
        <Suspense fallback={<div>Loading...</div>}>
          <PhotoModal current={bigImage} images={imagesPromise} />
        </Suspense>
      )}
      {desiredSection !== 'printing' && (
        <SubSection>
          <h3>Pasirinkite kategoriją</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Selection onChange={(e) => setSection(e.target.value)}>
              {sectionInfo.map((current) => (
                <Option key={current[1]} value={current[0]}>
                  {current[1]}
                </Option>
              ))}
            </Selection>
          </div>
        </SubSection>
      )}
      {imagesPromise.length > 0 ? (
        <GalleryContainer>
          {imagesPromise.map((image, id) => (
            <Image
              key={id}
              alt=''
              src={image.sourceSmallURL}
              onClick={() =>
                openGalleryModal(image.sourceBigURL, id, dispatch, setBigImage)
              }
            />
          ))}
        </GalleryContainer>
      ) : (
        <LoadingContainer>
          <LoadingImage
            size1='300px'
            variants={galleryLoadingVariants}
            initial='hidden'
            exit='exit'
            animate='visible'
            src={GearPNG}
          />
          <LoadingText>Nėra ką rodyti...</LoadingText>
        </LoadingContainer>
      )}
    </div>
  );
};

export default GallerySection;
