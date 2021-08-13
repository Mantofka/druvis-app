import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  padding: 15px;
  top: 2%;
  right: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f3eaea;
  @media (max-width: 540px) {
    padding: 10px;
    top: 2%;
    right: 25px;
  }
  @media (max-width: 440px) {
    padding: 8px;
    top: 2%;
    right: 15px;
    width: 220px;
  }
`;

export const IconContainer = styled(motion.div)``;

export const TextField = styled.div`
  padding-left: 10px;
  font-family: 'Montserrat Alternates', sans-serif;
`;

export const BigText = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #474747;
  @media (max-width: 440px) {
    font-size: 12px;
  }
`;

export const SmallText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: grey;
  @media (max-width: 440px) {
    font-size: 12px;
  }
`;
