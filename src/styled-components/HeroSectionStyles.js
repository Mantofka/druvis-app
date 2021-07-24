import styled from 'styled-components';
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
    border-radius: 0% 100% 0% 100% / 88% 0% 100% 3%;
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
  padding-top: 50px;
`;

export const TextArea = styled(motion.div)`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PrimaryText = styled.h1`
  font-family: 'Cairo', sans-serif;
  color: #fdfcdc;
  font-weight: 700;
  line-height: 1.2;
  font-size : clamp(1.8rem, 4vw, 4rem);
  @media (max-width: 460px){
    line-height: 1.1;
  }
`;

export const SecondaryText = styled.p`
  margin-top: 10px;
  margin-bottom: 50px;
  font-family: 'Cairo', sans-serif;
  color: #202030;
  line-height: 1.35;
  font-size : clamp(1.2rem, 2vw, 3rem);
  @media (max-width: 460px){
    line-height: 1.2;
  }
`;

export const TopicListContainer = styled(motion.div)`
`;

export const AnimatableContainer = styled(motion.div)`
  z-index: 10;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
