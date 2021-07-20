import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled(motion.div)`
  font-family: 'Cairo', sans-serif;
  box-sizing: border-box;
  z-index: -10;
  width: 100%;
  padding: 60px 5%;
  height: 250vh;
  padding-bottom: 20%;
  display: grid;
  justify-content: start;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  background: rgb(0, 97, 167);
  background: linear-gradient(
    0deg,
    rgba(0, 97, 167, 1) 0%,
    rgba(0, 167, 172, 1) 100%
  );
  border-radius: 0% 100% 0% 100% / 54% 0% 100% 46%;
  @media (max-width: 360px) {
    border-radius: 0% 100% 0% 100% / 88% 0% 100% 12%;
  }
`;

export const LogoImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const TextContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TextArea = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 640px) {
    align-items: flex-start;
  }
`;

export const PrimaryText = styled.h1`
  font-family: 'Cairo', sans-serif;
  font-size: 5.8em;
  color: #fdfcdc;
  font-weight: 700;
  line-height: 1.2;
  @media (max-width: 1200px) {
    font-size: 4.5em;
  }
  @media (max-width: 1000px) {
    font-size: 4em;
  }
  @media (max-width: 640px) {
    font-size: 3.2em;
  }
`;

export const SecondaryText = styled.p`
  margin-top: 10px;
  margin-bottom: 50px;
  font-family: 'Cairo', sans-serif;
  color: #202030;
  line-height: 1.35;
  font-size: 2.5em;
  width: 60ch;
  @media (max-width: 1200px) {
    font-size: 2.2em;
  }
  @media (max-width: 1000px) {
    font-size: 2em;
  }
  @media (max-width: 840px) {
    width: 40ch;
  }
  @media (max-width: 640px) {
    font-size: 1.7em;
  }
`;

export const TopicListContainer = styled(motion.div)`
  margin-top: 10px;
`;

export const AnimatableContainer = styled(motion.div)`
  z-index: 10;
  height: 100vh;
  max-width: 1200px;
  margin: auto;
`;
