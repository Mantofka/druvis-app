import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Images
import Logo from '../images/logo.svg';

const Image = styled(motion.img)`
  height: 500px;
  transform: translate(0.6%, 0%);
  @media (max-width: 720px) {
    height: 350px;
  }
  @media (max-width: 520px) {
    height: 250px;
  }
  @media (max-width: 360px) {
    height: 210px;
  }
`;

const TextArea = styled.div`
  font-family: Cairo, sans-serif;
  color: #fdfcdc;
  margin-top: -50px;
  @media (max-width: 360px) {
    margin-top: -20px;
  }
`;

const PrimaryText = styled.h1`
  font-size: 32px;
  @media (max-width: 520px) {
    font-size: 28px;
  }
  @media (max-width: 360px) {
    font-size: 26px;
  }
`;
const SecondaryText = styled.p`
  font-size: 18px;
  @media (max-width: 520px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    font-size: 15px;
  }
`;

function NotFound() {
  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
        background: 'rgba(0, 97, 167, 0.9) 0%',
        padding: '0 20px',
      }}
    >
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0.7, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: [0.43, 0.32, 0.37, 0.96],
            },
          }}
          src={Logo}
        />
        <TextArea>
          <PrimaryText>Puslapis, kurio ieškojote, neegzistuoja.</PrimaryText>
          <SecondaryText>
            Įsitikinkite, kad įvedėte tinkąmą adresą.
          </SecondaryText>
        </TextArea>
      </div>
    </div>
  );
}

export default NotFound;
