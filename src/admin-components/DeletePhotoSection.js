import React, { useState, useEffect } from 'react';
import { storage, db } from '../components/firebase';
import { useStateValue } from '../StateProvider';

import { AnimatePresence } from 'framer-motion';

// Material UI
import SearchIcon from '@material-ui/icons/Search';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// Reusable functions
import { fetchImages } from '../reusable-functions/FetchImages';

// Administration Variants.
import {
  SourceVariants,
  ModalVariants,
  DeleteSectionVariants,
} from '../framer-animation/administration/administrationModal';

// Styles.
import {
  Container,
  SelectBar,
  Selection,
  PhotosContainer,
  SubSectionContainer,
  IconContainer,
  Image,
  Video,
} from '../styled-components/DeletePhoto';

// Reusable functions.
import { handleAlert } from '../reusable-functions/DispatchAlert';

// Components.
import SubSection from './SubSection';

const SelectionStyle = {
  boxSizing: 'border-box',
  outline: 'none',
  border: '1px solid #d9cbcb',
  height: '35px',
  width: '180px',
  backgroundColor: '#f0e5e5',
  borderRadius: '5px',
  WebkitBorderRadius: '5px',
  MozBorderRadius: '5px',
  margin: '0 20px',
};

function DeletePhotoSection() {
  const [section, setSection] = useState('uav-images');
  const [subSection, setSubSection] = useState('drones');
  const [sourcesPromise, setSourcesPromise] = useState([]);
  const storageRef = storage.ref();
  const [{ isDeletePhotoSectionOpened }, dispatch] = useStateValue();

  useEffect(() => {
    switch (section) {
      case 'uav-images':
        setSubSection('drones');
        break;
      case 'printing-images':
        setSubSection('');
        break;
      case 'engineering-images':
        setSubSection('cnc-tools');
        break;
      case 'modelling-images':
        setSubSection('toys');
        break;
      case 'printing-images':
        setSubSection('printing-images');
        break;
    }
  }, [section]);

  const giveRequest = () => {
    fetchImages(`${subSection}-images`, setSourcesPromise, 'detailed');
  };

  const deleteImage = (i) => {
    db.collection(`${subSection}-images`)
      .doc(sourcesPromise[i].id)
      .delete()
      .then(function () {
        handleAlert('SUCCESS', 'Nuotrauka sėkmingai ištrinta.', dispatch);
        storageRef
          .child(`minimized/Big/min_${sourcesPromise[i].data().sourceName}`)
          .delete();
        storageRef
          .child(`minimized/Small/min_${sourcesPromise[i].data().sourceName}`)
          .delete();
      })
      .catch(function (err) {
        handleAlert(
          'ERROR',
          'Įvyko klaida. Prašome bandyti dar kartą.',
          dispatch
        );
      })
      .finally(() => {
        giveRequest();
      });
  };

  return (
    <AnimatePresence>
      <Container
        key='Container'
        variants={ModalVariants}
        initial='hidden'
        animate={isDeletePhotoSectionOpened ? 'visible' : 'hidden'}
        exit='hidden'
        style={{ overflowX: sourcesPromise.length > 0 ? 'scroll' : 'hidden' }}
      >
        <SelectBar>
          <Selection onChange={(e) => setSection(e.target.value)}>
            <option value='uav-images'>Bepiločiai</option>
            <option value='printing-images'>3D spausdinimas</option>
            <option value='engineering-images'>Elektronikos inžinerija</option>
            <option value='modelling-images'>Modeliavimas</option>
          </Selection>
          <SubSectionContainer
            variants={DeleteSectionVariants}
            initial='hidden'
            animate={section !== 'printing-images' ? 'visible' : 'hidden'}
            exit='hidden'
          >
            <SubSection
              section={section}
              setSubSection={setSubSection}
              styles={SelectionStyle}
            />
          </SubSectionContainer>
          <IconContainer>
            <SearchIcon onClick={giveRequest} style={{ cursor: 'pointer' }} />
          </IconContainer>
        </SelectBar>
        <AnimatePresence>
          {sourcesPromise.length > 0 && (
            <PhotosContainer
              key='sourceContainer'
              variants={SourceVariants}
              initial='hidden'
              animate={sourcesPromise.length > 0 ? 'visible' : 'hidden'}
              exit='hidden'
            >
              {sourcesPromise.map((source, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  {source.data().type.startsWith('image') ? (
                    <Image alt='' key={i} src={source.data().sourceSmallURL} />
                  ) : (
                    <Video alt='' key={i} src={source.data().sourceSmallURL} />
                  )}
                  <DeleteForeverIcon
                    key={source.data().sourceName}
                    style={{
                      position: 'absolute',
                      top: '3%',
                      right: '3%',
                      color: 'red',
                    }}
                    onClick={() => deleteImage(i)}
                  />
                </div>
              ))}
            </PhotosContainer>
          )}
        </AnimatePresence>
      </Container>
    </AnimatePresence>
  );
}

export default DeletePhotoSection;
