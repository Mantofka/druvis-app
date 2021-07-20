import React, { useEffect } from 'react';

// Reusable function
import { UpdateFirestore } from '../reusable-functions/AddToQuene';
import { handleAlert } from '../reusable-functions/DispatchAlert';

// Header
import Header from '../components/Header';

// Styles
import {
  ConfigurationContainer,
  ConfigurationView,
  NavigationSection,
  MainSection,
  ButtonSection,
  Button,
} from '../styled-components/ConfigurationStyles';

// Material UI
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// Modals
import Add_Photos from './Add_Photos';
import ChangeHeroImage from './ChangeHeroImage';

// Alert
import Alert from './Alert';

import DeletePhotoSection from './DeletePhotoSection';

// Actions
import { CHANGE_IS_UPLOADING } from '../actions';

import { useStateValue } from '../StateProvider';

// Reducer actions.
import {
  CHANGE_PHOTO_MODAL,
  CHANGE_HERO_MODAL,
  CHANGE_DELETE_PHOTO_MODAL,
} from '../actions';

const iconStyle = {
  borderRadius: '50%',
  padding: '3px',
  border: '1px solid #D1B3C4',
  color: '#D1B3C4',
  cursor: 'pointer',
};

function Configuarion() {
  const [{ Quene, isUploading, alertMessage }, dispatch] = useStateValue();

  useEffect(() => {
    if (
      isUploading &&
      Quene.length > 0 &&
      Quene.length === Quene[0].overallLength
    ) {
      UpdateFirestore(dispatch, Quene, isUploading);
    }
    if (isUploading && Quene.length === 0) {
      dispatch({
        type: CHANGE_IS_UPLOADING,
        payload: false,
      });
      alertMessage.type === 'PROGRESS' &&
        handleAlert('SUCCESS', alertMessage.message, dispatch);
    }
  }, [Quene]);

  const changeModal = (name) => {
    let modals = [
      CHANGE_PHOTO_MODAL,
      CHANGE_HERO_MODAL,
      CHANGE_DELETE_PHOTO_MODAL,
    ];
    modals
      .filter((modal) => modal !== name)
      .map((modal) =>
        dispatch({
          type: modal,
          payload: false,
        })
      );
    dispatch({
      type: name,
    });
  };

  return (
    <ConfigurationContainer>
      <Header />
      <ConfigurationView>
        <NavigationSection>
          <ButtonSection onClick={() => changeModal(CHANGE_PHOTO_MODAL)}>
            <AddIcon style={iconStyle} />
            <Button>Pridėti nuotrauką</Button>
          </ButtonSection>
          <ButtonSection onClick={() => changeModal(CHANGE_HERO_MODAL)}>
            <AddIcon style={iconStyle} />
            <Button>Pakeisti nuotrauką</Button>
          </ButtonSection>
          <ButtonSection onClick={() => changeModal(CHANGE_DELETE_PHOTO_MODAL)}>
            <RemoveIcon style={iconStyle} />
            <Button>Ištrinti nuotrauką</Button>
          </ButtonSection>
        </NavigationSection>
        <MainSection>
          <Alert />
          <Add_Photos />
          <ChangeHeroImage />
          <DeletePhotoSection />
        </MainSection>
      </ConfigurationView>
    </ConfigurationContainer>
  );
}

export default Configuarion;
