import React, { useEffect, useState } from 'react';
import { useStateValue } from '../StateProvider';
import { AnimatePresence } from 'framer-motion';

// Material UI.
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InfoIcon from '@material-ui/icons/Info';

// Variants.
import { AlertVariants } from '../framer-animation/administration/AlertVariants';

// Styles.
import {
  Container,
  TextField,
  BigText,
  SmallText,
  IconContainer,
} from '../styled-components/AlertStyles';

function Alert() {
  const [{ alertMessage }, dispatch] = useStateValue();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (alertMessage.condition && alertMessage.message !== '') {
      setIsShown(true);
      setTimeout(() => {
        setIsShown(false);
      }, 4000);
    }
    !alertMessage.condition && setIsShown(true);
  }, [alertMessage]);

  return (
    <AnimatePresence>
      {isShown && (
        <Container
          key='alertModal'
          variants={AlertVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {alertMessage.type === 'ERROR' && (
            <ErrorIcon style={{ color: '#F07167', fontSize: '30px' }} />
          )}
          {alertMessage.type === 'PROGRESS' && (
            <IconContainer
              initial={{ opacity: 1 }}
              animate={{
                opacity: [1, 0.7, 1],
                ease: [0.22, 0.26, 0.81, 0.92],
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              <InfoIcon style={{ color: '#0081A7', fontSize: '30px' }} />
            </IconContainer>
          )}
          {alertMessage.type === 'SUCCESS' && (
            <CheckCircleIcon style={{ color: '#35A540', fontSize: '30px' }} />
          )}
          <TextField>
            {alertMessage.type === 'ERROR' && <BigText>Klaida:</BigText>}
            {alertMessage.type === 'PROGRESS' && <BigText>Vykdoma:</BigText>}
            {alertMessage.type === 'SUCCESS' && <BigText>Įvykdyta:</BigText>}
            <SmallText>{alertMessage.message}</SmallText>
          </TextField>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default Alert;
